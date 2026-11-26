// The Moon Gets One Star — make.fun competition
// u-eager-stork-81-9647-the-moon-gets-one-star-768236e5
//
// Writes the entry — a single one-star review of the Moon — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
//
// Deterministic by design: the entry line is a fixed constant, there is no
// clock, no randomness, no network access and no file reading, so every run
// produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. 110 characters, inside the 1-120 character gate.
// One star. It only shows up at night, controls my tides, and never once
// apologized. Toxic. Would not recommend.
const ENTRY =
  "One star. It only shows up at night, controls my tides, and never once apologized. Toxic. Would not recommend.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space. Check it before writing anything.
function gateCheck(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 120) {
    throw new Error(`entry is ${length} characters, outside the 1-120 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
}

function main(): void {
  gateCheck(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  // Write the line exactly, with no trailing newline, so the file holds
  // precisely the 110 characters the gate counts.
  writeFileSync(outputPath, ENTRY, "utf8");
}

main();
