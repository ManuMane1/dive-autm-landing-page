// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface IndustryCase {
  industry: string;
  challenge: string;
  implementation: string;
  result: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  href: string;
}

export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

// ─── Header / Nav ─────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Metodología", href: "#metodologia" },
  { label: "FAQ", href: "#faq" },
];

export const NAV_CTA = "Agendar llamada";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  sectionLabel: "AUTOMATIZACIÓN & INTELIGENCIA ARTIFICIAL",
  headline: "Implementamos IA que trabaja por tu negocio desde el día uno.",
  description:
    "Diseñamos agentes inteligentes y automatizaciones que resuelven problemas reales: responder consultas, procesar documentos, ordenar procesos y liberar a tu equipo para lo que importa.",
  ctaPrimary: "Evaluar mi caso",
  ctaSecondary: "Ver cómo funciona ↓",
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = {
  sectionLabel: "NUESTRO EXPERTISE",
  headline: "IA que realmente funciona",
  description:
    "Diseñamos e implementamos sistemas de IA que aportan valor desde el primer día operativo.",
  cards: [
    {
      title: "Agentes de IA Personalizados",
      description:
        "Asistentes digitales entrenados con el conocimiento específico de tu empresa. Responden consultas, ordenan información y califican oportunidades, trabajando junto a tu equipo y respetando el proceso comercial definido.",
      bullets: [
        "Atención multicanal 24/7",
        "Entrenamiento con tu documentación y contenido",
        "Tono de marca personalizado",
        "Calificación y derivación inteligente",
      ],
    },
    {
      title: "Automatización y Estructura de Procesos",
      description:
        "Diseñamos y automatizamos flujos de trabajo internos para reducir tareas manuales, eliminar errores operativos y mejorar la coordinación entre áreas del negocio.",
      bullets: [
        "Automatización de flujos operativos",
        "Integración entre sistemas y bases de datos",
        "Reportes inteligentes en tiempo real",
        "Alertas y seguimiento automatizado",
      ],
    },
    {
      title: "Inteligencia Documental",
      description:
        "Tu empresa tiene años de conocimiento acumulado en documentos, manuales, contratos y bases de datos. Construimos un asistente de IA que entiende esa información y la pone al alcance de tu equipo en segundos — sin buscar archivos, sin depender de una sola persona.",
      bullets: [
        "Búsqueda inteligente en todos tus documentos",
        "Respuestas precisas basadas en tu información real",
        "Acceso instantáneo al conocimiento de la empresa",
        "Compatible con la infraestructura tecnológica que ya tenés",
      ],
    },
  ] satisfies ServiceCard[],
};

// ─── Industry Cases ───────────────────────────────────────────────────────────

export const CASES = {
  sectionLabel: "CASOS DE USO",
  headline: "Soluciones reales para desafíos reales",
  items: [
    {
      industry: "Inmobiliaria",
      challenge:
        "Consultas fuera de horario y seguimiento manual lento que provoca pérdida de oportunidades calificadas.",
      implementation:
        "Agente de IA entrenado con el catálogo y criterios comerciales que responde 24/7, envía fichas técnicas y pre-califica interesados antes de derivarlos al equipo humano.",
      result: "Más leads calificados y menor tiempo de respuesta comercial",
    },
    {
      industry: "Retail & E-Commerce",
      challenge:
        "Alto volumen de consultas repetitivas sobre envíos y pedidos que consume tiempo del equipo y retrasa respuestas importantes.",
      implementation:
        "Agente de IA integrado al CRM y al sistema de envíos que resuelve consultas frecuentes y deriva solo los casos relevantes.",
      result: "Reducción de carga operativa y mejor experiencia del cliente",
    },
    {
      industry: "Automotriz",
      challenge:
        "Seguimiento desordenado de leads y falta de visibilidad del estado comercial de cada oportunidad.",
      implementation:
        "Automatización del funnel de ventas con IA que contacta leads, prioriza oportunidades y sincroniza el seguimiento con el equipo comercial.",
      result: "Proceso comercial más ordenado y mayor tasa de conversión",
    },
    {
      industry: "Servicios Profesionales y PyMEs",
      challenge:
        "Procesos internos manuales, desordenados y dependientes de personas clave para emails, tareas y seguimiento.",
      implementation:
        "Automatización de procesos internos con IA para gestión de correos, asignación de tareas, seguimiento operativo e integraciones entre herramientas.",
      result: "Menos tareas manuales y equipos enfocados en trabajo de mayor valor",
    },
  ] satisfies IndustryCase[],
};

// ─── Methodology ──────────────────────────────────────────────────────────────

