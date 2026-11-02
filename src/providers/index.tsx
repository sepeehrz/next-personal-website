'use client';

import {ReactNode} from 'react';
import {ThemeProvider} from './theme-provider';
import {NextIntlClientProvider} from 'next-intl';

interface IProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export default function Providers({children, locale, messages}: IProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
