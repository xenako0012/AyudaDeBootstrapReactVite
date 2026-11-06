import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { flatNav } from '../data/navigation'

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return flatNav
    return flatNav.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.keywords.includes(q),
    )
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 40)
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  if (!open) return null

  const go = (to) => {
    navigate(to)
    onClose()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      go(results[active].to)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Buscar en la guía">
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="search-input"
          placeholder="Buscar: modal, useState, grid, sass…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Buscar"
        />
        <div className="py-2" style={{ maxHeight: 360, overflowY: 'auto' }}>
          {results.length === 0 && (
            <div className="px-4 py-4 text-soft small">
              Sin resultados para «{query}». Prueba con «hooks», «grid» o «componentes».
            </div>
          )}
          {results.map((item, i) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className={`search-result ${i === active ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                go(item.to)
              }}
              onMouseEnter={() => setActive(i)}
            >
              <i className={`bi ${item.icon}`} />
              {item.label}
              <span className="sr-section">{item.section}</span>
            </a>
          ))}
        </div>
        <div className="px-3 py-2 border-top border-soft d-flex gap-3 fs-8 text-soft">
          <span><kbd>↑</kbd> <kbd>↓</kbd> navegar</span>
          <span><kbd>↵</kbd> abrir</span>
          <span><kbd>esc</kbd> cerrar</span>
        </div>
      </div>
    </div>
  )
}
