import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export type Root = ReturnType<typeof loader>["pageTree"];

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
