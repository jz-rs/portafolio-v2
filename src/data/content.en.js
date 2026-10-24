// Contenido del sitio en inglés. Tiene la misma estructura que content.js:
// todo cambio que se haga en uno tiene que hacerse también en el otro.

const GH = "https://github.com/jz-rs";

export const perfil = {
  nombre: "Jezabel Rosso",
  titulo: "Computer Engineering",
  frase:
    "I design and build end-to-end software solutions, with a focus on quality, clarity and business impact.",
  ubicacion: "Córdoba, Argentina",
  disponibilidad: "Always open to hearing about new opportunities",
};

export const proyectoFinal = {
  nombre: "Ristorino",
  subtitulo: "Restaurant portal built on a SOA architecture",
  descripcion:
    "Web portal to search restaurants, browse their promotions and book a table. It doesn't store restaurant data: it queries each restaurant live, over REST or SOAP, and uses AI (Gemini) for natural-language search and to generate promotional content.",
  puntos: [
    "4 independent restaurant services: 2 REST and 2 SOAP, each with its own database",
    "A single contract for every restaurant: the portal doesn't know which protocol each one uses",
    "Bookings with live availability and capacity control in the database",
    "Postman collections with 67 requests and automated checks",
  ],
  stack: ["Java 17", "Spring Boot", "Angular", "SQL Server", "SOAP", "REST", "JWT", "Gemini"],
  link: `${GH}/ristorino-portal`,
};

export const proyectos = [
  {
    nombre: "Clinic management system",
    archivo: "sistema-gestion-clinica",
    descripcion: "Management system for a clinic, built with object-oriented design.",
    stack: ["Java", "JavaFX", "SQLite", "Maven"],
  },
  {
    nombre: "PhotoLab Express",
    archivo: "photolab-express",
    descripcion:
      "Python and Streamlit app that processes photo batches: applies filters, detects faces and classifies each image with AI (CLIP), using parallel processing and caching.",
    stack: ["Python", "Streamlit", "OpenCV", "CLIP", "pytest"],
  },
  {
    nombre: "SQL business cases",
    archivo: "sql-casos-de-negocio",
    descripcion:
      "Three cases solved with SQL Server: a data model migration, triggers and stored procedures, and a database design.",
    stack: ["SQL Server", "T-SQL", "Relational model"],
  },
  {
    nombre: "OEE dashboard",
    archivo: "tablero-control-oee",
    descripcion: "Web dashboard to track production efficiency (OEE) with data by period.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
  },
  {
    nombre: "Hopfield network",
    archivo: "red-hopfield-reconocimiento-letras",
    descripcion: "Neural network that recognizes letters even when the image is noisy.",
    stack: ["Python", "NumPy"],
  },
  {
    nombre: "Classification and clustering",
    archivo: "ml-clasificacion-y-clustering",
    descripcion:
      "Decision trees and K-means applied to real data, with metrics and analysis of the results.",
    stack: ["WEKA", "Machine learning"],
  },
  {
    nombre: "Cryptography and compression",
    archivo: "criptografia-y-compresion-cpp",
    descripcion:
      "Console app with pattern search, classic ciphers and compression (Huffman and LZW).",
    stack: ["C++", "Windows console", "Encryption", "Compression", "Search"],
  },
].map((p) => ({ ...p, link: `${GH}/${p.archivo}` }));

