import type {IPortfolioProject} from '@/features/portfolio/types/portfolio-project';

export const projects: readonly IPortfolioProject[] = [
  {
    slug: 'lendroll',
    tone: 'emerald',
    category: 'financialHealth',
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    website: 'https://lendroll.com',
    gallery: [
      {image: 'linear-gradient(135deg, #064e3b, #0f766e)', label: 'dashboard'},
      {
        image: 'linear-gradient(135deg, #115e59, #14b8a6)',
        label: 'salary access'
      },
      {
        image: 'linear-gradient(135deg, #164e63, #0891b2)',
        label: 'financial overview'
      }
    ]
  },
  {
    slug: 'gapfilm',
    tone: 'violet',
    category: 'mediaEntertainment',
    stack: ['Vue 3', 'Nuxt 2', 'JavaScript', 'Vuex', 'PWA'],
    website: 'https://gapfilm.ir',
    gallery: [
      {
        image: 'linear-gradient(135deg, #312e81, #7c3aed)',
        label: 'content home'
      },
      {
        image: 'linear-gradient(135deg, #4c1d95, #c026d3)',
        label: 'movie details'
      },
      {
        image: 'linear-gradient(135deg, #581c87, #e11d48)',
        label: 'search experience'
      }
    ]
  },
  {
    slug: 'cashineh',
    tone: 'amber',
    category: 'ecommerce',
    stack: ['Vue 2', 'Nuxt 2', 'JavaScript', 'Vuetify', 'REST API'],
    website: 'https://cashineh.com',
    gallery: [
      {
        image: 'linear-gradient(135deg, #78350f, #d97706)',
        label: 'store discovery'
      },
      {
        image: 'linear-gradient(135deg, #92400e, #f59e0b)',
        label: 'cashback wallet'
      },
      {
        image: 'linear-gradient(135deg, #7c2d12, #fb923c)',
        label: 'purchase history'
      }
    ]
  },
  {
    slug: 'vrwebdesign',
    tone: 'sky',
    category: 'digitalProducts',
    stack: ['Vue 2', 'TypeScript', 'Webpack', 'Vue Router', 'Jira'],
    website: 'https://vrwebdesign.ir',
    gallery: [
      {
        image: 'linear-gradient(135deg, #0c4a6e, #0284c7)',
        label: 'project overview'
      },
      {
        image: 'linear-gradient(135deg, #075985, #38bdf8)',
        label: 'organization portal'
      },
      {
        image: 'linear-gradient(135deg, #164e63, #67e8f9)',
        label: 'responsive layout'
      }
    ]
  },
  {
    slug: 'freelance',
    tone: 'rose',
    category: 'independentWork',
    stack: ['React', 'Next.js', 'Node.js', 'AdonisJS', 'MySQL'],
    gallery: [
      {
        image: 'linear-gradient(135deg, #881337, #e11d48)',
        label: 'landing page'
      },
      {
        image: 'linear-gradient(135deg, #9f1239, #fb7185)',
        label: 'custom dashboard'
      },
      {
        image: 'linear-gradient(135deg, #7f1d1d, #f43f5e)',
        label: 'mobile experience'
      }
    ]
  }
];
