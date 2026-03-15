/**
 * i18n — 5 langues : fr (défaut), en, it, es, ar (RTL)
 * Fichiers dans src/i18n/{locale}.json
 */

import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import it from '../i18n/it.json';
import es from '../i18n/es.json';
import ar from '../i18n/ar.json';

export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en', 'it', 'es', 'ar'] as const;
export type Locale = (typeof locales)[number];

const messages: Record<Locale, Record<string, unknown>> = { fr, en, it, es, ar };

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  ar: 'العربية',
};

/** Préfixe URL pour une locale (vide pour fr) */
export function basePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** URL d'une page pour une locale */
export function pathForLocale(locale: Locale, path: string): string {
  const base = basePath(locale);
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}

function getNested(obj: Record<string, unknown>, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

/** Retourne une fonction t(key) pour la locale donnée */
export function getTranslations(locale: Locale): (key: string) => string {
  const dict = messages[locale] ?? messages.fr;
  return (key: string) => getNested(dict as Record<string, unknown>, key) ?? key;
}