export const experiencia = [
  {
    empresa: "S-interio",
    rol: "Backend Engineer",
    periodo: "March 2026 — Present",
    actual: true,
    descripcion:
      "I work in the technical payment integrations team at S-interio, a fintech company operating across Latin America. I build integrations with payment providers, several of them now in production and developed together with my team, and I take part in building internal tools used by different areas of the company. My work relies on in-depth technical analysis of APIs, requests and logs, which lets me resolve Payin and Payout incidents and coordinate with merchants, providers and internal teams.",
    detalle: [
      {
        titulo: "What I built",
        items: [
          "Automated payment testing, for both Payin and Payout.",
          "A company Chrome extension, organized by area.",
          "Technical documentation for our Payin API.",
          "An internal ticketing system, built together with my team lead.",
          "A tool for the Sales team to try our solutions and record sales demos, built together with my team lead.",
          "Contributions to the Finance program for the company's settlement.",
          "Guides for other areas on what happens when a payment method goes down in a country, and on using Keeper.",
        ],
      },
      {
        titulo: "Training",
        items: [
          "I trained teammates in my area and every area of the company on using the ticketing system.",
        ],
      },
    ],
    stack: [
      "TypeScript", "JavaScript", "Python", "SQL", "Node.js", "Fastify", "React", "Next.js",
      "PostgreSQL", "Redis", "Prisma", "Docker", "Vercel", "Anthropic SDK (Claude)", "MCP",
      "Chrome Extensions", "Docusaurus", "Postman", "Manual testing",
    ],
  },
  {
    empresa: "ODS Córdoba",
    organizacion:
      "Research project of Universidad Blas Pascal (UBP), in collaboration with Universidad Libre del Ambiente (ULA)",
    rol: "Data Analyst and Web Developer",
    periodo: "April 2026 — Present",
    actual: true,
    descripcion:
      "I'm part of the observatory team, which analyzes and tracks the Sustainable Development Goals in Córdoba. We collect, organize and visualize information to understand the city's social, environmental and territorial realities.",
    detalle: [
      {
        titulo: "Data analysis",
        items: [
          "Processing and organizing sustainable development indicators by geographic area.",
          "Preparing data for comparative matrices and result visualizations.",
        ],
      },
      {
        titulo: "Web development",
        items: [
          "Building and updating the observatory's platform to present information clearly and accessibly.",
          "Citizen survey and collaborative real-time report map, with city infrastructure data.",
          "Frontend and API routes in Next.js, with surveys and reports stored in PostgreSQL.",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Leaflet", "OpenStreetMap", "PostgreSQL (Neon)", "Vercel"],
    link: "https://odscordoba.com",
    linkTexto: "View live site",
  },
  {
    empresa: "Eclypsium",
    rol: "Security Plugin Development Intern",
    periodo: "August 2025 — October 2025",
    descripcion:
      "I worked in the Engineering team on developing and improving the Abram Linter engine. Everything I built was merged into the project's main repository.",
    detalle: [
      {
        titulo: "What I built",
        items: [
          "New checkers and validations in Python.",
          "CLI flags (--only, --exclude) to run analyses selectively.",
          "Fixes to LFS and .gitattributes configurations.",
          "A basic web frontend with FastAPI that consumes the backend's REST API for CyberChef.",
          "Automated tests with PyTest to ensure the system's quality and stability.",
        ],
      },
    ],
    stack: ["Python", "FastAPI", "PyTest", "REST API", "Git", "Git LFS", "CyberChef"],
  },
];

export const voluntariados = [
  {
    nombre: "NASA Space Apps Challenge — San Vicente de Cañete (Peru)",
    rol: "Marketing, communications, design and press",
    periodo: "July 2026 — Present",
    actual: true,
    descripcion:
      "I'm part of the organizing team: I create and share social media content and communicate the event's activities. I was also a speaker at the training sessions ahead of the hackathon, with the talk “Road to Next: Construye con lo que tienes” (Next is You series, together with TechSpira).",
  },
  {
    nombre: "ONIET — National Olympiads",
    rol: "Competition volunteer",
    periodo: "October 2025",
    descripcion:
      "I collaborated in the “Innovation Team” and “Electrónica Discreta” competitions, providing operational and technical support during the events held at the Universidad Blas Pascal campus.",
  },
  {
    nombre: "ONIET — National Olympiads",
    rol: "Awards organization",
    periodo: "October 2022",
    descripcion:
      "Logistics support volunteer during the Olympiads. Prepared and labeled around 150 medals for the awards (1st, 2nd and 3rd place), contributing to the order and efficiency of the event.",
  },
];

export const formacion = [
  {
    titulo: "Computer Engineering",
    institucion: "Universidad Blas Pascal — Córdoba",
    hitos: [
      { anio: "2021", texto: "March · Coursework begins" },
      { anio: "2025", texto: "November · Coursework completed" },
      { anio: "2026", texto: "October · Graduated" },
    ],
    estado: "Graduated",
    descripcion:
      "Hands-on training in software development (including AI and distributed systems), network infrastructure, quality under international standards and project management.",
  },
];

export const cursos = [
  {
    area: "Development",
    nombre: "Python Programming",
    institucion: "IEEE Student Chapter ITBA",
    fecha: "May 2022",
    descripcion: "Programming fundamentals in Python.",
  },
  {
    area: "Development",
    nombre: "Introduction to Frontend Development with React",
    institucion: "UTN Facultad Regional Córdoba",
    fecha: "December 2023",
    descripcion: "Components, state, APIs and deployment.",
  },
  {
    area: "Development",
    nombre: "Introduction to Backend Development with Node.js",
    institucion: "UTN Facultad Regional Córdoba",
    fecha: "August 2023",
    descripcion: "REST APIs with Express, MongoDB and JWT.",
  },
  {
    area: "Data",
    nombre: "SQL",
    institucion: "Desafío Latam",
    fecha: "February 2024",
    descripcion: "Queries, aggregations and the relational model.",
  },
  {
    area: "Data",
    nombre: "Data Analytics",
    institucion: "Universidad Blas Pascal",
    fecha: "July 2024",
    descripcion: "Data analysis with Excel and Power BI.",
  },
  {
    area: "QA & testing",
    nombre: "QA & Testing Program – Santex",
    institucion: "Santex",
    fecha: "December 2025",
    descripcion: "Manual testing, defects and accessibility.",
  },
  {
    area: "Cybersecurity",
    nombre: "Cybersecurity Workshop",
    institucion: "Ecosistema Tech by Desafío Latam",
    fecha: "March 2024",
    descripcion: "Common threats and best practices.",
  },
  {
    area: "Industry 4.0",
    nombre: "Automation Training",
    institucion: "Ingelearn",
    fecha: "February 2024",
    descripcion: "Fundamentals of process automation.",
  },
  {
    area: "Industry 4.0",
    nombre: "Industry 4.0 – IIoT, Python and Industrial Cybersecurity",
    institucion: "Ingelearn",
    fecha: "April 2024",
    descripcion: "IIoT, Python and security in OT environments.",
  },
  {
    area: "Industry 4.0",
    nombre: "Industry 4.0 Automation Project – PLC, Node-RED and Python Applications",
    institucion: "Ingelearn",
    fecha: "March 2026",
    descripcion: "Automation with PLC, Node-RED and Python.",
  },
];

export const contacto = {
  invitacion: "If you have a proposal or a project in mind, get in touch — I'd love to hear about it.",
  email: "jezabel.rosso.it@gmail.com",
  github: GH,
  linkedin: "https://www.linkedin.com/in/jezabel-rosso/",
};

// Textos fijos de la interfaz (menú, botones, títulos de sección).
export const ui = {
  nav: {
    experiencia: "Experience",
    formacion: "Education",
    proyectoFinal: "Final project",
    proyectos: "Projects",
    cursos: "Courses",
    voluntariados: "Volunteering",
    contacto: "Contact",
    inicio: "Go to top",
    secciones: "Sections",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    idioma: "Language",
  },
  secciones: {
    experiencia: "Work experience",
    formacion: "Education",
    proyectoFinal: "Final project",
    proyectos: "Featured projects",
    cursos: "Courses",
    voluntariados: "Volunteering",
  },
  verProyectos: "View projects",
  actual: "Current",
  verGithub: "View on GitHub",
  verRepo: "View repository",
  diagrama: "Ristorino architecture",
  contactoTitulo: "Let's work together",
  mail: "Email",
  volverArriba: "Back to top",
  meta: { title: "Jezabel Rosso — Computer Engineering" },
};
