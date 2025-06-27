import fs from 'node:fs';
import dts from 'rollup-plugin-dts';
import { getRollupConfig } from "../../.build/rollup-plugins.mjs";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const outputFileName = 'didit-icons';
const inputs = ['./src/didit-icons.ts'];
const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
    inputs,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs,
  },
];

export default [
  {
    input: inputs[0],
    output: [
      {
        dir: `dist/esm`,
        preserveModules: true,
      },
      {
        dir: `dist/cjs`,
        preserveModules: true,
      },
    ],
    plugins: [dts()],
  },

  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
  }),
];
