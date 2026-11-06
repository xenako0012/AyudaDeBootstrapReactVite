import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import PrevNext from '../components/PrevNext'
import {
  breakpoints,
  utilityCheatsheet,
  viteCommands,
  reactHooksCheatsheet,
  glossary,
  officialLinks,
  versions,
} from '../data/siteData'

const TABS = [
  { id: 'grid', label: 'Grid', icon: 'bi-grid-3x3' },
  { id: 'utilidades', label: 'Utilidades', icon: 'bi-magic' },
  { id: 'vite', label: 'Comandos Vite', icon: 'bi-terminal' },
  { id: 'hooks', label: 'Hooks', icon: 'bi-braces' },
  { id: 'estructura', label: 'Estructura', icon: 'bi-folder2-open' },
  { id: 'glosario', label: 'Glosario', icon: 'bi-book' },
]

const estructura = `mi-app/
├── index.html               # entrada de Vite (¡en la raíz!)
├── package.json             # dependencias y scripts
├── vite.config.js           # config del servidor y del build
├── .env.example             # variables VITE_* documentadas
├── public/                  # estáticos sin procesar (favicon, robots.txt)
└── src/
    ├── main.jsx             # montaje + imports globales
    ├── App.jsx              # rutas / layout raíz
    ├── components/
    │   ├── Layout.jsx       # navbar + sidebar + footer
    │   ├── CodeBlock.jsx
    │   └── ui/              # Button, Card, Modal propios
    ├── pages/               # una vista por ruta
    ├── hooks/               # useLocalStorage, useFetch
    ├── context/             # providers (tema, auth)
    ├── services/            # fetch a la API
    ├── data/                # constantes y navegación
    ├── utils/               # funciones puras
    └── styles/
        └── custom.css       # estilos propios (después de Bootstrap)`

const atajos = [
  { k: 'Ctrl + K', d: 'Búsqueda global en esta guía' },
  { k: 'npm run dev', d: 'Arrancar el servidor de desarrollo' },
  { k: 'Ctrl + Shift + R', d: 'Recarga forzada si el HMR se queda pegado' },
  { k: 'Ctrl + P', d: 'Abrir archivo por nombre (VS Code)' },
  { k: 'Ctrl + Shift + P', d: 'Paleta de comandos (VS Code)' },
  { k: 'Alt + Shift + F', d: 'Formatear documento (VS Code)' },
  { k: 'F12', d: 'Abrir DevTools del navegador' },
  { k: 'Ctrl + Shift + C', d: 'Inspeccionar elemento' },
]

