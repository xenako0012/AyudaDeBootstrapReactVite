import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="panel p-5 text-center my-5">
      <div className="display-1 fw-bold grad-text">404</div>
      <h1 className="h4 fw-bold mb-2">Esta página no existe</h1>
      <p className="text-soft mb-4">
        Puede que el enlace esté mal escrito o que la sección se haya movido. Prueba con una de estas:
      </p>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <Link to="/" className="btn btn-brand">
          <i className="bi bi-house-door me-1" /> Inicio
        </Link>
        <Link to="/teoria/bootstrap" className="btn btn-soft">Teoría</Link>
        <Link to="/componentes" className="btn btn-soft">Componentes</Link>
        <Link to="/practica" className="btn btn-soft">Proyecto guiado</Link>
      </div>
    </div>
  )
}
