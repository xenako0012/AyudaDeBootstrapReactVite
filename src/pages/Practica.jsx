import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import PrevNext from '../components/PrevNext'
import TaskDemo from '../components/TaskDemo'

export default function Practica() {
  return (
    <>
      <PageHeader
        eyebrow="Práctica · Proyecto guiado"
        title="Construye un gestor de tareas con Bootstrap, Vite y React"
        lead="El proyecto final del recorrido: una app real con formulario, lista, filtros, barra de progreso y persistencia en localStorage. Con Bootstrap para el diseño, React para la lógica y Vite para el entorno. Tiempo estimado: 60–90 minutos."
        chips={['Nivel: principiante +', '9 pasos', 'Código completo']}
        links={[{ label: 'Resultado: prueba la demo abajo', url: 'https://getbootstrap.com/docs/5.3/examples/' }]}
      />

      {/* Resultado */}
      <section className="mb-5">
        <h2 className="section-title">Así queda la app</h2>
        <p className="text-soft">
          Prueba a añadir una tarea, marcarla y filtrar. Se guarda en tu navegador (localStorage), así que
          si recargas la página seguirá ahí.
        </p>
        <TaskDemo />
        <p className="fs-8 text-soft mt-2">
          <i className="bi bi-info-circle me-1" />
          Este componente vive en <code>src/components/TaskDemo.jsx</code>: puedes leerlo entero en el
          repositorio para comparar con el código de los pasos.
        </p>
      </section>

      {/* Paso 0 */}
      <section className="mb-5">
        <h2 className="section-title">Antes de empezar</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold"><i className="bi bi-check2-circle text-success me-2" />Necesitas</h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Node.js 20.19+ (o 22.12+) y npm instalados.</li>
                <li>Un editor (VS Code con Prettier y ESLint).</li>
                <li>Git configurado con tu usuario.</li>
                <li>Saber abrir la consola del navegador (F12).</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold"><i className="bi bi-bullseye text-primary me-2" />Vas a practicar</h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Instalar y usar Bootstrap en un proyecto Vite.</li>
                <li>Componentes, props, estado y hooks.</li>
                <li>Listas con <code>key</code> e inmutabilidad.</li>
                <li>Formularios controlados y validación.</li>
                <li>Persistencia con localStorage.</li>
                <li>Build y publicación con git.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="mb-5">
        <h2 className="section-title">Los 9 pasos</h2>

        <div className="step" data-step="1">
          <h3>Crear el proyecto e instalar Bootstrap</h3>
          <CodeBlock
            language="bash"
            title="terminal"
            code={`npm create vite@latest gestor-tareas -- --template react
cd gestor-tareas
npm install
npm install bootstrap bootstrap-icons
npm run dev`}
          />
          <p className="fs-7 text-soft">
            Abre <code>http://localhost:5173</code>. Si ves la pantalla de bienvenida de Vite, todo va bien.
          </p>
        </div>

        <div className="step" data-step="2">
          <h3>Limpiar la plantilla y cargar los estilos globales</h3>
          <p className="fs-7 text-soft">
            Borra <code>src/App.css</code>, <code>src/index.css</code> y las imágenes de ejemplo. Deja
            solo lo necesario. Después monta el punto de entrada:
          </p>
          <CodeBlock
            language="jsx"
            title="src/main.jsx"
            code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/custom.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`}
          />
          <p className="fs-7 text-soft">
            Crea <code>src/styles/custom.css</code> vacío (o con tus ajustes). Al importarlo{' '}
            <strong>después</strong> de Bootstrap, tus reglas ganan.
          </p>
        </div>

        <div className="step" data-step="3">
          <h3>Organizar las carpetas</h3>
          <CodeBlock
            language="text"
            title="estructura del proyecto"
            code={`src/
├── components/
│   ├── Header.jsx         # navbar
│   ├── FormTarea.jsx      # input + botón añadir
│   ├── ListaTareas.jsx    # renderiza la lista
│   └── TareaItem.jsx      # una fila (checkbox + borrar)
├── hooks/
│   └── useLocalStorage.js # persistencia reutilizable
├── styles/
│   └── custom.css
├── App.jsx                # estado y composición
└── main.jsx`}
          />
        </div>

        <div className="step" data-step="4">
          <h3>El hook de persistencia</h3>
          <p className="fs-7 text-soft">
            Un hook propio es una función que empieza por <code>use</code> y llama a otros hooks. Este
            encapsula la lectura y escritura en localStorage para que el componente no sepa nada de eso.
          </p>
          <CodeBlock
            language="jsx"
            title="src/hooks/useLocalStorage.js"
            code={`import { useEffect, useState } from 'react'

export function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = window.localStorage.getItem(clave)
      return guardado ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      // modo incógnito o cuota llena: no rompemos la app
    }
  }, [clave, valor])

  return [valor, setValor]
}`}
          />
        </div>

        <div className="step" data-step="5">
          <h3>El formulario (componente controlado)</h3>
          <CodeBlock
            language="jsx"
            title="src/components/FormTarea.jsx"
            code={`import { useState } from 'react'

