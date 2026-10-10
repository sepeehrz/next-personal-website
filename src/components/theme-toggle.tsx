'use client';

import {useTheme} from 'next-themes';
import {Sun, Moon} from 'lucide-react';
import {useTranslations} from 'next-intl';

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const t = useTranslations('Header.theme');
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label={isDark ? t('lightLabel') : t('darkLabel')}
      className='grid size-11 place-items-center rounded-xl border border-slate-900/13 bg-indigo-500/8 text-slate-600 transition hover:border-slate-900/20 hover:bg-indigo-500/15 hover:text-slate-900 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/17 dark:hover:text-white'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type='button'>
      {isDark ? (
        <Sun aria-hidden='true' className='size-[1.15rem] stroke-[1.8]' />
      ) : (
        <Moon aria-hidden='true' className='size-[1.15rem] stroke-[1.8]' />
      )}
    </button>
  );
}
