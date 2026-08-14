import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';
import {isLocale, DEFAULT_LOCALE, LOCALE_COOKIE_NAME} from './config';

export default getRequestConfig(async () => {
  const storedLocale = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;
  const locale = isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
