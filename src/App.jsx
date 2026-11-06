import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

// Cada página se carga bajo demanda (code splitting): la primera visita solo
// descarga el layout y la portada, no todo el sitio.
const Home = lazy(() => import('./pages/Home'))
const TeoriaBootstrap = lazy(() => import('./pages/TeoriaBootstrap'))
const TeoriaVite = lazy(() => import('./pages/TeoriaVite'))
const TeoriaReact = lazy(() => import('./pages/TeoriaReact'))
const Integracion = lazy(() => import('./pages/Integracion'))
const Componentes = lazy(() => import('./pages/Componentes'))
const Recursos = lazy(() => import('./pages/Recursos'))
const Practica = lazy(() => import('./pages/Practica'))
const Ejercicios = lazy(() => import('./pages/Ejercicios'))
const QuizPage = lazy(() => import('./pages/QuizPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teoria/bootstrap" element={<TeoriaBootstrap />} />
        <Route path="teoria/vite" element={<TeoriaVite />} />
        <Route path="teoria/react" element={<TeoriaReact />} />
        <Route path="integracion" element={<Integracion />} />
        <Route path="componentes" element={<Componentes />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="practica" element={<Practica />} />
        <Route path="ejercicios" element={<Ejercicios />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
