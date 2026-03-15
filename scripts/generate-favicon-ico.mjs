import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'favicon.svg');
const icoPath = join(root, 'public', 'favicon.ico');

const svg = readFileSync(svgPath);
const sizes = [16, 32];

const pngs = await Promise.all(
  sizes.map((size) =>
    sharp(svg)
      .resize(size, size)
      .png()
      .toBuffer()
  )
);

const ico = await toIco(pngs);
writeFileSync(icoPath, ico);
console.log('Generated', icoPath);
