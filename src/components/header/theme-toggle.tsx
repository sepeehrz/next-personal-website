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
      className='theme-toggle'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type='button'>
      {isDark ? <Sun aria-hidden='true' /> : <Moon aria-hidden='true' />}
    </button>
  );
}
