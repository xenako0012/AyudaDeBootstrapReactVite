import { useEffect, useMemo, useState } from 'react'

const CLAVE = 'bvr-tareas-demo'

/**
 * Mini gestor de tareas: es el resultado final del proyecto guiado.
 * Usa estado, efectos, localStorage, listas con key y clases de Bootstrap.
 */
export default function TaskDemo() {
  const [tareas, setTareas] = useState(() => {
    try {
      const guardadas = localStorage.getItem(CLAVE)
      if (guardadas) return JSON.parse(guardadas)
    } catch {
      /* ignorar */
    }
    return [
      { id: 1, texto: 'Crear el proyecto con Vite', hecha: true },
      { id: 2, texto: 'Instalar Bootstrap e iconos', hecha: true },
      { id: 3, texto: 'Montar el componente Tarea', hecha: false },
    ]
  })
  const [texto, setTexto] = useState('')
  const [filtro, setFiltro] = useState('todas')

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(tareas))
    } catch {
      /* almacenamiento lleno o bloqueado */
    }
  }, [tareas])

  const visibles = useMemo(() => {
    if (filtro === 'activas') return tareas.filter((t) => !t.hecha)
    if (filtro === 'completadas') return tareas.filter((t) => t.hecha)
    return tareas
  }, [tareas, filtro])

  const pendientes = tareas.filter((t) => !t.hecha).length
  const progreso = tareas.length ? Math.round(((tareas.length - pendientes) / tareas.length) * 100) : 0

  const anadir = (e) => {
    e.preventDefault()
    const limpio = texto.trim()
    if (!limpio) return
    setTareas([{ id: crypto.randomUUID(), texto: limpio, hecha: false }, ...tareas])
    setTexto('')
  }

  const alternar = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)))

  const borrar = (id) => setTareas(tareas.filter((t) => t.id !== id))
  const limpiar = () => setTareas(tareas.filter((t) => !t.hecha))

  return (
    <div className="panel p-3 p-md-4">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <span className="icon-tile mb-0" style={{ width: 36, height: 36, fontSize: '1rem' }}>
          <i className="bi bi-check2-square" />
        </span>
        <div>
          <h3 className="h6 fw-bold mb-0">Mis tareas</h3>
          <span className="fs-8 text-soft">
            {pendientes === 0 ? '¡Todo hecho!' : `${pendientes} pendiente${pendientes === 1 ? '' : 's'}`}
          </span>
        </div>
        <div className="ms-auto d-flex gap-1" role="group" aria-label="Filtros">
          {[
            { id: 'todas', label: 'Todas' },
            { id: 'activas', label: 'Activas' },
            { id: 'completadas', label: 'Hechas' },
          ].map((f) => (
            <button
              key={f.id}
              className={`btn btn-sm ${filtro === f.id ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <form className="input-group mb-3" onSubmit={anadir}>
        <input
          className="form-control"
          placeholder="¿Qué tienes que hacer?"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          aria-label="Nueva tarea"
          maxLength={80}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus-lg me-1" /> Añadir
        </button>
      </form>

      <div className="progress mb-3" style={{ height: 6 }} role="progressbar" aria-valuenow={progreso} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success" style={{ width: `${progreso}%` }} />
      </div>

      <ul className="list-group mb-3">
        {visibles.length === 0 && (
          <li className="list-group-item text-center text-secondary fs-7 py-4">
            <i className="bi bi-inbox fs-4 d-block mb-1" />
            No hay tareas en esta vista.
          </li>
        )}
        {visibles.map((t) => (
          <li key={t.id} className="list-group-item d-flex align-items-center gap-2">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              id={`td-${t.id}`}
              checked={t.hecha}
              onChange={() => alternar(t.id)}
            />
            <label
              className={`fs-7 mb-0 flex-grow-1 ${t.hecha ? 'text-decoration-line-through text-secondary' : ''}`}
              htmlFor={`td-${t.id}`}
              style={{ cursor: 'pointer' }}
            >
              {t.texto}
            </label>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => borrar(t.id)}
              aria-label={`Eliminar: ${t.texto}`}
            >
              <i className="bi bi-trash" />
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex flex-wrap align-items-center gap-2">
        <span className="fs-8 text-soft">
          {tareas.length} tarea{tareas.length === 1 ? '' : 's'} · {progreso}% completado
        </span>
        <button
          className="btn btn-sm btn-soft ms-auto"
          onClick={limpiar}
          disabled={tareas.length === pendientes}
        >
          <i className="bi bi-eraser me-1" /> Limpiar completadas
        </button>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => setTareas([])}>
          Borrar todo
        </button>
      </div>
    </div>
  )
}
