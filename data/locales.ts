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
      "Full-stack AI and product engineer building fintech, SaaS, mobile, and applied machine-learning products.",
  },
  ui: {
    skip: "Skip to content",
    about: "About",
    experience: "Experience",
    experienceIntro:
      "I take products from first idea to production, combining engineering, product strategy and a close view of how people actually use the software.",
    at: "at",
    projects: "Projects",
    selectedWork: "Selected work",
    projectsIntro:
      "A few products and research projects that best represent how I work today.",
    stack: "Stack",
    writing: "Writing",
    contact: "Contact",
    contactIntro: "You can contact me using the form or via the links below.",
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
      "Diseñé y construí un punto de venta móvil y web para pequeños negocios, liderando la estrategia de producto, arquitectura, inventario, ventas, crédito a clientes y suscripciones multiplataforma.",
  },
  {
    ...experience[1],
    from: "Abr 2026",
    to: "Actualidad",
    role: "Fundador / Ingeniero de Producto",
    summary:
      "Construí desde cero un SaaS rentable de preparación para el EGEL. En sus primeros meses, alcancé más de 300 usuarios, más de 5,000 visitantes mensuales, más de 130 órdenes pagadas y posiciones entre los cinco primeros resultados de Google sin anuncios.",
  },
  {
    ...experience[2],
    from: "Oct 2025",
    to: "Ene 2026",
    role: "Ingeniero de IA / Equipo Fundador",
    summary:
      "Construí un modelo de preaprobación crediticia que ayudó a PyMEs a acceder a más de $4 M MXN durante su primer mes, además de agentes de IA y tableros financieros en React y Python.",
  },
  {
    ...experience[3],
    from: "Ene 2024",
    to: "Jul 2025",
    role: "Cofundador Técnico",
    summary:
      "Lideré una plataforma fintech full-stack y flujos de IA en producción para originación de crédito, riesgo, cumplimiento y análisis documental, respaldados por AWS y analítica de producto.",
  },
  {
    ...experience[4],
    from: "Ago 2021",
    to: "Dic 2023",
    role: "Fundador / Ingeniero",
    summary:
      "Lancé una aplicación móvil de punto de venta que alcanzó más de 10,000 descargas y 3,000 usuarios activos en tres meses, y después la amplié hasta convertirla en un ERP web completo.",
  },
];

const spanish = {
  ...english,
  locale: "es",
  htmlLang: "es",
  profile: {
    ...profile,
    role: "Ingeniero Full-Stack de IA y Producto",
    bio: [
      { text: "Construyo " },
      { text: "productos de IA y software full-stack", strong: true },
      {
        text: " desde la primera idea hasta producción. Mi trabajo abarca fintech, SaaS, aplicaciones móviles y aprendizaje automático aplicado, con un enfoque en productos útiles y resultados medibles.",
      },
    ],
  },
  experience: spanishExperience,
  metadata: {
    description:
      "Ingeniero full-stack de IA y producto especializado en fintech, SaaS, aplicaciones móviles y aprendizaje automático aplicado.",
  },
  ui: {
    ...english.ui,
    skip: "Saltar al contenido",
    about: "Acerca de mí",
    experience: "Experiencia",
    experienceIntro:
      "Llevo productos desde la primera idea hasta producción, combinando ingeniería, estrategia de producto y una visión cercana de cómo las personas usan el software.",
    at: "en",
    projects: "Proyectos",
    selectedWork: "Trabajo destacado",
    projectsIntro:
      "Algunos productos y proyectos de investigación que mejor representan cómo trabajo actualmente.",
    stack: "Tecnologías",
    writing: "Artículos",
    contact: "Contacto",
    contactIntro:
      "Puedes contactarme mediante el formulario o a través de los enlaces de abajo.",
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
      "Punto de venta, inventario y crédito a clientes para pequeños negocios en móvil y web.",
    pasaegel:
      "SaaS de preparación para el EGEL con simuladores interactivos, módulos de estudio, pagos, analítica y crecimiento orgánico mediante SEO.",
    "financiamiento-inteligente":
      "Plataforma de financiamiento para PyMEs con preaprobación crediticia impulsada por IA y tableros financieros.",
    "oliver-ai":
      "Plataforma fintech y flujos de IA para originación de crédito, riesgo, cumplimiento y análisis documental.",
    "gaia-ogle":
      "Proyecto de aprendizaje automático para clasificar estrellas variables a partir de datos astronómicos de Gaia y OGLE.",
  };

  return projects.map((project) => ({
    ...project,
    Description: descriptions[project.id] ?? project.Description,
  }));
}
