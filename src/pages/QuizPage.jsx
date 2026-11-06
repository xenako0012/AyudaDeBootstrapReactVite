import PageHeader from '../components/PageHeader'
import Quiz from '../components/Quiz'
import Callout from '../components/Callout'
import PrevNext from '../components/PrevNext'

const preguntas = [
  {
    q: '¿Qué hace exactamente Bootstrap?',
    options: [
      'Es una librería de JavaScript para gestionar el estado de la aplicación.',
      'Es un framework CSS con grid, utilidades y componentes visuales.',
      'Es un empaquetador que compila JSX y SCSS.',
      'Es un enrutador para aplicaciones de una sola página.',
    ],
    answer: 1,
    explain:
      'Bootstrap es un framework CSS (con algo de JS) que aporta el sistema visual: grid, utilidades y componentes. El estado lo gestiona React y el empaquetado lo hace Vite.',
  },
  {
    q: 'En JSX, ¿cómo se asigna una clase CSS?',
    options: ['class="btn"', 'className="btn"', 'css="btn"', 'classname="btn"'],
    answer: 1,
    explain:
      'En JSX se usa className porque class es una palabra reservada de JavaScript. Además, los atributos van en camelCase: htmlFor, onClick, tabIndex.',
  },
  {
    q: '¿Qué comando genera la versión de producción con Vite?',
    options: ['npm run dev', 'npm run preview', 'npm run build', 'npx vite serve'],
    answer: 2,
    explain:
      'npm run build genera la carpeta dist/ optimizada. npm run preview sirve ese build localmente para comprobarlo.',
  },
  {
    q: '¿Cuántas columnas tiene el grid de Bootstrap y qué significa col-md-6?',
    options: [
      '10 columnas; ocupa 6 de ancho en escritorio.',
      '12 columnas; ocupa la mitad (6/12) a partir de 768px y el 100% por debajo.',
      '12 columnas; ocupa 6px de ancho.',
      '6 columnas; se aplica solo en móvil.',
    ],
    answer: 1,
    explain:
      'Son 12 columnas. El infijo md significa «desde 768px en adelante» (mobile first). col-md-6 = mitad de la fila en tablet/escritorio; en móvil, sin col-6, ocupa el 100%.',
  },
  {
    q: '¿Qué devuelve useState?',
    options: [
      'Solo el valor actual.',
      'El valor actual y una función para actualizarlo.',
      'Una referencia al DOM.',
      'Un objeto con get y set.',
    ],
    answer: 1,
    explain:
      'useState devuelve un array de dos posiciones: [valor, setValor]. Llamar al setter programa un nuevo renderizado del componente.',
  },
  {
    q: '¿Cómo se accede a una variable de entorno VITE_API_URL en el navegador?',
    options: [
      'process.env.VITE_API_URL',
      'import.meta.env.VITE_API_URL',
      'window.env.VITE_API_URL',
      'require("VITE_API_URL")',
    ],
    answer: 1,
    explain:
      'Vite expone las variables del archivo .env a través de import.meta.env, y solo las que empiezan por VITE_. process.env no existe en el navegador.',
  },
  {
    q: '¿Para qué sirve el array de dependencias de useEffect?',
    options: [
      'Para indicar qué componentes debe re-renderizar.',
      'Para decidir cuándo se vuelve a ejecutar el efecto.',
      'Para importar los módulos del efecto.',
      'Para ordenar los efectos por prioridad.',
    ],
    answer: 1,
    explain:
      'El efecto se ejecuta al montar y cada vez que cambia alguna dependencia. Con [] se ejecuta solo una vez (y su return se ejecuta al desmontar).',
  },
  {
    q: '¿Cuál es la forma correcta de añadir un elemento a un array en el estado?',
    options: [
      'tareas.push(nueva)',
      'setTareas(tareas.push(nueva))',
      'setTareas([...tareas, nueva])',
      'tareas[tareas.length] = nueva',
    ],
    answer: 2,
    explain:
      'El estado es inmutable: hay que crear un array nuevo. push lo muta y no provoca re-render. Con spread: setTareas([...tareas, nueva]).',
  },
  {
    q: '¿Por qué los componentes interactivos de Bootstrap a veces chocan con React?',
    options: [
      'Porque Bootstrap 5 usa jQuery.',
      'Porque su JS manipula el DOM directamente, fuera del control de React.',
      'Porque su CSS no es compatible con JSX.',
      'Porque requiere TypeScript.',
    ],
    answer: 1,
    explain:
      'Bootstrap 5 ya no usa jQuery, pero su JavaScript sí añade clases y elementos al DOM por su cuenta. React no lo sabe, así que conviene elegir: data-attributes, instancias en useEffect o React-Bootstrap.',
  },
  {
    q: '¿Qué significa que Bootstrap sea «mobile first»?',
    options: [
      'Que solo funciona en móviles.',
      'Que las media queries usan max-width y se diseña desde escritorio.',
      'Que los estilos base son para móvil y los breakpoints añaden estilos hacia arriba con min-width.',
      'Que oculta elementos en móvil automáticamente.',
    ],
    answer: 2,
    explain:
      'Se parte del diseño móvil y los breakpoints (sm, md, lg…) aplican cambios con min-width. Por eso col-md-6 deja el 100% por defecto en pantallas pequeñas.',
  },
  {
    q: 'En una lista de React, ¿qué valor es mejor para la prop key?',
    options: [
      'El índice del array.',
      'Un id único y estable del elemento.',
      'El texto que muestra el elemento.',
      'No hace falta key si la lista no cambia.',
    ],
    answer: 1,
    explain:
      'El índice falla al reordenar o insertar elementos (React confunde estado y nodos). Usa un id estable o crypto.randomUUID() al crear.',
  },
  {
    q: 'En este stack, ¿qué papel cumple cada herramienta?',
    options: [
      'Bootstrap = lógica, Vite = diseño, React = build.',
      'Bootstrap = diseño, Vite = entorno y build, React = lógica e interfaz.',
      'Las tres hacen lo mismo; se elige una.',
      'Bootstrap = build, Vite = lógica, React = diseño.',
    ],
    answer: 1,
    explain:
      'Bootstrap aporta el sistema visual (CSS), Vite el servidor de desarrollo y el empaquetado, y React los componentes, el estado y la interacción.',
  },
]

