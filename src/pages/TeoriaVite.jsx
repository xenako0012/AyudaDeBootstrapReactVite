import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import PrevNext from '../components/PrevNext'
import { versions } from '../data/siteData'

export default function TeoriaVite() {
  return (
    <>
      <PageHeader
        eyebrow="Teoría · 02"
        title="Vite: desarrollo instantáneo y builds ligeros"
        lead="Vite es la herramienta que arranca tu proyecto, sirve la app en desarrollo con recarga en caliente y genera el build final para producción. Es el «npm run dev» del stack moderno y hoy es el estándar de facto en React."
        chips={['Nivel: básico', `Vite ${versions.vite}`, 'Node 20.19+ / 22.12+']}
        links={[
          { label: 'Guía oficial', url: 'https://vite.dev/guide/' },
          { label: 'Referencia de config', url: 'https://vite.dev/config/' },
        ]}
      />

      {/* 1 */}
      <section className="mb-5">
        <h2 className="section-title">1. ¿Qué es Vite y qué problema resuelve?</h2>
        <div className="prose">
          <p>
            Vite (en francés, «rápido») es un <strong>build tool</strong>: un conjunto de herramientas que
            transforman tu código fuente (JSX, SCSS, imágenes, módulos) en algo que el navegador entiende.
            Hace dos trabajos muy distintos:
          </p>
          <ul>
            <li>
              <strong>Servidor de desarrollo</strong> con recarga instantánea (HMR) en{' '}
              <code>http://localhost:5173</code>.
            </li>
            <li>
              <strong>Empaquetado de producción</strong> con Rollup: minifica, divide en chunks y optimiza
              los assets en <code>dist/</code>.
            </li>
          </ul>
          <p>
            Antes de Vite, herramientas como webpack <strong>empaquetaban todo antes de arrancar</strong>.
            En un proyecto mediano eso significaba esperar 20–60 segundos cada vez, y varios segundos por
            cada guardado. Vite cambia el modelo: en desarrollo <strong>no empaqueta nada</strong>. Sirve
            los archivos como módulos ESM nativos y deja que el navegador los pida bajo demanda.
          </p>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <span className="chip chip-brand mb-2">Desarrollo</span>
              <h3 className="h6 fw-bold">Sin bundling + HMR</h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Arranque en milisegundos, no en minutos.</li>
                <li>Solo transforma el archivo que se pide (on-demand).</li>
                <li>Dependencias pre-empaquetadas una vez con esbuild.</li>
                <li>HMR: cambia el módulo sin recargar ni perder estado.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <span className="chip chip-brand mb-2">Producción</span>
              <h3 className="h6 fw-bold">Rollup + optimización</h3>
              <ul className="fs-7 text-soft mb-0 ps-3">
                <li>Tree shaking: fuera el código no usado.</li>
                <li>Minificación, hashes en nombres (cache busting).</li>
                <li>División de chunks y carga diferida.</li>
                <li>Compresión y CSS separado.</li>
              </ul>
            </div>
          </div>
        </div>

        <Callout type="info" title="Vite no es un framework">
          <p>
            Vite es <em>infraestructura</em>. No decide cómo estructuras componentes ni cómo enrutas: eso lo
            pone React y React Router. Vite solo se encarga de servir y empaquetar.
          </p>
        </Callout>
      </section>

      {/* 2 */}
      <section className="mb-5">
        <h2 className="section-title">2. Crear un proyecto desde cero</h2>
        <CodeBlock
          language="bash"
          title="terminal"
          code={`# 1) Crear el proyecto (elige la plantilla interactivamente)
npm create vite@latest mi-app
#    → Framework: React
#    → Variant: JavaScript (o TypeScript, o React + SWC)

# 2) Atajo directo, sin preguntas
npm create vite@latest mi-app -- --template react

# 3) Instalar dependencias y arrancar
cd mi-app
npm install
npm run dev`}
        />

        <p className="text-soft">
          Verás algo como esto en la terminal. La URL con <code>--host</code> sirve para probar desde el
          móvil en tu misma red:
        </p>
        <CodeBlock
          language="bash"
          title="salida típica de npm run dev"
          code={`  VITE v8.3.6  ready in 214 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.40:5173/
  ➜  press h + enter to show help`}
        />

        <h3 className="sub-title">Estructura del proyecto</h3>
        <CodeBlock
          language="text"
          title="árbol de archivos"
          code={`mi-app/
├── index.html          ← punto de entrada (¡sí, en la raíz!)
├── package.json        ← dependencias y scripts
├── vite.config.js      ← configuración de Vite
├── public/             ← assets estáticos servidos tal cual
│   └── favicon.svg
└── src/
    ├── main.jsx        ← monta React en el #root
    ├── App.jsx         ← componente raíz
    ├── assets/         ← imágenes/estilos que pasan por el bundler
    ├── components/     ← tus componentes
    ├── pages/          ← vistas
    ├── data/           ← datos y constantes
    └── styles/         ← CSS propio
`}
        />

        <Callout type="warn" title="index.html en la raíz, no en public/">
          <p>
            En Vite el <code>index.html</code> es el punto de entrada y{' '}
            <strong>no se mueve a <code>public/</code></strong>. Vite lo procesa, inyecta el script y
            resuelve las rutas. A cambio, no usa <code>%PUBLIC_URL%</code> como CRA.
          </p>
        </Callout>
      </section>

      {/* 3 */}
      <section className="mb-5">
        <h2 className="section-title">3. Scripts y flujo de trabajo</h2>
        <div className="table-wrap mb-3">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Comando</th>
                <th>Qué hace</th>
                <th>Cuándo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>npm run dev</code></td><td>Servidor con HMR</td><td>Mientras programas</td></tr>
              <tr><td><code>npm run build</code></td><td>Genera <code>dist/</code> optimizado</td><td>Antes de publicar</td></tr>
              <tr><td><code>npm run preview</code></td><td>Sirve <code>dist/</code> localmente</td><td>Para comprobar el build real</td></tr>
              <tr><td><code>npx vite build --mode staging</code></td><td>Build con otro modo/entorno</td><td>Staging, pruebas</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Comprueba siempre con preview">
          <p>
            El servidor de desarrollo no es igual que el build: rutas, base y optimizaciones cambian. Si
            algo falla solo en producción, ejecuta <code>npm run build &amp;&amp; npm run preview</code>{' '}
            antes de tocar nada.
          </p>
        </Callout>
      </section>

      {/* 4 */}
      <section className="mb-5">
        <h2 className="section-title">4. HMR: qué es y por qué mola</h2>
        <div className="prose">
          <p>
            <strong>Hot Module Replacement</strong> significa que Vite sustituye el módulo que has cambiado
            sin recargar la página. Si estás escribiendo en un formulario con un modal abierto,{' '}
            <strong>no pierdes ese estado</strong>. Con React, el plugin{' '}
            <code>@vitejs/plugin-react</code> usa React Fast Refresh para conservar el estado de los
            componentes.
          </p>
        </div>
        <CodeBlock
          language="bash"
          title="verás mensajes así al guardar"
          code={`[vite] hmr update /src/pages/Home.jsx, /src/styles/custom.css
[vite] (client) hmr update /src/components/Layout.jsx`}
        />
        <Callout type="warn" title="Cuando el HMR «se rompe»">
          <p>
            Si cambias exports, la configuración o el punto de entrada, Vite recarga la página entera (y
            pierdes el estado). También puede quedarse «pegado»: para eso existe{' '}
            <code>Ctrl + Shift + R</code> o reiniciar <code>npm run dev</code>.
          </p>
        </Callout>
      </section>

      {/* 5 */}
      <section className="mb-5">
        <h2 className="section-title">5. Importar assets, CSS y JSON</h2>
        <div className="prose">
          <p>
            Vite entiende los imports de módulos ESM y los extiende: puedes importar CSS, imágenes o JSON
            directamente desde JS. Además soporta <em>query suffixes</em> muy útiles.
          </p>
        </div>
        <CodeBlock
          language="jsx"
          title="src/App.jsx"
          code={`// CSS global: se inyecta en el bundle
import './styles/custom.css'

// Imagen: devuelve la URL final (hasheada en producción)
import logo from './assets/logo.png'
<img src={logo} alt="Logo" />

// JSON: se convierte en objeto JavaScript
import datos from './data/items.json'

// ?url → devuelve solo la URL
import urlPdf from './assets/manual.pdf?url'

// ?raw → devuelve el contenido como string
import texto from './assets/plantilla.html?raw'

// ?inline → devuelve la imagen como base64
import icono from './assets/icono.svg?inline'`}
        />

        <div className="row g-3">
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold"><code>public/</code></h3>
              <p className="fs-7 text-soft mb-0">
                Se copia tal cual a <code>dist/</code>. Se referencia con ruta absoluta:{' '}
                <code>/favicon.svg</code>. Ideal para <code>robots.txt</code>, favicons o PDFs. Ojo: no se
                procesa ni se hashea.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel p-4 h-100">
              <h3 className="h6 fw-bold"><code>src/assets/</code></h3>
              <p className="fs-7 text-soft mb-0">
                Pasa por el bundler: se optimiza, se le pone hash y se elimina si no se usa. Úsalo para
                imágenes que importas desde componentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="mb-5">
        <h2 className="section-title">6. Variables de entorno</h2>
        <div className="prose">
          <p>
            Vite lee archivos <code>.env</code> en la raíz. <strong>Solo las variables que empiezan por{' '}
            <code>VITE_</code> llegan al navegador</strong> — es una protección para que no filtres API
            keys del servidor sin querer. Se leen con <code>import.meta.env</code>, no con{' '}
            <code>process.env</code>.
          </p>
        </div>
        <CodeBlock
          language="bash"
          title=".env.local (no lo subas a git)"
          code={`VITE_API_URL=https://api.miweb.com
VITE_TITULO=Mi aplicación
# Sin el prefijo VITE_ NO estará disponible en el navegador
SECRETO_SERVIDOR=abc123`}
        />
        <CodeBlock
          language="jsx"
          title="usar las variables"
          code={`const api = import.meta.env.VITE_API_URL

// Valores siempre presentes:
import.meta.env.MODE       // 'development' | 'production'
import.meta.env.DEV        // true en desarrollo
import.meta.env.PROD       // true en el build
import.meta.env.BASE_URL   // '/' o el base configurado`}
        />
        <Callout type="danger" title="Todo lo del bundle es público">
          <p>
            Cualquier <code>VITE_*</code> acaba en el JavaScript descargable. Nunca metas contraseñas,
            tokens privados ni claves de Stripe secretas: van en el backend.
          </p>
        </Callout>
      </section>

      {/* 7 */}
      <section className="mb-5">
        <h2 className="section-title">7. Configurar vite.config.js</h2>
        <CodeBlock
          language="js"
          title="vite.config.js completo y comentado"
          code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],

  // Ruta base: cámbiala a '/nombre-repo/' si publicas en GitHub Pages
  base: '/',

  // Alias de imports: importar '@/components/Boton'
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  server: {
    port: 5173,
    host: true,           // accesible desde la red local
    open: false,
    proxy: {
      // Evita CORS en desarrollo: /api/... → http://localhost:3000/api/...
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Separa librerías grandes en su propio chunk
        manualChunks: { bootstrap: ['bootstrap'] },
      },
    },
  },
})`}
        />
      </section>

      {/* 8 */}
      <section className="mb-5">
        <h2 className="section-title">8. Vite vs Create React App (y otros)</h2>
        <div className="table-wrap">
          <table className="table table-doc">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Vite</th>
                <th>CRA (obsoleto)</th>
                <th>Next.js</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Arranque</td><td>~200 ms</td><td>5–30 s</td><td>Rápido (Turbopack)</td></tr>
              <tr><td>Dev server</td><td>ESM nativo</td><td>Webpack</td><td>Webpack/Turbopack</td></tr>
              <tr><td>Router</td><td>Tú eliges</td><td>Tú eliges</td><td>Integrado (file-based)</td></tr>
              <tr><td>SSR / SEO</td><td>Manual (o Remix)</td><td>No</td><td>Sí, por defecto</td></tr>
              <tr><td>Ideal para</td><td>SPA, librerías, prototipos</td><td>Nada nuevo</td><td>Webs con SEO/SSR</td></tr>
            </tbody>
          </table>
        </div>
        <Callout type="info" title="¿Y si mi proyecto pide SEO?">
          <p>
            Una SPA con Vite y React funciona, pero el HTML inicial llega vacío. Si el SEO es crítico,
            considera Next.js o React Router en modo framework (SSR). Para paneles internos, apps y
            tutoriales, Vite es la opción simple y rápida.
          </p>
        </Callout>
      </section>

      {/* 9 */}
      <section className="mb-5">
        <h2 className="section-title">9. Publicar el build</h2>
        <CodeBlock
          language="bash"
          title="build y despliegue"
          code={`npm run build          # genera dist/