export default function FormTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')
  const invalido = texto.trim().length === 0

  const enviar = (e) => {
    e.preventDefault()
    if (invalido) return
    onAgregar(texto.trim())
    setTexto('')
  }

  return (
    <form className="input-group mb-3" onSubmit={enviar}>
      <input
        className="form-control"
        placeholder="¿Qué tienes que hacer?"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        aria-label="Nueva tarea"
        maxLength={80}
      />
      <button className="btn btn-primary" type="submit" disabled={invalido}>
        <i className="bi bi-plus-lg me-1" /> Añadir
      </button>
    </form>
  )
}`}
          />
          <Callout type="tip" title="¿Por qué onAgregar como prop?">
            <p>
              El formulario no es dueño de la lista: solo avisa de que hay una nueva tarea. El estado vive
              en <code>App</code> y baja por props. Esto es «elevar el estado» (lifting state up) y evita
              duplicar la fuente de verdad.
            </p>
          </Callout>
        </div>

        <div className="step" data-step="6">
          <h3>La fila de cada tarea</h3>
          <CodeBlock
            language="jsx"
            title="src/components/TareaItem.jsx"
            code={`export default function TareaItem({ tarea, onAlternar, onBorrar }) {
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input
        className="form-check-input mt-0"
        type="checkbox"
        id={'t-' + tarea.id}
        checked={tarea.hecha}
        onChange={() => onAlternar(tarea.id)}
      />
      <label
        className={'fs-7 mb-0 flex-grow-1 ' + (tarea.hecha ? 'text-decoration-line-through text-secondary' : '')}
        htmlFor={'t-' + tarea.id}
        style={{ cursor: 'pointer' }}
      >
        {tarea.texto}
      </label>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => onBorrar(tarea.id)}
        aria-label={'Eliminar: ' + tarea.texto}
      >
        <i className="bi bi-trash" />
      </button>
    </li>
  )
}`}
          />
        </div>

        <div className="step" data-step="7">
          <h3>La lista con filtros y progreso</h3>
          <CodeBlock
            language="jsx"
            title="src/components/ListaTareas.jsx"
            code={`import TareaItem from './TareaItem'

