// Catálogo · parte 1: layout, contenido y componentes estáticos.
// Cada sección: { id, title, desc, doc, code, preview }

export const seccionesBasicas = [
  {
    id: 'grid',
    title: 'Grid y containers',
    desc: 'La base de todo layout. container centra y limita el ancho; row crea la fila; col reparte las 12 columnas. Los sufijos (sm, md, lg…) indican a partir de qué ancho se aplican.',
    doc: 'https://getbootstrap.com/docs/5.3/layout/grid/',
    code: `<div className="container">
  <div className="row g-3">
    <div className="col-12 col-md-8">Principal (8)</div>
    <div className="col-12 col-md-4">Lateral (4)</div>

    <div className="col-6 col-lg-3">A</div>
    <div className="col-6 col-lg-3">B</div>
    <div className="col-6 col-lg-3">C</div>
    <div className="col-6 col-lg-3">D</div>
  </div>
</div>`,
    preview: (
      <div className="row g-3">
        <div className="col-12 col-md-8">
          <div className="p-3 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded text-center fs-7">
            Principal · col-md-8
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="p-3 bg-secondary bg-opacity-10 border rounded text-center fs-7">
            Lateral · col-md-4
          </div>
        </div>
        {['A', 'B', 'C', 'D'].map((l) => (
          <div className="col-6 col-lg-3" key={l}>
            <div className="p-3 bg-body-secondary rounded text-center fs-7">{l} · col-6 col-lg-3</div>
          </div>
        ))}
      </div>
    ),
  },

  {
    id: 'tipografia',
    title: 'Tipografía',
    desc: 'Escala de títulos (display-1…6, h1…h6), clases de peso y color, lead para entradillas, blockquote y listas sin estilo.',
    doc: 'https://getbootstrap.com/docs/5.3/content/typography/',
    code: `<h1 className="display-5 fw-bold">Display 5</h1>
<p className="lead">Texto de entrada con .lead.</p>
<p className="text-secondary">Texto secundario.</p>
<p className="fw-semibold text-uppercase">Semibold y mayúsculas</p>
<p className="fs-4">Tamaño con .fs-4</p>
<blockquote className="blockquote">
  <p>La simplicidad es el máximo refinamiento.</p>
  <footer className="blockquote-footer">Leonardo da Vinci</footer>
</blockquote>`,
    preview: (
      <div>
        <p className="display-5 fw-bold mb-1">Display 5</p>
        <p className="lead mb-2">Texto de entrada con <code>.lead</code>.</p>
        <p className="text-secondary mb-2">Texto secundario.</p>
        <p className="fw-semibold text-uppercase mb-2">Semibold y mayúsculas</p>
        <p className="fs-4 mb-3">Tamaño con <code>.fs-4</code></p>
        <blockquote className="blockquote mb-0">
          <p className="mb-1">La simplicidad es el máximo refinamiento.</p>
          <footer className="blockquote-footer mb-0">Leonardo da Vinci</footer>
        </blockquote>
      </div>
    ),
  },

  {
    id: 'botones',
    title: 'Botones',
    desc: 'Variantes sólidas (btn-primary, -success…), outline, tamaños (btn-sm, btn-lg), estados y grupos. Todos son accesibles por teclado.',
    doc: 'https://getbootstrap.com/docs/5.3/components/buttons/',
    code: `<button className="btn btn-primary">Primary</button>
<button className="btn btn-outline-secondary">Outline</button>
<button className="btn btn-success btn-sm">Pequeño</button>
<button className="btn btn-danger" disabled>Deshabilitado</button>

<div className="btn-group" role="group" aria-label="Alineación">
  <button className="btn btn-outline-primary">Izq</button>
  <button className="btn btn-outline-primary">Centro</button>
  <button className="btn btn-outline-primary">Der</button>
</div>`,
    preview: (
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-light">Light</button>
          <button className="btn btn-dark">Dark</button>
        </div>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <button className="btn btn-outline-primary">Outline</button>
          <button className="btn btn-outline-secondary btn-sm">Pequeño</button>
          <button className="btn btn-outline-success btn-lg">Grande</button>
          <button className="btn btn-danger" disabled>Deshabilitado</button>
          <button className="btn btn-link">Como enlace</button>
        </div>
        <div className="btn-group" role="group" aria-label="Alineación">
          <button className="btn btn-outline-primary">Izq</button>
          <button className="btn btn-outline-primary">Centro</button>
          <button className="btn btn-outline-primary">Der</button>
        </div>
      </div>
    ),
  },

  {
    id: 'badges',
    title: 'Badges',
    desc: 'Etiquetas pequeñas para contadores, estados o categorías. Con rounded-pill quedan tipo pastilla.',
    doc: 'https://getbootstrap.com/docs/5.3/components/badge/',
    code: `<h4>Mensajes <span className="badge text-bg-primary">4</span></h4>

<span className="badge text-bg-success">Activo</span>
<span className="badge text-bg-warning">Pendiente</span>
<span className="badge rounded-pill text-bg-secondary">12</span>

<button className="btn btn-primary">
  Notificaciones <span className="badge text-bg-light">9</span>
</button>`,
    preview: (
      <div className="d-flex flex-column gap-3">
        <h4 className="h5 mb-0">
          Mensajes <span className="badge text-bg-primary">4</span>
        </h4>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge text-bg-success">Activo</span>
          <span className="badge text-bg-warning">Pendiente</span>
          <span className="badge text-bg-danger">Error</span>
          <span className="badge text-bg-info">Info</span>
          <span className="badge rounded-pill text-bg-secondary">12</span>
        </div>
        <div>
          <button className="btn btn-primary">
            Notificaciones <span className="badge text-bg-light">9</span>
          </button>
        </div>
      </div>
    ),
  },

  {
    id: 'alertas',
    title: 'Alertas',
    desc: 'Mensajes de feedback. Con alert-dismissible añades cierre; alert-heading separa el título del cuerpo.',
    doc: 'https://getbootstrap.com/docs/5.3/components/alerts/',
    code: `<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">¡Bien!</h4>
  Has completado el formulario correctamente.
</div>

<div className="alert alert-warning alert-dismissible fade show" role="alert">
  Cuidado con este dato.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar" />
</div>`,
    preview: (
      <div>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading h6">¡Bien!</h4>
          <span className="fs-7">Has completado el formulario correctamente.</span>
        </div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <span className="fs-7">Cuidado con este dato.</span>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar" />
        </div>
        <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
          <span className="fs-7">No se pudo guardar el cambio.</span>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar" />
        </div>
      </div>
    ),
  },

  {
    id: 'cards',
    title: 'Cards',
    desc: 'El contenedor más versátil: cabecera, cuerpo, pie, imágenes, listas y botones. h-100 iguala alturas dentro del grid.',
    doc: 'https://getbootstrap.com/docs/5.3/components/card/',
    code: `<div className="row g-3">
  <div className="col-md-6">
    <div className="card h-100">
      <div className="card-header">Destacado</div>
      <div className="card-body">
        <h5 className="card-title">Bootstrap 5.3</h5>
        <p className="card-text">Tema oscuro nativo y variables CSS.</p>
        <a href="#" className="btn btn-primary btn-sm">Ver más</a>
      </div>
    </div>
  </div>
</div>

<div className="card" style={{ width: '18rem' }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Con imagen</h5>
    <p className="card-text">Texto de la tarjeta.</p>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Uno</li>
    </ul>
  </div>
</div>`,
    preview: (
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header fs-7">Destacado</div>
            <div className="card-body">
              <h5 className="card-title h6">Bootstrap 5.3</h5>
              <p className="card-text fs-7">Tema oscuro nativo y variables CSS.</p>
              <a href="#componentes" className="btn btn-primary btn-sm">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div
              className="card-img-top d-grid"
              style={{ height: 90, placeItems: 'center', background: 'linear-gradient(135deg,#7952b3,#22d3ee)', color: '#fff' }}
            >
              <i className="bi bi-image fs-3" />
            </div>
            <div className="card-body">
              <h5 className="card-title h6">Con imagen</h5>
              <p className="card-text fs-7">La imagen se adapta al ancho de la card.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fs-7">Elemento uno</li>
              <li className="list-group-item fs-7">Elemento dos</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 text-bg-dark">
            <div className="card-body">
              <h5 className="card-title h6">Card oscura</h5>
              <p className="card-text fs-7">text-bg-dark aplica fondo y contraste de texto.</p>
              <button className="btn btn-outline-light btn-sm">Acción</button>
            </div>
            <div className="card-footer fs-8">Actualizado hace 2 min</div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'listas',
    title: 'List group',
    desc: 'Listas con estilos, badges, estados activos y acción (hover). Perfectas para menús laterales o resultados de búsqueda.',
    doc: 'https://getbootstrap.com/docs/5.3/components/list-group/',
    code: `<ul className="list-group">
  <li className="list-group-item active" aria-current="true">Activo</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Tareas pendientes
    <span className="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item list-group-item-success">Completado</li>
</ul>

<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action">Elemento enlazado</a>
</div>`,
    preview: (
      <div className="row g-3">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Elemento activo</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fs-7">Tareas pendientes</span>
              <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item list-group-item-success fs-7">Completado</li>
            <li className="list-group-item disabled fs-7">Deshabilitado</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="list-group">
            <a href="#componentes" className="list-group-item list-group-item-action active">Enlace activo</a>
            <a href="#componentes" className="list-group-item list-group-item-action">Enlace normal</a>
            <a href="#componentes" className="list-group-item list-group-item-action d-flex justify-content-between">
              <span>Con icono</span>
              <i className="bi bi-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'tablas',
    title: 'Tablas',
    desc: 'table + table-striped, hover, bordered, responsive. table-responsive evita que rompa el layout en móvil.',
    doc: 'https://getbootstrap.com/docs/5.3/content/tables/',
    code: `<div className="table-responsive">
  <table className="table table-hover align-middle">
    <thead>
      <tr>
        <th>Proyecto</th>
        <th>Estado</th>
        <th className="text-end">Progreso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Web corporativa</td>
        <td><span className="badge text-bg-success">Activo</span></td>
        <td className="text-end">85%</td>
      </tr>
      <tr className="table-warning">
        <td>App interna</td>
        <td><span className="badge text-bg-warning">En pausa</span></td>
        <td className="text-end">40%</td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: (
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Estado</th>
              <th className="text-end">Progreso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fs-7">Web corporativa</td>
              <td><span className="badge text-bg-success">Activo</span></td>
              <td className="text-end fs-7">85%</td>
            </tr>
            <tr className="table-warning">
              <td className="fs-7">App interna</td>
              <td><span className="badge text-bg-warning">En pausa</span></td>
              <td className="text-end fs-7">40%</td>
            </tr>
            <tr>
              <td className="fs-7">Landing de evento</td>
              <td><span className="badge text-bg-secondary">Archivado</span></td>
              <td className="text-end fs-7">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'formularios',
    title: 'Formularios',
    desc: 'form-control, form-select, form-check y form-switch. Los labels siempre asociados con htmlFor/id mejoran la accesibilidad.',
    doc: 'https://getbootstrap.com/docs/5.3/forms/form-control/',
    code: `<form onSubmit={(e) => e.preventDefault()}>
  <div className="mb-3">
    <label className="form-label" htmlFor="email">Email</label>
    <input id="email" type="email" className="form-control" placeholder="tu@email.com" />
    <div className="form-text">Nunca compartiremos tu correo.</div>
  </div>

  <div className="mb-3">
    <label className="form-label" htmlFor="pais">País</label>
    <select id="pais" className="form-select">
      <option>España</option>
      <option>México</option>
    </select>
  </div>

  <div className="form-check mb-2">
    <input className="form-check-input" type="checkbox" id="acepto" />
    <label className="form-check-label" htmlFor="acepto">Acepto los términos</label>
  </div>

  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="notif" defaultChecked />
    <label className="form-check-label" htmlFor="notif">Notificaciones</label>
  </div>
</form>`,
    preview: (
      <form onSubmit={(e) => e.preventDefault()} className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="demoEmail">Email</label>
          <input id="demoEmail" type="email" className="form-control" placeholder="tu@email.com" />
          <div className="form-text">Nunca compartiremos tu correo.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="demoPais">País</label>
          <select id="demoPais" className="form-select">
            <option>España</option>
            <option>México</option>
            <option>Argentina</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="demoRango">Experiencia</label>
          <input type="range" className="form-range" id="demoRango" defaultValue="60" />
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="demoAcepto" />
            <label className="form-check-label" htmlFor="demoAcepto">Acepto los términos</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="demoNotif" defaultChecked />
            <label className="form-check-label" htmlFor="demoNotif">Notificaciones</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="plan" id="plan1" defaultChecked />
            <label className="form-check-label" htmlFor="plan1">Plan mensual</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="plan" id="plan2" />
            <label className="form-check-label" htmlFor="plan2">Plan anual</label>
          </div>
        </div>
      </form>
    ),
  },

  {
    id: 'inputgroup',
    title: 'Input group y floating labels',
    desc: 'Agrupa inputs con texto, iconos o botones. Las floating labels ahorran espacio y muestran la etiqueta al enfocar.',
    doc: 'https://getbootstrap.com/docs/5.3/forms/input-group/',
    code: `<div className="input-group mb-3">
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="usuario" />
  <button className="btn btn-primary">Buscar</button>
</div>

<div className="form-floating">
  <input type="email" className="form-control" id="flotante" placeholder="name@example.com" />
  <label htmlFor="flotante">Correo electrónico</label>
</div>`,
    preview: (
      <div className="row g-3">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="usuario" aria-label="usuario" />
            <button className="btn btn-primary" type="button">Buscar</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-currency-euro" /></span>
            <input type="number" className="form-control" defaultValue="49" aria-label="precio" />
            <span className="input-group-text">/mes</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="email" className="form-control" id="demoFlotante" placeholder="nombre@ejemplo.com" />
            <label htmlFor="demoFlotante">Correo electrónico</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <select className="form-select" id="demoFlotanteSelect" defaultValue="">
              <option value="" disabled>Elige…</option>
              <option value="1">Opción uno</option>
              <option value="2">Opción dos</option>
            </select>
            <label htmlFor="demoFlotanteSelect">Categoría</label>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'validacion',
    title: 'Validación',
    desc: 'is-valid / is-invalid pintan el estado y valid-feedback / invalid-feedback muestran el mensaje. La lógica de validación es tuya.',
    doc: 'https://getbootstrap.com/docs/5.3/forms/validation/',
    code: `<div className="mb-3">
  <label className="form-label" htmlFor="ok">Usuario</label>
  <input id="ok" className="form-control is-valid" defaultValue="ada" />
  <div className="valid-feedback">¡Disponible!</div>
</div>

<div>
  <label className="form-label" htmlFor="ko">Contraseña</label>
  <input id="ko" type="password" className="form-control is-invalid" defaultValue="123" />
  <div className="invalid-feedback">Mínimo 8 caracteres con un número.</div>
</div>`,
    preview: (
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="vOk">Usuario</label>
          <input id="vOk" className="form-control is-valid" defaultValue="ada" />
          <div className="valid-feedback">¡Disponible!</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="vKo">Contraseña</label>
          <input id="vKo" type="password" className="form-control is-invalid" defaultValue="123" />
          <div className="invalid-feedback">Mínimo 8 caracteres con un número.</div>
        </div>
      </div>
    ),
  },

  {
    id: 'progreso',
    title: 'Progress',
    desc: 'Barras de progreso con anchos por estilo, rayas animadas, colores y labels. Con role y aria-valuenow son accesibles.',
    doc: 'https://getbootstrap.com/docs/5.3/components/progress/',
    code: `<div className="progress mb-2" role="progressbar"
     aria-label="Progreso del curso" aria-valuenow="65"
     aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{ width: '65%' }}>65%</div>
</div>

<div className="progress" style={{ height: '8px' }}>
  <div className="progress-bar bg-success" style={{ width: '40%' }} />
  <div className="progress-bar bg-warning" style={{ width: '20%' }} />
  <div className="progress-bar bg-danger" style={{ width: '15%' }} />
</div>`,
    preview: (
      <div>
        <div
          className="progress mb-3"
          role="progressbar"
          aria-label="Progreso del curso"
          aria-valuenow="65"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: '65%' }}>65%</div>
        </div>
        <div className="progress mb-3" style={{ height: 6 }} role="progressbar" aria-valuenow="80">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            style={{ width: '80%' }}
          />
        </div>
        <div className="progress" style={{ height: 10 }} role="progressbar" aria-valuenow="75">
          <div className="progress-bar bg-success" style={{ width: '40%' }} />
          <div className="progress-bar bg-warning" style={{ width: '20%' }} />
          <div className="progress-bar bg-danger" style={{ width: '15%' }} />
        </div>
      </div>
    ),
  },

  {
    id: 'spinners',
    title: 'Spinners',
    desc: 'Indicadores de carga border y grow. Añade always visually-hidden o role="status" para que los lectores de pantalla avisen.',
    doc: 'https://getbootstrap.com/docs/5.3/components/spinners/',
    code: `<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Cargando…</span>
</div>

<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Cargando…</span>
</div>

<button className="btn btn-primary" disabled>
  <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
  Guardando…
</button>`,
    preview: (
      <div className="d-flex align-items-center flex-wrap gap-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando…</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Cargando…</span>
        </div>
        <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Cargando…</span>
        </div>
        <button className="btn btn-primary" disabled>
          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
          Guardando…
        </button>
      </div>
    ),
  },

  {
    id: 'placeholders',
    title: 'Placeholders (skeleton)',
    desc: 'Estructuras grises animadas mientras cargan los datos. Mejor percepción de velocidad que un spinner.',
    doc: 'https://getbootstrap.com/docs/5.3/components/placeholders/',
    code: `<div className="card">
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6" />
    </h5>
    <p className="placeholder-glow">
      <span className="placeholder col-7" />
      <span className="placeholder col-4" />
      <span className="placeholder col-4" />
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true" />
  </div>
</div>`,
    preview: (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="placeholder-glow mb-3">
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
          </p>
          <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true" />
        </div>
      </div>
    ),
  },

  {
    id: 'imagenes',
    title: 'Imágenes y figures',
    desc: 'img-fluid hace la imagen responsive, rounded y thumbnail le dan estilo. figure/figcaption para pies de foto.',
    doc: 'https://getbootstrap.com/docs/5.3/content/images/',
    code: `<img src="/foto.jpg" className="img-fluid rounded shadow-sm" alt="Descripción" />

<img src="/avatar.jpg" className="rounded-circle" width="64" height="64" alt="Avatar" />

<figure className="figure">
  <img src="/grafico.png" className="figure-img img-fluid rounded" alt="Gráfico" />
  <figcaption className="figure-caption">Figura 1. Resultados del test.</figcaption>
</figure>`,
    preview: (
      <div className="row g-3 align-items-center">
        <div className="col-md-4">
          <div
            className="rounded shadow-sm d-grid text-white"
            style={{ height: 110, placeItems: 'center', background: 'linear-gradient(135deg,#7952b3,#3b82f6)' }}
          >
            <i className="bi bi-image fs-2" />
          </div>
        </div>
        <div className="col-md-4">
          <span className="avatar-demo" style={{ width: 64, height: 64 }}>AL</span>
          <span className="ms-2 fs-7 text-secondary">rounded-circle</span>
        </div>
        <div className="col-md-4">
          <figure className="figure mb-0">
            <div
              className="figure-img img-fluid rounded mb-1 d-grid text-white"
              style={{ height: 70, placeItems: 'center', background: 'linear-gradient(135deg,#22d3ee,#3b82f6)' }}
            >
              <i className="bi bi-bar-chart" />
            </div>
            <figcaption className="figure-caption fs-8">Figura 1. Datos de ejemplo.</figcaption>
          </figure>
        </div>
      </div>
    ),
  },
]
