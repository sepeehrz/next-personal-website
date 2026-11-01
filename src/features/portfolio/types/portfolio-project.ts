export interface IPortfolioProject {
  title: string;
  details: string;
  slug: string;
  link?: string;
  images?: readonly string[];
  tags: readonly string[];
  stacks: readonly {name: string; icon: string}[];
  withPreview: boolean;
  withSlider: boolean;
}
