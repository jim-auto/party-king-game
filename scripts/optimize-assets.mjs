import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';

const assetDir = 'public/assets/ai';
const files = await readdir(assetDir);

for (const file of files) {
  if (extname(file).toLowerCase() !== '.png') continue;
  const input = join(assetDir, file);
  const output = join(assetDir, file.replace(/\.png$/i, '.webp'));
  await sharp(input)
    .resize({ width: 1280, height: 1280, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);
}
