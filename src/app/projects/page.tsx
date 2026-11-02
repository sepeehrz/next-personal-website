import type {Metadata} from 'next';
import PortfolioView from '@/features/portfolio/views/portfolio-view';

export const metadata: Metadata = {robots: {index: false, follow: true}};

export default function ProjectsPage() {
  return <PortfolioView />;
}