npm run preview        # comprueba el resultado en local

# GitHub Pages (con el paquete gh-pages)
npm install -D gh-pages
# package.json → "deploy": "gh-pages -d dist"
npm run build && npm run deploy`}
        />
        <Callout type="warn" title="El fallo típico: base mal configurada">
          <p>
            Si publicas en <code>https://usuario.github.io/mi-repo/</code>, pon{' '}
            <code>base: '/mi-repo/'</code> en <code>vite.config.js</code> o la página saldrá en blanco
            porque intentará cargar <code>/assets/index-xxx.js</code> desde la raíz del dominio. Con
            <strong> HashRouter</strong> (como esta web) evitas además los 404 al refrescar rutas
            internas.
          </p>
        </Callout>
      </section>

      {/* 10 */}
      <section className="mb-5">
        <h2 className="section-title">10. Errores frecuentes</h2>
        <div className="accordion" id="erroresVite">
          {[
            {
              q: '«process is not defined»',
              a: 'En Vite no existe process.env en el navegador. Usa import.meta.env.VITE_ALGO.',
            },
            {
              q: '«Failed to resolve import»',
              a: 'Ruta mal escrita, extensión incorrecta o falta instalar la dependencia. En Linux/macOS las mayúsculas importan: Layout.jsx ≠ layout.jsx.',
            },
            {
              q: 'La página sale en blanco tras el build',
              a: 'Casi siempre es la propiedad base mal puesta (GitHub Pages con subcarpeta) o un enrutador sin fallback en el hosting.',
            },
            {
              q: 'Los estilos de Bootstrap no se aplican',
              a: 'Comprueba que el import de bootstrap.min.css esté en main.jsx antes que tu CSS propio. Si importas tu CSS primero, tus reglas pierden.',
            },
            {
              q: '«Port 5173 is in use»',
              a: 'Vite sube al siguiente puerto libre automáticamente. Si quieres otro fijo: npm run dev -- --port 3000.',
            },
            {
              q: 'Cambios que no se reflejan',
              a: 'Mira la consola del servidor; si hay un error de sintaxis el HMR se detiene. Recarga forzada o reinicia el servidor.',
            },
          ].map((f, i) => (
            <div className="accordion-item" key={f.q}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#err-${i}`}
                >
                  {f.q}
                </button>
              </h3>
              <div id={`err-${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#erroresVite">
                <div className="accordion-body fs-7">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PrevNext />
    </>
  )
}
