import {
  webdevelopment,
  automations,
  users,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  frontegg,
  wordpress,
  divi,
  postman,
  vercel,
  openai,
  cherrypickers,
  articgin,
  itsanet,
  gericht,
  icbc,
  dtt,
  sup,
  gaetano,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Development',
    icon: webdevelopment,
  },
  {
    title: 'Automations',
    icon: automations,
  },
  {
    title: 'User Management',
    icon: users,
  },
  {
    title: 'API Creation & Integrations',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  }, {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'frontegg',
    icon: frontegg,
  },
  {
    name: 'divi',
    icon: divi,
  },
  {
    name: 'wordpress',
    icon: wordpress,
  },
  {
    name: 'vercel',
    icon: vercel,
  },
  {
    name: 'openai',
    icon: openai,
  },

];

const experiences = [
  {
    title: 'Greeter',
    company_name: 'ICBC bank',
    icon: icbc,
    iconBg: '#333333',
    date: 'Feb 2019 - Oct 2019',
  },
  {
    title: 'Automation Consultant',
    company_name: 'Deloitte',
    icon: dtt,
    iconBg: '#333333',
    date: 'Apr 2022 - Apr 2024',
  },
  {
    title: 'User Management Consultant',
    company_name: 'SUP',
    icon: sup,
    iconBg: '#333333',
    date: 'Apr 2024 - Present',
  },
  {
    title: 'Web Developer',
    company_name: 'Freelance',
    icon: gaetano,
    iconBg: '#333333',
    date: 'Dic 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Itsanet',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: itsanet,
    demo: 'https://staging-51b3-contactos5d2219e63c.wpcomstaging.com/',
  },
  {
    id: 'project-2',
    name: 'Artic',
    description:
      'Site for a local business that sells handcrafted dry gin.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: articgin,
    repo: 'https://github.com/gaetanof/articGin',
    demo: 'https://www.artictv.com/',
  },

  {
    id: 'project-3',
    name: 'CherryPickers',
    description: 'A real estate company website aimed at attracting clients. Its primary goal is to receive a form with a brief description of properties.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cherrypickers,
    repo: 'https://github.com/gaetanof/cherryPickers',
    demo: 'https://www.cherrypickershome.com/',
  },
  {
    id: 'project-5',
    name: 'Gericht Resto',
    description:
      'Website mockup for a restaurant as a practice project.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gericht,
    repo: 'https://github.com/gaetanof/gericht-resto',
    demo: 'https://www.gerichtrestaurant.site/',
  },
];

export { services, technologies, experiences, projects };
