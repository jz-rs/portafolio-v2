// Todo el contenido del sitio vive acá.
// Lo que dice [COMPLETAR] es información que falta definir; no se inventó nada.

const GH = "https://github.com/jz-rs";

export const perfil = {
  nombre: "Jezabel Rosso",
  titulo: "Ingeniera informática",
  frase: "[COMPLETAR] Una frase que diga qué hacés y para qué.",
  ubicacion: "Córdoba, Argentina",
  disponibilidad: "[COMPLETAR] Ej.: Abierta a nuevas oportunidades",
};

export const proyectoFinal = {
  nombre: "Ristorino",
  subtitulo: "Portal de restaurantes con arquitectura SOA",
  descripcion:
    "Portal web para buscar restaurantes, ver sus promociones y reservar mesa. No guarda los datos de los restaurantes: los consulta en vivo a cada uno, por REST o por SOAP, y usa IA (Gemini) para la búsqueda en lenguaje natural y para generar contenido promocional.",
  puntos: [
    "4 servicios de restaurante independientes: 2 REST y 2 SOAP, cada uno con su base de datos",
    "Un contrato único para todos los restaurantes: el portal no sabe qué protocolo usa cada uno",
    "Reservas con disponibilidad en vivo y control de capacidad en la base",
    "Colecciones de Postman con 67 pedidos y verificaciones automáticas",
  ],
  stack: ["Java 17", "Spring Boot", "Angular", "SQL Server", "SOAP", "REST", "JWT", "Gemini"],
  link: `${GH}/ristorino-portal`,
};

export const proyectos = [
  {
    nombre: "Sistema de gestión de clínica",
    archivo: "sistema-gestion-clinica",
    descripcion: "Sistema de gestión para una clínica, con diseño orientado a objetos.",
    stack: ["Java", "JavaFX", "SQLite", "Maven"],
  },
  {
    nombre: "PhotoLab Express",
    archivo: "photolab-express",
    descripcion:
      "App en Python y Streamlit que procesa lotes de fotos: aplica filtros, detecta rostros y clasifica cada imagen con IA (CLIP), con procesamiento paralelo y caché.",
    stack: ["Python", "Streamlit", "OpenCV", "CLIP", "pytest"],
  },
  {
    nombre: "Casos de negocio en SQL",
    archivo: "sql-casos-de-negocio",
    descripcion:
      "Tres casos resueltos con SQL Server: migración de un modelo de datos, triggers y procedimientos almacenados, y diseño de una base de datos.",
    stack: ["SQL Server", "T-SQL", "Modelo relacional"],
  },
  {
    nombre: "Tablero de control OEE",
    archivo: "tablero-control-oee",
    descripcion:
      "Tablero web para seguir la eficiencia de producción (OEE) con datos por período.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
  },
  {
    nombre: "Red de Hopfield",
    archivo: "red-hopfield-reconocimiento-letras",
    descripcion: "Red neuronal que reconoce letras aun con ruido en la imagen.",
    stack: ["Python", "NumPy"],
  },
  {
    nombre: "Clasificación y clustering",
    archivo: "ml-clasificacion-y-clustering",
    descripcion:
      "Árboles de decisión y K-means aplicados a datos reales, con métricas y análisis de resultados.",
    stack: ["WEKA", "Machine learning"],
  },
  {
    nombre: "Criptografía y compresión",
    archivo: "criptografia-y-compresion-cpp",
    descripcion:
      "Aplicación de consola con búsqueda de patrones, cifrados clásicos y compresión (Huffman y LZW).",
    stack: ["C++", "Consola Windows", "Cifrado", "Compresión", "Búsqueda"],
  },
].map((p) => ({ ...p, link: `${GH}/${p.archivo}` }));

