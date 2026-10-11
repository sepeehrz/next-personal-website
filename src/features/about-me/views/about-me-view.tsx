import {getTranslations} from 'next-intl/server';
import {
  Mail,
  Code2,
  Phone,
  ArrowUpLeft,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  BriefcaseBusiness
} from 'lucide-react';

const technologies = [
  'React.js',
  'Next.js',
  'Vue.js',
  'Nuxt.js',
  'TypeScript',
  'JavaScript',
  'Node.js'
];

export default async function AboutMeView() {
  const t = await getTranslations('AboutMe');
  const details = [
    {
      icon: CalendarDays,
      label: t('details.birthday.label'),
      value: t('details.birthday.value')
    },
    {
      icon: GraduationCap,
      label: t('details.degree.label'),
      value: t('details.degree.value')
    },
    {
      icon: BriefcaseBusiness,
      label: t('details.experience.label'),
      value: t('details.experience.value')
    }
  ];

  return (
    <section
      aria-labelledby='about-me-heading'
      className='relative overflow-hidden border-t border-slate-900/13 bg-slate-100 py-20 text-slate-900 sm:py-24 dark:border-white/10 dark:bg-[#0b1120] dark:text-slate-50'
      id='about-me'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -inset-e-64 top-0 size-144 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/12'
      />
      <div className='relative mx-auto grid w-[calc(100%-2rem)] max-w-304 gap-12 max-[850px]:w-[calc(100%-2.5rem)] lg:grid-cols-[minmax(0,0.88fr)_minmax(28rem,1.12fr)] lg:gap-16 max-[580px]:w-[calc(100%-2rem)]'>
        <div className='flex flex-col justify-between py-2'>
          <div>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300'>
              <Code2 aria-hidden='true' className='size-4 stroke-2' />
              {t('eyebrow')}
            </div>
            <h2
              className='max-w-[12ch] text-[clamp(2.75rem,5vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]'
              id='about-me-heading'>
              {t('title')}
            </h2>
            <p className='mt-7 max-w-140 text-base leading-8 text-slate-600 dark:text-slate-400'>
              {t('description')}
            </p>
          </div>

          <div className='mt-10'>
            <p className='text-xs font-bold tracking-[0.08em] text-slate-500 dark:text-slate-400'>
              {t('specialization')}
            </p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {technologies.map(technology => (
                <span
                  className='rounded-lg border border-slate-900/13 bg-white/70 px-3 py-2 font-mono text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/4 dark:text-slate-300'
                  key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <article className='relative overflow-hidden rounded-3xl border border-slate-900/13 bg-white p-6 text-slate-900 shadow-[0_1.5rem_4rem_rgb(15_23_42_/_10%)] sm:col-span-2 sm:p-8 dark:border-white/10 dark:bg-[#111827] dark:text-slate-50 dark:shadow-black/20'>
            <div
              aria-hidden='true'
              className='absolute -inset-e-16 -top-16 size-52 rounded-full bg-indigo-500/25 blur-2xl'
            />
            <div className='relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
              <div>
                <span className='grid size-14 place-items-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-500 text-lg font-extrabold text-white shadow-lg shadow-indigo-500/30'>
                  SZ
                </span>
                <h3 className='mt-5 text-2xl font-bold tracking-[-0.03em]'>
                  {t('name')}
                </h3>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>{t('role')}</p>
              </div>
              <div className='rounded-2xl border border-slate-900/10 bg-slate-100 px-5 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/6'>
                <span className='block text-xs text-slate-500 dark:text-slate-400'>
                  {t('highlightLabel')}
                </span>
                <strong className='mt-1 block text-3xl font-semibold tracking-[-0.04em] text-emerald-600 dark:text-emerald-400'>
                  {t('details.experience.value')}
                </strong>
              </div>
            </div>
          </article>

          {details.map(({icon: Icon, label, value}) => (
            <dl
              className='rounded-2xl border border-slate-900/13 bg-white/75 p-5 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] dark:border-white/10 dark:bg-white/3'
              key={label}>
              <dt className='flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400'>
                <span className='grid size-8 place-items-center rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'>
                  <Icon aria-hidden='true' className='size-4 stroke-[1.8]' />
                </span>
                {label}
              </dt>
              <dd className='mt-4 text-base font-semibold text-slate-800 dark:text-slate-100'>
                {value}
              </dd>
            </dl>
          ))}

          <article className='rounded-2xl border border-emerald-500/20 bg-emerald-500/7 p-5 dark:bg-emerald-400/6'>
            <div className='flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-300'>
              <CheckCircle2 aria-hidden='true' className='size-5 stroke-[2]' />
              {t('availability')}
            </div>
            <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400'>
              {t('availabilityDescription')}
            </p>
          </article>

          <article className='rounded-2xl border border-slate-900/13 bg-white/75 p-5 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] sm:col-span-2 dark:border-white/10 dark:bg-[#111827]'>
            <h3 className='text-sm font-bold text-slate-800 dark:text-slate-100'>
              {t('contactLabel')}
            </h3>
            <div className='mt-4 grid gap-3 sm:grid-cols-2'>
              <a
                className='group flex min-h-14 items-center gap-3 rounded-xl border border-slate-900/10 bg-slate-100 px-4 text-slate-900 transition hover:bg-slate-200 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 active:scale-[0.98] dark:border-white/10 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900'
                href='mailto:sepeehrz@gmail.com'>
                <Mail
                  aria-hidden='true'
                  className='size-5 shrink-0 stroke-[1.8]'
                />
                <span className='min-w-0'>
                  <span className='block text-xs opacity-65'>
                    {t('contact.emailLabel')}
                  </span>
                  <span
                    className='block truncate text-sm font-semibold'
                    dir='ltr'>
                    sepeehrz@gmail.com
                  </span>
                </span>
                <ArrowUpLeft
                  aria-hidden='true'
                  className='ms-auto size-4 shrink-0 opacity-70'
                />
              </a>
              <a
                className='group flex min-h-14 items-center gap-3 rounded-xl border border-slate-900/13 bg-white px-4 text-slate-800 transition hover:border-indigo-500/45 hover:bg-indigo-500/5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 active:scale-[0.98] dark:border-white/10 dark:bg-white/4 dark:text-slate-100 dark:hover:bg-indigo-500/10'
                href='tel:+989373389140'>
                <Phone
                  aria-hidden='true'
                  className='size-5 shrink-0 stroke-[1.8] text-indigo-700 dark:text-indigo-300'
                />
                <span className='min-w-0'>
                  <span className='block text-xs text-slate-500 dark:text-slate-400'>
                    {t('contact.mobileLabel')}
                  </span>
                  <span className='block text-sm font-semibold' dir='ltr'>
                    +98 937 338 9140
                  </span>
                </span>
                <ArrowUpLeft
                  aria-hidden='true'
                  className='ms-auto size-4 shrink-0 text-slate-400'
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
