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
    nombre: "Casos de negocio en SQL",
    archivo: "sql-casos-de-negocio",
    descripcion:
      "Tres casos resueltos con SQL Server: migración de un modelo de datos, triggers y procedimientos almacenados, y diseño de una base de datos.",
    stack: ["T-SQL", "SQL Server"],
  },
  {
    nombre: "Tablero de control OEE",
    archivo: "tablero-control-oee",
    descripcion:
      "Tablero web para seguir la eficiencia de producción (OEE) con datos por período.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    nombre: "PhotoLab Express",
    archivo: "photolab-express",
    descripcion: "Aplicación web de procesamiento de imágenes.",
    stack: ["Python", "Streamlit"],
  },
  {
    nombre: "Sistema de gestión de clínica",
    archivo: "sistema-gestion-clinica",
    descripcion: "Sistema de gestión para una clínica, con diseño orientado a objetos.",
    stack: ["Java", "POO"],
  },
  {
    nombre: "Criptografía y compresión",
    archivo: "criptografia-y-compresion-cpp",
    descripcion:
      "Aplicación de consola con búsqueda de patrones, cifrados clásicos y compresión (Huffman y LZW).",
    stack: ["C++"],
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
].map((p) => ({ ...p, link: `${GH}/${p.archivo}` }));

export const experiencia = [
  {
    empresa: "S-interio",
    rol: "[COMPLETAR] Cargo",
    periodo: "[COMPLETAR] Desde — Actualidad",
    actual: true,
    descripcion:
      "Integración, desarrollo y testing de soluciones para infraestructura de pagos en Latinoamérica.",
  },
  {
    empresa: "ODS Córdoba",
    rol: "[COMPLETAR] Cargo",
    periodo: "[COMPLETAR] Período",
    descripcion:
      "Plataforma web que acerca los Objetivos de Desarrollo Sostenible a la ciudad: observatorio con encuesta ciudadana y mapa colaborativo de reportes en tiempo real.",
    link: "https://ods-cordoba.vercel.app",
    linkTexto: "Ver sitio en vivo",
  },
  {
    empresa: "Eclypsium",
    rol: "[COMPLETAR] Cargo",
    periodo: "[COMPLETAR] Período",
    descripcion: "[COMPLETAR] Qué hacías.",
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

export const cursos = [
  { area: "Programación", items: ["Python", "Frontend con React", "Backend con Node.js"] },
  { area: "Datos", items: ["SQL", "Data Analytics"] },
  { area: "Calidad e industria", items: ["QA y Testing", "Automation Training", "Industry 4.0"] },
];

export const contacto = {
  invitacion: "[COMPLETAR] Una línea invitando a escribirte.",
  email: "[COMPLETAR] Mail de contacto",
  github: GH,
  linkedin: "[COMPLETAR] URL de LinkedIn",
};
