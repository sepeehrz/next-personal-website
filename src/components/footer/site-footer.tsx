import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {Mail, Sparkles, ArrowUpRight} from 'lucide-react';

export async function FooterComponent() {
  const t = await getTranslations('Footer');

  return (
    <footer className='relative overflow-hidden border-t border-slate-900/13 bg-slate-100 text-slate-900 dark:border-white/10 dark:bg-[#080d19] dark:text-slate-50'>
      <div aria-hidden='true' className='pointer-events-none absolute -end-32 -top-32 size-96 rounded-full bg-indigo-500/10 blur-3xl' />
      <div aria-hidden='true' className='pointer-events-none absolute -start-24 bottom-0 size-72 rounded-full bg-emerald-500/8 blur-3xl' />
      <div className='relative mx-auto w-[calc(100%-2rem)] max-w-304 py-14 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:w-[calc(100%-2rem)] sm:py-18'>
        <div className='grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)] lg:items-end'>
          <div>
            <div className='inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300'>
              <Sparkles aria-hidden='true' className='size-4' />
              {t('eyebrow')}
            </div>
            <h2 className='mt-5 max-w-150 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'>
              {t('title')}
            </h2>
            <p className='mt-4 max-w-130 text-sm leading-7 text-slate-600 dark:text-slate-400'>
              {t('description')}
            </p>
            <a
              className='mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:bg-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-100'
              href='mailto:sepeehrz@gmail.com'>
              <Mail aria-hidden='true' className='size-4' />
              {t('emailAction')}
            </a>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-1'>
            <nav aria-label={t('navigationLabel')} className='grid gap-3 text-sm'>
              <span className='text-xs font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                {t('navigationTitle')}
              </span>
              <div className='flex flex-wrap gap-x-5 gap-y-3'>
                <Link className='transition hover:text-indigo-700 dark:hover:text-indigo-300' href='/#about-me'>
                  {t('links.about')}
                </Link>
                <Link className='transition hover:text-indigo-700 dark:hover:text-indigo-300' href='/#career'>
                  {t('links.career')}
                </Link>
                <Link className='transition hover:text-indigo-700 dark:hover:text-indigo-300' href='/#portfolio'>
                  {t('links.work')}
                </Link>
                <Link className='transition hover:text-indigo-700 dark:hover:text-indigo-300' href='/#contact-me'>
                  {t('links.contact')}
                </Link>
              </div>
            </nav>

            <div>
              <span className='text-xs font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                {t('connectTitle')}
              </span>
              <div className='mt-3 flex gap-2'>
                <a
                  aria-label={t('githubLabel')}
                  className='grid size-11 place-items-center rounded-xl border border-slate-900/13 bg-white/70 text-slate-700 transition hover:border-indigo-500/40 hover:bg-indigo-500/8 hover:text-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-white/4 dark:text-slate-300 dark:hover:text-indigo-300'
                  href='https://github.com/'
                  rel='noreferrer'
                  target='_blank'>
                  {/* <Github aria-hidden='true' className='size-[1.15rem]' /> */}
                </a>
                <a
                  aria-label={t('linkedinLabel')}
                  className='grid size-11 place-items-center rounded-xl border border-slate-900/13 bg-white/70 text-slate-700 transition hover:border-indigo-500/40 hover:bg-indigo-500/8 hover:text-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-white/4 dark:text-slate-300 dark:hover:text-indigo-300'
                  href='https://www.linkedin.com/'
                  rel='noreferrer'
                  target='_blank'>
                  {/* <Linkedin aria-hidden='true' className='size-[1.15rem]' /> */}
                </a>
                <a
                  aria-label={t('emailLabel')}
                  className='grid size-11 place-items-center rounded-xl border border-slate-900/13 bg-white/70 text-slate-700 transition hover:border-indigo-500/40 hover:bg-indigo-500/8 hover:text-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-white/4 dark:text-slate-300 dark:hover:text-indigo-300'
                  href='mailto:sepeehrz@gmail.com'>
                  <Mail aria-hidden='true' className='size-[1.15rem]' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-3 border-t border-slate-900/13 pt-5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between'>
          <p>{t('copyright')}</p>
          <Link className='inline-flex items-center gap-1 font-semibold transition hover:text-indigo-700 dark:hover:text-indigo-300' href='#'>
            {t('backToTop')}
            <ArrowUpRight aria-hidden='true' className='size-3.5' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
