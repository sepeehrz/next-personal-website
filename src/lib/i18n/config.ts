export const LOCALES = ['fa', 'en'] as const;
export const DEFAULT_LOCALE = 'fa';
export const LOCALE_COOKIE_NAME = 'locale';

export type AppLocale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is AppLocale {
  return LOCALES.includes(value as AppLocale);
}
