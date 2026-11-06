import { useState } from 'react'

const LETRAS = ['A', 'B', 'C', 'D']

/**
 * Quiz de opción múltiple con explicación por pregunta.
 * questions: [{ q, options: [], answer: índice, explain }]
 */
export default function Quiz({ questions }) {
  const [indice, setIndice] = useState(0)
  const [elegida, setElegida] = useState(null)
  const [aciertos, setAciertos] = useState(0)
  const [terminado, setTerminado] = useState(false)

  const pregunta = questions[indice]
  const respondida = elegida !== null
  const esCorrecta = respondida && elegida === pregunta.answer

  const responder = (i) => {
    if (respondida) return
    setElegida(i)
    if (i === pregunta.answer) setAciertos((a) => a + 1)
  }

  const siguiente = () => {
    if (indice + 1 >= questions.length) {
      setTerminado(true)
      return
    }
    setIndice((i) => i + 1)
    setElegida(null)
  }

  const reiniciar = () => {
    setIndice(0)
    setElegida(null)
    setAciertos(0)
    setTerminado(false)
  }

  const porcentaje = Math.round((aciertos / questions.length) * 100)

  const mensaje = () => {
    if (porcentaje === 100) return { t: '¡Perfecto!', d: 'Dominas el stack. Ahora toca construir cosas reales.', c: 'success' }
    if (porcentaje >= 75) return { t: 'Muy bien', d: 'Tienes la base clara. Repasa los fallos y sigue con el proyecto guiado.', c: 'success' }
    if (porcentaje >= 50) return { t: 'Vas por buen camino', d: 'Repasa las secciones de teoría y vuelve a intentarlo.', c: 'warning' }
    return { t: 'Toca repasar', d: 'Empieza por la teoría de Bootstrap y React; luego vuelve aquí.', c: 'danger' }
  }

  if (terminado) {
    const m = mensaje()
    return (
      <div className="panel p-4 p-lg-5 text-center">
        <div className={`display-3 fw-bold text-${m.c} mb-1`}>{porcentaje}%</div>
        <h3 className="h4 fw-bold mb-2">{m.t}</h3>
        <p className="text-soft mb-4">
          {aciertos} de {questions.length} respuestas correctas. {m.d}
        </p>

        <div className="progress mx-auto mb-4" style={{ height: 8, maxWidth: 340 }} role="progressbar" aria-valuenow={porcentaje}>
          <div className={`progress-bar bg-${m.c}`} style={{ width: `${porcentaje}%` }} />
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <button className="btn btn-brand" onClick={reiniciar}>
            <i className="bi bi-arrow-repeat me-1" /> Repetir el quiz
          </button>
          <a className="btn btn-soft" href="#/teoria/bootstrap">
            Repasar teoría
          </a>
          <a className="btn btn-soft" href="#/practica">
            Ir al proyecto
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="panel p-4 p-lg-4">
      <div className="d-flex align-items-center gap-2 mb-2">
        <span className="chip fs-8">
          Pregunta {indice + 1} / {questions.length}
        </span>
        <span className="chip fs-8 chip-brand ms-auto">
          <i className="bi bi-check2-circle" /> {aciertos} aciertos
        </span>
      </div>

      <div className="progress mb-4" style={{ height: 5 }} role="progressbar" aria-valuenow={indice + 1} aria-valuemax={questions.length}>
        <div className="progress-bar" style={{ width: `${((indice + 1) / questions.length) * 100}%` }} />
      </div>

      <h3 className="h5 fw-bold mb-3">{pregunta.q}</h3>

      <div>
        {pregunta.options.map((op, i) => {
          let cls = ''
          if (respondida) {
            if (i === pregunta.answer) cls = 'correct'
            else if (i === elegida) cls = 'wrong'
          }
          return (
            <button
              key={op}
              type="button"
              className={`quiz-option ${cls}`}
              onClick={() => responder(i)}
              disabled={respondida}
            >
              <span className="opt-key">{LETRAS[i]}</span>
              <span>{op}</span>
              {respondida && i === pregunta.answer && (
                <i className="bi bi-check-circle-fill text-success ms-auto" />
              )}
              {respondida && i === elegida && i !== pregunta.answer && (
                <i className="bi bi-x-circle-fill text-danger ms-auto" />
              )}
            </button>
          )
        })}
      </div>

      {respondida && (
        <div
          className={`quiz-feedback mt-3 ${
            esCorrecta ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'
          }`}
        >
          <strong className={esCorrecta ? 'text-success' : 'text-danger'}>
            <i className={`bi ${esCorrecta ? 'bi-check-circle' : 'bi-x-circle'} me-1`} />
            {esCorrecta ? '¡Correcto!' : 'No exactamente.'}
          </strong>{' '}
          {pregunta.explain}
        </div>
      )}

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-brand" onClick={siguiente} disabled={!respondida}>
          {indice + 1 === questions.length ? 'Ver resultado' : 'Siguiente'}
          <i className="bi bi-arrow-right ms-1" />
        </button>
      </div>
    </div>
  )
}
