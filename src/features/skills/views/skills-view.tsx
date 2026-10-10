import {getTranslations} from 'next-intl/server';
import {Blocks, Code2, GitBranch, Palette, Server} from 'lucide-react';

import {skillGroups} from '@/features/skills/constants/skill-groups';

const groupIcons = {
  frontend: Code2,
  platformBackend: Server,
  stateQuality: GitBranch,
  uiTooling: Palette,
  workflow: Blocks
} as const;

const cardStyles = {
  frontend:
    'border-indigo-400/20 bg-indigo-500/8 dark:border-indigo-300/15 dark:bg-indigo-400/8',
  platformBackend:
    'border-emerald-500/20 bg-emerald-500/8 dark:border-emerald-300/15 dark:bg-emerald-400/8',
  stateQuality:
    'border-sky-500/20 bg-sky-500/8 dark:border-sky-300/15 dark:bg-sky-400/8',
  uiTooling:
    'border-violet-500/20 bg-violet-500/8 dark:border-violet-300/15 dark:bg-violet-400/8',
  workflow:
    'border-amber-500/20 bg-amber-500/8 dark:border-amber-300/15 dark:bg-amber-400/8'
} as const;

const iconStyles = {
  frontend: 'bg-indigo-600 text-white shadow-indigo-500/25',
  platformBackend: 'bg-emerald-600 text-white shadow-emerald-500/25',
  stateQuality: 'bg-sky-600 text-white shadow-sky-500/25',
  uiTooling: 'bg-violet-600 text-white shadow-violet-500/25',
  workflow: 'bg-amber-500 text-slate-950 shadow-amber-500/25'
} as const;

export default async function SkillsView() {
  const t = await getTranslations('Skills');

  return (
    <section
      aria-labelledby='skills-heading'
      className='relative overflow-hidden border-t border-slate-900/13 bg-slate-100 py-20 text-slate-900 sm:py-28 dark:border-white/10 dark:bg-[#0b1120] dark:text-slate-50'
      id='skills'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -start-32 top-10 size-128 rounded-full bg-violet-500/12 blur-3xl dark:bg-violet-500/16'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -end-28 bottom-0 size-120 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/14'
      />

      <div className='relative mx-auto w-[calc(100%-2rem)] max-w-304 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:w-[calc(100%-2rem)]'>
        <div className='max-w-165'>
          <div className='inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300'>
            <Blocks aria-hidden='true' className='size-4 stroke-[2]' />
            {t('eyebrow')}
          </div>
          <h2
            className='mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]'
            id='skills-heading'>
            {t('title')}
          </h2>
          <p className='mt-5 max-w-135 text-base leading-8 text-slate-600 dark:text-slate-400'>
            {t('description')}
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6'>
          {skillGroups.map(({key, skills}) => {
            const Icon = groupIcons[key];

            return (
              <article
                className={`rounded-3xl border p-6 shadow-[0_1rem_2.5rem_rgb(15_23_42_/_6%)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgb(15_23_42_/_11%)] dark:shadow-black/10 ${
                  cardStyles[key]
                } ${key === 'frontend' || key === 'platformBackend' ? 'xl:col-span-3' : 'xl:col-span-2'}`}
                key={key}>
                <div className='flex items-center gap-3'>
                  <span
                    className={`grid size-11 place-items-center rounded-xl shadow-lg ${iconStyles[key]}`}>
                    <Icon aria-hidden='true' className='size-5 stroke-[1.8]' />
                  </span>
                  <h3 className='text-lg font-bold tracking-[-0.02em]'>
                    {t(`groups.${key}`)}
                  </h3>
                </div>
                <ul className='mt-6 flex flex-wrap gap-2' role='list'>
                  {skills.map(skill => (
                    <li
                      className='rounded-lg border border-slate-900/10 bg-white/70 px-3 py-2 font-mono text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-900/20 hover:bg-white dark:border-white/10 dark:bg-slate-950/25 dark:text-slate-200 dark:hover:bg-slate-950/45'
                      key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
