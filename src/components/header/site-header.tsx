'use client';

import {useTranslations} from 'next-intl';
import {ThemeToggle} from './theme-toggle';
import {Github, Linkedin} from 'lucide-react';
import {LanguageSwitcher} from './language-switcher';

export function HeaderComponent() {
  const t = useTranslations('Header');

  return (
    <header aria-label={t('navigationLabel')} className='site-header'>
      <a aria-label={t('homeLabel')} className='brand' href='#'>
        <span aria-hidden='true' className='brand-mark'>
          AM
        </span>
        <span>{t('name')}</span>
      </a>

      <div className='header-actions'>
        <span className='availability'>
          <span aria-hidden='true' className='availability-dot' />
          {t('availability')}
        </span>
        <a
          aria-label={t('githubLabel')}
          className='icon-link'
          href='https://github.com/'
          rel='noreferrer'
          target='_blank'>
          <Github aria-hidden='true' />
        </a>
        <a
          aria-label={t('linkedinLabel')}
          className='icon-link'
          href='https://www.linkedin.com/'
          rel='noreferrer'
          target='_blank'>
          <Linkedin aria-hidden='true' />
        </a>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
