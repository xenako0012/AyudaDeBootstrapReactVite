const ICONS = {
  info: 'bi-info-circle',
  tip: 'bi-lightbulb',
  warn: 'bi-exclamation-triangle',
  danger: 'bi-x-octagon',
  note: 'bi-pencil-square',
}

export default function Callout({ type = 'info', title, children }) {
  return (
    <div className={`callout callout--${type}`}>
      <i className={`bi ${ICONS[type] || ICONS.info} callout-icon`} aria-hidden="true" />
      <div>
        {title && <span className="callout-title">{title}</span>}
        <div className="prose">{children}</div>
      </div>
    </div>
  )
}
