// Catálogo · parte 2: navegación y componentes interactivos (necesitan el JS de Bootstrap).

export const seccionesInteractivas = [
  {
    id: 'navbar',
    title: 'Navbar',
    desc: 'Barra de navegación responsive con colapso automático. Combina brand, nav, formularios y dropdowns. Fija con sticky-top o fixed-top.',
    doc: 'https://getbootstrap.com/docs/5.3/components/navbar/',
    code: `<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">MiApp</a>

    <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navPrincipal"
            aria-controls="navPrincipal" aria-expanded="false" aria-label="Menú">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navPrincipal">
      <ul className="navbar-nav me-auto">
        <li className="nav-item"><a className="nav-link active" href="/">Inicio</a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Recursos</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Docs</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded border">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">
            <i className="bi bi-bootstrap-fill text-primary me-1" /> MiApp
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navPrincipalDemo"
            aria-controls="navPrincipalDemo"
            aria-expanded="false"
            aria-label="Menú"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navPrincipalDemo">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="#componentes">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#componentes">Proyectos</a></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#componentes"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recursos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#componentes">Documentación</a></li>
                  <li><a className="dropdown-item" href="#componentes">Ejemplos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#componentes">Blog</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control form-control-sm me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-primary btn-sm" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    ),
  },

  {
    id: 'navs',
    title: 'Navs y tabs',
    desc: 'Pestañas con nav-tabs o nav-pills. El contenido se muestra con tab-pane y el atributo data-bs-toggle="tab".',
    doc: 'https://getbootstrap.com/docs/5.3/components/navs-tabs/',
    code: `<ul className="nav nav-tabs" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabA" type="button">
      Bootstrap
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tabB" type="button">
      React
    </button>
  </li>
</ul>

<div className="tab-content pt-3">
  <div className="tab-pane fade show active" id="tabA">Contenido A</div>
  <div className="tab-pane fade" id="tabB">Contenido B</div>
</div>`,
    preview: (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabCompA" type="button" role="tab">
              <i className="bi bi-bootstrap me-1" /> Bootstrap
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tabCompB" type="button" role="tab">
              <i className="bi bi-code-slash me-1" /> React
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tabCompC" type="button" role="tab">
              <i className="bi bi-lightning-charge me-1" /> Vite
            </button>
          </li>
        </ul>
        <div className="tab-content pt-3">
          <div className="tab-pane fade show active" id="tabCompA">
            <p className="fs-7 mb-0">Bootstrap aporta el sistema visual: grid, utilidades y componentes.</p>
          </div>
          <div className="tab-pane fade" id="tabCompB">
            <p className="fs-7 mb-0">React aporta la lógica: estado, eventos y composición de componentes.</p>
          </div>
          <div className="tab-pane fade" id="tabCompC">
            <p className="fs-7 mb-0">Vite aporta el entorno: dev server, HMR y build optimizado.</p>
          </div>
        </div>

        <ul className="nav nav-pills mt-4 gap-2">
          <li className="nav-item"><button className="nav-link active" type="button">Píldora activa</button></li>
          <li className="nav-item"><button className="nav-link" type="button">Otra</button></li>
          <li className="nav-item"><button className="nav-link" type="button">Más</button></li>
        </ul>
      </div>
    ),
  },

  {
    id: 'accordion',
    title: 'Accordion',
    desc: 'Paneles plegables. data-bs-parent cierra los demás al abrir uno. Muy útil para FAQs.',
    doc: 'https://getbootstrap.com/docs/5.3/components/accordion/',
    code: `<div className="accordion" id="faq">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"
              data-bs-toggle="collapse" data-bs-target="#faq1"
              aria-expanded="true" aria-controls="faq1">
        ¿Qué es Vite?
      </button>
    </h2>
    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faq">
      <div className="accordion-body">Un build tool rapidísimo…</div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="accordion" id="faqDemo">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqDemo1"
              aria-expanded="true"
              aria-controls="faqDemo1"
            >
              ¿Puedo usar Bootstrap sin jQuery?
            </button>
          </h3>
          <div id="faqDemo1" className="accordion-collapse collapse show" data-bs-parent="#faqDemo">
            <div className="accordion-body fs-7">
              Sí. Desde Bootstrap 5 todo el JavaScript es vanilla, sin dependencias de jQuery.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqDemo2"
              aria-controls="faqDemo2"
            >
              ¿Necesito React-Bootstrap?
            </button>
          </h3>
          <div id="faqDemo2" className="accordion-collapse collapse" data-bs-parent="#faqDemo">
            <div className="accordion-body fs-7">
              No es obligatorio. Puedes usar las clases y los data-attributes de Bootstrap, o los
              componentes de React-Bootstrap si prefieres controlar el estado desde React.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqDemo3"
              aria-controls="faqDemo3"
            >
              ¿Cuánto CSS añade Bootstrap?
            </button>
          </h3>
          <div id="faqDemo3" className="accordion-collapse collapse" data-bs-parent="#faqDemo">
            <div className="accordion-body fs-7">
              Unos 230 KB sin comprimir y alrededor de 30 KB con gzip. Con SASS puedes compilar solo lo
              que uses.
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'modal',
    title: 'Modal',
    desc: 'Diálogos superpuestos para confirmaciones y formularios. Tamaños con modal-sm / modal-lg / modal-xl y centrado con modal-dialog-centered.',
    doc: 'https://getbootstrap.com/docs/5.3/components/modal/',
    code: `<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
  Abrir
</button>

<div className="modal fade" id="miModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Título</h5>
        <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
      </div>
      <div className="modal-body">Contenido del modal.</div>
      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCat">
            <i className="bi bi-window me-1" /> Modal estándar
          </button>
          <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#modalCatSm">
            Modal pequeño de confirmación
          </button>
        </div>

        <div className="modal fade" id="modalCat" tabIndex="-1" aria-labelledby="modalCatLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title h6" id="modalCatLabel">Nuevo proyecto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-8">
                    <label className="form-label" htmlFor="catNombre">Nombre</label>
                    <input id="catNombre" className="form-control" placeholder="Mi proyecto" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" htmlFor="catTipo">Tipo</label>
                    <select id="catTipo" className="form-select">
                      <option>Web</option>
                      <option>App</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button className="btn btn-primary" data-bs-dismiss="modal">Crear</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalCatSm" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center py-4">
                <i className="bi bi-trash3 text-danger fs-2" />
                <p className="mt-2 mb-0 fw-semibold">¿Eliminar el elemento?</p>
                <small className="text-secondary">Esta acción no se puede deshacer.</small>
              </div>
              <div className="modal-footer justify-content-center py-2">
                <button className="btn btn-light btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button className="btn btn-danger btn-sm" data-bs-dismiss="modal">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },

  {
    id: 'dropdown',
    title: 'Dropdown',
    desc: 'Menús desplegables. Ajusta la alineación con dropdown-menu-end, el tamaño con dropdown-menu-lg y separa con dropdown-divider.',
    doc: 'https://getbootstrap.com/docs/5.3/components/dropdowns/',
    code: `<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
    Acciones
  </button>
  <ul className="dropdown-menu">
    <li><h6 className="dropdown-header">Opciones</h6></li>
    <li><a className="dropdown-item" href="#">Editar</a></li>
    <li><a className="dropdown-item" href="#">Duplicar</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item text-danger" href="#">Eliminar</a></li>
  </ul>
</div>`,
    preview: (
      <div className="d-flex flex-wrap gap-2">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </button>
          <ul className="dropdown-menu">
            <li><h6 className="dropdown-header">Opciones</h6></li>
            <li><a className="dropdown-item" href="#componentes">Editar</a></li>
            <li><a className="dropdown-item" href="#componentes">Duplicar</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#componentes">Eliminar</a></li>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dividido
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#componentes">Perfil</a></li>
            <li><a className="dropdown-item" href="#componentes">Ajustes</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#componentes">Salir</a></li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 'carousel',
    title: 'Carousel',
    desc: 'Carrusel de imágenes o contenido con controles, indicadores y autoplay (data-bs-ride). Aquí con degradados en vez de fotos.',
    doc: 'https://getbootstrap.com/docs/5.3/components/carousel/',
    code: `<div id="miCarrusel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button data-bs-target="#miCarrusel" data-bs-slide-to="0" className="active" />
    <button data-bs-target="#miCarrusel" data-bs-slide-to="1" />
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-flex align-items-center justify-content-center bg-primary text-white"
           style={{ height: 260 }}>
        <h3>Primera diapositiva</h3>
      </div>
    </div>
    <div className="carousel-item">…</div>
  </div>

  <button className="carousel-control-prev" data-bs-target="#miCarrusel" data-bs-slide="prev">‹</button>
  <button className="carousel-control-next" data-bs-target="#miCarrusel" data-bs-slide="next">›</button>
</div>`,
    preview: (
      <div id="carouselDemo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="0" className="active" aria-label="Diapositiva 1" />
          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="1" aria-label="Diapositiva 2" />
          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="2" aria-label="Diapositiva 3" />
        </div>
        <div className="carousel-inner rounded-3 overflow-hidden">
          {[
            { t: 'Bootstrap', d: 'Grid, utilidades y componentes listos', bg: 'linear-gradient(135deg,#7952b3,#5b4bb7)', i: 'bi-bootstrap-fill' },
            { t: 'Vite', d: 'Dev server instantáneo y build optimizado', bg: 'linear-gradient(135deg,#7c3aed,#22d3ee)', i: 'bi-lightning-charge-fill' },
            { t: 'React', d: 'Componentes, estado y hooks', bg: 'linear-gradient(135deg,#0891b2,#3b82f6)', i: 'bi-code-slash' },
          ].map((s, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={s.t}>
              <div
                className="d-flex flex-column align-items-center justify-content-center text-white text-center"
                style={{ height: 240, background: s.bg }}
              >
                <i className={`bi ${s.i} display-5 mb-2`} />
                <h3 className="h4 fw-bold mb-1">{s.t}</h3>
                <p className="mb-0 fs-7 opacity-75">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDemo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselDemo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    ),
  },

  {
    id: 'collapse',
    title: 'Collapse',
    desc: 'Muestra u oculta bloques con un botón. Es la pieza que hay detrás del navbar móvil y del accordion.',
    doc: 'https://getbootstrap.com/docs/5.3/components/collapse/',
    code: `<button className="btn btn-primary" data-bs-toggle="collapse"
        data-bs-target="#detalle" aria-expanded="false" aria-controls="detalle">
  Ver detalles
</button>

<div className="collapse" id="detalle">
  <div className="card card-body mt-2">
    Contenido que aparece y desaparece.
  </div>
</div>`,
    preview: (
      <div>
        <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseDemo" aria-expanded="false" aria-controls="collapseDemo">
          Ver detalles
        </button>
        <div className="collapse" id="collapseDemo">
          <div className="card card-body mt-2 fs-7">
            Contenido que aparece y desaparece con una transición suave. El botón recibe el estado{' '}
            <code>aria-expanded</code> automáticamente.
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'toast',
    title: 'Toast',
    desc: 'Notificaciones ligeras que no interrumpen. Se colocan con toast-container y se controlan con JS o data-attributes.',
    doc: 'https://getbootstrap.com/docs/5.3/components/toasts/',
    code: `<div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <i className="bi bi-check-circle-fill text-success me-2" />
      <strong className="me-auto">Guardado</strong>
      <small>ahora</small>
      <button className="btn-close" data-bs-dismiss="toast" aria-label="Cerrar" />
    </div>
    <div className="toast-body">Los cambios se han guardado correctamente.</div>
  </div>
</div>`,
    preview: (
      <div className="d-flex flex-column gap-2" style={{ maxWidth: 380 }}>
        <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <i className="bi bi-check-circle-fill text-success me-2" />
            <strong className="me-auto">Guardado</strong>
            <small className="text-secondary">ahora</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Cerrar" />
          </div>
          <div className="toast-body fs-7">Los cambios se han guardado correctamente.</div>
        </div>
        <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <i className="bi bi-exclamation-triangle-fill text-warning me-2" />
            <strong className="me-auto">Aviso</strong>
            <small className="text-secondary">hace 2 min</small>
          </div>
          <div className="toast-body fs-7">Tu sesión caduca en 5 minutos.</div>
        </div>
      </div>
    ),
  },

  {
    id: 'offcanvas',
    title: 'Offcanvas',
    desc: 'Panel lateral deslizante para menús y filtros en móvil. Direcciones: start, end, top, bottom.',
    doc: 'https://getbootstrap.com/docs/5.3/components/offcanvas/',
    code: `<button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#panelLateral">
  Abrir panel
</button>

<div className="offcanvas offcanvas-start" tabIndex="-1" id="panelLateral">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title">Menú</h5>
    <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
  </div>
  <div className="offcanvas-body">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Inicio</li>
      <li className="list-group-item">Proyectos</li>
    </ul>
  </div>
</div>`,
    preview: (
      <>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasIzq">
            <i className="bi bi-layout-sidebar me-1" /> Panel izquierdo
          </button>
          <button className="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDer">
            Panel derecho
          </button>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasIzq" aria-labelledby="offcanvasIzqLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title h6" id="offcanvasIzqLabel">Menú lateral</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
          </div>
          <div className="offcanvas-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><i className="bi bi-house me-2" />Inicio</li>
              <li className="list-group-item"><i className="bi bi-kanban me-2" />Proyectos</li>
              <li className="list-group-item"><i className="bi bi-gear me-2" />Ajustes</li>
            </ul>
            <button className="btn btn-primary w-100 mt-3" data-bs-dismiss="offcanvas">Cerrar</button>
          </div>
        </div>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDer" aria-labelledby="offcanvasDerLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title h6" id="offcanvasDerLabel">Filtros</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
          </div>
          <div className="offcanvas-body">
            <label className="form-label fs-7" htmlFor="ocBuscar">Buscar</label>
            <input id="ocBuscar" className="form-control mb-3" placeholder="Término…" />
            <div className="form-check"><input className="form-check-input" type="checkbox" id="oc1" /><label className="form-check-label fs-7" htmlFor="oc1">Solo activos</label></div>
            <div className="form-check"><input className="form-check-input" type="checkbox" id="oc2" /><label className="form-check-label fs-7" htmlFor="oc2">Con adjuntos</label></div>
          </div>
        </div>
      </>
    ),
  },

  {
    id: 'tooltips',
    title: 'Tooltips y popovers',
    desc: 'Los dos únicos componentes que requieren inicialización manual: new Tooltip(el) / new Popover(el) en un useEffect.',
    doc: 'https://getbootstrap.com/docs/5.3/components/tooltips/',
    code: `// En React hay que inicializarlos
import { useEffect } from 'react'
import { Tooltip, Popover } from 'bootstrap'

useEffect(() => {
  const tips = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
    .map((el) => new Tooltip(el))
  const pops = [...document.querySelectorAll('[data-bs-toggle="popover"]')]
    .map((el) => new Popover(el, { trigger: 'focus' }))

  return () => {
    tips.forEach((t) => t.dispose())
    pops.forEach((p) => p.dispose())
  }
}, [])

// Markup
<button className="btn btn-secondary"
        data-bs-toggle="tooltip" title="Soy un tooltip">
  Tooltip
</button>

<button className="btn btn-secondary"
        data-bs-toggle="popover"
        data-bs-title="Título"
        data-bs-content="Contenido del popover">
  Popover
</button>`,
    preview: (
      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-secondary" data-bs-toggle="tooltip" title="Soy un tooltip de Bootstrap">
          <i className="bi bi-info-circle me-1" /> Tooltip
        </button>
        <button className="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Aparezco a la derecha">
          Tooltip a la derecha
        </button>
        <button
          className="btn btn-primary"
          data-bs-toggle="popover"
          data-bs-title="Popover"
          data-bs-content="Aquí puedes poner bastante más contenido, incluso HTML."
        >
          <i className="bi bi-chat-square-text me-1" /> Popover
        </button>
      </div>
    ),
  },

  {
    id: 'pagination',
    title: 'Pagination',
    desc: 'Navegación entre páginas con estados activo y deshabilitado. Añade aria-current="page" al elemento activo.',
    doc: 'https://getbootstrap.com/docs/5.3/components/pagination/',
    code: `<nav aria-label="Paginación">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1">Anterior</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
  </ul>
</nav>`,
    preview: (
      <nav aria-label="Paginación de ejemplo">
        <ul className="pagination mb-0">
          <li className="page-item disabled"><a className="page-link" href="#componentes" tabIndex="-1" aria-disabled="true">Anterior</a></li>
          <li className="page-item"><a className="page-link" href="#componentes">1</a></li>
          <li className="page-item active" aria-current="page"><a className="page-link" href="#componentes">2</a></li>
          <li className="page-item"><a className="page-link" href="#componentes">3</a></li>
          <li className="page-item"><a className="page-link" href="#componentes">Siguiente</a></li>
        </ul>
      </nav>
    ),
  },

  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    desc: 'Ruta de navegación jerárquica. Bootstrap añade el separador automáticamente con CSS.',
    doc: 'https://getbootstrap.com/docs/5.3/components/breadcrumb/',
    code: `<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
    <li className="breadcrumb-item"><a href="/recursos">Recursos</a></li>
    <li className="breadcrumb-item active" aria-current="page">Componentes</li>
  </ol>
</nav>`,
    preview: (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#componentes">Inicio</a></li>
          <li className="breadcrumb-item"><a href="#componentes">Recursos</a></li>
          <li className="breadcrumb-item active" aria-current="page">Componentes</li>
        </ol>
      </nav>
    ),
  },

  {
    id: 'scrollspy',
    title: 'Navbar con menú activo (scrollspy)',
    desc: 'Resalta el enlace de la sección visible. Con React suele resolverse con IntersectionObserver o scroll, pero aquí tienes la versión nativa con body data-bs-spy="scroll".',
    doc: 'https://getbootstrap.com/docs/5.3/components/scrollspy/',
    code: `// Scrollspy nativo: requiere un contenedor con scroll y contenido con ids
<body data-bs-spy="scroll" data-bs-target="#menuScroll" data-bs-offset="80">

<nav id="menuScroll" className="nav flex-column">
  <a className="nav-link" href="#seccion1">Sección 1</a>
  <a className="nav-link" href="#seccion2">Sección 2</a>
</nav>

// En React, la alternativa moderna:
const [activa, setActiva] = useState('seccion1')
useEffect(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && setActiva(e.target.id))
  }, { rootMargin: '-80px' })
  document.querySelectorAll('section[id]').forEach((s) => obs.observe(s))
  return () => obs.disconnect()
}, [])`,
    preview: (
      <div className="alert alert-info mb-0 fs-7">
        <i className="bi bi-info-circle me-2" />
        Esta guía usa IntersectionObserver para resaltar la sección actual del menú lateral. Es más fiable
        en SPAs que <code>data-bs-spy</code>, que se inicializa una vez y no detecta contenido dinámico.
      </div>
    ),
  },
]
