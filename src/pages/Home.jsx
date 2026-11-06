import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { versions } from '../data/siteData'

const aprender = [
  {
    to: '/teoria/bootstrap',
    icon: 'bi-bootstrap',
    variant: '',
    title: 'Bootstrap a fondo',
    text: 'Grid de 12 columnas, breakpoints, utilidades, componentes, SASS y accesibilidad. La base visual de tu app.',
  },
  {
    to: '/teoria/vite',
    icon: 'bi-lightning-charge',
    variant: 'icon-tile--vite',
    title: 'Vite sin misterios',
    text: 'Dev server instantáneo, HMR, build con Rollup, variables de entorno y configuración real.',
  },
  {
    to: '/teoria/react',
    icon: 'bi-code-slash',
    variant: 'icon-tile--react',
    title: 'React moderno',
    text: 'Componentes, props, estado, hooks, renderizado de listas y formularios controlados con React 19.',
  },
  {
    to: '/integracion',
    icon: 'bi-diagram-3',
    variant: 'icon-tile--ok',
    title: 'Integración real',
    text: 'Cuatro formas de juntar Bootstrap con React, con sus ventajas, inconvenientes y ejemplos listos.',
  },
  {
    to: '/componentes',
    icon: 'bi-grid-3x3-gap',
    variant: 'icon-tile--warn',
    title: '25+ componentes',
    text: 'Catálogo interactivo con vista previa en vivo y el código exacto de cada componente de Bootstrap.',
  },
  {
    to: '/practica',
    icon: 'bi-hammer',
    variant: '',
    title: 'Práctica de verdad',
    text: 'Proyecto guiado paso a paso, 10 ejercicios con solución y un quiz para comprobar lo aprendido.',
  },
]

