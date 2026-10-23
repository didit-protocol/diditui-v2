// Publishes every public workspace package whose version is not on npm yet.
// `pnpm pack` rewrites workspace:* ranges, then `npm publish <tarball>` performs the
// npm Trusted Publishing (OIDC) exchange and attaches provenance. No npm token is used.
// Packages are processed in topological order (dependencies first).
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const run = (cmd, args, options = {}) =>
  execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], ...options });

const packages = JSON.parse(run("pnpm", ["-r", "ls", "--depth", "-1", "--json"])).filter(
  (pkg) => !pkg.private,
);

for (const pkg of packages) {
  const spec = `${pkg.name}@${pkg.version}`;
  let isPublished = true;
  try {
    run("npm", ["view", spec, "version"]);
  } catch {
    isPublished = false;
  }
  if (isPublished) {
    console.log(`${spec} is already published, skipping`);
    continue;
  }
  const packDir = mkdtempSync(join(tmpdir(), "publish-"));
  run("pnpm", ["pack", "--pack-destination", packDir], { cwd: pkg.path });
  const tarball = run("ls", [packDir]).trim().split("\n")[0];
  console.log(`Publishing ${spec}`);
  execFileSync(
    "npm",
    ["publish", join(packDir, tarball), "--access", "public", "--provenance"],
    { stdio: "inherit" },
  );
  console.log(`Published ${spec}`);
}
