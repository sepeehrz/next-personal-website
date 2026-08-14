import {getTranslations} from 'next-intl/server';
import {HeroContent} from '../components/hero-content';
import {ProjectPreview} from '../components/project-preview';

export default async function HeroView() {
  const t = await getTranslations('Hero');

  return (
    <main className='relative isolate min-h-dvh overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#080d19] dark:text-slate-50'>
      <a
        className='fixed start-3 top-3 z-100 -translate-y-[150%] rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition focus:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:bg-slate-50 dark:text-slate-950'
        href='#hero-content'>
        {t('skipLink')}
      </a>

      <section className='relative z-1 mx-auto grid min-h-[calc(100dvh-5.5rem)] w-[calc(100%-2rem)] max-w-304 grid-cols-[minmax(0,1.02fr)_minmax(25rem,0.98fr)] items-center gap-[clamp(3rem,7vw,7.5rem)] py-[clamp(4.5rem,8vh,7rem)] max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(22rem,0.85fr)] max-[1100px]:gap-14 max-[850px]:w-[calc(100%-2.5rem)] max-[850px]:grid-cols-1 max-[850px]:gap-24 max-[850px]:py-[4.5rem_7.5rem] max-[580px]:min-h-[calc(100dvh-4.75rem)] max-[580px]:w-[calc(100%-2rem)] max-[580px]:gap-19 max-[580px]:pt-14'>
        <div
          aria-hidden='true'
          className='pointer-events-none fixed inset-0 -z-3 bg-[linear-gradient(rgb(30_41_59_/_5%)_1px,transparent_1px),linear-gradient(90deg,rgb(30_41_59_/_5%)_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_88%)] dark:bg-[linear-gradient(rgb(255_255_255_/_2.5%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_2.5%)_1px,transparent_1px)]'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute end-[3%] top-[18%] -z-2 size-96 rounded-full bg-[radial-gradient(circle,rgb(66_101_239_/_15%),transparent_67%)] blur-[1px]'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute bottom-[3%] start-[-16%] -z-2 size-88 rounded-full bg-[radial-gradient(circle,rgb(54_211_153_/_7%),transparent_68%)] blur-[1px]'
        />
        <HeroContent />
        <ProjectPreview />
      </section>
    </main>
  );
}
