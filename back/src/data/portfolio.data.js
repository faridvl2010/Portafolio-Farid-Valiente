const profile = {
  name: 'Farid Alexander Valiente Valbuena',
  title: 'Ingeniero de Sistemas & Computación',
  subtitle: 'Desarrollador Fullstack Senior | 5 años de experiencia',
  email: 'faridvl2010@gmail.com',
  phone: '(57) 3023662207',
  location: 'Bogotá D.C., Colombia',
  github: 'https://github.com/faridvl2010',
  linkedin: 'https://linkedin.com/in/farid-valiente',
  bio: [
    'Ingeniero de Sistemas con más de 5 años de experiencia en desarrollo fullstack. Especializado en backend con Java, Spring Boot, .NET C# y Node.js, y frontend con Angular y React.',
    'Experto en integración de APIs REST y SOAP, gestión de bases de datos relacionales (MySQL, PostgreSQL, SQL Server) y despliegue en AWS y Azure.',
    'Apasionado por la arquitectura hexagonal, microservicios y aseguramiento de calidad. Reconocido por entregar soluciones escalables con impacto directo en la productividad del negocio.'
  ],
  stats: [
    { label: 'Años de Experiencia', value: '5+' },
    { label: 'Empresas',            value: '4'  },
    { label: 'Tecnologías',         value: '20+' },
    { label: 'Proyectos',           value: '15+' }
  ]
};

