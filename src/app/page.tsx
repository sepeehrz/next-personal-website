import HeroView from '@/features/hero/views';
import CareerView from '@/features/career/views';
import SkillsView from '@/features/skills/views';
import AboutMeView from '@/features/about-me/views';
import PortfolioView from '@/features/portfolio/views';
import ContactMeView from '@/features/contact-me/views';

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
