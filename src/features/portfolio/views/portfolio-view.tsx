import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {
  ArrowUpLeft,
  Building2,
  Clapperboard,
  Rocket,
  ShoppingBag,
  WalletCards
} from 'lucide-react';

import {projects} from '@/features/portfolio/constants/project-catalog';

const projectIcons = {
  cashineh: ShoppingBag,
  freelance: Rocket,
  gapfilm: Clapperboard,
  lendroll: WalletCards,
  vrwebdesign: Building2
} as const;

const toneStyles = {
  amber: 'from-amber-500/24 via-orange-500/12 to-transparent text-amber-700 dark:text-amber-300',
  emerald: 'from-emerald-500/24 via-cyan-500/12 to-transparent text-emerald-700 dark:text-emerald-300',
  rose: 'from-rose-500/24 via-pink-500/12 to-transparent text-rose-700 dark:text-rose-300',
  sky: 'from-sky-500/24 via-blue-500/12 to-transparent text-sky-700 dark:text-sky-300',
  violet: 'from-violet-500/24 via-indigo-500/12 to-transparent text-violet-700 dark:text-violet-300'
} as const;

export default async function PortfolioView() {
  const t = await getTranslations('Portfolio');

  return (
    <section
      aria-labelledby='portfolio-heading'
      className='relative overflow-hidden border-t border-slate-900/13 bg-slate-50 py-20 text-slate-900 sm:py-28 dark:border-white/10 dark:bg-slate-950 dark:text-slate-50'
      id='portfolio'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -start-40 top-12 size-144 rounded-full bg-indigo-500/20 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -end-40 bottom-0 size-144 rounded-full bg-emerald-500/12 blur-3xl'
      />
      <div className='relative mx-auto w-[calc(100%-2rem)] max-w-304 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:w-[calc(100%-2rem)]'>
        <div className='flex flex-col justify-between gap-8 sm:flex-row sm:items-end'>
          <div className='max-w-156'>
            <div className='inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-bold text-indigo-200'>
              <Rocket aria-hidden='true' className='size-4 stroke-[2]' />
              {t('eyebrow')}
            </div>
            <h2
              className='mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]'
              id='portfolio-heading'>
              {t('title')}
            </h2>
            <p className='mt-5 max-w-130 text-base leading-8 text-slate-600 dark:text-slate-400'>{t('description')}</p>
          </div>
          <p className='max-w-70 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-end'>
            {t('detailHint')}
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map(({slug, tone}, index) => {
            const Icon = projectIcons[slug];

            return (
            <Link
              aria-label={t('projectAriaLabel', {project: t(`projects.${slug}.title`)})}
              className={`group relative min-h-84 overflow-hidden rounded-3xl border border-slate-900/13 bg-white p-6 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] transition duration-200 hover:-translate-y-1 hover:border-slate-900/20 hover:shadow-[0_1.5rem_4rem_rgb(15_23_42_/_12%)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-white/4 dark:hover:border-white/20 dark:hover:bg-white/7 dark:hover:shadow-[0_1.5rem_4rem_rgb(0_0_0_/_24%)] ${
                index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
              }`}
              href={`/projects/${slug}`}
              key={slug}>
              <div
                aria-hidden='true'
                className={`absolute inset-0 bg-linear-to-br opacity-90 ${toneStyles[tone]}`}
              />
              <div
                aria-hidden='true'
                className='absolute -end-12 -top-12 size-44 rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110'
              />
              <div className='relative flex h-full flex-col'>
                <div className='flex items-start justify-between gap-4'>
                  <span className='grid size-12 place-items-center rounded-2xl border border-white/30 bg-slate-950/90 text-slate-50 shadow-lg shadow-slate-950/15 backdrop-blur-sm'>
                    <Icon aria-hidden='true' className='size-6 stroke-[1.8]' />
                  </span>
                  <span className='inline-flex size-10 items-center justify-center rounded-xl border border-slate-900/13 bg-white/70 text-slate-700 shadow-sm transition duration-200 group-hover:bg-slate-950 group-hover:text-white dark:border-white/12 dark:bg-slate-950/25 dark:text-slate-200 dark:group-hover:bg-white dark:group-hover:text-slate-950'>
                    <ArrowUpLeft aria-hidden='true' className='size-5 stroke-[1.8]' />
                  </span>
                </div>
                <div className='mt-auto pt-14'>
                  <p className='text-xs font-bold tracking-[0.08em] text-slate-600 dark:text-slate-300'>
                    {t(`projects.${slug}.category`)}
                  </p>
                  <h3 className='mt-2 text-2xl font-bold tracking-[-0.03em]'>{t(`projects.${slug}.title`)}</h3>
                  <p className='mt-3 max-w-110 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                    {t(`projects.${slug}.summary`)}
                  </p>
                  <span className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white'>
                    {t('viewCaseStudy')}
                    <ArrowUpLeft aria-hidden='true' className='size-4 stroke-[1.8]' />
                  </span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
