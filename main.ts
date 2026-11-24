// The Dog Ate My Homework: Funniest Excuse — entry program.
// Writes one line, in the dog's own voice, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It was due today, right? I ate it yesterday, so technically I turned it in early. You're welcome.";

// The gate only accepts 1-200 characters: refuse to write anything else.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
