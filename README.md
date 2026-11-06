# Bootstrap · Vite · React — Guía completa en español

Sitio educativo completo sobre el stack **Bootstrap 5.3 + Vite 8 + React 19**: teoría, catálogo de
componentes con demos en vivo, integración paso a paso, cheatsheet, proyecto guiado, ejercicios y quiz.

> Documentación viva: cada ejemplo de esta web es código real que se ejecuta en el navegador.

---

## ✨ Contenido

| Sección | Qué incluye |
| --- | --- |
| **Inicio** | Portada, stack explicado en 30 segundos y ruta de aprendizaje en 6 pasos. |
| **Teoría · Bootstrap** | Qué es, historia y versiones, grid de 12 columnas con **playground interactivo**, breakpoints, utilidades, componentes, personalización con variables CSS y SASS, buenas prácticas. |
| **Teoría · Vite** | Qué problema resuelve, dev server + HMR, estructura del proyecto, assets, variables de entorno, `vite.config.js` comentado, comparativa con CRA, despliegue y errores frecuentes. |
| **Teoría · React** | Componentes, JSX en 7 reglas, props, `useState` (demo de contador), eventos, listas con `key` (demo de tareas), `useEffect`, formularios controlados y tabla de hooks. |
| **Integración** | Instalación en 5 pasos, 4 enfoques (CSS global, React-Bootstrap, SASS, CDN), comparativa, modales/dropdowns/tooltips reales y solución a los 7 problemas más típicos. |
| **Componentes** | 27 componentes de Bootstrap con vista previa interactiva + código copiable + enlace a la documentación oficial. |
| **Cheatsheet** | Grid, utilidades, comandos de Vite/npm, hooks, estructura de carpetas, glosario, atajos y enlaces oficiales. |
| **Proyecto guiado** | Gestor de tareas en 9 pasos, con demo funcional y persistencia en `localStorage`. |
| **Ejercicios** | 10 retos (principiante → avanzado) con pista y solución desplegable. |
| **Quiz** | 12 preguntas con explicación por respuesta, puntuación y feedback final. |

Extras: modo claro/oscuro persistente, buscador global con `Ctrl + K`, navegación anterior/siguiente,
layout responsive con offcanvas en móvil y páginas 404.

---

## 🧱 Stack del proyecto

| Tecnología | Versión | Para qué |
| --- | --- | --- |
| [React](https://react.dev/) | 19 | Componentes, estado y lógica de la UI. |
| [Vite](https://vite.dev/) | 8 | Dev server, HMR y build de producción. |
| [Bootstrap](https://getbootstrap.com/) | 5.3 | Grid, utilidades y componentes visuales. |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.13 | Iconografía. |
| [React Router](https://reactrouter.com/) | 7 | Rutas de la SPA (`HashRouter`). |
| [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer) | 2.4 | Resaltado de sintaxis en los bloques de código. |

---

## 🚀 Puesta en marcha

Requisitos: **Node.js 20.19+ o 22.12+** y npm.

```bash
# 1. Clonar
git clone https://github.com/xenako0012/AyudaDeBootstrapReactVite.git
cd AyudaDeBootstrapReactVite

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (http://localhost:5173)
npm run dev
```

### Scripts disponibles

```bash
npm run dev       # servidor de desarrollo con HMR
npm run build     # build de producción en dist/
npm run preview   # sirve localmente el build de dist/
```

---

## 📁 Estructura

```
.
├── index.html                 # entrada de Vite (con script de tema anti-flash)
├── vite.config.js             # configuración del servidor y del build
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # montaje + imports globales (Bootstrap, iconos, CSS)
    ├── App.jsx                # definición de rutas
    ├── components/
    │   ├── Layout.jsx         # topbar, sidebar, footer, tema y búsqueda
    │   ├── SearchModal.jsx    # buscador global (Ctrl + K)
    │   ├── CodeBlock.jsx      # código con resaltado y botón de copiar
    │   ├── Demo.jsx           # pestañas vista previa / código
    │   ├── Quiz.jsx           # motor del quiz
    │   ├── TaskDemo.jsx       # gestor de tareas final del proyecto guiado
    │   ├── Callout.jsx
    │   ├── PageHeader.jsx
    │   └── PrevNext.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── TeoriaBootstrap.jsx
    │   ├── TeoriaVite.jsx
    │   ├── TeoriaReact.jsx
    │   ├── Integracion.jsx
    │   ├── Componentes.jsx
    │   ├── componentes/
    │   │   ├── seccionesBasicas.jsx
    │   │   └── seccionesInteractivas.jsx
    │   ├── Recursos.jsx
    │   ├── Practica.jsx
    │   ├── Ejercicios.jsx
    │   ├── QuizPage.jsx
    │   └── NotFound.jsx
    ├── data/
    │   ├── navigation.js      # navegación + índice de búsqueda
    │   └── siteData.js        # versiones, enlaces, breakpoints, cheatsheets
    └── styles/
        └── custom.css         # sistema de diseño sobre Bootstrap
```

---

## 🌗 Modo oscuro

Bootstrap 5.3 incluye temas por atributo. El proyecto guarda la preferencia en `localStorage` y la aplica
en `<html data-bs-theme="light|dark">`. Un pequeño script en `index.html` la aplica antes del primer
render para evitar el parpadeo.

---

## 📦 Publicar

### GitHub Pages

1. Ajusta la base en `vite.config.js` si el repo no está en la raíz del dominio:

   ```js
   export default defineConfig({
     base: '/AyudaDeBootstrapReactVite/',
     // ...
   })
   ```

2. Compila y despliega con `gh-pages`:

   ```bash
   npm install -D gh-pages
   # package.json → "deploy": "gh-pages -d dist"
   npm run build && npm run deploy
   ```

La app usa `HashRouter`, así que las rutas funcionan al refrescar sin configurar *fallbacks* (las URLs
quedan como `/#/teoria/react`).

### Vercel / Netlify

- **Build command:** `npm run build`
- **Output directory:** `dist`
- Si cambias a `BrowserRouter`, añade la redirección de SPA a `index.html`.

---

## 🧭 Enlaces útiles

- [Documentación de Bootstrap](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Guía de Vite](https://vite.dev/guide/)
- [Documentación de React en español](https://es.react.dev/learn)
- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

## 🤝 Contribuir

Las mejoras son bienvenidas: corrige una errata, añade un ejemplo o propone un ejercicio nuevo.

```bash
git checkout -b feat/mi-aporte
# ...cambios...
git commit -m "feat: añade ejemplo de X"
git push origin feat/mi-aporte
```

Y abre un Pull Request describiendo el cambio.

---

Hecho con cariño, Bootstrap, Vite y React. Contenido educativo de uso libre.
