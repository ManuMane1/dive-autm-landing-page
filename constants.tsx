
import React from 'react';
import { Bot, Cpu, MessageSquare, Mail, BarChart3, Clock, LayoutGrid, Layers } from 'lucide-react';
import { CaseStudy, FAQItem } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
  industry: "Real Estate",
  problem: "Consultas fuera de horario y seguimiento manual lento que provoca pérdida de oportunidades calificadas.",
  solution: "Agente de IA entrenado con el catálogo y criterios comerciales que responde 24/7, envía fichas técnicas y pre-califica interesados antes de derivarlos al equipo humano.",
  result: "Más leads calificados y menor tiempo de respuesta comercial"
},
{
  industry: "Retail & E-commerce",
  problem: "Alto volumen de consultas repetitivas sobre envíos y pedidos que consume tiempo del equipo y retrasa respuestas importantes.",
  solution: "Agente de IA integrado al CRM y al sistema de envíos que resuelve consultas frecuentes y deriva solo los casos relevantes.",
  result: "Reducción de carga operativa y mejor experiencia del cliente"
},
{
  industry: "Automotriz",
  problem: "Seguimiento desordenado de leads y falta de visibilidad del estado comercial de cada oportunidad.",
  solution: "Automatización del funnel de ventas con IA que contacta leads, prioriza oportunidades y sincroniza el seguimiento con el equipo comercial.",
  result: "Proceso comercial más ordenado y mayor tasa de conversión"
},
{
  industry: "Servicios profesionales y pymes",
  problem: "Procesos internos manuales, desordenados y dependientes de personas clave para emails, tareas y seguimiento.",
  solution: "Automatización de procesos internos con IA para gestión de correos, asignación de tareas, seguimiento operativo e integraciones entre herramientas.",
  result: "Menos tareas manuales y equipos enfocados en trabajo de mayor valor"
}


];

export const FAQS: FAQItem[] = [
  {
    question: "¿Esto tiene sentido para mi empresa?",
    answer: "Lo evaluamos juntos. Analizamos cómo funciona hoy tu operación y detectamos si hay procesos donde la automatización con IA realmente genera impacto. Si no tiene sentido, lo decimos."
  },
  {
    question: "¿Es muy costoso implementar este tipo de soluciones?",
    answer: "No necesariamente. Diseñamos soluciones a medida y modulares. En la mayoría de los casos, el ahorro de tiempo operativo y la mejora en los procesos compensan rápidamente la inversión."
  },
  {
    question: "¿Cuánto tiempo lleva implementarlo?",
    answer: "Depende del alcance. Algunos sistemas pueden estar operativos en pocas semanas. Otros requieren una implementación progresiva. Siempre priorizamos impacto rápido sin interrumpir la operación."
  },
  {
    question: "¿Esto reemplaza a personas?",
    answer: "No. Automatizamos tareas, no roles. La idea es liberar a los equipos de trabajo repetitivo para que puedan enfocarse en decisiones, clientes y tareas de mayor valor."
  },
  {
    question: "¿Se integra con mis herramientas actuales?",
    answer: "Sí. Trabajamos sobre tu ecosistema existente e integramos con CRMs, WhatsApp Business, correo, sistemas internos y otras herramientas habituales sin fricción."
  },
  {
    question: "¿Qué pasa con la seguridad de la información?",
    answer: "La seguridad es prioritaria. Los datos se utilizan únicamente para tu solución, con protocolos de protección de nivel empresarial y sin reutilización para otros clientes."
  }
];


export const SOLUTIONS = [
  {
    title: "Agentes de IA Personalizados",
    description: "Asistentes digitales entrenados con el conocimiento específico de tu empresa. Responden consultas, ordenan información y califican oportunidades, trabajando junto a tu equipo y respetando el proceso comercial definido.",
    icon: <Bot className="w-10 h-10" />,
    features: [
      "Atención multicanal 24/7",
      "Entrenamiento con tu documentación y contenido",
      "Tono de marca personalizado",
      "Calificación y derivación inteligente"
    ]
  },
  {
    title: "Automatización y Estructura de Procesos",
    description: "Diseñamos y automatizamos flujos de trabajo internos para reducir tareas manuales, eliminar errores operativos y mejorar la coordinación entre áreas del negocio.",
    icon: <Layers className="w-10 h-10" />,
    features: [
      "Automatización de flujos operativos",
      "Integración entre sistemas y bases de datos",
      "Reportes inteligentes en tiempo real",
      "Alertas y seguimiento automatizado"
    ]
  }
];

export const PROCESS = [
  {
    id: "01",
    title: "Detección del problema",
    desc: "Analizamos cómo funciona hoy tu negocio y detectamos tareas manuales, cuellos de botella y oportunidades de automatización."
  },
  {
    id: "02",
    title: "Diseño de la solución",
    desc: "Definimos qué procesos automatizar, qué tareas delegar a IA y cómo debe integrarse a tu operación real."
  },
  {
    id: "03",
    title: "Implementación",
    desc: "Construimos e integramos los sistemas de IA, ya sea automatizaciones internas o agentes personalizados según el caso."
  },
  {
    id: "04",
    title: "Optimización continua",
    desc: "Medimos resultados, ajustamos flujos y mejoramos el sistema para maximizar impacto y eficiencia."
  }
];

