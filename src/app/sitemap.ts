import type {MetadataRoute} from 'next';
import {siteUrl} from '@/config/site';
import {projects} from '@/features/portfolio/constants/project-catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    {url: `${siteUrl}/`},
    ...projects.map(project => ({url: `${siteUrl}/projects/${project.slug}`}))
  ];
}