export const METHODOLOGY = {
  sectionLabel: "METODOLOGÍA",
  headline: "Implementación sin fricción",
  steps: [
    {
      number: "01",
      title: "Detección del problema",
      description:
        "Analizamos cómo funciona hoy tu negocio y detectamos tareas manuales, cuellos de botella y oportunidades de automatización.",
    },
    {
      number: "02",
      title: "Diseño de la solución",
      description:
        "Definimos qué procesos automatizar, qué tareas delegar a IA y cómo debe integrarse a tu operación real.",
    },
    {
      number: "03",
      title: "Implementación",
      description:
        "Construimos e integramos los sistemas de IA, ya sea automatizaciones internas o agentes personalizados según el caso.",
    },
    {
      number: "04",
      title: "Optimización continua",
      description:
        "Medimos resultados, ajustamos flujos y mejoramos el sistema para maximizar impacto y eficiencia.",
    },
  ] satisfies MethodologyStep[],
  quote: "No buscamos sumar clientes. Buscamos construir casos de éxito reales.",
  complementaryText:
    "Trabajamos con cada empresa de forma personalizada, involucrándonos en el problema, la solución y los resultados.",
  cta: "Agendar ahora",
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ = {
  sectionLabel: "RESOLUCIÓN DE DUDAS",
  headline: "Transparencia desde el inicio",
  items: [
    {
      question: "¿Esto tiene sentido para mi empresa?",
      answer:
        "Si tu equipo pierde tiempo en tareas repetitivas, responde las mismas consultas una y otra vez, o depende de procesos manuales que podrían automatizarse, probablemente sí. En la primera llamada evaluamos juntos si hay una oportunidad real.",
    },
    {
      question: "¿Es muy costoso implementar este tipo de soluciones?",
      answer:
        "No necesariamente. Trabajamos con un enfoque modular: empezamos con una solución concreta que genera impacto rápido y escalamos desde ahí. No proponemos proyectos enormes sin antes demostrar valor.",
    },
    {
      question: "¿Cuánto tiempo lleva implementarlo?",
      answer:
        "Dependiendo del alcance, una primera versión funcional puede estar lista en 2 a 4 semanas. Priorizamos entregar algo que funcione rápido y mejorar iterativamente.",
    },
    {
      question: "¿Esto reemplaza a personas?",
      answer:
        "No. Nuestras soluciones están diseñadas para liberar a tu equipo de tareas repetitivas y de bajo valor, para que puedan enfocarse en lo que realmente importa: vender, atender y tomar decisiones.",
    },
    {
      question: "¿Se integra con mis herramientas actuales?",
      answer:
        "Sí. Trabajamos con las herramientas que ya usás: Google Workspace, Microsoft 365, CRMs, ERPs, WhatsApp, Telegram, y más. La integración es parte central de lo que hacemos.",
    },
    {
      question: "¿Qué pasa con la seguridad de la información?",
      answer:
        "La seguridad es prioridad. Toda la información se procesa de forma encriptada, los accesos están controlados y seguimos buenas prácticas de manejo de datos. Además, podemos trabajar con infraestructura propia o privada si tu empresa lo requiere.",
    },
  ] satisfies FaqItem[],
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  headline: "Iniciemos la Inmersión",
  description:
    "Completá el formulario para que nuestro equipo técnico analice la viabilidad de tu proyecto. Te contactamos en menos de 24hs hábiles.",
  contactInfo: [
    {
      type: "Diagnóstico",
      value: "Llamada de 30 min",
      href: "#contacto",
    },
    {
      type: "WhatsApp",
      value: "+598 98 035 567",
      href: "https://wa.me/59898035567",
    },
    {
      type: "Email",
      value: "contact@diveautomations.com",
      href: "mailto:contact@diveautomations.com",
    },
  ] satisfies ContactInfo[],
  formFields: [
    {
      name: "nombre",
      label: "Nombre completo",
      placeholder: "Tu nombre",
      type: "text",
      required: true,
    },
    {
      name: "empresa",
      label: "Empresa",
      placeholder: "Nombre de tu empresa",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email corporativo",
      placeholder: "tu@empresa.com",
      type: "email",
      required: true,
    },
    {
      name: "desafio",
      label: "Desafío a automatizar",
      placeholder:
        "Contanos qué tarea repetitiva te hace perder más tiempo hoy...",
      type: "textarea",
      required: true,
    },
  ] satisfies FormField[],
  cta: "EVALUAR MI CASO",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  tagline:
    "Automatización e inteligencia artificial para empresas que quieren escalar.",
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de uso", href: "#casos" },
    { label: "Metodología", href: "#metodologia" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ] satisfies NavLink[],
  linkedin: "https://www.linkedin.com/company/diveautomations",
  instagram: "https://www.instagram.com/dive.automations",
  copyright: "© 2025 Dive Automations. Todos los derechos reservados.",
  location: "Montevideo, Uruguay",
};
