import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceImage = fileURLToPath(new URL("entry.png", import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(sourceImage)) {
  console.error("entry.png is missing.");
  process.exit(1);
}

if (!existsSync(outputDirectory)) {
  mkdirSync(outputDirectory, { recursive: true });
}

copyFileSync(sourceImage, join(outputDirectory, "entry.png"));
