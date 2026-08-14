'use server';

import {cookies} from 'next/headers';
import type {AppLocale} from '@/lib/i18n/config';
import {isLocale, LOCALE_COOKIE_NAME} from '@/lib/i18n/config';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export async function setLocale(locale: AppLocale) {
  if (!isLocale(locale)) {
    throw new Error('Unsupported locale');
  }

  (await cookies()).set(LOCALE_COOKIE_NAME, locale, {
    httpOnly: true,
    maxAge: ONE_YEAR_IN_SECONDS,
    path: '/',
    sameSite: 'lax'
  });
}
