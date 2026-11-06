import { useState } from 'react'
import CodeBlock from './CodeBlock'

/**
 * Vista previa en vivo + código, con pestañas.
 *
 * <Demo title="Botones" code={`<button ...>`}>  ...JSX real...  </Demo>
 */
export default function Demo({ title, code, children, language = 'jsx', dark = false, noPreview = false, stack = false }) {
  const [tab, setTab] = useState('preview')
  const hasCode = Boolean(code)

  return (
    <div className="demo">
      <div className="demo-tabs">
        {!noPreview && (
          <button
            type="button"
            className={`demo-tab ${tab === 'preview' ? 'active' : ''}`}
            onClick={() => setTab('preview')}
          >
            <i className="bi bi-eye" /> Vista previa
          </button>
        )}
        {hasCode && (
          <button
            type="button"
            className={`demo-tab ${tab === 'code' && !noPreview ? 'active' : ''}`}
            onClick={() => setTab('code')}
          >
            <i className="bi bi-code-slash" /> Código
          </button>
        )}
        {title && <span className="demo-title">{title}</span>}
      </div>

      {(tab === 'preview' || !hasCode) && !noPreview ? (
        <div className={`demo-preview ${dark ? 'demo-preview--dark' : ''} ${stack ? 'demo-preview--center' : ''}`}>
          <div className="demo-inner">{children}</div>
        </div>
      ) : (
        <div className="demo-code">
          <CodeBlock code={code} language={language} title={title} hideHeader />
        </div>
      )}
    </div>
  )
}
