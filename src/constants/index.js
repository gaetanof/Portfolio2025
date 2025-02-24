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
  gaetano
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
    title: { en: 'Web Development', es: 'Desarrollo Web' },
    icon: webdevelopment,
  },
  {
    title: { en: 'Automations', es: 'Automatizaciones' },
    icon: automations,
  },
  {
    title: { en: 'User Management', es: 'Gestión de Usuarios' },
    icon: users,
  },
  {
    title: { en: 'API Creation & Integrations', es: 'Creación de API e Integraciones' },
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
    title: {
      en: 'Greeter',
      es: 'Greeter'
    },
    company_name: {
      en: 'ICBC bank',
      es: 'Banco ICBC'
    },
    icon: icbc,
    iconBg: '#333333',
    date: {
      en: 'Feb 2019 - Oct 2019',
      es: 'Feb 2019 - Oct 2019'
    },
  },
  {
    title: {
      en: 'Data Analyst',
      es: 'Analista de Datos'
    },
    company_name: {
      en: 'Deloitte',
      es: 'Deloitte'
    },
    icon: dtt,
    iconBg: '#333333',
    date: {
      en: 'Apr 2022 - Apr 2024',
      es: 'Abr 2022 - Abr 2024'
    },
  },
  {
    title: {
      en: 'Product Expert',
      es: 'Product Expert'
    },
    company_name: {
      en: 'SUP',
      es: 'SUP'
    },
    icon: sup,
    iconBg: '#333333',
    date: {
      en: 'Apr 2024 - Present',
      es: 'Abr 2024 - Presente'
    },
  },
  {
    title: {
      en: 'Web Developer',
      es: 'Desarrollador Web'
    },
    company_name: {
      en: 'Freelance',
      es: 'Freelance'
    },
    icon: gaetano,
    iconBg: '#333333',
    date: {
      en: 'Dec 2023 - Present',
      es: 'Dic 2023 - Presente'
    },
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Itsanet',
    description: {
      en: "Website for international logistics company.",
      es: "Sitio para empresa de logística internacional."
    },
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'divi',
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
    description: {
      en: "Site for a local business that sells handcrafted dry gin.",
      es: "Sitio para un negocio local que vende gin artesanal."
    },
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
    description: {
      en: "A real estate company website aimed at attracting clients. Its primary goal is to receive a form with a brief description of properties.",
      es: "Sitio web para una empresa inmobiliaria orientada a atraer clientes. Su objetivo principal es recibir un formulario con una breve descripción de propiedades."
    },
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
    description: {
      en: "Website mockup for a restaurant as a practice project.",
      es: "Maqueta de sitio web para un restaurante como proyecto de práctica."
    },
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
