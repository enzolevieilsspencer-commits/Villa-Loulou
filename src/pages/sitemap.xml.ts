/**
 * Sitemap XML — toutes les pages du site (fr, en, it, es, ar).
 * Généré au build. Base URL : astro.config.mjs → site (ou SITE_URL en env).
 */
import { locales, defaultLocale } from '../lib/i18n';

const paths = [
  '',
  '/contact',
  '/la-villa',
  '/mentions-legales',
  '/nos-services',
  '/politique-confidentialite',
];

function getAllUrls(): string[] {
  const site = import.meta.env.SITE || 'https://villa-loulou.com';
  const base = site.replace(/\/$/, '');
  const out: string[] = [];
  for (const locale of locales) {
    const prefix = locale === defaultLocale ? '' : `/${locale}`;
    for (const path of paths) {
      const segment = path ? path : prefix ? '' : '/';
      const url = `${base}${prefix}${segment}`;
      out.push(url === base ? `${base}/` : url);
    }
  }
  return out;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || 'https://villa-loulou.com';
  const base = site.replace(/\/$/, '');
  const urls = [...new Set(getAllUrls())];
  const lastmod = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${[`${base}/`, `${base}/en`, `${base}/it`, `${base}/es`, `${base}/ar`].includes(url) ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
