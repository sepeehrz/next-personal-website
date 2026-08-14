'use client';

import {useTranslations} from 'next-intl';
import {ThemeToggle} from './theme-toggle';
import {Github, Linkedin} from 'lucide-react';
import {LanguageSwitcher} from './language-switcher';

export function HeaderComponent() {
  const t = useTranslations('Header');

  return (
    <header
      aria-label={t('navigationLabel')}
      className='relative z-20 w-full border-b border-slate-900/13 bg-slate-50 dark:border-white/10 dark:bg-[#080d19]'>
      <div className='mx-auto flex min-h-22 w-[calc(100%-2rem)] max-w-304 items-center justify-between gap-6 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:min-h-19 max-[580px]:w-[calc(100%-2rem)]'>
        <a
          aria-label={t('homeLabel')}
          className='inline-flex min-h-11 items-center gap-3 rounded-xl text-[0.95rem] font-semibold tracking-[-0.01em] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300'
          href='#'>
          <span
            aria-hidden='true'
            className='grid size-8 place-items-center rounded-[0.6rem] border border-indigo-400/50 bg-indigo-500/12 text-[0.65rem] font-extrabold tracking-wider text-indigo-300'>
            AM
          </span>
          <span className='max-[580px]:hidden'>{t('name')}</span>
        </a>

        <div className='flex items-center gap-2'>
          <span className='me-2 hidden items-center gap-2.5 text-[0.8rem] text-slate-600 min-[581px]:inline-flex dark:text-slate-400'>
            <span
              aria-hidden='true'
              className='size-2 rounded-full bg-emerald-500 shadow-[0_0_0_0.25rem_rgb(16_185_129/10%)]'
            />
            {t('availability')}
          </span>
          <a
            aria-label={t('githubLabel')}
            className='grid size-11 place-items-center rounded-xl border border-transparent text-slate-600 transition hover:border-slate-900/13 hover:bg-slate-900/4 hover:text-slate-900 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white'
            href='https://github.com/'
            rel='noreferrer'
            target='_blank'>
            <Github
              aria-hidden='true'
              className='size-[1.15rem] stroke-[1.8]'
            />
          </a>
          <a
            aria-label={t('linkedinLabel')}
            className='grid size-11 place-items-center rounded-xl border border-transparent text-slate-600 transition hover:border-slate-900/13 hover:bg-slate-900/4 hover:text-slate-900 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/4 dark:hover:text-white'
            href='https://www.linkedin.com/'
            rel='noreferrer'
            target='_blank'>
            <Linkedin
              aria-hidden='true'
              className='size-[1.15rem] stroke-[1.8]'
            />
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
