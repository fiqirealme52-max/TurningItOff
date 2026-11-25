import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Turning It Off entry: a single original funny line a hopeless tech support
// agent says to a desperate customer. The program writes exactly this line
// to /output/entry.txt (1-199 chars, UTF-8).
//
// The joke: the agent never troubleshoots. The customer's internet is down
// and a deadline is an hour away, and the agent's "official advice" is a
// staring contest with the router — cheerful uselessness, with the customer
// never the butt of it. The twist lands because the setup primes the classic
// "turn it off and on again" and delivers something else instead.
const LINE =
  "Your internet's down, your deadline's in an hour, and my official advice is to stare at the router until one of you blinks first.";

// The gate counts characters: 1-199, and the line must not be only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 199;

function checkLine(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS || !line.trim()) {
    throw new Error("line must be 1-199 characters of non-whitespace text");
  }
}

checkLine(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
