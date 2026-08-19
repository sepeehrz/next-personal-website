import {getTranslations} from 'next-intl/server';
import {ContactForm} from '../components/contact-form';
import {Mail, Sparkles, MessageCircleMore} from 'lucide-react';

export default async function ContactMeView() {
  const t = await getTranslations('ContactMe');

  return (
    <section
      aria-labelledby='contact-me-heading'
      className='relative overflow-hidden border-t border-slate-900/13 bg-slate-100 py-20 text-slate-900 sm:py-28 dark:border-white/10 dark:bg-[#0b1120] dark:text-slate-50'
      id='contact-me'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -start-32 bottom-0 size-128 rounded-full bg-emerald-500/10 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -end-32 top-0 size-128 rounded-full bg-indigo-500/12 blur-3xl'
      />
      <div className='relative mx-auto grid w-[calc(100%-2rem)] max-w-304 gap-12 max-[850px]:w-[calc(100%-2.5rem)] lg:grid-cols-[minmax(0,0.82fr)_minmax(30rem,1.18fr)] lg:gap-16 max-[580px]:w-[calc(100%-2rem)]'>
        <div className='flex flex-col justify-between py-2'>
          <div>
            <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300'>
              <MessageCircleMore aria-hidden='true' className='size-4 stroke-[2]' />
              {t('eyebrow')}
            </div>
            <h2
              className='mt-6 max-w-[12ch] text-[clamp(2.75rem,5vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]'
              id='contact-me-heading'>
              {t('title')}
            </h2>
            <p className='mt-6 max-w-126 text-base leading-8 text-slate-600 dark:text-slate-400'>{t('description')}</p>
          </div>

          <div className='mt-10 rounded-2xl border border-slate-900/13 bg-white/65 p-5 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] dark:border-white/10 dark:bg-white/3'>
            <div className='flex items-center gap-3'>
              <span className='grid size-10 place-items-center rounded-xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'>
                <Mail aria-hidden='true' className='size-5 stroke-[1.8]' />
              </span>
              <div>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{t('directEmailLabel')}</p>
                <a
                  className='mt-0.5 inline-block text-sm font-bold text-slate-800 underline decoration-indigo-500/40 underline-offset-4 transition hover:text-indigo-700 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 dark:text-slate-100 dark:hover:text-indigo-300'
                  dir='ltr'
                  href='mailto:sepeehrz@gmail.com'>
                  sepeehrz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-900/13 bg-white/85 p-6 shadow-[0_1.5rem_4rem_rgb(15_23_42_/_12%)] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/4 dark:shadow-[0_1.5rem_4rem_rgb(0_0_0_/_20%)]'>
          <div className='mb-7 flex items-start justify-between gap-5 border-b border-slate-900/10 pb-6 dark:border-white/10'>
            <div>
              <h3 className='text-xl font-bold tracking-[-0.02em]'>{t('form.title')}</h3>
              <p className='mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400'>{t('form.description')}</p>
            </div>
            <span className='grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'>
              <Sparkles aria-hidden='true' className='size-5 stroke-[1.8]' />
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
