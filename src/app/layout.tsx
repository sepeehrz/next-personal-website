import './globals.css';
import type {Metadata} from 'next';
import Providers from '@/providers';
import {vazirmatn} from '@/lib/fonts';
import {getLocale, getMessages} from 'next-intl/server';
import {HeaderComponent} from '@/components/site-header';
import {FooterComponent} from '@/components/site-footer';

export const metadata: Metadata = {
  description:
    'A full-stack software engineer building fast, thoughtful and accessible digital products.',
  title: 'Sepehr Zarghami | Software Engineer'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html dir={locale === 'fa' ? 'rtl' : 'ltr'} lang={locale}>
      <body className={vazirmatn.variable}>
        <Providers locale={locale} messages={messages}>
          <main className='flex-1'>
            <HeaderComponent />
            {children}
          </main>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
