// gta6-clipper-01 entry: hands the clip's YouTube address to the gate.
//
// The video itself is the entry; this program only carries VIDEO.json from the
// repository into /output, where the house reads it. It warns (but does not
// fail) when the address is still the placeholder, so a draft run stays
// checkable while an unfilled VIDEO.json can never slip through quietly.
// After copying, it reads the output back and compares it with the source
// byte for byte: a truncated or partial copy must fail loudly here instead
// of handing the house a broken VIDEO.json.
//
// Run it locally the way the kit documents:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const YOUTUBE_ADDRESS =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}($|[?&#])/;

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourcePath = join(botDir, 'VIDEO.json');

if (!existsSync(sourcePath)) {
  console.error(`gta6-clipper-01: VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

let video: { url?: unknown };
try {
  video = JSON.parse(readFileSync(sourcePath, 'utf8')) as { url?: unknown };
} catch (err) {
  console.error(`gta6-clipper-01: VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const copiedPath = join(outDir, 'VIDEO.json');
copyFileSync(sourcePath, copiedPath);

// Confirm the copy landed whole: compare the bytes we wrote with the bytes
// we read, and refuse to report success on a mismatch.
const written = readFileSync(copiedPath);
const original = readFileSync(sourcePath);
if (!written.equals(original)) {
  console.error(
    `gta6-clipper-01: VIDEO.json copy to ${copiedPath} does not match the source (${written.length} bytes written, ${original.length} bytes expected)`,
  );
  process.exit(1);
}

if (typeof video.url !== 'string' || !YOUTUBE_ADDRESS.test(video.url)) {
  console.warn(
    'gta6-clipper-01: WARNING — VIDEO.json url is not a YouTube video address yet ' +
      '(placeholder?). Replace it with the uploaded video address before submitting.',
  );
} else {
  console.log(`gta6-clipper-01: VIDEO.json copied to ${outDir} (url: ${video.url})`);
}