export default function QuizPage() {
  return (
    <>
      <PageHeader
        eyebrow="Práctica · Autoevaluación"
        title="Quiz: comprueba cuánto has aprendido"
        lead="12 preguntas sobre Bootstrap, Vite y React. Cada respuesta viene con su explicación, así que también se aprende fallando. No hay límite de tiempo."
        chips={['12 preguntas', 'Explicaciones', 'Resultado inmediato']}
      />

      <Callout type="info" title="Antes de empezar">
        <p>
          Intenta responder sin volver a la teoría. Si dudas en alguna, apunta el tema y repásalo después
          en su sección correspondiente: <a href="#/teoria/bootstrap">Bootstrap</a>,{' '}
          <a href="#/teoria/vite">Vite</a> o <a href="#/teoria/react">React</a>.
        </p>
      </Callout>

      <Quiz questions={preguntas} />

      <div className="row g-3 mt-4">
        {[
          { u: '#/teoria/bootstrap', i: 'bi-bootstrap', t: 'Teoría de Bootstrap', d: 'Grid, utilidades y personalización.' },
          { u: '#/teoria/vite', i: 'bi-lightning-charge', t: 'Teoría de Vite', d: 'Servidor, HMR y build.' },
          { u: '#/teoria/react', i: 'bi-code-slash', t: 'Teoría de React', d: 'Componentes, estado y hooks.' },
        ].map((c) => (
          <div className="col-md-4" key={c.u}>
            <a className="learn-card p-3" href={c.u}>
              <i className={`bi ${c.i} text-primary mb-2`} />
              <h3 className="h6 fw-bold mb-1">{c.t}</h3>
              <p className="fs-8 text-soft mb-0">{c.d}</p>
            </a>
          </div>
        ))}
      </div>

      <PrevNext />
    </>
  )
}