export default function Recursos() {
  const [tab, setTab] = useState('grid')

  return (
    <>
      <PageHeader
        eyebrow="Referencia"
        title="Cheatsheet, atajos y recursos"
        lead="Todo lo que vas a consultar mil veces, en una sola página: grid, utilidades, comandos, hooks, estructura de carpetas, glosario y enlaces oficiales."
        chips={[`Bootstrap ${versions.bootstrap}`, `Vite ${versions.vite}`, `React ${versions.react}`]}
        links={[{ label: 'Docs Bootstrap', url: 'https://getbootstrap.com/docs/5.3/' }]}
      />

      {/* Tabs */}
      <div className="panel p-3 p-lg-4 mb-5">
        <ul className="nav nav-pills gap-2 mb-4 flex-wrap">
          {TABS.map((t) => (
            <li className="nav-item" key={t.id}>
              <button
                type="button"
                className={`nav-link ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <i className={`bi ${t.icon} me-1`} />
                {t.label}
              </button>
            </li>
          ))}
        </ul>

        {tab === 'grid' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Sistema de grid de 12 columnas</h2>
            <div className="table-wrap mb-2">
              <table className="table table-doc">
                <thead>
                  <tr>
                    <th>Breakpoint</th>
                    <th>Infijo</th>
                    <th>Desde</th>
                    <th>Container</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  {breakpoints.map((b) => (
                    <tr key={b.name}>
                      <td><strong className="text-strong">{b.name}</strong></td>
                      <td><code>{b.infijo || '—'}</code></td>
                      <td>{b.min}</td>
                      <td>{b.container}</td>
                      <td><code>{`col${b.infijo}-6`}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock
              language="jsx"
              title="patrones de grid que más se usan"
              code={`{/* Dos columnas que se apilan en móvil */}
<div className="row">
  <div className="col-12 col-md-8">Contenido</div>
  <div className="col-12 col-md-4">Sidebar</div>
</div>

{/* Tarjetas automáticas: 1 → 2 → 4 */}
<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">

{/* Centrar el contenido de una fila */}
<div className="row justify-content-center">
  <div className="col-md-6">Centrado</div>
</div>

{/* Columna de ancho automático */}
<div className="row">
  <div className="col">Se reparten</div>
  <div className="col">el espacio</div>
  <div className="col-auto">Solo lo necesario</div>
</div>

{/* Offsets y orden */}
<div className="col-md-4 offset-md-2">Desplazada</div>
<div className="col order-md-2">Segunda en desktop</div>`}
            />
          </div>
        )}

        {tab === 'utilidades' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Utilidades imprescindibles</h2>
            <div className="table-wrap mb-3">
              <table className="table table-doc">
                <thead>
                  <tr>
                    <th>Clase</th>
                    <th>Qué hace</th>
                  </tr>
                </thead>
                <tbody>
                  {utilityCheatsheet.map((u) => (
                    <tr key={u.cls}>
                      <td><code>{u.cls}</code></td>
                      <td>{u.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="sub-title">Escala de espaciado</h3>
            <div className="table-wrap">
              <table className="table table-doc">
                <thead>
                  <tr>
                    <th>Clase</th>
                    <th>rem</th>
                    <th>px (16px base)</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <tr key={n}>
                      <td><code>{`m-${n} / p-${n}`}</code></td>
                      <td>{(n * 0.25).toFixed(2)}rem</td>
                      <td>{n * 4}px</td>
                    </tr>
                  ))}
                  <tr><td><code>m-auto</code></td><td>auto</td><td>centra / empuja</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'vite' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Comandos de Vite y npm</h2>
            <div className="table-wrap mb-3">
              <table className="table table-doc">
                <thead>
                  <tr>
                    <th>Comando</th>
                    <th>Para qué</th>
                  </tr>
                </thead>
                <tbody>
                  {viteCommands.map((c) => (
                    <tr key={c.cmd}>
                      <td><code style={{ whiteSpace: 'normal' }}>{c.cmd}</code></td>
                      <td>{c.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock
              language="bash"
              title="git: del local a GitHub"
              code={`git init
git add .
git commit -m "Primer commit de mi app con Bootstrap, Vite y React"
git branch -M main
git remote add origin https://github.com/usuario/mi-app.git
git push -u origin main

# Si trabajas con ramas
git checkout -b feat/componentes
git push -u origin feat/componentes`}
            />
          </div>
        )}

        {tab === 'hooks' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Hooks de React</h2>
            <div className="table-wrap mb-3">
              <table className="table table-doc">
                <thead>
                  <tr>
                    <th>Hook</th>
                    <th>Para qué</th>
                  </tr>
                </thead>
                <tbody>
                  {reactHooksCheatsheet.map((h) => (
                    <tr key={h.hook}>
                      <td><code>{h.hook}</code></td>
                      <td>{h.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock
              language="jsx"
              title="patrón de 4 estados para peticiones"
              code={`const [datos, setDatos] = useState(null)
const [cargando, setCargando] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  let activo = true
  fetch(url)
    .then((r) => { if (!r.ok) throw new Error('Error ' + r.status); return r.json() })
    .then((d) => activo && setDatos(d))
    .catch((e) => activo && setError(e.message))
    .finally(() => activo && setCargando(false))
  return () => { activo = false }
}, [url])`}
            />
          </div>
        )}

        {tab === 'estructura' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Estructura de un proyecto real</h2>
            <CodeBlock language="text" title="árbol de carpetas" code={estructura} />
            <Callout type="tip" title="Regla de oro">
              <p>
                Un componente por archivo, nombre en PascalCase, y carpetas por responsabilidad (no por
                tipo de archivo). Si un componente pasa de ~150 líneas o mezcla lógica de datos y vista,
                sepáralo.
              </p>
            </Callout>
          </div>
        )}

        {tab === 'glosario' && (
          <div>
            <h2 className="h5 fw-bold mb-3">Glosario</h2>
            <div className="row g-3">
              {glossary.map((g) => (
                <div className="col-md-6" key={g.term}>
                  <div className="panel p-3 h-100">
                    <h3 className="h6 fw-bold mb-1">{g.term}</h3>
                    <p className="fs-8 text-soft mb-0">{g.def}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Checklist */}
      <section className="mb-5">
        <h2 className="section-title">Checklist antes de publicar</h2>
        <div className="row g-3">
          {[
            'La consola del navegador está limpia (sin errores ni warnings de keys).',
            'Todas las imágenes tienen alt y los botones con icono tienen aria-label.',
            'Se ve bien en móvil, tablet y escritorio (prueba con DevTools).',
            'npm run build termina sin errores y npm run preview funciona.',
            'La base de vite.config.js coincide con la URL de despliegue.',
            'Las rutas internas conservan el estilo del router al refrescar.',
            '.gitignore incluye node_modules, dist y .env*.',
            'No hay claves VITE_* con secretos reales.',
            'El title y la meta description están personalizados.',
            'README explica cómo instalar, arrancar y desplegar.',
          ].map((c, i) => (
            <div className="col-md-6" key={c}>
              <label className="panel p-3 d-flex gap-2 align-items-start h-100" htmlFor={`chk-${i}`}>
                <input className="form-check-input mt-1" type="checkbox" id={`chk-${i}`} />
                <span className="fs-7">{c}</span>
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Atajos */}
      <section className="mb-5">
        <h2 className="section-title">Atajos que ahorran tiempo</h2>
        <div className="row g-3">
          {atajos.map((a) => (
            <div className="col-sm-6 col-lg-3" key={a.k}>
              <div className="panel p-3 h-100">
                <kbd className="d-inline-block mb-2">{a.k}</kbd>
                <p className="fs-8 text-soft mb-0">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enlaces */}
      <section className="mb-5">
        <h2 className="section-title">Enlaces oficiales y recursos</h2>
        <div className="row g-3">
          {officialLinks.map((g) => (
            <div className="col-lg-4" key={g.group}>
              <div className="panel p-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="icon-tile mb-0" style={{ width: 34, height: 34, fontSize: '0.95rem' }}>
                    <i className={`bi ${g.icon}`} />
                  </span>
                  <h3 className="h6 fw-bold mb-0">{g.group}</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  {g.links.map((l) => (
                    <li key={l.url} className="mb-2">
                      <a
                        className="d-flex align-items-center gap-2 fs-7"
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right fs-8 opacity-50" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mt-3">
          {[
            { t: 'MDN Web Docs', d: 'La referencia de HTML, CSS y JavaScript.', u: 'https://developer.mozilla.org/es/', i: 'bi-globe2' },
            { t: 'Can I use', d: 'Compatibilidad de cada característica CSS/JS.', u: 'https://caniuse.com/', i: 'bi-check2-square' },
            { t: 'Bootstrap Themes', d: 'Plantillas y ejemplos oficiales.', u: 'https://themes.getbootstrap.com/', i: 'bi-palette' },
            { t: 'Vite Awesome', d: 'Plugins y plantillas para Vite.', u: 'https://github.com/vitejs/awesome-vite', i: 'bi-stars' },
            { t: 'React Router', d: 'Rutas, layouts y loaders en SPA.', u: 'https://reactrouter.com/', i: 'bi-signpost-2' },
            { t: 'Good First Issue', d: 'Proyectos open source para practicar.', u: 'https://goodfirstissue.dev/', i: 'bi-people' },
          ].map((r) => (
            <div className="col-md-6 col-lg-4" key={r.t}>
              <a className="learn-card p-3" href={r.u} target="_blank" rel="noreferrer">
                <i className={`bi ${r.i} text-primary mb-2`} />
                <h3 className="h6 fw-bold mb-1">{r.t}</h3>
                <p className="fs-8 text-soft mb-0">{r.d}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <PrevNext />
    </>
  )
}
