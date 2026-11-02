// Prints the durationInFrames of a composition: node scripts/total-frames.mjs <compositionId>
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { selectComposition } from "@remotion/renderer";

const id = process.argv[2] ?? "BridgeShort";
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
const comp = await selectComposition({ serveUrl, id, logLevel: "error" });
console.log(comp.durationInFrames);
