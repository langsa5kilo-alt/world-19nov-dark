// Entrypoint: copies the rendered page into the output directory.
// The source sits next to this file, so resolve it from import.meta.url
// rather than the working directory, and honour MAKEFUN_OUTPUT_DIR
// when the venue overrides the default "/output" drop point.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);

await mkdir(out, { recursive: true });
await copyFile(source, join(out, "entry.png"));
