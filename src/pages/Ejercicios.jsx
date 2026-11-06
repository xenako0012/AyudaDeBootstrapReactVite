import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Callout from '../components/Callout'
import CodeBlock from '../components/CodeBlock'
import PrevNext from '../components/PrevNext'

const ejercicios = [
  {
    nivel: 'Principiante',
    color: 'success',
    titulo: '1 · Botón con icono y contador',
    enunciado:
      'Crea un botón primario con un icono de Bootstrap Icons y un badge que muestre cuántas veces se ha pulsado. El número debe actualizarse al hacer clic.',
    pista:
      'Necesitas useState(0). El badge va dentro del botón con la clase badge text-bg-light. Recuerda cerrar el icono con <i /> y no con </i>.',
    solucion: `import { useState } from 'react'

export default function BotonContador() {
  const [clics, setClics] = useState(0)

  return (
    <button className="btn btn-primary" onClick={() => setClics(clics + 1)}>
      <i className="bi bi-hand-thumbs-up me-2" />
      Me gusta
      <span className="badge text-bg-light ms-2">{clics}</span>
    </button>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Principiante',
    color: 'success',
    titulo: '2 · Card de perfil responsive',
    enunciado:
      'Maqueta una tarjeta de perfil con avatar circular, nombre, rol, una lista de tres habilidades y dos botones. En móvil debe ocupar todo el ancho; a partir de md, un tercio.',
    pista:
      'row > col-12 col-md-4, card h-100, rounded-circle para el avatar y list-group-flush para la lista. Usa d-flex y gap para alinear.',
    solucion: `export default function Perfil() {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-4">
        <div className="card h-100 text-center">
          <div className="card-body">
            <div
              className="rounded-circle bg-primary text-white d-inline-grid mb-3"
              style={{ width: 72, height: 72, placeItems: 'center', fontSize: 24 }}
            >
              AL
            </div>
            <h5 className="card-title mb-0">Ada Lovelace</h5>
            <p className="text-secondary small mb-3">Ingeniera de software</p>

            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Vite</li>
            </ul>

            <div className="d-flex gap-2">
              <button className="btn btn-primary flex-fill">Seguir</button>
              <button className="btn btn-outline-secondary flex-fill">Mensaje</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Principiante',
    color: 'success',
    titulo: '3 · Formulario de login validado',
    enunciado:
      'Formulario controlado con email y contraseña. El botón de enviar debe estar deshabilitado hasta que el email tenga formato válido y la contraseña tenga 8 caracteres o más. Muestra los mensajes con is-invalid.',
    pista:
      'Dos estados + una expresión derivada. No guardes «esValido» en estado: calcúlalo en el render. En el submit usa e.preventDefault().',
    solucion: `import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const emailOk = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
  const passOk = pass.length >= 8
  const puedeEnviar = emailOk && passOk

  const enviar = (e) => {
    e.preventDefault()
    if (!puedeEnviar) return
    console.log({ email })
  }

  return (
    <form onSubmit={enviar} className="card p-4 mx-auto" style={{ maxWidth: 380 }} noValidate>
      <h1 className="h5 mb-3">Entrar</h1>

      <label className="form-label" htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className={'form-control mb-1 ' + (email ? (emailOk ? 'is-valid' : 'is-invalid') : '')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="invalid-feedback mb-3">Escribe un email válido.</div>

      <label className="form-label mt-2" htmlFor="pass">Contraseña</label>
      <input
        id="pass"
        type="password"
        className={'form-control mb-1 ' + (pass ? (passOk ? 'is-valid' : 'is-invalid') : '')}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <div className="invalid-feedback mb-3">Mínimo 8 caracteres.</div>

      <button className="btn btn-primary mt-3" disabled={!puedeEnviar}>Entrar</button>
    </form>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Intermedio',
    color: 'warning',
    titulo: '4 · Buscador de productos',
    enunciado:
      'A partir de un array de productos con nombre, categoría y precio, muestra una tabla y añade un input de búsqueda y un select de categoría. La tabla se filtra en vivo.',
    pista:
      'filter por nombre (toLowerCase + includes) y por categoría. La lista filtrada calcúlala en el render o con useMemo; no la guardes en estado.',
    solucion: `import { useMemo, useState } from 'react'

const PRODUCTOS = [
  { id: 1, nombre: 'Teclado', categoria: 'hardware', precio: 49 },
  { id: 2, nombre: 'Ratón', categoria: 'hardware', precio: 25 },
  { id: 3, nombre: 'Monitor', categoria: 'hardware', precio: 189 },
  { id: 4, nombre: 'Curso React', categoria: 'formacion', precio: 39 },
  { id: 5, nombre: 'Curso Vite', categoria: 'formacion', precio: 19 },
]

export default function Buscador() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('todas')

  const filtrados = useMemo(() => {
    return PRODUCTOS
      .filter((p) => cat === 'todas' || p.categoria === cat)
      .filter((p) => p.nombre.toLowerCase().includes(q.toLowerCase()))
  }, [q, cat])

  return (
    <div className="card">
      <div className="card-body">
        <div className="row g-2 mb-3">
          <div className="col-12 col-md-8">
            <input
              className="form-control"
              placeholder="Buscar producto…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <select className="form-select" value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="todas">Todas</option>
              <option value="hardware">Hardware</option>
              <option value="formacion">Formación</option>
            </select>
          </div>
        </div>

        <table className="table table-hover align-middle mb-0">
          <thead>
            <tr><th>Producto</th><th>Categoría</th><th className="text-end">Precio</th></tr>
          </thead>
          <tbody>
            {filtrados.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td><span className="badge text-bg-secondary">{p.categoria}</span></td>
                <td className="text-end">{p.precio} €</td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr><td colSpan="3" className="text-center text-secondary">Sin resultados</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Intermedio',
    color: 'warning',
    titulo: '5 · Carrito con total',
    enunciado:
      'Crea un carrito con tres productos: cada uno con botones + y −, y un total que se actualiza. Si la cantidad llega a 0, el producto no debe mostrar botón de restar.',
    pista:
      'Estado como array de objetos {id, nombre, precio, cantidad}. Actualiza con map devolviendo un objeto nuevo. El total se calcula con reduce.',
    solucion: `import { useState } from 'react'

const INICIAL = [
  { id: 1, nombre: 'Café', precio: 3, cantidad: 1 },
  { id: 2, nombre: 'Croissant', precio: 2, cantidad: 2 },
]

export default function Carrito() {
  const [items, setItems] = useState(INICIAL)

  const cambiar = (id, delta) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, cantidad: Math.max(0, it.cantidad + delta) } : it,
      ),
    )

  const total = items.reduce((acc, it) => acc + it.precio * it.cantidad, 0)

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {items.map((it) => (
          <li key={it.id} className="list-group-item d-flex align-items-center gap-2">
            <span className="flex-grow-1">
              {it.nombre} <small className="text-secondary">{it.precio} €</small>
            </span>

            {it.cantidad > 0 && (
              <button className="btn btn-sm btn-outline-secondary" onClick={() => cambiar(it.id, -1)}>
                −
              </button>
            )}
            <span className="badge text-bg-primary">{it.cantidad}</span>
            <button className="btn btn-sm btn-outline-primary" onClick={() => cambiar(it.id, 1)}>
              +
            </button>
          </li>
        ))}
      </ul>
      <div className="card-footer d-flex justify-content-between fw-bold">
        <span>Total</span>
        <span>{total} €</span>
      </div>
    </div>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Intermedio',
    color: 'warning',
    titulo: '6 · Modal de confirmación controlado por React',
    enunciado:
      'Implementa un modal que se abra con un botón y que solo borre el elemento si el usuario confirma. Debe poder abrirse y cerrarse desde el estado de React, sin data-attributes.',
    pista:
      'Instala react-bootstrap o usa la API de Bootstrap (new Modal(ref)) con useRef. Lo importante: el modal no debe quedarse abierto al desmontar.',
    solucion: `import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function BorrarElemento() {
  const [abierto, setAbierto] = useState(false)
  const [borrado, setBorrado] = useState(false)

  const confirmar = () => {
    setBorrado(true)
    setAbierto(false)
  }

  return (
    <>
      <div className="alert alert-info d-flex align-items-center">
        {borrado ? 'Elemento eliminado' : 'Elemento pendiente de borrar'}
        <Button className="ms-auto" variant="danger" disabled={borrado} onClick={() => setAbierto(true)}>
          Eliminar
        </Button>
      </div>

      <Modal show={abierto} onHide={() => setAbierto(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Eliminar elemento?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta acción no se puede deshacer.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAbierto(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmar}>Sí, eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Intermedio',
    color: 'warning',
    titulo: '7 · Navbar responsive con menú activo',
    enunciado:
      'Crea una navbar que colapse en móvil y tenga tres enlaces. Resalta el enlace de la sección visible mientras se hace scroll.',
    pista:
      'navbar-expand-lg + collapse. Para el activo, IntersectionObserver en un useEffect con limpieza (mejor que data-bs-spy en SPAs).',
    solucion: `import { useEffect, useState } from 'react'

const SECCIONES = [
  { id: 'intro', label: 'Intro' },
  { id: 'teoria', label: 'Teoría' },
  { id: 'practica', label: 'Práctica' },
]

export default function NavScroll() {
  const [activa, setActiva] = useState('intro')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiva(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    SECCIONES.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
          <span className="navbar-brand fw-bold">Docs</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navSec" aria-label="Menú">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navSec">
            <ul className="navbar-nav">
              {SECCIONES.map((s) => (
                <li className="nav-item" key={s.id}>
                  <a
                    className={'nav-link ' + (activa === s.id ? 'active fw-semibold' : '')}
                    href={'#' + s.id}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {SECCIONES.map((s) => (
        <section id={s.id} key={s.id} style={{ minHeight: '60vh' }} className="py-5">
          <h2 className="h4">{s.label}</h2>
          <p className="text-secondary">Contenido de la sección {s.label}.</p>
        </section>
      ))}
    </>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Avanzado',
    color: 'danger',
    titulo: '8 · Lista de usuarios con fetch',
    enunciado:
      'Carga usuarios desde https://jsonplaceholder.typicode.com/users y muéstralos en cards. Gestiona los tres estados: cargando (spinner), error (alert con botón de reintentar) y datos.',
    pista:
      'useEffect con AbortController o flag «activo». Guarda el error como string. El botón de reintentar cambia un estado «intento» que va en las dependencias.',
    solucion: `import { useEffect, useState } from 'react'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const ctrl = new AbortController()

    setCargando(true)
    setError(null)

    fetch('https://jsonplaceholder.typicode.com/users', { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error('Error ' + r.status)
        return r.json()
      })
      .then(setUsuarios)
      .catch((e) => {
        if (e.name !== 'AbortError') setError(e.message)
      })
      .finally(() => setCargando(false))

    return () => ctrl.abort()
  }, [intento])

  if (cargando) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando…</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-danger d-flex align-items-center">
        No se pudieron cargar los usuarios: {error}
        <button className="btn btn-sm btn-outline-danger ms-auto" onClick={() => setIntento(intento + 1)}>
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="row g-3">
      {usuarios.map((u) => (
        <div className="col-md-4" key={u.id}>
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">{u.name}</h6>
              <p className="text-secondary small mb-0">{u.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Avanzado',
    color: 'danger',
    titulo: '9 · Tema claro/oscuro persistente',
    enunciado:
      'Añade un botón que alterne entre modo claro y oscuro usando data-bs-theme en <html>. La preferencia debe sobrevivir al recargar y respetar la del sistema la primera vez.',
    pista:
      'Inicializa el estado con una función que lea localStorage y matchMedia. Un useEffect aplica el atributo y guarda. Cuidado con el flash inicial.',
    solucion: `import { useEffect, useState } from 'react'

export default function TemaToggle() {
  const [tema, setTema] = useState(() => {
    const guardado = localStorage.getItem('tema')
    if (guardado) return guardado
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}
      aria-label="Cambiar tema"
    >
      <i className={'bi ' + (tema === 'dark' ? 'bi-sun' : 'bi-moon-stars')} />
      {tema === 'dark' ? ' Modo claro' : ' Modo oscuro'}
    </button>
  )
}`,
    language: 'jsx',
  },
  {
    nivel: 'Avanzado',
    color: 'danger',
    titulo: '10 · Refactoriza con useReducer',
    enunciado:
      'Toma el gestor de tareas del proyecto guiado y sustituye los tres setters (añadir, alternar, borrar) por un único reducer con acciones. Añade también la acción «limpiar completadas».',
    pista:
      'actions: {type:"ADD"|"TOGGLE"|"DELETE"|"CLEAR"}, con payload. El reducer debe ser una función pura: recibe estado y acción, devuelve estado nuevo.',
    solucion: `import { useReducer } from 'react'

const inicial = []

function reducer(tareas, accion) {
  switch (accion.type) {
    case 'ADD':
      return [{ id: crypto.randomUUID(), texto: accion.texto, hecha: false }, ...tareas]
    case 'TOGGLE':
      return tareas.map((t) => (t.id === accion.id ? { ...t, hecha: !t.hecha } : t))
    case 'DELETE':
      return tareas.filter((t) => t.id !== accion.id)
    case 'CLEAR':
      return tareas.filter((t) => !t.hecha)
    default:
      throw new Error('Acción desconocida: ' + accion.type)
  }
}

export default function Tareas() {
  const [tareas, dispatch] = useReducer(reducer, inicial)

  return (
    <div className="card p-3">
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary btn-sm" onClick={() => dispatch({ type: 'ADD', texto: 'Nueva tarea' })}>
          Añadir
        </button>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => dispatch({ type: 'CLEAR' })}>
          Limpiar completadas
        </button>
      </div>

      <ul className="list-group mb-0">
        {tareas.map((t) => (
          <li key={t.id} className="list-group-item d-flex align-items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input mt-0"
              checked={t.hecha}
              onChange={() => dispatch({ type: 'TOGGLE', id: t.id })}
            />
            <span className={'flex-grow-1 small ' + (t.hecha ? 'text-decoration-line-through' : '')}>
              {t.texto}
            </span>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => dispatch({ type: 'DELETE', id: t.id })}
              aria-label="Eliminar"
            >
              <i className="bi bi-trash" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
    language: 'jsx',
  },
]

function Ejercicio({ ej, index }) {
  const [verPista, setVerPista] = useState(false)
  const [verSolucion, setVerSolucion] = useState(false)

  return (
    <article className="panel p-4 mb-3">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
        <span className={`badge text-bg-${ej.color}`}>{ej.nivel}</span>
        <h3 className="h6 fw-bold mb-0">{ej.titulo}</h3>
      </div>

      <p className="fs-7 text-soft">{ej.enunciado}</p>

      <div className="d-flex flex-wrap gap-2 mb-2">
        <button className="btn btn-sm btn-soft" onClick={() => setVerPista((v) => !v)}>
          <i className={`bi ${verPista ? 'bi-eye-slash' : 'bi-lightbulb'} me-1`} />
          {verPista ? 'Ocultar pista' : 'Ver pista'}
        </button>
        <button
          className={`btn btn-sm ${verSolucion ? 'btn-outline-secondary' : 'btn-primary'}`}
          onClick={() => setVerSolucion((v) => !v)}
        >
          <i className={`bi ${verSolucion ? 'bi-eye-slash' : 'bi-code-slash'} me-1`} />
          {verSolucion ? 'Ocultar solución' : 'Ver solución'}
        </button>
      </div>

      {verPista && (
        <div className="alert alert-warning py-2 fs-7 mb-2">
          <i className="bi bi-lightbulb me-2" />
          {ej.pista}
        </div>
      )}

      {verSolucion && <CodeBlock code={ej.solucion} language={ej.language} title={`Solución ${index + 1}`} />}
    </article>
  )
}

export default function Ejercicios() {
  const [nivel, setNivel] = useState('Todos')
  const niveles = ['Todos', 'Principiante', 'Intermedio', 'Avanzado']
  const visibles = nivel === 'Todos' ? ejercicios : ejercicios.filter((e) => e.nivel === nivel)

  return (
    <>
      <PageHeader
        eyebrow="Práctica · Ejercicios"
        title="10 ejercicios para afianzar lo aprendido"
        lead="Cada reto plantea un problema concreto que se resuelve con lo visto en la teoría. Intenta resolverlo antes de abrir la solución: leer código ajeno es útil, pero pelearte con él lo es más."
        chips={['10 retos', 'Con pistas', 'Soluciones completas']}
      />

      <Callout type="tip" title="Cómo aprovecharlos de verdad">
        <p>
          Crea un proyecto nuevo con <code>npm create vite@latest retos -- --template react</code> e
          implementa cada ejercicio en su propio componente. Abre la pista solo si llevas más de 10
          minutos bloqueado, y compara tu solución con la propuesta en lugar de copiarla.
        </p>
      </Callout>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {niveles.map((n) => (
          <button
            key={n}
            className={`btn btn-sm ${nivel === n ? 'btn-primary' : 'btn-soft'}`}
            onClick={() => setNivel(n)}
          >
            {n}
            {n !== 'Todos' && (
              <span className="ms-2 opacity-75">{ejercicios.filter((e) => e.nivel === n).length}</span>
            )}
          </button>
        ))}
        <span className="ms-auto chip fs-8 align-self-center">
          {visibles.length} de {ejercicios.length}
        </span>
      </div>

      {visibles.map((ej, i) => (
        <Ejercicio ej={ej} index={i} key={ej.titulo} />
      ))}

      <Callout type="info" title="¿Te has quedado corto?">
        <p>
          Cuando termines, abre un repositorio público con tus soluciones y añade un README con capturas.
          Es la mejor carta de presentación para tu primer trabajo como frontend.
        </p>
      </Callout>

      <PrevNext />
    </>
  )
}