const skills = [
  {
    category: 'Lenguajes',
    icon: '{ }',
    items: [
      { name: 'Java',       level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'C#',         level: 80 },
      { name: 'Python',     level: 72 },
      { name: 'PHP',        level: 75 }
    ]
  },
  {
    category: 'Backend',
    icon: '[  ]',
    items: [
      { name: 'Node.js',      level: 92 },
      { name: 'Spring Boot',  level: 88 },
      { name: 'NestJS',       level: 82 },
      { name: 'ASP.NET Core', level: 80 },
      { name: 'Laravel',      level: 78 }
    ]
  },
  {
    category: 'Frontend',
    icon: '</> ',
    items: [
      { name: 'Angular',       level: 92 },
      { name: 'React',         level: 78 },
      { name: 'HTML5 / CSS3',  level: 90 },
      { name: 'SASS / SCSS',   level: 85 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: '>>>',
    items: [
      { name: 'AWS (EC2, RDS, S3)', level: 84 },
      { name: 'Azure Functions',    level: 72 },
      { name: 'Git / GitHub CI/CD', level: 92 },
      { name: 'Docker / Kubernetes',level: 75 },
      { name: 'Linux',              level: 80 }
    ]
  },
  {
    category: 'Bases de Datos',
    icon: '///',
    items: [
      { name: 'MySQL / PostgreSQL', level: 88 },
      { name: 'SQL Server',         level: 80 },
      { name: 'Oracle DB / PL-SQL', level: 70 },
      { name: 'Prisma / Hibernate', level: 82 }
    ]
  },
  {
    category: 'Testing & QA',
    icon: '✓',
    items: [
      { name: 'Cypress',    level: 85 },
      { name: 'Playwright', level: 82 },
      { name: 'SonarQube',  level: 80 },
      { name: 'JUnit / xUnit', level: 78 },
      { name: 'Selenium',   level: 70 }
    ]
  }
];

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Contenido',
    description: 'Desarrollo completo de un CMS empresarial con backend en .NET Core/C# y frontend en Angular. Arquitectura escalable con patrones de diseño aplicados, pruebas de funcionalidad y despliegue en AWS con base de datos MySQL.',
    image: null,
    tech: ['.NET Core', 'C#', 'Angular', 'MySQL', 'AWS'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Completado',
    year: 2023
  },
  {
    id: 2,
    title: 'Plataforma E-Learning & QA Automation',
    description: 'Desarrollo de aplicaciones web educativas bajo arquitectura hexagonal con Node.js y Angular. Implementación de suite completa de pruebas automatizadas E2E con Cypress y Playwright, análisis de calidad con SonarQube.',
    image: null,
    tech: ['Node.js', 'Angular', 'Cypress', 'Playwright', 'SonarQube', 'MySQL'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Completado',
    year: 2024
  },
  {
    id: 3,
    title: 'Integración ERP NetSuite',
    description: 'Integración de sistemas internos con ERP NetSuite mediante SuiteScript para sincronización de datos. Backend con Laravel/PHP y Node.js, frontend Angular con principios SOLID y Clean Architecture, desplegado en AWS.',
    image: null,
    tech: ['Laravel', 'Node.js', 'Angular', 'PostgreSQL', 'AWS', 'ERP NetSuite'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Activo',
    year: 2025
  },
  {
    id: 4,
    title: 'Microservicios con Spring Boot',
    description: 'Desarrollo de aplicaciones empresariales con Java y Spring Boot bajo arquitectura de microservicios y hexagonal. Implementación de APIs REST y SOAP, procedimientos almacenados PL/SQL y optimización de bases de datos OLAP.',
    image: null,
    tech: ['Java', 'Spring Boot', 'React', 'Angular', 'MySQL', 'AWS', 'Prisma'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Completado',
    year: 2022
  }
];

const experience = [
  {
    id: 1,
    company: 'Distribuciones AXA',
    role: 'Desarrollador Fullstack Semi-Senior',
    period: { start: 'Septiembre 2025', end: 'Presente' },
    location: 'Colombia',
    description: [
      'Desarrollo backend con Laravel/PHP y APIs REST con Node.js; frontend con Angular aplicando principios SOLID y Clean Architecture.',
      'Integración con ERP NetSuite mediante SuiteScript para sincronización de datos entre sistemas internos y externos.',
      'Implementación de patrones de diseño MVC, Repository, Service Layer, Factory y Singleton para mejorar mantenibilidad.',
      'Gestión de despliegues en AWS (dev/test/prod), administración de certificados SSL y flujos Git (feature branches, hotfix, releases).',
      'Diseño y optimización de bases de datos PostgreSQL incluyendo consultas complejas y mejoras de rendimiento.'
    ],
    tech: ['Laravel', 'PHP', 'Node.js', 'Angular', 'AWS', 'PostgreSQL', 'SonarQube', 'Playwright', 'Cypress', 'ERP NetSuite']
  },
  {
    id: 2,
    company: 'Ilumno S.A.S',
    role: 'Desarrollador Fullstack & QA',
    period: { start: 'Junio 2024', end: 'Agosto 2025' },
    location: 'Colombia',
    description: [
      'Desarrollo de aplicaciones web con Angular (frontend) y Node.js (backend) bajo arquitectura hexagonal.',
      'Creación y ejecución de pruebas unitarias y automatizadas end-to-end con Cypress y Playwright; análisis de calidad con SonarQube.',
      'Implementación de ORM para gestión eficiente de MySQL; elaboración de historias de usuario y documentación técnica.',
      'Aplicación de metodologías ágiles Scrum y Kanban para mejorar la entrega y organización del equipo.'
    ],
    tech: ['Node.js', 'Angular', 'AWS', 'MySQL', 'SonarQube', 'xUnit', 'Playwright', 'Cypress']
  },
  {
    id: 3,
    company: 'Keralty S.A.S',
    role: 'Desarrollador Fullstack Jr.',
    period: { start: 'Junio 2023', end: 'Febrero 2024' },
    location: 'Colombia',
    description: [
      'Lideré el desarrollo completo de un sistema de gestión de contenido: backend con .NET Core/C#, frontend con Angular, base de datos MySQL en AWS.',
      'Diseño de arquitectura escalable aplicando patrones de diseño; colaboración directa con el cliente para definir especificaciones técnicas.',
      'Ejecución de pruebas de funcionalidad y estabilidad del sistema garantizando calidad antes de pasar a producción.'
    ],
    tech: ['Node.js', 'NestJS', 'Angular', '.NET Core', 'C#', 'Azure', 'MySQL', 'PostgreSQL']
  },
  {
    id: 4,
    company: 'Tuccu S.A.S',
    role: 'Desarrollador Fullstack Jr.',
    period: { start: 'Agosto 2021', end: 'Agosto 2023' },
    location: 'Colombia',
    description: [
      'Desarrollo de aplicaciones web con Java y Spring Boot bajo arquitectura de microservicios y hexagonal.',
      'Creación de interfaces responsivas con Angular, React, HTML, CSS3 y ES6; manejo de TypeScript.',
      'Implementación y consumo de APIs REST y SOAP; desarrollo de procedimientos almacenados con PL/SQL.',
      'Optimización de bases de datos mediante modelado OLAP (diseño estrella); auditorías de integridad de datos.',
      'Pruebas unitarias, de integración y CI/CD; control de versiones con GitHub.'
    ],
    tech: ['Java', 'Spring Boot', 'Node.js', '.NET Core', 'React', 'Angular', 'TypeScript', 'Prisma', 'MySQL', 'AWS']
  }
];

const education = [
  {
    id: 1,
    institution: 'Universidad Pedagógica y Tecnológica de Colombia — UPTC',
    degree: 'Ingeniería de Sistemas y Computación',
    period: { start: '2018', end: '2024' },
    location: 'Tunja, Boyacá, Colombia',
    description: 'Formación integral en ingeniería de software, arquitectura de sistemas, bases de datos, redes y telecomunicaciones, con énfasis en desarrollo de software y metodologías ágiles.',
    gpa: null
  }
];

const certifications = [
  {
    id: 1,
    title: 'Spring Boot y Arquitectura Hexagonal',
    institution: 'Udemy',
    period: { start: 'Sep 2022', end: 'May 2023' }
  },
  {
    id: 2,
    title: 'Automatización de Procesos con Python',
    institution: 'Coursera',
    period: { start: 'Feb 2019', end: 'Dic 2019' }
  }
];

module.exports = { profile, skills, projects, experience, education, certifications };
