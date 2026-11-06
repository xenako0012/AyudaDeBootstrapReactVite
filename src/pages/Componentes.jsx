import PageHeader from '../components/PageHeader'
import Demo from '../components/Demo'
import Callout from '../components/Callout'
import PrevNext from '../components/PrevNext'
import { seccionesBasicas } from './componentes/seccionesBasicas'
import { seccionesInteractivas } from './componentes/seccionesInteractivas'

const grupos = [
  {
    id: 'grupo-basicos',
    title: 'Layout, contenido y componentes estáticos',
    icon: 'bi-layout-text-window-reverse',
    desc: 'Solo necesitan CSS. Funcionan igual en HTML, React o cualquier otro framework.',
    sections: seccionesBasicas,
  },
  {
    id: 'grupo-interactivos',
    title: 'Navegación e interactivos',
    icon: 'bi-cursor',
    desc: 'Requieren el JavaScript de Bootstrap (o React-Bootstrap) para abrir, cerrar y animar.',
    sections: seccionesInteractivas,
  },
]

const total = seccionesBasicas.length + seccionesInteractivas.length

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Componentes() {
  return (
    <>
      <PageHeader
        eyebrow="Referencia"
        title="Catálogo de componentes de Bootstrap"
        lead="Todos los componentes que vas a usar, con una demo real funcionando y el código exacto para copiar en tu proyecto React. Cada sección enlaza a su documentación oficial."
        chips={[`${total} componentes`, 'Demos interactivas', 'Código copiable']}
        links={[{ label: 'Docs de componentes', url: 'https://getbootstrap.com/docs/5.3/components/accordion/' }]}
      />

      <Callout type="info" title="Cómo leer esta página">
        <p>
          Cada bloque tiene dos pestañas: <strong>Vista previa</strong> (el componente funcionando de
          verdad) y <strong>Código</strong> (el JSX que lo genera, con botón de copiar). Las clases son de
          Bootstrap; los componentes interactivos usan <code>data-bs-*</code> porque el JS está importado
          una vez en <code>main.jsx</code>.
        </p>
      </Callout>

      {/* Índice rápido */}
      <div className="panel p-4 mb-5">
        <div className="d-flex align-items-center gap-2 mb-3">
          <i className="bi bi-list-check text-primary" />
          <h2 className="h6 fw-bold mb-0">Índice rápido</h2>
          <span className="chip fs-8 ms-auto">{total} apartados</span>
        </div>

        {grupos.map((g) => (
          <div className="mb-3" key={g.id}>
            <p className="fs-8 tracking-wide text-soft mb-2">{g.title}</p>
            <div className="d-flex flex-wrap gap-2">
              {g.sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className="btn btn-soft btn-sm"
                  onClick={() => scrollTo(s.id)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Secciones */}
      {grupos.map((grupo) => (
        <section className="mb-5" key={grupo.id} id={grupo.id}>
          <div className="d-flex align-items-start gap-3 mb-4 pb-2 border-bottom border-soft">
            <span className="icon-tile mb-0">
              <i className={`bi ${grupo.icon}`} />
            </span>
            <div>
              <h2 className="h4 fw-bold mb-1">{grupo.title}</h2>
              <p className="text-soft mb-0 fs-7">{grupo.desc}</p>
            </div>
          </div>

          {grupo.sections.map((s) => (
            <article className="mb-5" id={s.id} key={s.id} style={{ scrollMarginTop: 84 }}>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                <h3 className="h5 fw-bold mb-0">{s.title}</h3>
                <a
                  className="chip fs-8 ms-auto"
                  href={s.doc}
                  target="_blank"
                  rel="noreferrer"
                  title={`Documentación oficial de ${s.title}`}
                >
                  <i className="bi bi-book" /> Docs
                </a>
              </div>
              <p className="text-soft fs-7 mb-0">{s.desc}</p>
              <Demo title={s.title} code={s.code}>
                {s.preview}
              </Demo>
            </article>
          ))}
        </section>
      ))}

      <Callout type="tip" title="¿Y los que faltan?">
        <p>
          Bootstrap también incluye <strong>Scrollspy</strong>, <strong>Ratio</strong>,{' '}
          <strong>Helpers de color y bordes</strong>, <strong>Position</strong>, <strong>Clearfix</strong> o{' '}
          <strong>Stacks</strong>. La documentación oficial tiene el listado completo y aquí tienes el{' '}
          <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noreferrer">
            índice de componentes
          </a>
          . En la sección de <a href="#/recursos">recursos</a> hay un cheatsheet con las clases más usadas.
        </p>
      </Callout>

      <PrevNext />
    </>
  )
}
