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
      className='min-h-11 rounded-xl border border-slate-900/13 bg-white/72 px-3 text-[0.75rem] font-bold text-slate-700 transition hover:border-slate-900/20 hover:bg-slate-900/7 hover:text-slate-900 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:cursor-wait disabled:opacity-60 dark:border-white/10 dark:bg-white/3 dark:text-slate-400 dark:hover:border-white/17 dark:hover:bg-white/7 dark:hover:text-white'
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
