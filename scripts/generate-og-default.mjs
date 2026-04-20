/**
 * One-off script: renders public/og-default.png — the 1200×630 default social
 * preview card. Uses sharp to rasterise a small SVG composed with the Lytos
 * palette (paper background, olive accent, ink text).
 *
 * Usage: node scripts/generate-og-default.mjs
 *
 * Re-run only when the identity changes (new tagline, palette tweak). The
 * output is committed to public/ so CI doesn't need to regenerate it.
 */
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-default.png');
mkdirSync(dirname(out), { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

const PAPER = '#f5f2ec';
const INK = '#151515';
const INK_SOFT = '#5d574b';
const OLIVE = '#4a5233';
const OLIVE_LINE = 'rgba(74, 82, 51, 0.35)';

// Knot glyph (simplified version matching the site logo spirit) + wordmark
// + tagline. Typography is conservative — system serif fallback — because a
// social card is rasterised and web fonts aren't available at render time.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>

  <!-- Thin olive frame -->
  <rect x="40" y="40" width="${WIDTH - 80}" height="${HEIGHT - 80}" fill="none" stroke="${OLIVE_LINE}" stroke-width="1.5"/>

  <!-- Glyph: a knot composed of two interlinked loops, rendered in olive -->
  <g transform="translate(110, 150)" fill="none" stroke="${OLIVE}" stroke-width="6" stroke-linecap="round">
    <path d="M 0 80 Q 0 0 80 0 Q 160 0 160 80 Q 160 160 80 160 Q 0 160 0 80 Z"/>
    <path d="M 55 25 Q 105 25 105 75 Q 105 125 55 125 Q 5 125 5 75 Q 5 25 55 25" opacity="0.6" transform="translate(50,0)"/>
  </g>

  <!-- Wordmark -->
  <text x="110" y="420"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="120"
        font-weight="300"
        fill="${INK}"
        letter-spacing="-2">Lytos</text>

  <!-- Tagline -->
  <text x="110" y="480"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="32"
        font-style="italic"
        fill="${INK_SOFT}">A human-first method for working with AI coding agents</text>

  <!-- URL bottom-right -->
  <text x="${WIDTH - 110}" y="${HEIGHT - 70}"
        font-family="'Courier New', monospace"
        font-size="22"
        text-anchor="end"
        fill="${INK_SOFT}">lytos.org</text>
</svg>
`;

await sharp(Buffer.from(svg))
	.png({ compressionLevel: 9 })
	.toFile(out);

console.log(`Wrote ${out}`);
