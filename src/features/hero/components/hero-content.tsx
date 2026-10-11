import {getTranslations} from 'next-intl/server';
import {Braces, ArrowUpLeft} from 'lucide-react';

export async function HeroContent() {
  const t = await getTranslations('Hero');

  return (
    <div
      className='relative z-2 max-[850px]:max-w-152 motion-safe:animate-[fade-in_650ms_cubic-bezier(0.16,1,0.3,1)_both]'
      id='hero-content'>
      <div className='mb-7 inline-flex items-center gap-2.5 text-[0.73rem] font-bold text-slate-600 max-[580px]:mb-[1.4rem] max-[580px]:text-[0.65rem] dark:text-slate-300'>
        <span
          aria-hidden='true'
          className='grid size-8 place-items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 text-indigo-400'>
          <Braces aria-hidden='true' className='size-[0.95rem] stroke-[1.8]' />
        </span>
        {t('eyebrow')}
      </div>

      <h1
        className='m-0 max-w-[13ch] text-[clamp(3rem,5.8vw,5.45rem)] font-semibold leading-[1.18] tracking-[-0.04em] max-[850px]:max-w-[11ch] max-[580px]:text-[clamp(2.75rem,14vw,4rem)]'
        id='hero-heading'>
        {t('title')}
        <span className='bg-linear-[105deg,#86a0ff_10%,#597cf5_52%,#61ddb1_105%] bg-clip-text text-transparent'>
          {t('titleAccent')}
        </span>
      </h1>

      <p className='mt-7 max-w-148 text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.7] text-slate-600 max-[580px]:mt-[1.4rem] max-[580px]:text-base dark:text-slate-400'>
        {t('description')}
      </p>

      <div className='mt-9 flex flex-wrap gap-3 max-[580px]:mt-7 max-[580px]:grid max-[580px]:grid-cols-1'>
        <a
          className='inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border border-transparent bg-indigo-600 px-5 py-3 text-[0.9rem] font-bold text-white shadow-[0_0.75rem_2.5rem_rgb(66_101_239/22%)] transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-[0_0.9rem_3rem_rgb(66_101_239/32%)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 active:scale-[0.98]'
          href='mailto:sepeehrz@gmail.com'>
          {t('primaryAction')}
          <ArrowUpLeft
            aria-hidden='true'
            className='size-[1.15rem] stroke-[1.8]'
          />
        </a>
        <a
          className='inline-flex min-h-13 items-center justify-center rounded-xl border border-slate-900/20 bg-white/72 px-5 py-3 text-[0.9rem] font-bold text-slate-700 transition hover:border-slate-900/27 hover:bg-slate-900/7 hover:text-slate-950 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:border-white/17 dark:bg-white/3 dark:text-slate-200 dark:hover:border-white/27 dark:hover:bg-white/7 dark:hover:text-white'
          href='#selected-work'>
          {t('secondaryAction')}
        </a>
      </div>
    </div>
  );
}
