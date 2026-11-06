import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import Demo from '../components/Demo'
import PrevNext from '../components/PrevNext'

export default function Integracion() {
  return (
    <>
      <PageHeader
        eyebrow="Integración"
        title="Bootstrap + React + Vite: cómo encajarlas sin dolor"
        lead="Bootstrap es CSS (y algo de JS); React es JavaScript que genera HTML. No compiten: Bootstrap te da el diseño y React la lógica. La clave está en decidir cómo traes el CSS y quién controla los componentes interactivos."
        chips={['Nivel: intermedio', '4 enfoques', 'Código listo para copiar']}
        links={[
          { label: 'React Bootstrap', url: 'https://react-bootstrap.github.io/' },
          { label: 'Bootstrap con Vite', url: 'https://getbootstrap.com/docs/5.3/getting-started/vite/' },
        ]}
      />

      {/* 1 */}
      <section className="mb-5">
        <h2 className="section-title">1. Instalación paso a paso</h2>

        <div className="panel p-4 p-lg-5">
          <div className="step" data-step="1">
            <h3>Crea el proyecto con Vite</h3>
            <CodeBlock
              language="bash"
              title="terminal"
              code={`npm create vite@latest mi-app -- --template react
cd mi-app
npm install`}
            />
          </div>

          <div className="step" data-step="2">
            <h3>Añade Bootstrap e iconos</h3>
            <CodeBlock language="bash" title="terminal" code={`npm install bootstrap bootstrap-icons`} />
            <p className="fs-7 text-soft">
              <code>bootstrap</code> incluye el CSS compilado y el JS. <code>bootstrap-icons</code> es la
              fuente de iconos oficial (opcional pero muy cómoda).
            </p>
          </div>

          <div className="step" data-step="3">
            <h3>Importa el CSS y el JS una sola vez</h3>
            <CodeBlock
              language="jsx"
              title="src/main.jsx"
              code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

// 1) Bootstrap CSS (primero)
import 'bootstrap/dist/css/bootstrap.min.css'
// 2) Iconos
import 'bootstrap-icons/font/bootstrap-icons.css'
// 3) Tu CSS DESPUÉS, para poder sobrescribir
import './styles/custom.css'
// 4) JS de Bootstrap (dropdowns, modales, offcanvas…)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)`}
            />
            <Callout type="warn" title="El orden de los imports importa">
              <p>
                CSS de Bootstrap → tu CSS. Si lo pones al revés, tus reglas se cargan antes y Bootstrap las
                pisa (misma especificidad, gana la última que se carga).
              </p>
            </Callout>
          </div>

          <div className="step" data-step="4">
            <h3>Usa las clases en tus componentes</h3>
            <CodeBlock
              language="jsx"
              title="src/App.jsx"
              code={`export default function App() {
  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-md-8">
          <h1 className="display-6 fw-bold">Mi primera app</h1>
          <p className="lead text-secondary">Bootstrap + React + Vite funcionando.</p>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100">
            <i className="bi bi-rocket-takeoff me-2" /> Empezar
          </button>
        </div>
      </div>
    </div>
  )
}`}
            />
          </div>

          <div className="step" data-step="5">
            <h3>Arranca y comprueba</h3>
            <CodeBlock language="bash" title="terminal" code={`npm run dev   # http://localhost:5173`} />
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="mb-5">
        <h2 className="section-title">2. Los cuatro enfoques posibles</h2>

        <div className="row g-3">
          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="h6 fw-bold mb-0">A · CSS global + clases</h3>
                <span className="chip chip-brand">Más usado</span>
              </div>
              <p className="fs-7 text-soft">
                Importas el CSS una vez y escribes <code>className=&quot;btn btn-primary&quot;</code>. Los
                componentes interactivos funcionan con <code>data-bs-*</code> y el bundle de JS.
              </p>
              <div className="d-flex flex-wrap gap-2 fs-8">
                <span className="badge text-bg-success">Simple</span>
                <span className="badge text-bg-success">Cero dependencias extra</span>
                <span className="badge text-bg-warning text-dark">JS fuera de React</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="h6 fw-bold mb-0">B · React-Bootstrap</h3>
                <span className="chip">Componentes</span>
              </div>
              <p className="fs-7 text-soft">
                Librería que reimplementa los componentes como componentes React reales:{' '}
                <code>&lt;Button&gt;</code>, <code>&lt;Modal show&gt;</code>, <code>&lt;Card&gt;</code>. Sin
                JS de Bootstrap ni data-attributes.
              </p>
              <CodeBlock language="bash" title="terminal" code={`npm install react-bootstrap`} />
              <CodeBlock
                language="jsx"
                title="uso"
                code={`import { Button, Card } from 'react-bootstrap'

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Tarjeta</Card.Title>
    <Button variant="primary">Acción</Button>
  </Card.Body>
</Card>`}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="h6 fw-bold mb-0">C · SASS compilado</h3>
                <span className="chip">A medida</span>
              </div>
              <p className="fs-7 text-soft">
                Cambias las variables de Bootstrap antes de compilar. Es la forma correcta de tener una
                identidad propia sin pelearte con la especificidad.
              </p>
              <CodeBlock language="bash" title="terminal" code={`npm install -D sass`} />
              <CodeBlock
                language="jsx"
                title="main.jsx"
                code={`import './styles/main.scss' // en lugar del css de bootstrap`}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel p-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="h6 fw-bold mb-0">D · CDN</h3>
                <span className="chip">Solo pruebas</span>
              </div>
              <p className="fs-7 text-soft">
                Dos etiquetas en el <code>index.html</code>. Nada que instalar, pero sin control de
                versiones, sin tree shaking y con una petición externa extra.
              </p>
              <CodeBlock
                language="html"
                title="index.html"
                code={`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>`}
              />
            </div>
          </div>
        </div>

        <div className="table-wrap mt-4">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Criterio</th>
                <th>A · CSS global</th>
                <th>B · React-Bootstrap</th>
                <th>C · SASS</th>
                <th>D · CDN</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Curva de aprendizaje</td><td>Baja</td><td>Media</td><td>Media</td><td>Mínima</td></tr>
              <tr><td>Control del estado en React</td><td>Manual</td><td>Nativo</td><td>Manual</td><td>Manual</td></tr>
              <tr><td>Personalización total</td><td>Media</td><td>Media</td><td>Alta</td><td>Ninguna</td></tr>
              <tr><td>Peso final</td><td>Alto (todo el CSS)</td><td>Menor (solo lo importado)</td><td>Mínimo</td><td>Alto</td></tr>
              <tr><td>Recomendado para</td><td>Esta guía y la mayoría de apps</td><td>Apps a largo plazo</td><td>Marca propia</td><td>Demos rápidas</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 */}
      <section className="mb-5">
        <h2 className="section-title">3. Componentes interactivos: el punto delicado</h2>
        <div className="prose">
          <p>
            El CSS funciona igual en React. El problema aparece con el <strong>JS de Bootstrap</strong>,
            porque manipula el DOM a sus espaldas: añade y quita clases, mueve foco, crea backdrops. React
            no lo sabe. Hay tres maneras de convivir con eso:
          </p>
        </div>

        <div className="row g-3">
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">1. Data-attributes</h3>
              <p className="fs-8 text-soft">
                Dejas que Bootstrap mande. Ideal para dropdowns, collapse, carousel, offcanvas y modales
                que no necesitan lógica de React.
              </p>
              <code className="inline-code fs-8">data-bs-toggle=&quot;modal&quot;</code>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">2. Instancias en useEffect</h3>
              <p className="fs-8 text-soft">
                Creas el componente con <code>new Modal(...)</code> y lo destruyes en la limpieza. Control
                total desde JavaScript (por ejemplo, cerrar tras enviar el formulario).
              </p>
              <code className="inline-code fs-8">import &#123; Modal &#125; from &apos;bootstrap&apos;</code>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold">3. React-Bootstrap</h3>
              <p className="fs-8 text-soft">
                El estado es 100% React: <code>&lt;Modal show=&#123;abierto&#125; onHide=…&gt;</code>. Sin
                data-attributes ni JS de Bootstrap. Es la opción más «React».
              </p>
              <code className="inline-code fs-8">npm i react-bootstrap</code>
            </div>
          </div>
        </div>

        <Demo
          title="Modal con data-attributes — pruébalo"
          language="jsx"
          code={`<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDemo">
  Abrir modal
</button>

<div className="modal fade" id="modalDemo" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Hola desde un modal</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
      </div>
      <div className="modal-body">
        Gestión de Bootstrap, markup de React. Funciona porque el
        bundle de JS está importado en main.jsx.
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDemo">
              <i className="bi bi-window-stack me-1" /> Abrir modal
            </button>
            <button
              className="btn btn-outline-secondary"
              data-bs-toggle="tooltip"
              title="¡Esto es un tooltip de Bootstrap!"
            >
              Pasa el ratón por aquí
            </button>
            <div className="dropdown">
              <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                Dropdown
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#integracion">Acción</a></li>
                <li><a className="dropdown-item" href="#integracion">Otra acción</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#integracion">Salir</a></li>
              </ul>
            </div>
          </div>

          <div className="modal fade" id="modalDemo" tabIndex="-1" aria-labelledby="modalDemoLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalDemoLabel">
                    <i className="bi bi-bootstrap-fill text-primary me-2" />
                    Hola desde un modal
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
                </div>
                <div className="modal-body">
                  Gestión de Bootstrap, markup de React. Funciona porque el bundle de JS está importado en{' '}
                  <code>main.jsx</code>.
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button className="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </Demo>

        <h3 className="sub-title">2. Controlar el modal desde React</h3>
        <p className="text-soft fs-7">
          Cuando necesitas abrir/cerrar desde tu lógica (por ejemplo, al terminar un envío), instancia el
          componente en un <code>useRef</code> y destrúyelo al desmontar:
        </p>
        <CodeBlock
          language="jsx"
          title="src/components/ModalConfirmacion.jsx"
          code={`import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

export default function ModalConfirmacion({ id, onConfirmar }) {
  const modalRef = useRef(null)
  const instanciaRef = useRef(null)

  useEffect(() => {
    instanciaRef.current = new Modal(modalRef.current)
    return () => instanciaRef.current?.dispose()   // ← limpieza obligatoria
  }, [])

  const confirmar = () => {
    onConfirmar?.()
    instanciaRef.current?.hide()
  }

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1" id={id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¿Seguro?</h5>
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
          </div>
          <div className="modal-body">Esta acción no se puede deshacer.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button className="btn btn-danger" onClick={confirmar}>Sí, borrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}`}
        />

        <Callout type="warn" title="Tooltips y popovers necesitan inicialización">
          <p>
            Son los únicos componentes que <strong>no</strong> se activan solos. Hay que crear una
            instancia <code>new Tooltip(el)</code> para cada elemento. Este sitio lo hace en un{' '}
            <code>useEffect</code> dentro del layout, y el cleanup llama a <code>dispose()</code>.
          </p>
        </Callout>
      </section>

      {/* 4 */}
      <section className="mb-5">
        <h2 className="section-title">4. Tema propio con SASS</h2>
        <div className="prose">
          <p>
            Este es el flujo completo si quieres que Bootstrap tenga <em>tu</em> color. Solo hay que
            redefinir variables <strong>antes</strong> de importar Bootstrap y compilar.
          </p>
        </div>
        <CodeBlock language="bash" title="terminal" code={`npm install -D sass`} />
        <CodeBlock
          language="scss"
          title="src/styles/main.scss"
          code={`// 1) Tus variables (antes de Bootstrap)
$primary: #6d4ac4;
$secondary: #64748b;
$border-radius: 0.75rem;
$border-radius-lg: 1rem;
$font-family-sans-serif: "Inter", system-ui, sans-serif;
$enable-shadows: true;
$enable-gradients: false;
$body-bg: #f6f7fb;

// 2) Bootstrap completo
@import "bootstrap/scss/bootstrap";

// 3) O solo las partes que usas (build más pequeño)
// @import "bootstrap/scss/functions";
// @import "bootstrap/scss/variables";
// @import "bootstrap/scss/mixins";
// @import "bootstrap/scss/reboot";
// @import "bootstrap/scss/grid";
// @import "bootstrap/scss/buttons";
// @import "bootstrap/scss/utilities/api";

// 4) Tus estilos, al final
body { letter-spacing: -0.01em; }
.mi-clase { color: $primary; }`}
        />
        <CodeBlock
          language="jsx"
          title="src/main.jsx — sustituye el CSS compilado por el SCSS"
          code={`// import 'bootstrap/dist/css/bootstrap.min.css'   ← fuera
import './styles/main.scss'                        // ← tu compilación
import 'bootstrap-icons/font/bootstrap-icons.css'`}
        />
        <Callout type="tip" title="Modo oscuro con SASS">
          <p>
            Para temas propios usa <code>data-bs-theme=&quot;dark&quot;</code> y las variables CSS{' '}
            <code>--bs-body-bg</code>, <code>--bs-body-color</code>. Es más limpio que duplicar todo el
            SCSS en un selector <code>.dark</code>.
          </p>
        </Callout>
      </section>

      {/* 5 */}
      <section className="mb-5">
        <h2 className="section-title">5. Ejemplo completo: navbar + modal + formulario</h2>
        <CodeBlock
          language="jsx"
          title="src/components/NavbarApp.jsx"
          code={`import { useState } from 'react'

export default function NavbarApp() {
  const [busqueda, setBusqueda] = useState('')

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#/">MiApp</a>

        <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Alternar navegación">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#/">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#/tareas">Tareas</a></li>
          </ul>

          <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Buscar…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              aria-label="Buscar"
            />
            <button className="btn btn-primary" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}`}
        />
        <Demo
          title="Navbar responsive (reduce la ventana para ver el botón hamburguesa)"
          code={`<nav className="navbar navbar-expand-md bg-body-tertiary rounded border">
  <div className="container-fluid">
    <span className="navbar-brand fw-bold">MiApp</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navDemo" aria-label="Menú">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navDemo">
      <ul className="navbar-nav me-auto">
        <li className="nav-item"><a className="nav-link active" href="#integracion">Inicio</a></li>
        <li className="nav-item"><a className="nav-link" href="#integracion">Tareas</a></li>
      </ul>
      <button className="btn btn-primary btn-sm">Acceder</button>
    </div>
  </div>
</nav>`}
        >
          <nav className="navbar navbar-expand-md bg-body-tertiary rounded border">
            <div className="container-fluid">
              <span className="navbar-brand fw-bold">MiApp</span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navDemo"
                aria-label="Menú"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navDemo">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item"><a className="nav-link active" href="#integracion">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#integracion">Tareas</a></li>
                </ul>
                <button className="btn btn-primary btn-sm mt-2 mt-md-0">Acceder</button>
              </div>
            </div>
          </nav>
        </Demo>
      </section>

      {/* 6 */}
      <section className="mb-5">
        <h2 className="section-title">6. Problemas típicos (y su solución)</h2>
        <div className="accordion" id="problemasIntegracion">
          {[
            {
              q: 'Los estilos no aparecen',
              a: 'Falta el import de bootstrap.min.css, o se importó después de tu CSS. Comprueba también que el archivo está en main.jsx y no dentro de un componente que nunca se renderiza.',
            },
            {
              q: 'El dropdown/modal no se abre',
              a: 'No está el JS. Importa bootstrap/dist/js/bootstrap.bundle.min.js en main.jsx (el bundle incluye Popper, necesario para dropdowns y tooltips).',
            },
            {
              q: 'Warning de React sobre class',
              a: 'En JSX es className. Recuerda también htmlFor en labels y defaultChecked en inputs no controlados.',
            },
            {
              q: 'El modal se queda con el fondo oscuro pegado',
              a: 'Pasa cuando desmontas el componente con el modal abierto: Bootstrap no llega a limpiar el backdrop. Cierra el modal antes de navegar o usa React-Bootstrap, que lo gestiona con estado.',
            },
            {
              q: 'El input no me deja escribir',
              a: 'Tienes value sin onChange (input controlado sin manejador). Añade onChange o usa defaultValue.',
            },
            {
              q: 'Mi CSS no sobrescribe a Bootstrap',
              a: 'Misma especificidad → gana el orden de carga. Importa tu CSS después, o sube la especificidad (body .mi-clase) en lugar de recurrir a !important.',
            },
            {
              q: 'Los iconos salen como cuadrados',
              a: 'Falta importar bootstrap-icons/font/bootstrap-icons.css. Si usas CDN, añade también la hoja de iconos; las fuentes se cargan desde node_modules al empaquetar.',
            },
          ].map((f, i) => (
            <div className="accordion-item" key={f.q}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#int-${i}`}
                >
                  {f.q}
                </button>
              </h3>
              <div id={`int-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#problemasIntegracion">
                <div className="accordion-body fs-7">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PrevNext />
    </>
  )
}
