import { experience, profile } from "@/data/profile";
import type { Project } from "@/data/content";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

const english = {
  locale: "en",
  htmlLang: "en",
  profile,
  experience,
  metadata: {
    description:
      "Product engineer building and launching AI, fintech, SaaS and mobile products from zero to production.",
  },
  ui: {
    skip: "Skip to content",
    established: "BUILDING SINCE 2016",
    about: "About",
    experience: "Experience",
    experienceIntro:
      "I take products from initial concept to real users, combining engineering, product decisions and a close understanding of how the software performs in practice.",
    at: "at",
    projects: "Projects",
    selectedWork: "Selected work",
    projectsIntro:
      "A selection of products and research that represent my approach to engineering, product development and problem-solving.",
    stack: "Stack",
    writing: "Writing",
    contact: "Contact",
    contactIntro:
      "I’m open to product engineering opportunities, ambitious startup teams and selected collaborations.",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send message",
    orShortcut: "or ⌘ ↵ to send",
    anonymous: "Anonymous",
    mailSubject: "Portfolio message",
    press: "Press",
    copyEmail: "to copy my email",
    copyEmailLabel: `Copy ${profile.email} to clipboard`,
    copied: "Copied",
    downloadResume: "Download résumé",
    toggleTheme: "Toggle color theme",
    muteSounds: "Mute interaction sounds",
    enableSounds: "Enable interaction sounds",
    sections: "Sections",
    newPosts: "New posts are coming soon.",
    language: "Español",
    languageLabel: "View in Spanish",
  },
};

const spanishExperience = [
  {
    ...experience[0],
    from: "Ene 2026",
    to: "Actualidad",
    role: "Fundador / Ingeniero de Producto",
    summary:
      "Diseñé y construí un punto de venta offline-first para pequeños negocios en móvil y web, con inventario, ventas, crédito a clientes, reportes y suscripciones multiplataforma.",
  },
  {
    ...experience[1],
    from: "Abr 2026",
    to: "Actualidad",
    role: "Fundador / Ingeniero de Producto",
    summary:
      "Fundé y construí de principio a fin una plataforma de preparación para el EGEL, con simuladores interactivos, pagos, analítica y SEO. Alcanzó más de 300 usuarios, 5,000 visitantes mensuales, 130 órdenes pagadas y posiciones entre los primeros cinco resultados de Google, principalmente mediante búsqueda orgánica.",
  },
  {
    ...experience[2],
    from: "Oct 2025",
    to: "Ene 2026",
    role: "Ingeniero de IA / Equipo Fundador",
    summary:
      "Construí un sistema de preaprobación crediticia que respaldó más de $4 M MXN en financiamiento para PyMEs durante su primer mes, además de agentes de IA y tableros financieros desarrollados con React y Python.",
  },
  {
    ...experience[3],
    from: "Ene 2024",
    to: "Jul 2025",
    role: "Cofundador Técnico",
    summary:
      "Lideré la ingeniería de una plataforma fintech y flujos de IA en producción para originación de crédito, análisis de riesgo, cumplimiento y procesamiento documental.",
  },
  {
    ...experience[4],
    from: "Ago 2021",
    to: "Dic 2023",
    role: "Fundador / Ingeniero",
    summary:
      "Construí y lancé una aplicación de punto de venta en React Native que alcanzó más de 10,000 descargas y 3,000 usuarios activos en tres meses, y posteriormente la expandí hasta convertirla en un ERP web completo.",
  },
];

const spanish = {
  ...english,
  locale: "es",
  htmlLang: "es",
  profile: {
    ...profile,
    role: "Ingeniero de Producto — IA, Fintech y SaaS",
    bio: [
      { text: "Construyo y lanzo " },
      {
        text: "productos full-stack desde cero hasta producción",
        strong: true,
      },
      {
        text: ". He fundado productos SaaS, desarrollado sistemas de fintech e IA y lanzado software móvil utilizado por miles de personas.",
      },
    ],
  },
  experience: spanishExperience,
  metadata: {
    description:
      "Ingeniero de producto que construye y lanza productos de IA, fintech, SaaS y aplicaciones móviles desde cero hasta producción.",
  },
  ui: {
    ...english.ui,
    skip: "Saltar al contenido",
    established: "CONSTRUYENDO DESDE 2016",
    about: "Acerca de mí",
    experience: "Experiencia",
    experienceIntro:
      "Llevo productos desde el concepto inicial hasta usuarios reales, combinando ingeniería, decisiones de producto y una comprensión cercana de cómo funciona el software en la práctica.",
    at: "en",
    projects: "Proyectos",
    selectedWork: "Trabajo destacado",
    projectsIntro:
      "Una selección de productos y proyectos de investigación que representan mi forma de abordar la ingeniería, el desarrollo de producto y la resolución de problemas.",
    stack: "Tecnologías",
    writing: "Artículos",
    contact: "Contacto",
    contactIntro:
      "Estoy abierto a oportunidades de ingeniería de producto, equipos de startups ambiciosos y colaboraciones seleccionadas.",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    orShortcut: "o ⌘ ↵ para enviar",
    anonymous: "Anónimo",
    mailSubject: "Mensaje desde mi portafolio",
    press: "Presiona",
    copyEmail: "para copiar mi correo",
    copyEmailLabel: `Copiar ${profile.email} al portapapeles`,
    copied: "Copiado",
    downloadResume: "Descargar CV",
    toggleTheme: "Cambiar tema de color",
    muteSounds: "Silenciar sonidos de interacción",
    enableSounds: "Activar sonidos de interacción",
    sections: "Secciones",
    newPosts: "Pronto habrá nuevos artículos.",
    language: "English",
    languageLabel: "View in English",
  },
};

export const dictionaries = { en: english, es: spanish };
export type Dictionary = typeof english;
export type DictionaryUi = Dictionary["ui"];

export function getDictionary(locale: Locale = "en") {
  return dictionaries[locale] ?? dictionaries.en;
}

export function localizeProjects(projects: Project[], locale: Locale = "en") {
  if (locale !== "es") return projects;

  const descriptions: Partial<Record<Project["id"], string>> = {
    kashi:
      "Punto de venta offline-first para pequeños negocios, con ventas, inventario, crédito a clientes y reportes en móvil y web.",
    pasaegel:
      "Plataforma de preparación para el EGEL con simuladores interactivos, módulos de estudio, pagos, analítica y adquisición orgánica mediante SEO.",
    "financiamiento-inteligente":
      "Plataforma de financiamiento para PyMEs con preaprobación crediticia impulsada por IA y tableros financieros.",
    "oliver-ai":
      "Flujos de IA en producción para servicios financieros, incluyendo originación de crédito, revisión de riesgo, cumplimiento y análisis documental.",
    "gaia-ogle":
      "Clasificador de aprendizaje automático entrenado con 137,258 estrellas variables de 11 clases, con un F1 ponderado de 0.9847 frente a las etiquetas de OGLE.",
  };

  return projects.map((project) => ({
    ...project,
    Description: descriptions[project.id] ?? project.Description,
  }));
}
