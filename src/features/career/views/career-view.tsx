import {getTranslations} from 'next-intl/server';
import {
  Building2,
  CalendarRange,
  GraduationCap,
  BriefcaseBusiness
} from 'lucide-react';

export default async function CareerView() {
  const t = await getTranslations('Career');
  const education = [
    {
      description: t('education.bachelor.description'),
      degree: t('education.bachelor.degree'),
      institution: t('education.bachelor.institution'),
      period: t('education.bachelor.period')
    },
    {
      description: t('education.associate.description'),
      degree: t('education.associate.degree'),
      institution: t('education.associate.institution'),
      period: t('education.associate.period')
    }
  ];
  const experience = [
    'kianPardazHooshmand',
    'lendroll',
    'gapfilm',
    'vrwebdesign',
    'cashineh',
    'freelancer'
  ].map(key => ({
    company: t(`experience.${key}.company`),
    description: t(`experience.${key}.description`),
    period: t(`experience.${key}.period`),
    role: t(`experience.${key}.role`)
  }));

  return (
    <section
      aria-labelledby='career-heading'
      className='bg-slate-50 py-20 text-slate-900 sm:py-28 dark:bg-[#080d19] dark:text-slate-50'
      id='career'>
      <div className='mx-auto w-[calc(100%-2rem)] max-w-304 max-[850px]:w-[calc(100%-2.5rem)] max-[580px]:w-[calc(100%-2rem)]'>
        <div className='max-w-160'>
          <div className='inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300'>
            <BriefcaseBusiness aria-hidden='true' className='size-4 stroke-[2]' />
            {t('eyebrow')}
          </div>
          <h2
            className='mt-6 text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]'
            id='career-heading'>
            {t('title')}
          </h2>
          <p className='mt-5 max-w-130 text-base leading-8 text-slate-600 dark:text-slate-400'>
            {t('description')}
          </p>
        </div>

        <div className='mt-14 grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='grid size-11 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'>
                <GraduationCap aria-hidden='true' className='size-5 stroke-[1.8]' />
              </span>
              <div>
                <p className='text-xs font-bold tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                  {t('educationEyebrow')}
                </p>
                <h3 className='mt-0.5 text-xl font-bold'>{t('educationTitle')}</h3>
              </div>
            </div>

            <div className='mt-7 grid gap-4'>
              {education.map(item => (
                <article
                  className='rounded-2xl border border-slate-900/13 bg-white p-6 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] dark:border-white/10 dark:bg-white/3'
                  key={item.degree}>
                  <div className='flex items-start justify-between gap-4'>
                    <h4 className='text-lg font-bold tracking-[-0.02em]'>{item.degree}</h4>
                    <span className='shrink-0 rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300'>
                      {item.period}
                    </span>
                  </div>
                  <p className='mt-2 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300'>
                    <Building2 aria-hidden='true' className='size-4 shrink-0 text-indigo-600 dark:text-indigo-300' />
                    {item.institution}
                  </p>
                  <p className='mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400'>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className='flex items-center gap-3'>
              <span className='grid size-11 place-items-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'>
                <BriefcaseBusiness aria-hidden='true' className='size-5 stroke-[1.8]' />
              </span>
              <div>
                <p className='text-xs font-bold tracking-[0.08em] text-slate-500 dark:text-slate-400'>
                  {t('experienceEyebrow')}
                </p>
                <h3 className='mt-0.5 text-xl font-bold'>{t('experienceTitle')}</h3>
              </div>
            </div>

            <ol className='relative mt-8 grid gap-7 border-s border-slate-900/13 ps-8 dark:border-white/10'>
              {experience.map((item, index) => (
                <li className='relative' key={`${item.company}-${item.period}`}>
                  <span
                    aria-hidden='true'
                    className={`absolute -start-[2.55rem] top-1.5 grid size-5 place-items-center rounded-full border-4 border-slate-50 dark:border-[#080d19] ${
                      index === 0 ? 'bg-emerald-500' : 'bg-indigo-500'
                    }`}
                  />
                  <article className='rounded-2xl border border-slate-900/13 bg-white p-5 shadow-[0_0.75rem_2rem_rgb(15_23_42_/_7%)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_1.25rem_2.5rem_rgb(15_23_42_/_12%)] dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/5'>
                    <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-start'>
                      <div>
                        <h4 className='text-lg font-bold tracking-[-0.02em]'>{item.role}</h4>
                        <p className='mt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300'>{item.company}</p>
                      </div>
                      <span className='inline-flex w-fit items-center gap-1.5 rounded-lg bg-slate-900/4 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-white/6 dark:text-slate-300'>
                        <CalendarRange aria-hidden='true' className='size-3.5 stroke-[1.8]' />
                        {item.period}
                      </span>
                    </div>
                    <p className='mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400'>{item.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
