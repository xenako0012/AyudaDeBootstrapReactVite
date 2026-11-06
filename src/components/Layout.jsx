import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Offcanvas, Popover, Tooltip } from 'bootstrap'
import { navSections } from '../data/navigation'
import SearchModal from './SearchModal'

function SidebarLinks({ onNavigate }) {
  return (
    <>
      {navSections.map((section) => (
        <div className="nav-group" key={section.title}>
          <div className="nav-group-title">{section.title}</div>
          {section.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}
              onClick={onNavigate}
            >
              <i className={`bi ${item.icon}`} />
              <span>{item.label}</span>
              <i className="bi bi-chevron-right" />
            </NavLink>
          ))}
        </div>
      ))}
    </>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-bs-theme') || 'light',
  )
  const [searchOpen, setSearchOpen] = useState(false)
  const offcanvasRef = useRef(null)
  const sidebarRef = useRef(null)

  // Tema claro / oscuro
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    try {
      localStorage.setItem('bvr-theme', theme)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [theme])

  // Volver arriba al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0)
    setSearchOpen(false)
    // Inicializa tooltips/popovers de la página actual
    const tips = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
    const pops = [...document.querySelectorAll('[data-bs-toggle="popover"]')]
    const instances = [
      ...tips.map((el) => new Tooltip(el, { container: 'body' })),
      ...pops.map((el) => new Popover(el, { container: 'body', trigger: 'click' })),
    ]
    return () => instances.forEach((i) => i.dispose())
  }, [pathname])

  // Atajo de teclado Ctrl/Cmd + K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeOffcanvas = () => {
    if (offcanvasRef.current) Offcanvas.getOrCreateInstance(offcanvasRef.current).hide()
  }

  return (
    <>
      {/* ---------- Barra superior ---------- */}
      <nav className="topbar fixed-top d-flex align-items-center">
        <div className="container-fluid px-3 px-lg-4 d-flex align-items-center gap-2 gap-lg-3">
          <button
            className="btn-ghost d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-label="Abrir menú"
          >
            <i className="bi bi-list" />
          </button>

          <Link to="/" className="brand me-lg-2">
            <span className="brand-logo">
              <i className="bi bi-bootstrap-fill" />
            </span>
            <span className="d-none d-sm-block">
              <span className="brand-title d-block">Bootstrap · Vite · React</span>
              <span className="brand-sub">Guía completa en español</span>
            </span>
          </Link>

          <button className="search-trigger d-none d-md-flex ms-lg-4" onClick={() => setSearchOpen(true)}>
            <i className="bi bi-search" />
            <span>Buscar en la guía…</span>
            <kbd>Ctrl K</kbd>
          </button>

          <div className="ms-auto d-flex align-items-center gap-2">
            <button
              className="btn-ghost d-md-none"
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar"
            >
              <i className="bi bi-search" />
            </button>

            <a
              className="btn-ghost d-none d-sm-inline-grid"
              href="https://github.com/xenako0012/AyudaDeBootstrapReactVite"
              target="_blank"
              rel="noreferrer"
              data-bs-toggle="tooltip"
              title="Repositorio en GitHub"
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>

            <button
              className="btn-ghost"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              data-bs-toggle="tooltip"
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              aria-label="Cambiar tema"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Sidebar escritorio ---------- */}
      <aside className="sidebar d-none d-lg-block" ref={sidebarRef}>
        <SidebarLinks />
        <div className="sidebar-cta">
          <div className="d-flex align-items-center gap-2 mb-1">
            <i className="bi bi-rocket-takeoff text-primary" />
            <strong className="fs-7">¿Empezando de cero?</strong>
          </div>
          <p className="fs-8 text-soft mb-2">
            Sigue la ruta: teoría → integración → componentes → proyecto guiado.
          </p>
          <Link to="/practica" className="btn btn-brand btn-sm w-100">
            Ir al proyecto guiado
          </Link>
        </div>
        <p className="fs-8 text-soft mt-4 mb-0 px-1">
          Hecho con Bootstrap 5.3, Vite y React.{' '}
          <a href="https://getbootstrap.com/docs/5.3/" target="_blank" rel="noreferrer">
            Docs
          </a>
        </p>
      </aside>

      {/* ---------- Menú móvil ---------- */}
      <div
        className="offcanvas offcanvas-start sidebar-canvas"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header border-bottom border-soft">
          <h5 className="offcanvas-title fw-bold" id="mobileNavLabel">
            <i className="bi bi-bootstrap-fill text-primary me-2" />
            Contenido
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
        </div>
        <div className="offcanvas-body">
          <SidebarLinks onNavigate={closeOffcanvas} />
        </div>
      </div>

      {/* ---------- Contenido ---------- */}
      <div className="layout">
        <div className="with-sidebar">
          <div className="container-fluid px-3 px-lg-4">
            <main className="doc-content">
              <Suspense
                fallback={
                  <div className="d-flex flex-column align-items-center justify-content-center py-5 my-5 text-soft">
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Cargando…</span>
                    </div>
                    <small>Cargando contenido…</small>
                  </div>
                }
              >
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>

        <footer className="site-footer with-sidebar">
          <div className="container-fluid px-3 px-lg-4">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="brand mb-2">
                  <span className="brand-logo">
                    <i className="bi bi-bootstrap-fill" />
                  </span>
                  <span className="brand-title">Bootstrap · Vite · React</span>
                </div>
                <p className="fs-7 text-soft mb-3" style={{ maxWidth: 320 }}>
                  Guía educativa en español: teoría, componentes interactivos, cheatsheet,
                  proyecto guiado, ejercicios y quiz para dominar el stack del frontend moderno.
                </p>
                <div className="d-flex gap-2">
                  <a className="btn btn-soft btn-sm" href="https://getbootstrap.com/docs/5.3/" target="_blank" rel="noreferrer">
                    <i className="bi bi-bootstrap me-1" /> Bootstrap
                  </a>
                  <a className="btn btn-soft btn-sm" href="https://vite.dev/" target="_blank" rel="noreferrer">
                    <i className="bi bi-lightning-charge me-1" /> Vite
                  </a>
                  <a className="btn btn-soft btn-sm" href="https://es.react.dev/" target="_blank" rel="noreferrer">
                    <i className="bi bi-code-slash me-1" /> React
                  </a>
                </div>
              </div>

              <div className="col-6 col-lg-2">
                <h6 className="fs-8 tracking-wide text-soft mb-2">Teoría</h6>
                <Link className="footer-link" to="/teoria/bootstrap">Bootstrap</Link>
                <Link className="footer-link" to="/teoria/vite">Vite</Link>
                <Link className="footer-link" to="/teoria/react">React</Link>
                <Link className="footer-link" to="/integracion">Integración</Link>
              </div>

              <div className="col-6 col-lg-2">
                <h6 className="fs-8 tracking-wide text-soft mb-2">Práctica</h6>
                <Link className="footer-link" to="/componentes">Componentes</Link>
                <Link className="footer-link" to="/practica">Proyecto guiado</Link>
                <Link className="footer-link" to="/ejercicios">Ejercicios</Link>
                <Link className="footer-link" to="/quiz">Quiz</Link>
              </div>

              <div className="col-12 col-lg-4">
                <h6 className="fs-8 tracking-wide text-soft mb-2">Enlaces oficiales</h6>
                <div className="row">
                  <div className="col-6">
                    <a className="footer-link" href="https://getbootstrap.com/docs/5.3/" target="_blank" rel="noreferrer">Docs Bootstrap</a>
                    <a className="footer-link" href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Icons</a>
                    <a className="footer-link" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">Guía de Vite</a>
                  </div>
                  <div className="col-6">
                    <a className="footer-link" href="https://es.react.dev/learn" target="_blank" rel="noreferrer">Aprender React</a>
                    <a className="footer-link" href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a>
                    <a className="footer-link" href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">React Bootstrap</a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="hr-soft my-4" />
            <div className="d-flex flex-wrap gap-2 justify-content-between fs-8 text-soft">
              <span>© {new Date().getFullYear()} Guía Bootstrap · Vite · React — contenido educativo abierto.</span>
              <span>
                Bootstrap 5.3 · Vite 8 · React 19 —{' '}
                <a href="https://github.com/xenako0012/AyudaDeBootstrapReactVite" target="_blank" rel="noreferrer">
                  Código fuente
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
