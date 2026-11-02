import Link from 'next/link';
import {Rocket, ArrowUpLeft} from 'lucide-react';
import {getLocale, getTranslations} from 'next-intl/server';
import {projects} from '@/features/portfolio/constants/project-catalog';
import {
  getProjectTags,
  projectContent
} from '@/features/portfolio/constants/project-content';

export default async function PortfolioView() {
  const t = await getTranslations('Portfolio');
  const locale = await getLocale();

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
            <div className='inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-200'>
              <Rocket aria-hidden='true' className='size-4 stroke-[2]' />
              {t('eyebrow')}
            </div>
            <h2
              className='mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]'
              id='portfolio-heading'>
              {t('title')}
            </h2>
            <p className='mt-5 max-w-130 text-base leading-8 text-slate-600 dark:text-slate-400'>
              {t('description')}
            </p>
          </div>
          <p className='max-w-70 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-end'>
            {t('detailHint')}
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => {
            const content =
              locale === 'fa' ? projectContent[project.slug] : project;
            return (
              <Link
                aria-label={t('projectAriaLabel', {project: content.title})}
                className={`group relative flex min-h-84 flex-col overflow-hidden rounded-3xl border border-slate-900/13 bg-white shadow-lg transition hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-slate-900 ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}
                href={`/projects/${project.slug}`}
                key={project.slug}>
                <div
                  aria-hidden='true'
                  className='relative flex h-40 items-center justify-between overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-emerald-900 px-7 text-white'>
                  <div className='absolute -end-8 -top-14 size-48 rounded-full border border-white/10 bg-white/5' />
                  <div className='absolute -bottom-20 start-1/3 size-44 rounded-full border border-white/10' />
                  <span
                    className='relative grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-xl font-bold backdrop-blur-sm'
                    dir='ltr'>
                    {project.title.charAt(0).toUpperCase()}
                  </span>
                  <span className='relative font-mono text-5xl font-bold text-white/20'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className='flex flex-1 flex-col p-6'>
                  <p className='text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300'>
                    {getProjectTags(project.tags, locale)}
                  </p>
                  <h3 className='mt-2 text-2xl font-bold'>{content.title}</h3>
                  <p className='mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                    {content.details}
                  </p>
                  <span className='mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold'>
                    {t('viewCaseStudy')}{' '}
                    <ArrowUpLeft aria-hidden='true' className='size-4' />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
