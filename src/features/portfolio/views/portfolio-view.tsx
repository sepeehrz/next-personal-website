import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {ArrowUpLeft, Rocket} from 'lucide-react';
import Image from 'next/image';

import {projects} from '@/features/portfolio/constants/project-catalog';

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
          {projects.map((project, index) => (
            <Link
              aria-label={t('projectAriaLabel', {project: project.title})}
              className={`group relative flex min-h-84 flex-col overflow-hidden rounded-3xl border border-slate-900/13 bg-white shadow-lg transition hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-slate-900 ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}
              href={`/projects/${project.slug}`}
              key={project.slug}>
              <div className='relative h-48 overflow-hidden bg-linear-to-br from-indigo-900 to-emerald-800'>
                {project.images?.[0] ? (
                  <Image alt='' className='object-cover object-top transition duration-300 group-hover:scale-105' fill sizes='(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw' src={`/images/${project.images[0]}`} />
                ) : <Rocket aria-hidden='true' className='absolute inset-0 m-auto size-12 text-white/60' />}
              </div>
              <div className='flex flex-1 flex-col p-6'>
                <p className='text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300'>{project.tags.join(' ? ')}</p>
                <h3 className='mt-2 text-2xl font-bold'>{project.title}</h3>
                <p className='mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>{project.details}</p>
                <span className='mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold'>{t('viewCaseStudy')} <ArrowUpLeft aria-hidden='true' className='size-4' /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
