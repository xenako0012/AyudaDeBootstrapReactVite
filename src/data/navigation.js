// Estructura de navegación de la guía.
// Se usa para el sidebar, el menú móvil, la búsqueda (Ctrl+K) y la navegación anterior/siguiente.

export const navSections = [
  {
    title: 'Empezar',
    items: [
      {
        to: '/',
        label: 'Inicio',
        icon: 'bi-house-door',
        keywords: 'portada introduccion stack frontend guia',
      },
    ],
  },
  {
    title: 'Teoría',
    items: [
      {
        to: '/teoria/bootstrap',
        label: 'Bootstrap',
        icon: 'bi-bootstrap',
        keywords:
          'bootstrap css framework grid columnas breakpoints utilidades clases sass variables componentes responsive mobile first version 5.3',
      },
      {
        to: '/teoria/vite',
        label: 'Vite',
        icon: 'bi-lightning-charge',
        keywords:
          'vite bundler dev server hmr import meta env build rollup esbuild comandos npm create vite preview bundler webpack comparacion',
      },
      {
        to: '/teoria/react',
        label: 'React',
        icon: 'bi-code-slash',
        keywords:
          'react jsx componentes props estado hooks usestate useeffect usememo usecallback useref usecontext custom hooks listas keys formularios controlados',
      },
    ],
  },
  {
    title: 'Integración',
    items: [
      {
        to: '/integracion',
        label: 'Bootstrap + React + Vite',
        icon: 'bi-diagram-3',
        keywords:
          'instalar bootstrap react vite import css cdn react-bootstrap reactstrap sass personalizar tema npm install',
      },
    ],
  },
  {
    title: 'Referencia',
    items: [
      {
        to: '/componentes',
        label: 'Componentes de Bootstrap',
        icon: 'bi-grid-3x3-gap',
        keywords:
          'botones alertas badges cards navbar nav accordion modal dropdown carousel tabs forms tablas progress spinner toast offcanvas tooltip pagination breadcrumb list group placeholders',
      },
      {
        to: '/recursos',
        label: 'Cheatsheet y recursos',
        icon: 'bi-journal-code',
        keywords:
          'chuleta comandos atajos enlaces documentacion oficial glosario variables entorno estructura proyecto',
      },
    ],
  },
  {
    title: 'Práctica',
    items: [
      {
        to: '/practica',
        label: 'Proyecto guiado',
        icon: 'bi-hammer',
        keywords:
          'tutorial paso a paso task manager gestor tareas crud localstorage proyecto final',
      },
      {
        to: '/ejercicios',
        label: 'Ejercicios',
        icon: 'bi-patch-check',
        keywords: 'retos practicas desafios soluciones nivel principiante avanzado',
      },
      {
        to: '/quiz',
        label: 'Quiz',
        icon: 'bi-patch-question',
        keywords: 'test preguntas examen evaluacion autoevaluacion',
      },
    ],
  },
]

// Lista plana: recorre las páginas en orden (para Anterior / Siguiente)
export const flatNav = navSections.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title })),
)

export function getPrevNext(pathname) {
  const index = flatNav.findIndex((item) => item.to === pathname)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? flatNav[index - 1] : null,
    next: index < flatNav.length - 1 ? flatNav[index + 1] : null,
  }
}
