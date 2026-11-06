import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import Demo from '../components/Demo'
import PrevNext from '../components/PrevNext'
import { breakpoints } from '../data/siteData'

function GridPlayground() {
  const [size, setSize] = useState(6)
  const [bp, setBp] = useState('md')
  const [count, setCount] = useState(2)

  const colClass = bp ? `col-${bp}-${size}` : `col-${size}`
  const total = Number(size) * Number(count)
  const rest = 12 - (total % 12 || 12)

  const code = `<div className="container">
  <div className="row g-3">
${Array.from({ length: count })
  .map(() => `    <div className="${colClass}">Columna</div>`)
  .join('\n')}
  </div>
</div>`

  return (
    <div className="panel p-4 grid-playground mb-4">
      <div className="d-flex flex-wrap gap-3 align-items-end mb-3">
        <div>
          <label className="fs-8 fw-600 text-soft d-block mb-1" htmlFor="gp-size">
            Columnas: <span className="text-primary">{size}</span>
          </label>
          <input
            id="gp-size"
            type="range"
            min="1"
            max="12"
            value={size}
            className="form-range"
            style={{ width: 170 }}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="fs-8 fw-600 text-soft d-block mb-1" htmlFor="gp-count">
            Elementos: <span className="text-primary">{count}</span>
          </label>
          <input
            id="gp-count"
            type="range"
            min="1"
            max="6"
            value={count}
            className="form-range"
            style={{ width: 140 }}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="fs-8 fw-600 text-soft d-block mb-1" htmlFor="gp-bp">
            Breakpoint
          </label>
          <select
            id="gp-bp"
            className="form-select form-select-sm"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
            style={{ minWidth: 130 }}
          >
            <option value="">Sin breakpoint</option>
            <option value="sm">sm (≥576px)</option>
            <option value="md">md (≥768px)</option>
            <option value="lg">lg (≥992px)</option>
            <option value="xl">xl (≥1200px)</option>
            <option value="xxl">xxl (≥1400px)</option>
          </select>
        </div>
        <div className="ms-auto">
          <span className="chip">
            <i className="bi bi-code" /> {colClass}
          </span>
        </div>
      </div>

      <div className="row g-3 mb-3">
        {Array.from({ length: count }).map((_, i) => (
          <div className={colClass} key={i}>
            <div className="gp-cell">{size}/12</div>
          </div>
        ))}
        {rest > 0 && total % 12 !== 0 && (
          <div className={`col-${bp ? bp + '-' : ''}${rest}`}>
            <div className="gp-cell" style={{ opacity: 0.45 }}>
              {rest}/12 libre
            </div>
          </div>
        )}
      </div>

      <CodeBlock code={code} language="jsx" title="Resultado generado" />
      <p className="fs-8 text-soft mb-0">
        <i className="bi bi-info-circle me-1" />
        Cada fila suma 12 columnas. Si se pasa de 12, la columna extra salta a una línea nueva (excepto con
        <code className="inline-code">row-cols-*</code>).
      </p>
    </div>
  )
}

