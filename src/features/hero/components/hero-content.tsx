import {getTranslations} from 'next-intl/server';
import {Braces, MapPin, ArrowUpLeft} from 'lucide-react';

export async function HeroContent() {
  const t = await getTranslations('Hero');
  const stats = [
    {label: t('stats.experience.label'), value: t('stats.experience.value')},
    {label: t('stats.projects.label'), value: t('stats.projects.value')},
    {label: t('stats.score.label'), value: t('stats.score.value')}
  ];

  return (
    <div className='hero-copy' id='hero-content'>
      <div className='eyebrow'>
        <span aria-hidden='true' className='eyebrow-icon'>
          <Braces />
        </span>
        {t('eyebrow')}
      </div>

      <h1 id='hero-heading'>
        {t('title')}
        <span>{t('titleAccent')}</span>
      </h1>

      <p className='hero-description'>{t('description')}</p>

      <div className='hero-actions'>
        <a className='button button-primary' href='mailto:hello@alexmorgan.dev'>
          {t('primaryAction')}
          <ArrowUpLeft aria-hidden='true' />
        </a>
        <a className='button button-secondary' href='#selected-work'>
          {t('secondaryAction')}
        </a>
      </div>

      <div className='location'>
        <MapPin aria-hidden='true' />
        {t('location')}
      </div>

      <dl aria-label={t('stats.label')} className='stats'>
        {stats.map(stat => (
          <div className='stat' key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
