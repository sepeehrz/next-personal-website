import {getTranslations} from 'next-intl/server';
import {Mail, Check, ArrowUpLeft} from 'lucide-react';

const techStack = ['TypeScript', 'React', 'Next.js', 'Node.js'];
const codeLineClass =
  'grid grid-cols-[1.8rem_minmax(0,1fr)] max-[580px]:grid-cols-[1.45rem_minmax(0,1fr)]';

export async function ProjectPreview() {
  const t = await getTranslations('Hero.project');

  return (
    <div
      aria-label={t('label')}
      className='relative w-full min-w-0 max-w-128 justify-self-end max-[850px]:max-w-136 max-[850px]:justify-self-center motion-safe:animate-[fade-in_760ms_100ms_cubic-bezier(0.16,1,0.3,1)_both]'
      id='selected-work'
      role='group'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -start-28 -top-28 -z-1 size-96 rounded-full border border-indigo-400/13'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-28 -end-32 -z-1 size-80 rounded-full border border-emerald-400/8'
      />

      <article className='relative z-3 overflow-hidden rounded-[1.15rem] border border-slate-900/20 bg-linear-[145deg,#ffffff,#eef3fb] shadow-[0_36px_90px_rgb(15_23_42_/_14%)] dark:border-white/17 dark:bg-linear-[145deg,rgb(18_28_49_/_96%),rgb(10_16_29_/_96%)] dark:shadow-[0_36px_90px_rgb(0_0_0_/_38%)]'>
        <div className='grid min-h-[3.15rem] grid-cols-[1fr_auto_1fr] items-center border-b border-slate-900/13 bg-slate-900/2 px-4 dark:border-white/10 dark:bg-white/2'>
          <div className='flex gap-1.5' aria-hidden='true'>
            <span className='size-[0.48rem] rounded-full bg-[#e56b6f]' />
            <span className='size-[0.48rem] rounded-full bg-[#e8b65a]' />
            <span className='size-[0.48rem] rounded-full bg-[#4ebd8b]' />
          </div>
          <span className='font-mono text-[0.68rem] text-slate-500' dir='ltr'>
            currently-building.tsx
          </span>
          <span aria-hidden='true' />
        </div>

        <div
          aria-label={t('codeLabel')}
          className='grid min-h-76 content-center gap-[0.55rem] px-[clamp(1rem,4vw,2rem)] py-9 font-mono text-[clamp(0.75rem,1.6vw,0.88rem)] leading-[1.55] text-slate-600 max-[580px]:min-h-68 max-[580px]:px-[0.85rem] max-[580px]:text-[0.68rem] max-[370px]:text-[0.61rem] dark:text-slate-300'
          dir='ltr'
          role='img'>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>01</span>
            <code>
              <span className='text-violet-400'>const</span>{' '}
              <span className='text-blue-400'>developer</span> = {'{'}
            </code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>02</span>
            <code>
              &nbsp;&nbsp;focus:{' '}
              <span className='text-emerald-400'>&quot;useful products&quot;</span>,
            </code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>03</span>
            <code>
              &nbsp;&nbsp;craft:{' '}
              <span className='text-emerald-400'>&quot;pixel-perfect&quot;</span>,
            </code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>04</span>
            <code>
              &nbsp;&nbsp;curious: <span className='text-amber-400'>true</span>,
            </code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>05</span>
            <code>{'}'}</code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>06</span>
            <code>&nbsp;</code>
          </div>
          <div className={codeLineClass}>
            <span className='select-none text-slate-400 dark:text-slate-700'>07</span>
            <code>
              <span className='text-violet-400'>export default</span>{' '}
              <span className='text-blue-400'>developer</span>
            </code>
          </div>
        </div>

        <div className='flex items-center justify-between gap-4 border-t border-slate-900/13 bg-slate-900/2 px-5 py-[1.15rem] max-[580px]:items-end max-[580px]:px-4 dark:border-white/10 dark:bg-white/2'>
          <div className='flex flex-col gap-[0.35rem]'>
            <span className='text-[0.65rem] text-slate-500 dark:text-slate-500'>
              {t('status')}
            </span>
            <strong className='inline-flex items-center gap-[0.45rem] text-[0.8rem] font-semibold text-slate-800 max-[580px]:text-[0.7rem] dark:text-slate-200'>
              <span
                aria-hidden='true'
                className='grid size-[1.1rem] place-items-center rounded-full bg-emerald-400/14 text-emerald-500'>
                <Check aria-hidden='true' className='size-[0.7rem] stroke-[3]' />
              </span>
              {t('shipping')}
            </strong>
          </div>
          <a
            aria-label={t('projectsLinkLabel')}
            className='inline-flex min-h-11 items-center gap-1.5 rounded-[0.6rem] text-[0.75rem] font-semibold text-indigo-500 transition hover:text-slate-950 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 active:scale-[0.98] max-[370px]:text-[0px] dark:text-indigo-300 dark:hover:text-white'
            href='https://github.com/'
            rel='noreferrer'
            target='_blank'>
            {t('projects')}
            <ArrowUpLeft aria-hidden='true' className='size-[0.85rem] stroke-[1.8] max-[370px]:size-4' />
          </a>
        </div>
      </article>

      <div className='absolute -end-8 -top-9 z-5 w-50 rounded-[0.9rem] border border-slate-900/20 bg-white/88 p-4 shadow-[0_1.2rem_3rem_rgb(15_23_42_/_14%)] backdrop-blur-[14px] max-[1100px]:-end-2 max-[580px]:end-[0.65rem] max-[580px]:-top-[2.4rem] max-[580px]:w-43 dark:border-white/17 dark:bg-[#111b30]/88 dark:shadow-[0_1.2rem_3rem_rgb(0_0_0_/_25%)]'>
        <span className='text-[0.65rem] font-semibold text-slate-500 dark:text-slate-500'>
          {t('stack')}
        </span>
        <div aria-label={t('stack')} className='mt-3 flex flex-wrap gap-1.5' dir='ltr' role='list'>
          {techStack.map(tech => (
            <span
              className='rounded-md border border-slate-900/13 bg-slate-900/3 px-2 py-[0.35rem] font-mono text-[0.58rem] text-slate-600 dark:border-white/10 dark:bg-white/3 dark:text-slate-300'
              key={tech}
              role='listitem'>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        aria-label={t('emailLabel')}
        className='absolute -bottom-[3.3rem] -end-6 z-6 grid min-h-[4.6rem] min-w-76 grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[0.95rem] border border-slate-900/20 bg-white/92 px-[0.85rem] py-[0.7rem] text-[0.78rem] font-semibold text-slate-800 shadow-[0_1.2rem_3.5rem_rgb(15_23_42_/_18%)] backdrop-blur-[14px] transition hover:-translate-y-0.5 hover:border-indigo-400/48 hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 active:scale-[0.98] max-[1100px]:-end-1 max-[580px]:-bottom-12 max-[580px]:end-[0.65rem] max-[580px]:min-w-[min(19rem,calc(100%-1.3rem))] max-[580px]:text-[0.7rem] dark:border-white/17 dark:bg-[#0e1728]/92 dark:text-slate-200 dark:shadow-[0_1.2rem_3.5rem_rgb(0_0_0_/_32%)] dark:hover:bg-[#131e35]'>
        <span
          aria-hidden='true'
          className='grid size-[2.8rem] place-items-center rounded-[0.7rem] bg-indigo-500/13 text-indigo-400'>
          <Mail aria-hidden='true' className='size-[1.15rem] stroke-[1.8]' />
        </span>
        <span className='flex flex-col gap-1'>
          <small className='text-[0.62rem] font-medium text-slate-500' dir='rtl'>
            {t('conversation')}
          </small>
          <span dir='ltr'>hello@alexmorgan.dev</span>
        </span>
        <ArrowUpLeft aria-hidden='true' className='size-[0.95rem] stroke-[1.8] text-slate-500' />
      </a>
    </div>
  );
}
