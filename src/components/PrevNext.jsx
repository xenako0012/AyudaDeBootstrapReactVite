import { Link, useLocation } from 'react-router-dom'
import { getPrevNext } from '../data/navigation'

export default function PrevNext() {
  const { pathname } = useLocation()
  const { prev, next } = getPrevNext(pathname)
  if (!prev && !next) return null

  return (
    <div className="row g-3 mt-5">
      <div className="col-12 col-md-6">
        {prev && (
          <Link to={prev.to} className="learn-card p-3">
            <span className="fs-8 text-soft tracking-wide mb-1">Anterior</span>
            <span className="fw-600 d-flex align-items-center gap-2">
              <i className="bi bi-arrow-left" /> {prev.label}
            </span>
          </Link>
        )}
      </div>
      <div className="col-12 col-md-6">
        {next && (
          <Link to={next.to} className="learn-card p-3 text-md-end">
            <span className="fs-8 text-soft tracking-wide mb-1">Siguiente</span>
            <span className="fw-600 d-flex align-items-center gap-2 justify-content-md-end">
              {next.label} <i className="bi bi-arrow-right" />
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
