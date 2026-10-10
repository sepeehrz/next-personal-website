import HeroView from '@/features/hero/views/hero-view';
import CareerView from '@/features/career/views/career-view';
import SkillsView from '@/features/skills/views/skills-view';
import AboutMeView from '@/features/about-me/views/about-me-view';
import PortfolioView from '@/features/portfolio/views/portfolio-view';
import ContactMeView from '@/features/contact-me/views/contact-me-view';

export default function HomePage() {
  return (
    <>
      <HeroView />
      <SkillsView />
      <AboutMeView />
      <CareerView />
      <PortfolioView />
      <ContactMeView />
    </>
  );
}
