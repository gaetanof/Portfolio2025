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
  articgin,
  itsanet,
  medicina,
  m2carpentry,
  datagate,
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
      en: "Corporate site for an international logistics company, built to look as global as they operate.",
      es: "Sitio corporativo para una empresa de logística internacional, pensado para verse tan global como opera."
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
    demo: 'https://itsanet.com/',
  },
  {
    id: 'project-2',
    name: 'Artic',
    description: {
      en: "Brand site for a handcrafted dry gin. Small local label, bold online presence.",
      es: "Sitio de marca para un gin artesanal. Etiqueta local, presencia online con carácter."
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
    name: 'Medicina Reumatológica',
    description: {
      en: "Multilingual site for a medical center specialized in rheumatology and clinical research.",
      es: "Sitio multilingüe para un centro médico especializado en reumatología e investigación clínica."
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
        name: 'multi-idioma',
        color: 'pink-text-gradient',
      },
    ],
    image: medicina,
    demo: 'https://medicinareumatologica.com/',
  },
  {
    id: 'project-4',
    name: 'M2 Carpentry',
    description: {
      en: "Site for a high-end residential and commercial carpentry company based in Sydney.",
      es: "Sitio para una empresa de carpintería residencial y comercial de alta gama en Sydney."
    },
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'design',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: m2carpentry,
    demo: 'https://m2carpentry.com.au/',
  },
  {
    id: 'project-5',
    name: 'DataGate',
    description: {
      en: "A data-interface validation service written in Go. Upload a CSV, choose data-quality rules (required, unique, email, numeric), and it returns a report plus clean and to-fix files. Personal project, still in development (not a production service). It runs on a free tier, so the first load can take a few seconds to wake up.",
      es: "Servicio de validación de interfaces de datos escrito en Go. Subís un CSV, elegís reglas de calidad (requerido, único, email, numérico) y devuelve un reporte más los archivos limpio y para corregir. Proyecto personal, todavía en desarrollo (no es un servicio productivo). Corre en un plan gratuito, así que la primera carga puede tardar unos segundos en despertar."
    },
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'pink-text-gradient',
      },
    ],
    image: datagate,
    repo: 'https://github.com/gaetanof/datagate',
    demo: 'https://datagate-jixq.onrender.com/',
  },
];


export { services, technologies, experiences, projects };
