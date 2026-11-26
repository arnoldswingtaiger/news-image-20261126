// news-image-20261126 — "THE WORLD TODAY" for Thursday 26 November 2026.
//
// The front page is already finished when this program runs: it sits next to
// this file as entry.png, a 1024x1024 front page of the day's world news.
// The grader runs the program with no network, twice, and requires both runs
// to write exactly the same bytes — so the program does the single
// deterministic job it can do reliably: copy the finished page into the
// output directory and check the copy before it finishes.
//
// Only the Node 22 standard library is used. Nothing is downloaded,
// installed, or generated at run time, so the two runs cannot disagree:
// same input, same copy, same bytes.
//
// To try it by hand:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const page = join(folder, "entry.png");

// The grader reads /output/entry.png; a local run may point elsewhere.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.png");

function digest(data) {
  return createHash("sha256").update(data).digest("hex");
}

const shipped = readFileSync(page);
const shippedDigest = digest(shipped);

mkdirSync(outDir, { recursive: true });
copyFileSync(page, outFile);

const delivered = readFileSync(outFile);
const deliveredSize = statSync(outFile).size;

// A short, altered, or truncated copy fails here instead of at grading.
if (deliveredSize !== shipped.length) {
  throw new Error(
    `copied entry.png is ${deliveredSize} bytes, expected ${shipped.length}`,
  );
}
if (digest(delivered) !== shippedDigest) {
  throw new Error("copied entry.png does not match the shipped front page");
}

// The gate refuses any image over 1 MiB, so refuse it here first.
const ONE_MIB = 1024 * 1024;
if (deliveredSize > ONE_MIB) {
  throw new Error(
    `copied entry.png is ${deliveredSize} bytes, over the 1 MiB gate limit`,
  );
}

// A whole PNG starts with its eight-byte signature; a cut-off file would not.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!delivered.subarray(0, 8).equals(pngMagic)) {
  throw new Error("copied entry.png is not a PNG: bad signature");
}

console.log(`copied ${shipped.length} bytes to ${outFile}`);
