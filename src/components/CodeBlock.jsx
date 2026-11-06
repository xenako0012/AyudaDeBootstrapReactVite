import { useEffect, useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

const LANG_MAP = {
  html: 'markup',
  js: 'jsx',
  javascript: 'jsx',
  sh: 'bash',
  shell: 'bash',
  terminal: 'bash',
  sass: 'scss',
  text: 'markup',
}

/**
 * Bloque de código con resaltado de sintaxis (Prism) y botón de copiar.
 */
export default function CodeBlock({ code = '', language = 'jsx', title, hideHeader = false }) {
  const [copied, setCopied] = useState(false)
  const lang = LANG_MAP[language] || language
  const clean = code.replace(/^\n+/, '').replace(/\s+$/, '')

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(clean)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-shell">
      {!hideHeader && (
        <div className="code-head">
          <div className="code-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          {title && <span className="code-title">{title}</span>}
          <span className="code-lang">{language}</span>
          <button
            type="button"
            className="code-copy"
            onClick={copy}
            title="Copiar código"
            aria-label="Copiar código"
          >
            <i className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'}`} />
          </button>
        </div>
      )}
      <div className="code-body">
        <Highlight theme={themes.vsDark} code={clean} language={lang}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, background: 'transparent', margin: 0 }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} style={{ display: 'table-row' }}>
                  <span
                    style={{
                      display: 'table-cell',
                      textAlign: 'right',
                      paddingRight: '1rem',
                      opacity: 0.32,
                      userSelect: 'none',
                      width: '1.5rem',
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span style={{ display: 'table-cell' }}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
