export interface IPortfolioProjectGalleryItem {
  image: string;
  label: string;
}

export interface IPortfolioProject {
  category: string;
  gallery: readonly IPortfolioProjectGalleryItem[];
  slug: string;
  stack: readonly string[];
  tone: string;
  website: string;
}