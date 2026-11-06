export default function PageHeader({ eyebrow, title, lead, chips = [], links = [] }) {
  return (
    <header>
      {eyebrow && (
        <div className="page-eyebrow mb-2">
          <i className="bi bi-bookmark-star" />
          {eyebrow}
        </div>
      )}
      <h1 className="page-title mb-3">{title}</h1>
      {lead && <p className="page-lead mb-3">{lead}</p>}

      {(chips.length > 0 || links.length > 0) && (
        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
          {chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
          {links.map((l) => (
            <a className="chip chip-brand" key={l.url} href={l.url} target="_blank" rel="noreferrer">
              <i className="bi bi-box-arrow-up-right" />
              {l.label}
            </a>
          ))}
        </div>
      )}
      <hr className="hr-soft mb-4" />
    </header>
  )
}