export const experiencia = [
  {
    empresa: "S-interio",
    rol: "Backend Engineer",
    periodo: "Marzo 2026 — Actualidad",
    actual: true,
    descripcion:
      "Trabajo en el área de integraciones técnicas de pagos de S-interio, una empresa fintech que opera en Latinoamérica. Desarrollo integraciones con proveedores de pago, varias de ellas hoy en producción y trabajadas junto a mi equipo, y participo en el desarrollo de herramientas internas que usan distintas áreas de la empresa. Mi trabajo se apoya en un análisis técnico profundo de APIs, requests y logs, que me permite resolver incidencias de Payin y Payout y coordinar con merchants, proveedores y equipos internos.",
    detalle: [
      {
        titulo: "Lo que desarrollé",
        items: [
          "Automatización para el testeo de pagos, tanto de Payin como de Payout.",
          "Extensión de Chrome para la empresa, con una división por área.",
          "Documentación técnica de nuestra API de Payin.",
          "Sistema de tickets interno, desarrollado en conjunto con mi líder.",
          "Herramienta para que el área de Sales pruebe las soluciones y grabe demos comerciales, desarrollada en conjunto con mi líder.",
          "Colaboración en el desarrollo del programa de Finanzas para el settlement de la empresa.",
          "Guías para otras áreas sobre qué pasa cuando se corta un método de pago en un país, y sobre el uso de Keeper.",
        ],
      },
      {
        titulo: "Capacitación",
        items: [
          "Capacité a compañeros de mi área y a todas las áreas de la empresa en el uso del sistema de tickets.",
        ],
      },
    ],
    stack: [
      "TypeScript", "JavaScript", "Python", "SQL", "Node.js", "Fastify", "React", "Next.js",
      "PostgreSQL", "Redis", "Prisma", "Docker", "Vercel", "SDK de Anthropic (Claude)", "MCP",
      "Chrome Extensions", "Docusaurus", "Postman", "Testing manual",
    ],
  },
  {
    empresa: "ODS Córdoba",
    organizacion:
      "Proyecto de investigación de la Universidad Blas Pascal (UBP), en colaboración con la Universidad Libre del Ambiente (ULA)",
    rol: "Analista de Datos y Desarrolladora Web",
    periodo: "Abril 2026 — Actualidad",
    actual: true,
    descripcion:
      "Integro el equipo del observatorio, que analiza y sigue los Objetivos de Desarrollo Sostenible en Córdoba. Recopilamos, organizamos y visualizamos información para entender realidades sociales, ambientales y territoriales de la ciudad.",
    detalle: [
      {
        titulo: "Análisis de datos",
        items: [
          "Procesamiento y organización de indicadores de desarrollo sostenible por zona geográfica.",
          "Preparación de los datos para matrices comparativas y visualización de resultados.",
        ],
      },
      {
        titulo: "Desarrollo web",
        items: [
          "Desarrollo y actualización de la plataforma del observatorio, para presentar la información de forma clara y accesible.",
          "Encuesta ciudadana y mapa colaborativo de reportes en tiempo real, con datos de infraestructura de la ciudad.",
          "Frontend y rutas API en Next.js, con las encuestas y los reportes guardados en PostgreSQL.",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Leaflet", "OpenStreetMap", "PostgreSQL (Neon)", "Vercel"],
    link: "https://odscordoba.com",
    linkTexto: "Ver sitio en vivo",
  },
  {
    empresa: "Eclypsium",
    rol: "Pasante en Desarrollo de Plugins de Seguridad",
    periodo: "Agosto 2025 — Octubre 2025",
    descripcion:
      "Trabajé en el área de Ingeniería, en el desarrollo y la mejora del motor Abram Linter. Todo lo que desarrollé se integró al repositorio principal del proyecto.",
    detalle: [
      {
        titulo: "Lo que desarrollé",
        items: [
          "Nuevos checkers y validaciones en Python.",
          "Flags en la CLI (--only, --exclude) para ejecutar análisis de forma selectiva.",
          "Correcciones en configuraciones de LFS y .gitattributes.",
          "Frontend web básico con FastAPI, que consume la API REST del backend para CyberChef.",
          "Pruebas automatizadas con PyTest para asegurar la calidad y estabilidad del sistema.",
        ],
      },
    ],
    stack: ["Python", "FastAPI", "PyTest", "API REST", "Git", "Git LFS", "CyberChef"],
  },
];

export const voluntariados = [
  {
    nombre: "ONIET",
    periodo: "[COMPLETAR]",
    descripcion: "[COMPLETAR] Qué hacías.",
  },
  {
    nombre: "NASA Space Challenge — San Vicente de Cañete",
    periodo: "[COMPLETAR]",
    descripcion: "[COMPLETAR] Qué hacías.",
  },
];

// `en` es el nombre en inglés, para cuando el sitio tenga versión en inglés.
export const cursos = [
  {
    area: "Desarrollo",
    nombre: "Curso Introductorio de Python",
    en: "Python Programming",
    institucion: "IEEE Student Chapter ITBA",
    fecha: "Mayo 2022",
    descripcion: "Fundamentos de programación en Python.",
  },
  {
    area: "Desarrollo",
    nombre: "Introducción al Desarrollo Frontend con React",
    en: "Introduction to Frontend Development with React",
    institucion: "UTN Facultad Regional Córdoba",
    fecha: "Diciembre 2023",
    descripcion: "Componentes, estado, APIs y despliegue.",
  },
  {
    area: "Desarrollo",
    nombre: "Introducción al Desarrollo Backend con Node.js",
    en: "Introduction to Backend Development with Node.js",
    institucion: "UTN Facultad Regional Córdoba",
    fecha: "Agosto 2023",
    descripcion: "APIs REST con Express, MongoDB y JWT.",
  },
  {
    area: "Datos",
    nombre: "SQL Interactivo",
    en: "SQL",
    institucion: "Desafío Latam",
    fecha: "Febrero 2024",
    descripcion: "Consultas, agregaciones y modelo relacional.",
  },
  {
    area: "Datos",
    nombre: "Analítica de Datos",
    en: "Data Analytics",
    institucion: "Universidad Blas Pascal",
    fecha: "Julio 2024",
    descripcion: "Análisis de datos con Excel y Power BI.",
  },
  {
    area: "QA y testing",
    nombre: "Programa XAcademy QA",
    en: "QA & Testing Program – Santex",
    institucion: "Santex",
    fecha: "Diciembre 2025",
    descripcion: "Testing manual, defectos y accesibilidad.",
  },
  {
    area: "Ciberseguridad",
    nombre: "Taller de Ciberseguridad",
    en: "Cybersecurity Workshop",
    institucion: "Ecosistema Tech by Desafío Latam",
    fecha: "Marzo 2024",
    descripcion: "Amenazas comunes y buenas prácticas.",
  },
  {
    area: "Industria 4.0",
    nombre: "Automation Training",
    en: "Automation Training",
    institucion: "Ingelearn",
    fecha: "Febrero 2024",
    descripcion: "Fundamentos de automatización de procesos.",
  },
  {
    area: "Industria 4.0",
    nombre: "Industria 4.0: IIoT, Python y Ciberseguridad industrial",
    en: "Industry 4.0 – IIoT, Python and Industrial Cybersecurity",
    institucion: "Ingelearn",
    fecha: "Abril 2024",
    descripcion: "IIoT, Python y seguridad en entornos OT.",
  },
  {
    area: "Industria 4.0",
    nombre: "Proyecto de Automatización Industria 4.0: PLC, Node-RED y aplicaciones en Python",
    en: "Industry 4.0 Automation Project – PLC, Node-RED and Python Applications",
    institucion: "Ingelearn",
    fecha: "Marzo 2026",
    descripcion: "Automatización con PLC, Node-RED y Python.",
  },
];

export const contacto = {
  invitacion: "[COMPLETAR] Una línea invitando a escribirte.",
  email: "[COMPLETAR] Mail de contacto",
  github: GH,
  linkedin: "[COMPLETAR] URL de LinkedIn",
};