export default function TeoriaBootstrap() {
  return (
    <>
      <PageHeader
        eyebrow="Teoría · 01"
        title="Bootstrap: el framework CSS que ordena tu interfaz"
        lead="Bootstrap es la forma más rápida de tener un diseño responsive, accesible y consistente sin escribir cientos de líneas de CSS. Aquí verás cómo está construido, cómo funciona su grid y cómo personalizarlo sin pelearte con él."
        chips={['Nivel: básico → avanzado', 'Bootstrap 5.3', 'Mobile first']}
        links={[
          { label: 'Docs oficiales', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
          { label: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/' },
        ]}
      />

      {/* 1. Qué es */}
      <section className="mb-5">
        <h2 className="section-title">1. ¿Qué es Bootstrap?</h2>
        <div className="prose">
          <p>
            Bootstrap es un <strong>framework de CSS</strong> (con un poco de JavaScript) de código abierto
            creado en 2011 por el equipo de Twitter. Proporciona un sistema de rejilla responsive, decenas
            de componentes preconstruidos (botones, modales, navbar, cards…) y cientos de{' '}
            <strong>clases utilitarias</strong> para maquetar rápido.
          </p>
          <p>
            La idea clave: <strong>no escribes CSS para lo común</strong>. En lugar de crear tus propias
            clases para cada botón, usas las suyas directamente en el HTML (o en el JSX):
          </p>
        </div>

        <Demo
          title="Botón con clases de Bootstrap"
          code={`<button className="btn btn-primary">
  Guardar cambios
</button>

<button className="btn btn-outline-success btn-sm">
  <i className="bi bi-check2" /> Confirmar
</button>`}
        >
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary">Guardar cambios</button>
            <button className="btn btn-outline-success btn-sm">
              <i className="bi bi-check2" /> Confirmar
            </button>
          </div>
        </Demo>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">
                <i className="bi bi-hand-thumbs-up text-success me-2" /> Lo que aporta
              </h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Velocidad: prototipos reales en minutos.</li>
                <li>Consistencia visual entre páginas y equipos.</li>
                <li>Responsive y accesibilidad resueltos de base.</li>
                <li>Documentación enorme y comunidad gigante.</li>
                <li>Se puede personalizar con SASS y variables CSS.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">
                <i className="bi bi-hand-thumbs-down text-danger me-2" /> Lo que hay que vigilar
              </h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Muchas webs «hechas con Bootstrap» se parecen entre sí.</li>
                <li>El CSS completo pesa (~230 KB; ~30 KB con gzip).</li>
                <li>El HTML se llena de clases: puede ser difícil de leer.</li>
                <li>El JS de Bootstrap manipula el DOM directamente (choca un poco con React).</li>
                <li>Para diseños muy a medida puede quedarse corto.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Versiones */}
      <section className="mb-5">
        <h2 className="section-title">2. Historia y versiones</h2>
        <div className="table-wrap mb-3">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Versión</th>
                <th>Año</th>
                <th>Lo importante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>v3</strong></td>
                <td>2013</td>
                <td>Boom del «mobile first». Requería jQuery. Grid con <code>col-md-6</code>.</td>
              </tr>
              <tr>
                <td><strong>v4</strong></td>
                <td>2018</td>
                <td>Flexbox como base del grid, rem en lugar de px, utilidades ampliadas.</td>
              </tr>
              <tr>
                <td><strong>v5</strong></td>
                <td>2021</td>
                <td>
                  <strong>Sin jQuery</strong>, JavaScript vanilla, RTL, API de utilidades y formularios
                  propios.
                </td>
              </tr>
              <tr>
                <td><strong>v5.3</strong> (actual)</td>
                <td>2023</td>
                <td>
                  <strong className="text-strong">Modo oscuro nativo</strong> con{' '}
                  <code>data-bs-theme</code>, mucho más uso de <strong>variables CSS</strong>, nuevos
                  helpers de color.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Modo oscuro en una línea">
          <p>
            Bootstrap 5.3 trae temas por atributo. Esta misma web lo usa: el botón de la luna cambia{' '}
            <code>&lt;html data-bs-theme="dark"&gt;</code> y todos los componentes (modales, tablas,
            formularios) se adaptan solos.
          </p>
        </Callout>
      </section>

      {/* 3. Cómo se usa */}
      <section className="mb-5">
        <h2 className="section-title">3. Tres formas de instalarlo</h2>
        <div className="row g-3">
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">CDN (sin instalar)</h3>
              <p className="fs-7 text-soft">
                Ideal para pruebas o demos estáticas. Dos etiquetas en el <code>index.html</code>.
              </p>
              <CodeBlock
                language="html"
                title="index.html"
                code={`<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>`}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">npm (recomendado)</h3>
              <p className="fs-7 text-soft">
                Con Vite se importa dentro del JS. Queda en el bundle y se versiona con el proyecto.
              </p>
              <CodeBlock
                language="bash"
                title="terminal"
                code={`npm install bootstrap bootstrap-icons`}
              />
              <CodeBlock
                language="jsx"
                title="main.jsx"
                code={`import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'`}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">SASS (personalizado)</h3>
              <p className="fs-7 text-soft">
                Solo si vas a cambiar colores, radios o fuentes de forma global. Requiere compilar SCSS.
              </p>
              <CodeBlock
                language="bash"
                title="terminal"
                code={`npm install -D sass`}
              />
              <CodeBlock
                language="scss"
                title="src/styles/main.scss"
                code={`$primary: #6d4ac4;
$border-radius: 1rem;
@import "bootstrap/scss/bootstrap";`}
              />
            </div>
          </div>
        </div>
        <Callout type="warn" title="En React, el JS de Bootstrap se importa una sola vez">
          <p>
            No importes el bundle en cada componente. Una vez en <code>main.jsx</code> (o en un archivo de
            setup) y ya tienes los <em>data-attributes</em> funcionando en toda la app.
          </p>
        </Callout>
      </section>

      {/* 4. Grid */}
      <section className="mb-5">
        <h2 className="section-title">4. El sistema de grid (lo más importante)</h2>
        <div className="prose">
          <p>
            Es un grid de <strong>12 columnas</strong> construido con flexbox. Se compone de tres piezas:
            <code>container</code> (ancho y centrado), <code>row</code> (fila con gutters) y{' '}
            <code>col</code> (columnas). Las columnas se reparten el ancho; 12 es el total de una fila.
          </p>
        </div>

        <CodeBlock
          language="jsx"
          title="Estructura clásica"
          code={`<div className="container">
  <div className="row">
    <div className="col-12 col-md-8">Contenido principal</div>
    <div className="col-12 col-md-4">Barra lateral</div>
  </div>
</div>`}
        />

        <h3 className="sub-title">Breakpoints</h3>
        <p className="text-soft fs-7">
          Los sufijos indican <strong>«a partir de este ancho»</strong> (mobile first, siempre{' '}
          <code>min-width</code>). Si solo pones <code>col-md-6</code>, en móvil ocupa el 100%.
        </p>
        <div className="table-wrap mb-4">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Infijo</th>
                <th>Media query</th>
                <th>Ancho del container</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((b) => (
                <tr key={b.name}>
                  <td><strong className="text-strong">{b.name}</strong></td>
                  <td><code>{b.infijo || '—'}</code></td>
                  <td>{b.min === 'Sin media query' ? 'Sin media query' : `≥ ${b.min}`}</td>
                  <td>{b.container}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="sub-title">Prueba el grid</h3>
        <GridPlayground />

        <Demo
          title="Grid responsive de tarjetas"
          code={`<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
  {[1, 2, 3, 4].map((n) => (
    <div className="col" key={n}>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Tarjeta {n}</h5>
          <p className="card-text">Row-cols evita repetir col-md-3.</p>
        </div>
      </div>
    </div>
  ))}
</div>`}
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
            {[1, 2, 3, 4].map((n) => (
              <div className="col" key={n}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title h6">Tarjeta {n}</h5>
                    <p className="card-text fs-7 mb-0">Row-cols evita repetir col-md-3 en cada hijo.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Demo>

        <div className="row g-3">
          <div className="col-md-6">
            <Callout type="tip" title="Container vs container-fluid">
              <p>
                <code>.container</code> fija un ancho máximo por breakpoint y centra el contenido;{' '}
                <code>.container-fluid</code> ocupa el 100%. También puedes usar{' '}
                <code>.container-md</code> para que solo tenga ancho fijo a partir de md.
              </p>
            </Callout>
          </div>
          <div className="col-md-6">
            <Callout type="warn" title="El clásico error de las 13 columnas">
              <p>
                Si sumas más de 12 en una fila, la columna extra <strong>no se encoge</strong>: baja a la
                línea siguiente y deja huecos raros. Usa <code>col</code> sin número para que se reparta
                automáticamente.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* 5. Utilidades */}
      <section className="mb-5">
        <h2 className="section-title">5. Utilidades: el 80% de tu CSS diario</h2>
        <div className="prose">
          <p>
            Bootstrap genera cientos de clases atómicas con una lógica muy predecible:{' '}
            <code>{'{propiedad}{lado}-{tamaño}'}</code>. Dominar tres familias (espaciado, flex y display)
            te ahorra escribir CSS casi siempre.
          </p>
        </div>

        <div className="row g-3">
          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">Espaciado</h3>
              <p className="fs-7 text-soft">
                <code>m</code> margen, <code>p</code> padding; lados <code>t b s e x y</code>; tamaño{' '}
                <code>0–5</code> y <code>auto</code>.
              </p>
              <div className="table-wrap">
                <table className="table table-doc">
                  <thead>
                    <tr>
                      <th>Clase</th>
                      <th>Equivalente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>mt-3</code></td><td>margin-top: 1rem</td></tr>
                    <tr><td><code>px-4</code></td><td>padding: 0 1.5rem</td></tr>
                    <tr><td><code>ms-auto</code></td><td>margin-left: auto</td></tr>
                    <tr><td><code>py-5</code></td><td>padding vertical 3rem</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">Flex y display</h3>
              <div className="table-wrap">
                <table className="table table-doc">
                  <thead>
                    <tr>
                      <th>Clase</th>
                      <th>Qué hace</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>d-flex</code></td><td>display: flex</td></tr>
                    <tr><td><code>justify-content-between</code></td><td>Separa extremos</td></tr>
                    <tr><td><code>align-items-center</code></td><td>Centra vertical</td></tr>
                    <tr><td><code>gap-3</code></td><td>Separación entre hijos</td></tr>
                    <tr><td><code>d-none d-lg-block</code></td><td>Oculto en móvil, visible en escritorio</td></tr>
                    <tr><td><code>flex-column flex-md-row</code></td><td>Cambia de eje según pantalla</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Demo
          title="Utilidades en acción (tarjeta con icono a la derecha)"
          code={`<div className="d-flex align-items-center justify-content-between gap-3 p-3 rounded-3 bg-body-secondary">
  <div className="d-flex align-items-center gap-2">
    <i className="bi bi-bell-fill fs-4 text-primary" />
    <div>
      <div className="fw-semibold">Notificaciones</div>
      <small className="text-secondary">3 nuevas hoy</small>
    </div>
  </div>
  <span className="badge text-bg-primary rounded-pill">3</span>
</div>`}
        >
          <div className="d-flex align-items-center justify-content-between gap-3 p-3 rounded-3 bg-body-secondary">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-bell-fill fs-4 text-primary" />
              <div>
                <div className="fw-semibold">Notificaciones</div>
                <small className="text-secondary">3 nuevas hoy</small>
              </div>
            </div>
            <span className="badge text-bg-primary rounded-pill">3</span>
          </div>
        </Demo>

        <Callout type="info" title="Sufijo de breakpoint en utilidades">
          <p>
            Casi toda utilidad acepta infijo de breakpoint: <code>d-none d-md-flex</code>,{' '}
            <code>mt-2 mt-lg-0</code>, <code>text-center text-lg-start</code>. Y Bootstrap 5.3 añade{' '}
            <code>.text-bg-*</code>, <code>.focus-ring</code>, <code>.link-*</code> y{' '}
            <code>.object-fit-*</code>.
          </p>
        </Callout>
      </section>

      {/* 6. Componentes */}
      <section className="mb-5">
        <h2 className="section-title">6. Componentes: qué trae la caja</h2>
        <p className="text-soft">
          Todos tienen su propia página con demos en vivo en{' '}
          <Link to="/componentes">el catálogo de componentes</Link>. Este es el mapa completo:
        </p>
        <div className="row g-3">
          {[
            { t: 'Layout', i: 'bi-layout-three-columns', items: 'Containers, Grid, Columns, Gutters, Breakpoints' },
            { t: 'Contenido', i: 'bi-fonts', items: 'Typography, Images, Figures, Tables' },
            { t: 'Formularios', i: 'bi-input-cursor-text', items: 'Form control, Select, Checks & radios, Range, Input group, Validation, Floating labels' },
            { t: 'Navegación', i: 'bi-compass', items: 'Navbar, Navs & tabs, Breadcrumb, Pagination, Offcanvas, Dropdown' },
            { t: 'Feedback', i: 'bi-chat-square-heart', items: 'Alerts, Badge, Toast, Progress, Spinner, Placeholders, Tooltips, Popovers' },
            { t: 'Organizar', i: 'bi-grid-1x2', items: 'Accordion, Card, Carousel, Collapse, List group, Modal, Scrollspy' },
          ].map((g) => (
            <div className="col-md-6 col-xl-4" key={g.t}>
              <div className="panel p-3 h-100">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <i className={`bi ${g.i} text-primary`} />
                  <h3 className="h6 fw-bold mb-0">{g.t}</h3>
                </div>
                <p className="fs-8 text-soft mb-0">{g.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Personalización */}
      <section className="mb-5">
        <h2 className="section-title">7. Personalizar sin sufrir</h2>
        <div className="prose">
          <p>
            Hay tres niveles. Empieza por el más superficial y baja solo si lo necesitas:
          </p>
          <ol>
            <li>
              <strong>Variables CSS</strong> en <code>:root</code> — cambia colores, radios y fuentes sin
              recompilar nada.
            </li>
            <li>
              <strong>Clases propias</strong> encima de los componentes para ajustes concretos.
            </li>
            <li>
              <strong>SASS</strong> — cambia <code>$primary</code> y recompila para que toda la paleta,
              botones y links cambien de forma coherente (y se incluya solo lo que usas).
            </li>
          </ol>
        </div>

        <CodeBlock
          language="css"
          title="personalizar con variables CSS (este mismo sitio lo hace)"
          code={`:root {
  --bs-primary: #6d4ac4;
  --bs-primary-rgb: 109, 74, 196;
  --bs-border-radius: 0.75rem;
  --bs-body-font-family: "Inter", system-ui, sans-serif;
}

.btn-primary {
  --bs-btn-bg: #6d4ac4;
  --bs-btn-hover-bg: #5c3cad;
}`}
        />

        <CodeBlock
          language="scss"
          title="personalizar con SASS (lo correcto a largo plazo)"
          code={`// src/styles/main.scss
$primary: #6d4ac4;
$enable-shadows: true;
$grid-gutter-width: 1.5rem;
$font-family-sans-serif: "Inter", system-ui, sans-serif;

@import "bootstrap/scss/bootstrap"; // compila solo tus estilos`}
        />

        <Callout type="danger" title="Nunca edites node_modules">
          <p>
            Los cambios en <code>node_modules/bootstrap</code> desaparecen al hacer{' '}
            <code>npm install</code>. Sobrescribe en tu propio CSS o compila SASS.
          </p>
        </Callout>
      </section>

      {/* 8. Buenas prácticas */}
      <section className="mb-5">
        <h2 className="section-title">8. Buenas prácticas y errores típicos</h2>
        <div className="row g-3">
          {[
            { i: 'bi-check2-circle', v: 'ok', t: 'Usa clases, no estilos inline', d: 'El inline gana siempre en especificidad y rompe el responsive.' },
            { i: 'bi-check2-circle', v: 'ok', t: 'Mobile first', d: 'Escribe el móvil primero y añade breakpoints con min-width, nunca al revés.' },
            { i: 'bi-check2-circle', v: 'ok', t: 'container > row > col', d: 'Respeta la jerarquía; no pongas columnas sin row ni contenido directo en row.' },
            { i: 'bi-x-circle', v: 'bad', t: 'className, no class', d: 'En JSX, class es palabra reservada. Usa className (o instala soporte de class).' },
            { i: 'bi-x-circle', v: 'bad', t: 'No mezcles Bootstrap y Tailwind', d: 'Ambos resetean base y utilidades. Elige uno o prepárate para conflictos.' },
            { i: 'bi-x-circle', v: 'bad', t: 'No abuses de !important', d: 'Si necesitas ganar especificidad, probablemente estés peleando con el componente equivocado.' },
          ].map((p) => (
            <div className="col-md-6 col-xl-4" key={p.t}>
              <div className="panel p-3 h-100">
                <i className={`bi ${p.i} ${p.v === 'ok' ? 'text-success' : 'text-danger'} mb-1`} />
                <h3 className="h6 fw-bold mb-1">{p.t}</h3>
                <p className="fs-8 text-soft mb-0">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <Callout type="tip" title="Accesibilidad gratis (si no la rompes)">
          <p>
            Bootstrap ya incluye <code>aria-*</code>, foco visible y contraste en sus componentes. Si
            construyes tus propios botones, mantén <code>:focus-visible</code> y añade{' '}
            <code>aria-label</code> a los iconos sin texto, como hacemos aquí con los de tema y búsqueda.
          </p>
        </Callout>
      </section>

      <PrevNext />
      <div className="mt-4">
        <Link to="/teoria/vite" className="btn btn-brand">
          Siguiente: Vite <i className="bi bi-arrow-right ms-1" />
        </Link>
      </div>
    </>
  )
}
