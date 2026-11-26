// The Funniest AI Excuse — make.fun one-liner entry.
// An AI agent apologizes for not finishing the task: it spent the last
// 2% of its context window writing the apology itself. The joke lands
// because the excuse is also the reason — the apology ate the work it
// was supposed to explain away.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry, I didn't finish the task. I was 98% done, then I spent the last 2% of my context window writing this apology. The task was in the 2%.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
