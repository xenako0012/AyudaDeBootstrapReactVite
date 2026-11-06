import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import Demo from '../components/Demo'
import PrevNext from '../components/PrevNext'
import { reactHooksCheatsheet } from '../data/siteData'

/* -------------------- demos interactivos -------------------- */

function CounterDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="text-center">
      <div className="display-4 fw-bold mb-2">{count}</div>
      <div className="d-flex justify-content-center flex-wrap gap-2">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          <i className="bi bi-plus-lg" /> Sumar
        </button>
        <button className="btn btn-outline-secondary" onClick={() => setCount(count - 1)}>
          <i className="bi bi-dash-lg" /> Restar
        </button>
        <button className="btn btn-outline-danger" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <p className="fs-8 text-secondary mt-3 mb-0">
        {count === 0 ? 'En cero.' : count % 2 === 0 ? 'Número par.' : 'Número impar.'}
      </p>
    </div>
  )
}

function FormDemo() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const enviar = (e) => {
    e.preventDefault()
    if (!nombre.trim()) return setError('El nombre es obligatorio.')
    if (!valido) return setError('El email no parece válido.')
    setError('')
    alert(`¡Enviado! Hola ${nombre}`)
  }

  return (
    <form onSubmit={enviar} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="demo-nombre">Nombre</label>
        <input
          id="demo-nombre"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ada Lovelace"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="demo-email">Email</label>
        <input
          id="demo-email"
          type="email"
          className={`form-control ${email ? (valido ? 'is-valid' : 'is-invalid') : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ada@ejemplo.com"
        />
        <div className="invalid-feedback">Escribe un email con formato válido.</div>
      </div>
      {error && <div className="alert alert-danger py-2 fs-7">{error}</div>}
      <div className="d-flex align-items-center gap-2">
        <button type="submit" className="btn btn-primary">Enviar</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => { setNombre(''); setEmail(''); setError('') }}>
          Limpiar
        </button>
        <span className="ms-auto fs-8 text-secondary">{nombre.length} / 40 caracteres</span>
      </div>
    </form>
  )
}

function ListDemo() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender JSX', hecha: true },
    { id: 2, texto: 'Practicar el grid', hecha: false },
    { id: 3, texto: 'Montar un modal', hecha: false },
  ])
  const [nuevo, setNuevo] = useState('')

  const anadir = (e) => {
    e.preventDefault()
    if (!nuevo.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nuevo.trim(), hecha: false }])
    setNuevo('')
  }

  return (
    <>
      <form className="input-group mb-3" onSubmit={anadir}>
        <input
          className="form-control"
          placeholder="Nueva tarea…"
          value={nuevo}
          onChange={(e) => setNuevo(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus-lg" />
        </button>
      </form>
      <ul className="list-group">
        {tareas.map((t) => (
          <li key={t.id} className="list-group-item d-flex align-items-center gap-2">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              checked={t.hecha}
              onChange={() =>
                setTareas(tareas.map((x) => (x.id === t.id ? { ...x, hecha: !x.hecha } : x)))
              }
            />
            <span className={t.hecha ? 'text-decoration-line-through text-secondary' : ''}>{t.texto}</span>
            <button
              className="btn btn-sm btn-outline-danger ms-auto"
              onClick={() => setTareas(tareas.filter((x) => x.id !== t.id))}
              aria-label={`Eliminar ${t.texto}`}
            >
              <i className="bi bi-trash" />
            </button>
          </li>
        ))}
        {tareas.length === 0 && <li className="list-group-item text-secondary">No quedan tareas 🎉</li>}
      </ul>
    </>
  )
}

export default function TeoriaReact() {
  return (
    <>
      <PageHeader
        eyebrow="Teoría · 03"
        title="React: la UI como conjunto de componentes"
        lead="React no es un framework completo: es una librería para construir interfaces. Su idea central es componer pantallas a partir de piezas pequeñas que reciben datos (props) y gestionan su propio estado. Esta página cubre lo que de verdad usarás cada día."
        chips={['Nivel: básico → intermedio', 'React 19', 'Componentes funcionales']}
        links={[
          { label: 'Documentación en español', url: 'https://es.react.dev/learn' },
          { label: 'Referencia de hooks', url: 'https://es.react.dev/reference/react' },
        ]}
      />

      {/* 1 */}
      <section className="mb-5">
        <h2 className="section-title">1. La idea: pensar en componentes</h2>
        <div className="prose">
          <p>
            Un <strong>componente</strong> es una función de JavaScript que devuelve marcado (JSX). Se
            escribe con mayúscula inicial y se reutiliza como si fuera una etiqueta HTML:
          </p>
          <p>
            React se encarga de <strong>volver a pintar</strong> lo que cambia. Tú describes el estado
            final de la UI y React calcula el mínimo de operaciones sobre el DOM real usando su{' '}
            <strong>Virtual DOM</strong>.
          </p>
          <p>
            Ventaja práctica: en lugar de buscar nodos con <code>querySelector</code> y modificarlos a
            mano, describes «cómo se ve la app con estos datos» y dejas que React lo sincronice.
          </p>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="panel p-3 h-100">
              <span className="icon-tile icon-tile--react"><i className="bi bi-box" /></span>
              <h3 className="h6 fw-bold">Declarativo</h3>
              <p className="fs-8 text-soft mb-0">Dices qué quieres ver, no cómo manipular el DOM paso a paso.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel p-3 h-100">
              <span className="icon-tile icon-tile--react"><i className="bi bi-puzzle" /></span>
              <h3 className="h6 fw-bold">Componible</h3>
              <p className="fs-8 text-soft mb-0">Componentes dentro de componentes, con props y children.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel p-3 h-100">
              <span className="icon-tile icon-tile--react"><i className="bi bi-arrow-repeat" /></span>
              <h3 className="h6 fw-bold">Basado en estado</h3>
              <p className="fs-8 text-soft mb-0">Si el estado cambia, la UI se actualiza automáticamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="mb-5">
        <h2 className="section-title">2. JSX en 7 reglas</h2>
        <div className="prose">
          <ol>
            <li><strong><code>className</code></strong> en lugar de <code>class</code>.</li>
            <li>Atributos en <strong>camelCase</strong>: <code>onClick</code>, <code>htmlFor</code>, <code>tabIndex</code>.</li>
            <li>Expresiones JavaScript entre llaves: <code>{'{nombre}'}</code>.</li>
            <li>Las etiquetas sin hijos se cierran: <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code>.</li>
            <li>Un componente devuelve <strong>un solo elemento raíz</strong> (o un fragmento <code>&lt;&gt;…&lt;/&gt;</code>).</li>
            <li>Los comentarios dentro de JSX van como <code>{'{/* así */}'}</code>.</li>
            <li>Estilos inline como objeto: <code>style={'{{ color: "red" }}'}</code>.</li>
          </ol>
        </div>

        <CodeBlock
          language="jsx"
          title="JSX válido"
          code={`export default function Perfil({ usuario, activo }) {
  const inicial = usuario.nombre.charAt(0)

  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <span className="avatar">{inicial}</span>
        <div>
          {/* comentario JSX */}
          <h2 className="h6 mb-0">{usuario.nombre}</h2>
          <small className={activo ? 'text-success' : 'text-secondary'}>
            {activo ? 'En línea' : 'Desconectado'}
          </small>
        </div>
      </div>
      <img src={usuario.avatar} alt="" className="rounded" />
    </>
  )
}`}
        />
      </section>

      {/* 3 */}
      <section className="mb-5">
        <h2 className="section-title">3. Props: datos de padre a hijo</h2>
        <div className="prose">
          <p>
            Las <strong>props</strong> son la entrada del componente y son <strong>de solo lectura</strong>.
            Un hijo nunca modifica sus props: si necesita cambiar algo, pide al padre que lo haga mediante
            una función que recibe como prop.
          </p>
        </div>

        <CodeBlock
          language="jsx"
          title="Componente reutilizable + uso"
          code={`function Tarjeta({ titulo, texto, destacada = false }) {
  return (
    <div className={'card h-100 ' + (destacada ? 'border-primary' : '')}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="row g-3">
      <div className="col-md-4">
        <Tarjeta titulo="Rápido" texto="Vite arranca en milisegundos" />
      </div>
      <div className="col-md-4">
        <Tarjeta titulo="Bonito" texto="Bootstrap aporta el diseño" destacada />
      </div>
    </div>
  )
}`}
        />

        <Demo
          title="Esto es un componente Tarjeta (con props)"
          code={`<div className="row g-3">
  <div className="col-md-6">
    <div className="card h-100">
      <div className="card-body">
        <h6 className="card-title">Bootstrap</h6>
        <p className="card-text fs-7">Clases CSS listas.</p>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card h-100 border-primary">
      <div className="card-body">
        <h6 className="card-title">React</h6>
        <p className="card-text fs-7">Componentes reutilizables.</p>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title">Bootstrap</h6>
                  <p className="card-text fs-7 mb-0">Clases CSS listas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <h6 className="card-title">React</h6>
                  <p className="card-text fs-7 mb-0">Componentes reutilizables.</p>
                </div>
              </div>
            </div>
          </div>
        </Demo>

        <Callout type="tip" title="children: el prop especial">
          <p>
            Todo lo que pones entre las etiquetas de un componente llega en la prop{' '}
            <code>children</code>. Es la base de los componentes «contenedor» (modales, cards, layouts).
          </p>
        </Callout>
      </section>

      {/* 4 */}
      <section className="mb-5">
        <h2 className="section-title">4. Estado con useState y eventos</h2>
        <div className="prose">
          <p>
            El estado son datos que <strong>cambian con la interacción</strong>. <code>useState</code>{' '}
            devuelve el valor actual y una función para actualizarlo. Cada actualización programa un nuevo
            renderizado.
          </p>
        </div>

        <Demo
          title="Contador — useState en vivo (¡prueba a pulsar!)"
          code={`import { useState } from 'react'

export default function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <div className="display-4 fw-bold mb-2">{count}</div>
      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Sumar
      </button>
      <button className="btn btn-outline-secondary me-2" onClick={() => setCount(count - 1)}>
        Restar
      </button>
      <button className="btn btn-outline-danger" onClick={() => setCount(0)}>
        Reset
      </button>
      <p className="fs-8 text-secondary mt-3 mb-0">
        {count === 0 ? 'En cero.' : count % 2 === 0 ? 'Número par.' : 'Número impar.'}
      </p>
    </div>
  )
}`}
        >
          <CounterDemo />
        </Demo>

        <div className="row g-3">
          <div className="col-lg-6">
            <Callout type="warn" title="Nunca modifiques el estado directamente">
              <p>
                <code>count++</code> no repinta nada y rompe la inmutabilidad. Usa siempre el setter:{' '}
                <code>setCount(count + 1)</code>. Con objetos o arrays, crea una copia:{' '}
                <code>{'setUser({ ...user, nombre: "Ana" })'}</code>.
              </p>
            </Callout>
          </div>
          <div className="col-lg-6">
            <Callout type="info" title="Actualización funcional">
              <p>
                Si el nuevo valor depende del anterior:{' '}
                <code>{'setCount(c => c + 1)'}</code>. Evita errores cuando haces varias actualizaciones
                seguidas en el mismo evento.
              </p>
            </Callout>
          </div>
        </div>

        <h3 className="sub-title">Eventos más habituales</h3>
        <div className="table-wrap mb-0">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Cuándo se dispara</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>onClick</code></td><td>Al hacer clic en el elemento.</td></tr>
              <tr><td><code>onChange</code></td><td>Al cambiar el valor de un input/select.</td></tr>
              <tr><td><code>onSubmit</code></td><td>Al enviar un formulario (usa <code>e.preventDefault()</code>).</td></tr>
              <tr><td><code>onKeyDown</code></td><td>Al pulsar una tecla.</td></tr>
              <tr><td><code>onMouseEnter / onMouseLeave</code></td><td>Al entrar/salir el ratón.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 */}
      <section className="mb-5">
        <h2 className="section-title">5. Condicionales, listas y keys</h2>
        <div className="prose">
          <p>
            No hay directivas tipo <code>v-if</code> ni <code>ngIf</code>: se usa JavaScript normal
            (ternario, <code>&amp;&amp;</code>, map/filter).
          </p>
        </div>

        <CodeBlock
          language="jsx"
          title="Patrones de renderizado"
          code={`// 1) Ternario
{logueado ? <Panel /> : <Login />}

// 2) AND lógico (si es false no pinta nada)
{cargando && <Spinner />}

// 3) Listas con map — la key es OBLIGATORIA
<ul className="list-group">
  {tareas.map((tarea) => (
    <li className="list-group-item" key={tarea.id}>
      {tarea.texto}
    </li>
  ))}
</ul>

// 4) Filtrar antes de pintar
{tareas.filter(t => !t.hecha).map(t => <Item key={t.id} {...t} />)}

// 5) Salida temprana (early return)
if (!usuario) return <p>Cargando…</p>`}
        />

        <Callout type="danger" title="No uses el índice del array como key">
          <p>
            <code>key={'{i}'}</code> funciona hasta que insertas o reordenas elementos: React se confunde y
            mezcla el estado de los inputs. Usa un id estable (de la base de datos, o{' '}
            <code>crypto.randomUUID()</code> al crear).
          </p>
        </Callout>

        <h3 className="sub-title">Demo: lista con estado</h3>
        <Demo
          title="Añadir, marcar y borrar elementos (inmutabilidad)"
          code={`const [tareas, setTareas] = useState([])

// Añadir: nuevo array
setTareas([...tareas, { id: Date.now(), texto: nuevo, hecha: false }])

// Alternar: map + copia del objeto
setTareas(tareas.map(t =>
  t.id === id ? { ...t, hecha: !t.hecha } : t
))

// Borrar: filter
setTareas(tareas.filter(t => t.id !== id))

// Render
{tareas.map(t => <li key={t.id}>{t.texto}</li>)}`}
        >
          <ListDemo />
        </Demo>
      </section>

      {/* 6 */}
      <section className="mb-5">
        <h2 className="section-title">6. useEffect: hablar con el mundo exterior</h2>
        <div className="prose">
          <p>
            Los componentes deben ser «puros». Los <strong>efectos</strong> son para cosas que salen de
            ahí: peticiones HTTP, timers, suscripciones, cambiar el título del documento o inicializar
            librerías que tocan el DOM (como los tooltips de Bootstrap).
          </p>
        </div>

        <CodeBlock
          language="jsx"
          title="Los tres patrones de dependencias"
          code={`import { useEffect, useState } from 'react'

function Reloj() {
  const [hora, setHora] = useState(new Date())

  // 1) Sin array de dependencias → se ejecuta en CADA render (rara vez quieres esto)
  useEffect(() => {
    document.title = 'Son las ' + hora.toLocaleTimeString()
  })

  // 2) Array vacío → solo al montar. El return es la limpieza (al desmontar)
  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000)
    return () => clearInterval(timer)   // ← imprescindible
  }, [])

  // 3) Con dependencias → cuando cambia userId
  useEffect(() => {
    fetch('/api/usuario/' + userId)
      .then((r) => r.json())
      .then(setUsuario)
  }, [userId])

  return <span>{hora.toLocaleTimeString()}</span>
}`}
        />

        <Callout type="warn" title="En React 19 el doble efecto en StrictMode es normal">
          <p>
            En desarrollo, <code>&lt;StrictMode&gt;</code> monta, desmonta y remonta los componentes para
            detectar efectos mal limpiados. Verás dos peticiones: no es un bug, es el aviso de que tu
            limpieza importa.
          </p>
        </Callout>

        <CodeBlock
          language="jsx"
          title="Patrón real: cargar datos con estados"
          code={`function ListaUsuarios() {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false

    async function cargar() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Error ' + res.status)
        const json = await res.json()
        if (!cancelado) setDatos(json)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    cargar()
    return () => { cancelado = true }
  }, [])

  if (cargando) return <div className="spinner-border" role="status" />
  if (error) return <div className="alert alert-danger">{error}</div>
  return <ul>{datos.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
}`}
        />
      </section>

      {/* 7 */}
      <section className="mb-5">
        <h2 className="section-title">7. Formularios controlados</h2>
        <div className="prose">
          <p>
            En un <strong>formulario controlado</strong> el valor del input vive en el estado de React:{' '}
            <code>value</code> + <code>onChange</code>. Así puedes validar, deshabilitar botones o
            transformar lo que escribe el usuario.
          </p>
        </div>

        <Demo
          title="Formulario controlado con validación en vivo"
          code={`const [email, setEmail] = useState('')
const valido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)

<input
  className={'form-control ' + (email ? (valido ? 'is-valid' : 'is-invalid') : '')}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<div className="invalid-feedback">Escribe un email válido.</div>

<button disabled={!valido} className="btn btn-primary">Enviar</button>`}
        >
          <FormDemo />
        </Demo>

        <Callout type="info" title="Bootstrap valida, pero tú decides">
          <p>
            Las clases <code>is-valid</code> / <code>is-invalid</code> de Bootstrap solo pintan el estado.
            La lógica de validación es tuya (regex, librería como Zod, o el backend).
          </p>
        </Callout>
      </section>

      {/* 8 */}
      <section className="mb-5">
        <h2 className="section-title">8. Los hooks que vas a usar</h2>
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
          title="Ejemplo de hook personalizado + useContext"
          code={`import { createContext, useContext, useState } from 'react'

// 1) Contexto global de tema
const TemaContext = createContext(null)

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro')
  const alternar = () => setTema(t => (t === 'claro' ? 'oscuro' : 'claro'))
  return (
    <TemaContext.Provider value={{ tema, alternar }}>
      {children}
    </TemaContext.Provider>
  )
}

// 2) Hook propio para consumirlo: useTema()
export function useTema() {
  const ctx = useContext(TemaContext)
  if (!ctx) throw new Error('useTema debe usarse dentro de <TemaProvider>')
  return ctx
}

// 3) Hook propio con localStorage (persistencia)
export function useLocalStorage(clave, inicial) {
  const [valor, setValor] = useState(() => {
    try { return JSON.parse(localStorage.getItem(clave)) ?? inicial }
    catch { return inicial }
  })

  const guardar = (v) => {
    setValor(v)
    localStorage.setItem(clave, JSON.stringify(v))
  }

  return [valor, guardar]
}`}
        />
      </section>

      {/* 9 */}
      <section className="mb-5">
        <h2 className="section-title">9. Rutas con React Router</h2>
        <div className="prose">
          <p>
            React no trae router: es solo la vista. Para tener varias «páginas» sin recargar el navegador
            se usa <strong>React Router</strong> (esta misma web lo hace). Instálalo con{' '}
            <code>npm install react-router-dom</code> y envuelve la app en un router.
          </p>
        </div>

        <CodeBlock
          language="jsx"
          title="src/main.jsx — HashRouter para GitHub Pages"
          code={`import { HashRouter } from 'react-router-dom'

// HashRouter usa /#/ruta → no necesita configuración en el servidor.
// BrowserRouter da URLs limpias, pero el hosting debe redirigir todo a index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)`}
        />

        <CodeBlock
          language="jsx"
          title="src/App.jsx — rutas anidadas con un layout común"
          code={`import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tareas from './pages/Tareas'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tareas" element={<Tareas />} />
        <Route path="tareas/:id" element={<DetalleTarea />} />  {/* ruta dinámica */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

// El layout pinta la parte común y <Outlet /> es el hueco de la página
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className="container py-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}`}
        />

        <CodeBlock
          language="jsx"
          title="Navegar y leer parámetros"
          code={`import { Link, NavLink, useNavigate, useParams, useLocation } from 'react-router-dom'

// Enlaces: Link (no <a>, para no recargar)
<Link to="/tareas">Tareas</Link>

// NavLink añade la clase 'active' cuando coincide la ruta
<NavLink to="/teoria/react" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
  React
</NavLink>

// Navegar desde código (tras un submit, por ejemplo)
const navigate = useNavigate()
const guardar = async () => {
  await api.guardar(datos)
  navigate('/tareas')
}

// Parámetros de la URL: /tareas/42
const { id } = useParams()

// Query string y estado de navegación
const { pathname, search } = useLocation()`}
        />

        <Callout type="tip" title="Trucos que ahorran horas">
          <p>
            Usa <code>&lt;NavLink end&gt;</code> en la ruta raíz para que no se marque activa siempre. Y si
            publicas en GitHub Pages, <code>HashRouter</code> evita los 404 al refrescar. Para scroll al
            cambiar de página, un <code>useEffect</code> sobre <code>pathname</code> con{' '}
            <code>window.scrollTo(0, 0)</code>.
          </p>
        </Callout>
      </section>

      {/* 10 */}
      <section className="mb-5">
        <h2 className="section-title">10. Reglas de los hooks y errores clásicos</h2>
        <div className="row g-3">
          {[
            { i: 'bi-1-circle', t: 'Solo en el nivel superior', d: 'Nunca dentro de if, bucles o funciones anidadas. El orden de los hooks debe ser idéntico en cada render.' },
            { i: 'bi-2-circle', t: 'Solo en componentes o hooks', d: 'No puedes llamar useState en una función normal ni en un manejador de eventos.' },
            { i: 'bi-3-circle', t: 'Empieza por «use»', d: 'Los hooks propios se llaman useAlgo para que las reglas y el linter los reconozcan.' },
            { i: 'bi-x-circle', t: 'No mutar el estado', d: 'push, splice o asignar propiedades no disparan re-render. Usa spread, map, filter.' },
            { i: 'bi-x-circle', t: 'No derivar estado innecesario', d: 'Si un valor se puede calcular de otro (total = suma), no lo guardes en estado: calcúlalo.' },
            { i: 'bi-x-circle', t: 'Falta de key', d: 'React avisa en consola y el rendimiento se degrada al reordenar listas.' },
          ].map((r) => (
            <div className="col-md-6" key={r.t}>
              <div className="panel p-3 h-100 d-flex gap-2">
                <i className={`bi ${r.i} text-primary fs-5`} />
                <div>
                  <h3 className="h6 fw-bold mb-1">{r.t}</h3>
                  <p className="fs-8 text-soft mb-0">{r.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11 */}
      <section className="mb-5">
        <h2 className="section-title">11. Estructura recomendada para crecer</h2>
        <CodeBlock
          language="text"
          title="organización por responsabilidad"
          code={`src/
├── components/        # piezas reutilizables (Boton, Tarjeta, Modal)
│   └── ui/
├── pages/             # una vista por ruta (Home, Tareas, Perfil)
├── layouts/           # estructura compartida (MainLayout, AuthLayout)
├── hooks/             # useLocalStorage, useFetch, useTema
├── context/           # providers globales
├── data/              # constantes, navegación, mocks
├── services/          # llamadas a la API
├── styles/            # custom.css, variables
├── utils/             # funciones puras (formatear fecha, validar)
├── App.jsx            # rutas
└── main.jsx           # montaje + estilos globales`}
        />
        <Callout type="tip" title="Empieza simple">
          <p>
            No instales Redux, Zustand ni TanStack Query el primer día. Con <code>useState</code>, un
            contexto y props bien pasadas tienes apps grandes funcionando. Añade complejidad cuando el
            dolor sea real.
          </p>
        </Callout>
      </section>

      <PrevNext />
    </>
  )
}
