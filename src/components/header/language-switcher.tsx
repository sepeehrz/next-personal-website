'use client';

import {useTransition} from 'react';
import {useRouter} from 'next/navigation';
import {setLocale} from '@/lib/i18n/set-locale';
import type {AppLocale} from '@/lib/i18n/config';
import {useLocale, useTranslations} from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('Header.language');
  const [isPending, startTransition] = useTransition();
  const nextLocale: AppLocale = locale === 'fa' ? 'en' : 'fa';

  return (
    <button
      aria-label={t('label')}
      className='language-toggle'
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await setLocale(nextLocale);
          router.refresh();
        })
      }
      type='button'>
      {t('action')}
    </button>
  );
}
