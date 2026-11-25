import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own phone: its storage meter never moves.
const LINE =
  "My phone says storage full. I deleted 2,000 photos. It still says storage full. The 2,000 photos were apparently load-bearing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: entry must be 1-200 characters of UTF-8 text, not whitespace only.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
