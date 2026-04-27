const profile = {
  name: 'Farid Valiente',
  title: 'Ingeniero de Sistemas',
  subtitle: 'Full Stack Developer & Software Architect',
  email: 'farid.valiente@uptc.edu.co',
  location: 'Colombia',
  github: 'https://github.com/faridvl2010',
  linkedin: 'https://linkedin.com/in/farid-valiente',
  bio: [
    'Ingeniero de Sistemas apasionado por construir soluciones tecnológicas robustas y escalables.',
    'Especializado en desarrollo Full Stack con experiencia en arquitecturas de microservicios, APIs RESTful y aplicaciones web modernas.',
    'Comprometido con las buenas prácticas de desarrollo, código limpio y metodologías ágiles.'
  ],
  stats: [
    { label: 'Años de Experiencia', value: '3+' },
    { label: 'Proyectos Completados', value: '20+' },
    { label: 'Tecnologías', value: '15+' },
    { label: 'Commits', value: '500+' }
  ]
};

const skills = [
  {
    category: 'Lenguajes',
    icon: '{ }',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'C++', level: 60 }
    ]
  },
  {
    category: 'Frontend',
    icon: '</> ',
    items: [
      { name: 'Angular', level: 88 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'SCSS / Sass', level: 82 },
      { name: 'React', level: 65 }
    ]
  },
  {
    category: 'Backend',
    icon: '[  ]',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Spring Boot', level: 68 },
      { name: 'Django', level: 60 }
    ]
  },
  {
    category: 'Bases de Datos',
    icon: '///',
    items: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'Redis', level: 65 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: '>>>',
    items: [
      { name: 'Docker', level: 78 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'CI/CD Pipelines', level: 70 },
      { name: 'Linux', level: 75 }
    ]
  },
  {
    category: 'Herramientas',
    icon: '#',
    items: [
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 88 },
      { name: 'Jira / Scrum', level: 80 },
      { name: 'Figma', level: 60 }
    ]
  }
];

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión Académica',
    description: 'Plataforma completa para la administración académica universitaria con módulos de matrículas, calificaciones, horarios y reportes. Arquitectura en microservicios con autenticación JWT.',
    image: null,
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Completado',
    year: 2024
  },
  {
    id: 2,
    title: 'API RESTful E-Commerce',
    description: 'Backend robusto para plataforma de comercio electrónico con gestión de inventario, procesamiento de pedidos, pasarela de pagos y panel de administración en tiempo real.',
    image: null,
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'WebSockets'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'Completado',
    year: 2024
  },
  {
    id: 3,
    title: 'Dashboard de Monitoreo IoT',
    description: 'Aplicación de visualización de datos en tiempo real para dispositivos IoT. Incluye gráficas interactivas, alertas automáticas y análisis estadístico de sensores.',
    image: null,
    tech: ['Angular', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    github: 'https://github.com/faridvl2010',
    demo: null,
    status: 'En desarrollo',
    year: 2025
  },
  {
    id: 4,
    title: 'Portafolio Personal',
    description: 'Este portafolio web desarrollado con Angular y Node.js, diseñado con estética de ingeniería de sistemas. Arquitectura cliente-servidor con API RESTful.',
    image: null,
    tech: ['Angular', 'Node.js', 'Express', 'SCSS', 'TypeScript'],
    github: 'https://github.com/faridvl2010',
    demo: 'http://localhost:4200',
    status: 'Activo',
    year: 2025
  }
];

const experience = [
  {
    id: 1,
    company: 'Tech Solutions S.A.S',
    role: 'Full Stack Developer',
    period: { start: 'Enero 2024', end: 'Presente' },
    location: 'Bogotá, Colombia (Remoto)',
    description: [
      'Desarrollo y mantenimiento de aplicaciones web con Angular y Node.js para clientes del sector financiero.',
      'Diseño e implementación de APIs RESTful escalables con Express y PostgreSQL.',
      'Participación activa en revisiones de código, sprint planning y retrospectivas (Scrum).'
    ],
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'Git']
  },
  {
    id: 2,
    company: 'Universidad Pedagógica y Tecnológica de Colombia',
    role: 'Monitor / Auxiliar de Investigación',
    period: { start: 'Agosto 2023', end: 'Diciembre 2023' },
    location: 'Tunja, Boyacá',
    description: [
      'Apoyo en proyectos de investigación del grupo GRASIA en desarrollo de software educativo.',
      'Desarrollo de módulos web para plataformas de aprendizaje virtual.',
      'Capacitación a estudiantes en herramientas de desarrollo web modernas.'
    ],
    tech: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS3']
  }
];

const education = [
  {
    id: 1,
    institution: 'Universidad Pedagógica y Tecnológica de Colombia - UPTC',
    degree: 'Ingeniería de Sistemas y Computación',
    period: { start: '2020', end: '2025' },
    location: 'Tunja, Boyacá, Colombia',
    description: 'Formación integral en ingeniería de software, arquitectura de sistemas, bases de datos, redes y telecomunicaciones, con énfasis en desarrollo de software.',
    gpa: '4.1 / 5.0'
  }
];

module.exports = { profile, skills, projects, experience, education };
