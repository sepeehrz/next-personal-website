import type {ISkillGroup} from '@/features/skills/types/skill-group';

export const skillGroups = [
  {
    key: 'frontend',
    skills: [
      'HTML / HTML5',
      'CSS / CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js'
    ]
  },
  {
    key: 'uiTooling',
    skills: [
      'shadcn',
      'MUI',
      'Vuetify',
      'PrimeReact',
      'PrimeVue',
      'Vite',
      'PWA',
      'Ionic'
    ]
  },
  {
    key: 'stateQuality',
    skills: [
      'Redux / Redux toolkit',
      ' Zustand',
      'Vuex / Pinia',
      'Webpack / Rollup',
      'Git / Gitflow',
      'Unit Test'
    ]
  },
  {
    key: 'workflow',
    skills: [
      'Jira / Trello / Azure',
      'Scrum',
      'XD / Figma',
      'Docker',
      'CI / CD'
    ]
  },
  {
    key: 'platformBackend',
    skills: [
      'Node.js',
      'Nestjs',
      'AdonisJS',
      'Postman',
      'MySQL',
      'Socket.io',
      'Postgres'
    ]
  }
] as const satisfies readonly ISkillGroup[];
