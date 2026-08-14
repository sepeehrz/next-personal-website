'use client';

import {ReactNode} from 'react';
import dynamic from 'next/dynamic';
import {NextIntlClientProvider} from 'next-intl';

const ThemeProvider = dynamic(
  () => import('./theme-provider').then(mod => mod.ThemeProvider),
  {ssr: false}
);

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
