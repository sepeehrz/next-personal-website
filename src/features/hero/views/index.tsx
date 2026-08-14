import {getTranslations} from 'next-intl/server';
import {HeroContent} from '../components/hero-content';
import {ProjectPreview} from '../components/project-preview';

export default async function HeroView() {
  const t = await getTranslations('Hero');

  return (
    <main className='site-shell'>
      <a className='skip-link' href='#hero-content'>
        {t('skipLink')}
      </a>

      <section aria-labelledby='hero-heading' className='hero'>
        <div aria-hidden='true' className='ambient ambient-one' />
        <div aria-hidden='true' className='ambient ambient-two' />
        <div aria-hidden='true' className='grid-texture' />
        <HeroContent />
        <ProjectPreview />
      </section>
    </main>
  );
}
