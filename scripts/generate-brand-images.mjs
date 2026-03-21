/**
 * Génère favicon.ico, apple-touch-icon.png et images Open Graph
 * à partir de public/favicon.svg
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'favicon.svg');
const svg = readFileSync(svgPath);

/** Fond terre cuite foncé (global.css --color-terracotta-dark), comme le rect du favicon.svg */
const BG = { r: 154, g: 69, b: 50, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

async function rasterSquare(size) {
  return sharp(svg)
    .resize(size, size, {
      fit: 'contain',
      background: BG,
      position: 'center',
    })
    .png()
    .toBuffer();
}

// ——— favicon.ico (16 + 32 px) ———
const icoSizes = [16, 32];
const icoPngs = await Promise.all(icoSizes.map((s) => rasterSquare(s)));
const ico = await toIco(icoPngs);
writeFileSync(join(root, 'public', 'favicon.ico'), ico);
console.log('✓ public/favicon.ico');

// ——— Apple Touch Icon 180×180 ———
const appleBuf = await rasterSquare(180);
writeFileSync(join(root, 'public', 'apple-touch-icon.png'), appleBuf);
console.log('✓ public/apple-touch-icon.png');

// ——— Raster tortue (PNG transparent) pour compositing OG ———
async function turtlePng(maxW, maxH) {
  return sharp(svg)
    .resize(maxW, maxH, {
      fit: 'contain',
      background: TRANSPARENT,
    })
    .png()
    .toBuffer();
}

const ogDir = join(root, 'public', 'og');
mkdirSync(ogDir, { recursive: true });

// 1200×630 (Facebook / LinkedIn / X)
const og630Turtle = await turtlePng(720, 380);
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: BG,
  },
})
  .composite([{ input: og630Turtle, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(join(ogDir, 'og-image-1200x630.png'));
console.log('✓ public/og/og-image-1200x630.png');

// 1200×1200 (carré, WhatsApp / certains réseaux)
const ogSqTurtle = await turtlePng(920, 920);
await sharp({
  create: {
    width: 1200,
    height: 1200,
    channels: 4,
    background: BG,
  },
})
  .composite([{ input: ogSqTurtle, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(join(ogDir, 'og-image-1200x1200.png'));
console.log('✓ public/og/og-image-1200x1200.png');

console.log('\nTerminé — pense à bump ?v= dans Layout.astro si besoin cache-bust.');
