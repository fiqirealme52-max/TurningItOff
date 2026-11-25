import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Your internet's down, your deadline's in an hour, and my official advice is to stare at the router until one of you blinks first.";

// One-liner entry: the hopeless tech-support agent's official advice.
const isValidLength = LINE.length >= 1 && LINE.length <= 199;
const isNonWhitespace = LINE.trim().length > 0;
if (!isValidLength || !isNonWhitespace) {
  throw new Error(`entry line must be 1-199 non-whitespace chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
