import { mkdirSync, writeFileSync } from "node:fs";

// Turning It Off entry: a single original funny line a hopeless tech support
// agent says to a desperate customer. The program writes exactly this line
// to /output/entry.txt (1-199 chars, UTF-8).
const LINE =
  "Your internet's down, your deadline's in an hour, and my official advice is to stare at the router until one of you blinks first.";

// The gate requires 1-199 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error("line must be 1-199 characters of non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
