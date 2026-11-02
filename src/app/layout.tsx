import './globals.css';
import type {Metadata} from 'next';
import {siteUrl} from '@/config/site';
import Providers from '@/providers';
import {vazirmatn} from '@/lib/fonts';
import {getLocale, getMessages} from 'next-intl/server';
import {HeaderComponent} from '@/components/site-header';
import {FooterComponent} from '@/components/site-footer';

export const metadata: Metadata = {
  description:
    'A software engineer building fast, thoughtful and accessible digital products.',
  title: {
    default: 'Sepehr Zarghami | Software Engineer',
    template: '%s | Sepehr Zarghami'
  },
  ...(siteUrl ? {metadataBase: new URL(siteUrl)} : {})
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      lang={locale}
      suppressHydrationWarning>
      <body className={vazirmatn.variable}>
        <Providers
          locale={locale}
          messages={{
            Header: messages.Header,
            ContactMe: messages.ContactMe,
            Portfolio: messages.Portfolio
          }}>
          <a
            className='sr-only z-50 rounded bg-white p-3 text-slate-950 focus:not-sr-only focus:absolute focus:start-4 focus:top-4'
            href='#main-content'>
            {locale === 'fa' ? 'رفتن به محتوای اصلی' : 'Skip to main content'}
          </a>
          <HeaderComponent />
          <main className='flex-1' id='main-content'>
            {children}
          </main>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
