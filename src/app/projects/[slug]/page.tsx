import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {projects} from '@/features/portfolio/constants/project-catalog';
import {Layers3, ArrowUpLeft, ExternalLink} from 'lucide-react';
import ProjectGallery from '@/features/portfolio/components/project-gallery';

export default async function ProjectDetailsPage({
  params
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);

  if (!project) notFound();

  const t = await getTranslations('Portfolio');
  const detail = await getTranslations('Portfolio.details');

  return (
    <section className='relative min-h-screen overflow-hidden bg-slate-50 py-20 text-slate-900 sm:py-28 dark:bg-slate-950 dark:text-slate-50'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -start-40 top-16 size-144 rounded-full bg-indigo-500/15 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -end-40 bottom-0 size-144 rounded-full bg-emerald-500/10 blur-3xl'
      />
      <div className='relative mx-auto w-[calc(100%-2rem)] max-w-304 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:w-[calc(100%-2rem)]'>
        <Link
          className='inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-900/13 bg-white/75 px-4 text-sm font-semibold text-slate-700 transition hover:border-indigo-500/40 hover:text-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:border-white/10 dark:bg-white/4 dark:text-slate-200 dark:hover:text-indigo-300'
          href='/#portfolio'>
          <ArrowUpLeft aria-hidden='true' className='size-4' />
          {detail('backToWork')}
        </Link>

        <div className='mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-start lg:gap-16'>
          <ProjectGallery
            images={project.gallery}
            labels={project.gallery.map(image =>
              detail(`gallery.${image.label}`)
            )}
          />
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300'>
              <Layers3 aria-hidden='true' className='size-4' />
              {detail(`categories.${project.category}`)}
            </span>
            <h1 className='mt-6 text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.05em]'>
              {t(`projects.${project.slug}.title`)}
            </h1>
            <article className='mt-7 rounded-3xl border border-slate-900/13 bg-white/75 p-6 shadow-[0_1rem_2.5rem_rgb(15_23_42_/_6%)] dark:border-white/10 dark:bg-white/4'>
              <h2 className='text-sm font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                {detail('overviewTitle')}
              </h2>
              <p className='mt-3 text-base font-medium leading-8 text-slate-700 dark:text-slate-200'>
                {detail(`projects.${project.slug}.overview`)}
              </p>
              <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400'>
                {detail(`projects.${project.slug}.description`)}
              </p>
              <div className='mt-5 border-t border-slate-900/10 pt-4 dark:border-white/10'>
                <h3 className='text-xs font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                  {detail('stackTitle')}
                </h3>
                <ul className='mt-3 flex flex-wrap gap-2' role='list'>
                  {project.stack.map(item => (
                    <li
                      className='rounded-lg border border-indigo-500/20 bg-indigo-500/8 px-3 py-2 font-mono text-xs font-medium text-indigo-800 dark:text-indigo-200'
                      key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            {project.website ? (
              <a
                className='mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:bg-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-300 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-100'
                href={project.website}
                rel='noreferrer'
                target='_blank'>
                {detail('visitProject')}
                <ExternalLink aria-hidden='true' className='size-4' />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
