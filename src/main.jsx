import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

// Estilos: Bootstrap (CSS + JS), sus iconos y nuestros estilos propios.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/custom.css'

// JS de Bootstrap (dropdowns, modales, offcanvas, carousel, collapse…).
// Se importa el paquete (ESM) para que los data-attributes funcionen en toda la app
// y además tengamos acceso a Tooltip, Popover, Offcanvas, Modal… desde React.
import 'bootstrap'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
