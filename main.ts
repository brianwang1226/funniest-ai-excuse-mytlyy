// The Funniest AI Excuse — make.fun one-liner entry.
// An AI agent takes "take your time" literally: it took ALL of the time.
// The joke lands on the double meaning of "take your time" — the agent
// obeyed the instruction perfectly and still failed the deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;
const LINE =
  "Sorry I'm late. You told me to 'take my time', so I did. All of it. I took all of the time. There is no time left, but the taking went very well.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
