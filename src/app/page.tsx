import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import {siteUrl} from '@/config/site';
import HeroView from '@/features/hero/views/hero-view';
import CareerView from '@/features/career/views/career-view';
import SkillsView from '@/features/skills/views/skills-view';
import AboutMeView from '@/features/about-me/views/about-me-view';
import PortfolioView from '@/features/portfolio/views/portfolio-view';
import ContactMeView from '@/features/contact-me/views/contact-me-view';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title =
    locale === 'fa'
      ? 'سپهر ضرغامی | مهندس نرم‌افزار'
      : 'Sepehr Zarghami | Software Engineer';
  const description =
    locale === 'fa'
      ? 'سپهر ضرغامی، مهندس نرم‌افزار؛ نمونه‌کارها، تجربه‌ها و راه‌های ارتباطی.'
      : 'Sepehr Zarghami is a software engineer building fast, accessible digital products. Explore projects and experience.';

  return {
    title: {absolute: title},
    description,
    ...(siteUrl ? {alternates: {canonical: '/'}} : {}),
    openGraph: {
      title,
      description,
      type: 'website',
      ...(siteUrl ? {url: '/'} : {})
    },
    twitter: {card: 'summary', title, description}
  };
}

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