const ruta = [
  { title: 'Prepara el entorno', text: 'Node 20+, npm y un editor. Creas el proyecto con npm create vite@latest.' },
  { title: 'Entiende el CSS', text: 'Aprendes Bootstrap: grid, utilidades y componentes. Sin frameworks de JS todavía.' },
  { title: 'Domina React', text: 'Componentes, props y estado. Aprendes a pensar en «piezas reutilizables».' },
  { title: 'Une las piezas', text: 'Instalas Bootstrap en Vite, lo importas una vez y usas sus clases en JSX.' },
  { title: 'Construye', text: 'Montas una app real: formularios, listas, modales, filtros y persistencia.' },
  { title: 'Publica', text: 'vite build, dist/ y subes a GitHub Pages, Netlify o Vercel con git.' },
]

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero mb-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <span className="chip chip-brand mb-3">
              <i className="bi bi-stars" /> Teoría + práctica + referencia
            </span>
            <h1 className="display-hero mb-3">
              Aprende <span className="grad-text">Bootstrap</span>,{' '}
              <span className="grad-text">Vite</span> y <span className="grad-text">React</span> de cero a
              producción
            </h1>
            <p className="page-lead mb-4">
              Una guía completa en español con la teoría explicada, más de 40 ejemplos ejecutables, el
              catálogo de componentes de Bootstrap, un proyecto guiado, ejercicios y quiz. Todo el stack
              del frontend moderno en un solo sitio.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <Link to="/teoria/bootstrap" className="btn btn-brand btn-lg">
                Empezar la guía <i className="bi bi-arrow-right ms-1" />
              </Link>
              <Link to="/componentes" className="btn btn-soft btn-lg">
                <i className="bi bi-grid-3x3-gap me-1" /> Ver componentes
              </Link>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <span className="tech-pill">
                <i className="bi bi-bootstrap-fill" style={{ color: '#7952b3' }} /> Bootstrap {versions.bootstrap}
              </span>
              <span className="tech-pill">
                <i className="bi bi-lightning-charge-fill" style={{ color: '#a855f7' }} /> Vite {versions.vite}
              </span>
              <span className="tech-pill">
                <i className="bi bi-code-slash" style={{ color: '#0891b2' }} /> React {versions.react}
              </span>
              <span className="tech-pill">
                <i className="bi bi-git" style={{ color: '#f05033' }} /> Git + GitHub
              </span>
            </div>
          </div>

          <div className="col-lg-5">
            <CodeBlock
              title="src/main.jsx"
              language="jsx"
              code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App'

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />)`}
            />
            <CodeBlock
              title="src/App.jsx"
              language="jsx"
              code={`export default function App() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold">¡Hola, mundo!</h1>
      <button className="btn btn-primary">Púlsame</button>
    </div>
  )
}`}
            />
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="mb-5">
        <div className="row g-3">
          {[
            { n: '3', l: 'tecnologías del stack', i: 'bi-layers' },
            { n: '25+', l: 'componentes demostrados', i: 'bi-grid-3x3-gap' },
            { n: '40+', l: 'ejemplos con código', i: 'bi-code-square' },
            { n: '10', l: 'ejercicios con solución', i: 'bi-patch-check' },
            { n: '100%', l: 'en español', i: 'bi-translate' },
          ].map((s) => (
            <div className="col-6 col-lg" key={s.l}>
              <div className="panel p-3 h-100">
                <i className={`bi ${s.i} text-primary`} />
                <div className="h3 fw-bold mb-0 mt-1">{s.n}</div>
                <div className="fs-8 text-soft">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- QUÉ VAS A APRENDER ---------------- */}
      <section className="mb-5">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-3">
          <div>
            <h2 className="section-title mb-1">¿Qué vas a aprender?</h2>
            <p className="text-soft mb-0">Seis bloques que cubren todo el recorrido, de la teoría al despliegue.</p>
          </div>
          <Link to="/recursos" className="btn btn-soft btn-sm">
            <i className="bi bi-journal-code me-1" /> Cheatsheet
          </Link>
        </div>

        <div className="row g-3">
          {aprender.map((c) => (
            <div className="col-md-6 col-xl-4" key={c.to}>
              <Link to={c.to} className="learn-card">
                <span className={`icon-tile ${c.variant}`}>
                  <i className={`bi ${c.icon}`} />
                </span>
                <h3 className="h6 fw-bold mb-2">{c.title}</h3>
                <p className="fs-7 text-soft mb-3">{c.text}</p>
                <span className="mt-auto fs-7 fw-600 text-primary">
                  Ver sección <i className="bi bi-arrow-right" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- STACK EN 30 SEGUNDOS ---------------- */}
      <section className="mb-5">
        <h2 className="section-title">El stack en 30 segundos</h2>
        <div className="row g-3">
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="icon-tile mb-0" style={{ width: 36, height: 36, fontSize: '1rem' }}>
                  <i className="bi bi-bootstrap-fill" />
                </span>
                <h3 className="h6 fw-bold mb-0">Bootstrap</h3>
              </div>
              <p className="fs-7 text-soft mb-2">
                Framework <strong className="text-strong">CSS</strong> con grid responsive, utilidades y
                componentes listos. Se usa mediante clases: <code className="inline-code">btn btn-primary</code>.
              </p>
              <span className="chip fs-8">Diseño · Layout · Componentes</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="icon-tile icon-tile--vite mb-0" style={{ width: 36, height: 36, fontSize: '1rem' }}>
                  <i className="bi bi-lightning-charge-fill" />
                </span>
                <h3 className="h6 fw-bold mb-0">Vite</h3>
              </div>
              <p className="fs-7 text-soft mb-2">
                <strong className="text-strong">Herramienta de desarrollo y build</strong>: servidor
                instantáneo con HMR y empaquetado optimizado con Rollup. Sustituye a Create React App.
              </p>
              <span className="chip fs-8">Dev server · HMR · Build</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="icon-tile icon-tile--react mb-0" style={{ width: 36, height: 36, fontSize: '1rem' }}>
                  <i className="bi bi-code-slash" />
                </span>
                <h3 className="h6 fw-bold mb-0">React</h3>
              </div>
              <p className="fs-7 text-soft mb-2">
                <strong className="text-strong">Librería de UI</strong> basada en componentes. Gestiona el
                estado y actualiza el DOM de forma eficiente con su Virtual DOM.
              </p>
              <span className="chip fs-8">Componentes · Estado · SPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- RUTA ---------------- */}
      <section className="mb-5">
        <div className="panel p-4 p-lg-5">
          <h2 className="section-title">Ruta de aprendizaje recomendada</h2>
          <p className="text-soft">Seis pasos. Si sigues este orden, cada pieza encaja con la anterior.</p>
          <div className="row g-4 mt-1">
            {ruta.map((r, i) => (
              <div className="col-md-6" key={r.title}>
                <div className="step" data-step={i + 1}>
                  <h3>{r.title}</h3>
                  <p className="fs-7 text-soft mb-0">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mb-4">
        <div className="hero">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="h2 fw-bold mb-2">¿Listo para tu primera app?</h2>
              <p className="page-lead mb-0">
                Empieza por la teoría de Bootstrap, sigue con React y termina construyendo el gestor de
                tareas. En menos de dos horas tienes una app real publicada con git.
              </p>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-2">
              <Link to="/practica" className="btn btn-brand">
                <i className="bi bi-hammer me-1" /> Proyecto guiado
              </Link>
              <Link to="/ejercicios" className="btn btn-soft">
                <i className="bi bi-patch-check me-1" /> Ejercicios
              </Link>
              <Link to="/quiz" className="btn btn-soft">
                <i className="bi bi-patch-question me-1" /> Pon a prueba tu nivel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
