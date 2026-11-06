// Datos compartidos: versiones, enlaces oficiales y contenidos de referencia.

export const versions = {
  bootstrap: '5.3.x',
  vite: '8.x',
  react: '19.x',
  node: '20.19+ / 22.12+',
}

export const officialLinks = [
  {
    group: 'Bootstrap',
    icon: 'bi-bootstrap',
    links: [
      { label: 'Documentación oficial', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
      { label: 'Componentes', url: 'https://getbootstrap.com/docs/5.3/components/accordion/' },
      { label: 'Utilidades', url: 'https://getbootstrap.com/docs/5.3/utilities/spacing/' },
      { label: 'Iconos (Bootstrap Icons)', url: 'https://icons.getbootstrap.com/' },
      { label: 'Repositorio en GitHub', url: 'https://github.com/twbs/bootstrap' },
      { label: 'Ejemplos oficiales', url: 'https://getbootstrap.com/docs/5.3/examples/' },
    ],
  },
  {
    group: 'Vite',
    icon: 'bi-lightning-charge',
    links: [
      { label: 'Guía oficial', url: 'https://vite.dev/guide/' },
      { label: 'Referencia de configuración', url: 'https://vite.dev/config/' },
      { label: 'Crear proyecto (create-vite)', url: 'https://vite.dev/guide/#scaffolding-your-first-vite-project' },
      { label: 'Variables de entorno', url: 'https://vite.dev/guide/env-and-mode' },
      { label: 'Repositorio en GitHub', url: 'https://github.com/vitejs/vite' },
      { label: 'Awesome Vite (plugins)', url: 'https://github.com/vitejs/awesome-vite' },
    ],
  },
  {
    group: 'React',
    icon: 'bi-code-slash',
    links: [
      { label: 'Documentación oficial (es)', url: 'https://es.react.dev/' },
      { label: 'Aprender React', url: 'https://es.react.dev/learn' },
      { label: 'Referencia de hooks', url: 'https://es.react.dev/reference/react' },
      { label: 'React Router', url: 'https://reactrouter.com/' },
      { label: 'React Bootstrap', url: 'https://react-bootstrap.github.io/' },
      { label: 'Repositorio en GitHub', url: 'https://github.com/facebook/react' },
    ],
  },
]

export const breakpoints = [
  { name: 'xs', infix: '', min: 'Sin media query', width: '< 576px', container: '100%' },
  { name: 'sm', infix: '-sm', min: '576px', width: '≥ 576px', container: '540px' },
  { name: 'md', infix: '-md', min: '768px', width: '≥ 768px', container: '720px' },
  { name: 'lg', infix: '-lg', min: '992px', width: '≥ 992px', container: '960px' },
  { name: 'xl', infix: '-xl', min: '1200px', width: '≥ 1200px', container: '1140px' },
  { name: 'xxl', infix: '-xxl', min: '1400px', width: '≥ 1400px', container: '1320px' },
]

// Utilidades que más se usan en el día a día (para el cheatsheet)
export const utilityCheatsheet = [
  { cls: 'container / container-fluid', desc: 'Contenedor centrado con ancho máximo / ancho 100%.' },
  { cls: 'row', desc: 'Fila del grid (flex + gutters negativos).' },
  { cls: 'col-6 / col-md-4', desc: 'Columnas de 1 a 12, con breakpoint opcional.' },
  { cls: 'row-cols-1 row-cols-md-3', desc: 'Define cuántas columnas por fila sin repetir clases.' },
  { cls: 'g-3 / gx-4 / gy-2', desc: 'Espaciado (gutters) global, horizontal o vertical.' },
  { cls: 'd-flex / d-none d-lg-block', desc: 'Display y visibilidad responsive.' },
  { cls: 'justify-content-center / align-items-center', desc: 'Alineación en flexbox.' },
  { cls: 'gap-2 / gap-md-4', desc: 'Separación entre hijos flex/grid.' },
  { cls: 'm-0 / mt-3 / p-4 / px-2', desc: 'Márgenes y paddings en escala 0–5 (y auto).' },
  { cls: 'text-center / text-lg-start', desc: 'Alineación de texto responsive.' },
  { cls: 'fw-bold / fst-italic / text-uppercase', desc: 'Tipografía: peso, estilo, transformación.' },
  { cls: 'text-primary / bg-dark / bg-opacity-50', desc: 'Colores de texto y fondo.' },
  { cls: 'rounded-3 / rounded-pill / shadow-sm', desc: 'Bordes redondeados y sombras.' },
  { cls: 'w-100 / h-100 / mw-100', desc: 'Anchos y altos.' },
  { cls: 'position-relative / position-absolute top-0 start-0', desc: 'Posicionamiento.' },
  { cls: 'border / border-0 / border-top', desc: 'Bordes.' },
  { cls: 'visually-hidden', desc: 'Oculto a la vista pero accesible para lectores de pantalla.' },
  { cls: 'sticky-top / sticky-lg-top', desc: 'Elemento pegajoso al hacer scroll.' },
]

export const viteCommands = [
  { cmd: 'npm create vite@latest mi-app -- --template react', desc: 'Crea un proyecto React con Vite.' },
  { cmd: 'npm create vite@latest mi-app -- --template react-swc', desc: 'Igual, usando SWC (más rápido).' },
  { cmd: 'cd mi-app && npm install', desc: 'Entra en la carpeta e instala dependencias.' },
  { cmd: 'npm run dev', desc: 'Servidor de desarrollo con HMR (http://localhost:5173).' },
  { cmd: 'npm run build', desc: 'Genera la versión de producción en dist/.' },
  { cmd: 'npm run preview', desc: 'Sirve localmente el build de dist/.' },
  { cmd: 'npm install bootstrap bootstrap-icons', desc: 'Añade Bootstrap e iconos al proyecto.' },
  { cmd: 'npx vite --host', desc: 'Expone el servidor en la red local.' },
]

export const reactHooksCheatsheet = [
  { hook: 'useState(valor)', desc: 'Estado local del componente. Devuelve [valor, setValor].' },
  { hook: 'useEffect(fn, deps)', desc: 'Efectos secundarios: fetch, suscripciones, DOM. [] = solo al montar.' },
  { hook: 'useContext(Contexto)', desc: 'Lee un valor global sin pasar props manualmente.' },
  { hook: 'useReducer(reducer, inicial)', desc: 'Estado complejo con acciones despachadas.' },
  { hook: 'useRef(inicial)', desc: 'Referencia mutable que no provoca re-render (DOM, timers).' },
  { hook: 'useMemo(fn, deps)', desc: 'Memoriza un valor calculado costoso.' },
  { hook: 'useCallback(fn, deps)', desc: 'Memoriza una función (útil con memo/efectos).' },
  { hook: 'useId()', desc: 'Genera IDs únicos y estables (accesibilidad, formularios).' },
  { hook: 'useTransition()', desc: 'Marca actualizaciones como no urgentes.' },
  { hook: 'useActionState(fn, init)', desc: 'Estado de formularios y acciones (React 19).' },
]

export const glossary = [
  { term: 'Framework / Librería', def: 'Bootstrap es un framework CSS; React es una librería de UI; Vite es un build tool.' },
  { term: 'Bundler', def: 'Herramienta que junta módulos (JS, CSS, imágenes) en archivos optimizados para el navegador.' },
  { term: 'HMR', def: 'Hot Module Replacement: recarga módulos en caliente sin perder el estado de la app.' },
  { term: 'JSX', def: 'Extensión de sintaxis que permite escribir marcado dentro de JavaScript.' },
  { term: 'Componente', def: 'Función que devuelve JSX. La unidad básica de reutilización en React.' },
  { term: 'Props', def: 'Datos que un componente padre pasa a un hijo. Solo lectura.' },
  { term: 'Estado (state)', def: 'Datos que pertenecen a un componente y, al cambiar, provocan un re-render.' },
  { term: 'Hook', def: 'Función que empieza por "use" y permite usar estado y ciclo de vida en componentes funcionales.' },
  { term: 'Virtual DOM', def: 'Representación en memoria de la UI con la que React calcula los cambios mínimos del DOM real.' },
  { term: 'SPA', def: 'Single Page Application: una sola página HTML que cambia de vista sin recargar.' },
  { term: 'Grid (12 columnas)', def: 'Sistema de maquetación de Bootstrap basado en filas y columnas flexibles.' },
  { term: 'Breakpoint', def: 'Ancho de pantalla en el que cambia el layout (sm, md, lg, xl, xxl).' },
  { term: 'Mobile first', def: 'Diseñar primero para móvil y añadir estilos con min-width hacia arriba.' },
  { term: 'Utility-first', def: 'Estilos mediante clases pequeñas y atómicas (d-flex, mt-3, text-center).' },
  { term: 'Tree shaking', def: 'Eliminación del código no utilizado en el bundle final.' },
  { term: 'dist/', def: 'Carpeta generada por vite build con los archivos listos para producción.' },
]