export default function ListaTareas({ tareas, filtro, onAlternar, onBorrar }) {
  const visibles = tareas.filter((t) => {
    if (filtro === 'activas') return !t.hecha
    if (filtro === 'completadas') return t.hecha
    return true
  })

  if (visibles.length === 0) {
    return (
      <div className="text-center text-secondary py-4">
        <i className="bi bi-inbox fs-3 d-block mb-1" />
        <small>No hay tareas en esta vista.</small>
      </div>
    )
  }

  return (
    <ul className="list-group mb-3">
      {visibles.map((t) => (
        <TareaItem key={t.id} tarea={t} onAlternar={onAlternar} onBorrar={onBorrar} />
      ))}
    </ul>
  )
}`}
          />
          <p className="fs-7 text-soft">
            La <code>key</code> va en el elemento que devuelve <code>map</code>, nunca en el componente
            hijo. Y siempre un id estable, no el índice.
          </p>
        </div>

        <div className="step" data-step="8">
          <h3>Unir todo en App</h3>
          <CodeBlock
            language="jsx"
            title="src/App.jsx"
            code={`import { useMemo, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import FormTarea from './components/FormTarea'
import ListaTareas from './components/ListaTareas'

export default function App() {
  const [tareas, setTareas] = useLocalStorage('mis-tareas', [])
  const [filtro, setFiltro] = useState('todas')

  const pendientes = useMemo(() => tareas.filter((t) => !t.hecha).length, [tareas])
  const progreso = tareas.length ? Math.round(((tareas.length - pendientes) / tareas.length) * 100) : 0

  const agregar = (texto) =>
    setTareas([{ id: crypto.randomUUID(), texto, hecha: false }, ...tareas])

  const alternar = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)))

  const borrar = (id) => setTareas(tareas.filter((t) => t.id !== id))

  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <header className="d-flex align-items-center gap-2 mb-4">
        <i className="bi bi-check2-square fs-3 text-primary" />
        <div>
          <h1 className="h4 fw-bold mb-0">Mis tareas</h1>
          <small className="text-secondary">{pendientes} pendientes</small>
        </div>

        <div className="btn-group ms-auto" role="group" aria-label="Filtros">
          {['todas', 'activas', 'completadas'].map((f) => (
            <button
              key={f}
              className={'btn btn-sm ' + (filtro === f ? 'btn-primary' : 'btn-outline-secondary')}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <FormTarea onAgregar={agregar} />

      <div className="progress mb-3" style={{ height: 6 }}
           role="progressbar" aria-valuenow={progreso}
           aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success" style={{ width: progreso + '%' }} />
      </div>

      <ListaTareas tareas={tareas} filtro={filtro} onAlternar={alternar} onBorrar={borrar} />
    </div>
  )
}`}
          />
        </div>

        <div className="step" data-step="9">
          <h3>Build y publicación</h3>
          <CodeBlock
            language="bash"
            title="terminal"
            code={`# Comprobar que compila
npm run build
npm run preview

# Subir a GitHub
git init
git add .
git commit -m "Gestor de tareas con Bootstrap, Vite y React"
git branch -M main
git remote add origin https://github.com/usuario/gestor-tareas.git
git push -u origin main`}
          />
          <Callout type="warn" title="Si publicas en GitHub Pages">
            <p>
              Añade <code>base: &apos;/gestor-tareas/&apos;</code> en <code>vite.config.js</code> y usa{' '}
              <code>HashRouter</code> si añades rutas. Sin eso, la página se queda en blanco porque los
              assets se piden al dominio raíz.
            </p>
          </Callout>
          <CodeBlock
            language="bash"
            title="despliegue en GitHub Pages"
            code={`npm install -D gh-pages

# en package.json:
# "homepage": "https://usuario.github.io/gestor-tareas",
# "scripts": { "deploy": "gh-pages -d dist" }

npm run build && npm run deploy`}
          />
        </div>
      </section>

      {/* Qué hace cada pieza */}
      <section className="mb-5">
        <h2 className="section-title">Qué hizo cada herramienta</h2>
        <div className="table-wrap">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Pieza</th>
                <th>En este proyecto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bootstrap</strong></td>
                <td>Clases <code>container</code>, <code>list-group</code>, <code>btn</code>, <code>progress</code>, <code>input-group</code> y los iconos. Cero CSS propio salvo detalles.</td>
              </tr>
              <tr>
                <td><strong>Vite</strong></td>
                <td>Arrancó el proyecto, sirvió los módulos con HMR y generó <code>dist/</code> con el CSS y JS optimizados.</td>
              </tr>
              <tr>
                <td><strong>React</strong></td>
                <td>Estado de las tareas y del filtro, renderizado de la lista, eventos y persistencia con hooks.</td>
              </tr>
              <tr>
                <td><strong>localStorage</strong></td>
                <td>Guardó las tareas como JSON para que sigan ahí al recargar (sin backend).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Siguientes pasos */}
      <section className="mb-5">
        <h2 className="section-title">Siguientes mejoras (para practicar)</h2>
        <div className="row g-3">
          {[
            { i: 'bi-pencil', t: 'Editar tareas', d: 'Doble clic para convertir <span> en <input> y guardar el cambio con map.' },
            { i: 'bi-signpost-2', t: 'Añadir rutas', d: 'React Router con /todas, /activas, /completadas como vistas.' },
            { i: 'bi-cloud-arrow-up', t: 'Persistir en API', d: 'Cambia useLocalStorage por fetch a un backend o Supabase.' },
            { i: 'bi-palette', t: 'Tema oscuro', d: 'Botón que alterna data-bs-theme, como en esta web.' },
            { i: 'bi-download', t: 'Exportar JSON', d: 'Un botón que genera un Blob y descarga las tareas.' },
            { i: 'bi-arrow-repeat', t: 'Drag & drop', d: 'Reordenar con arrastrar y soltar (HTML5 API).' },
          ].map((s) => (
            <div className="col-md-6 col-lg-4" key={s.t}>
              <div className="panel p-3 h-100">
                <i className={`bi ${s.i} text-primary mb-1`} />
                <h3 className="h6 fw-bold mb-1">{s.t}</h3>
                <p className="fs-8 text-soft mb-0" dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <PrevNext />
    </>
  )
}
