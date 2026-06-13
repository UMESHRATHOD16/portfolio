import { Routes, Route, useLocation } from 'react-router-dom'
import MainPage from './pages/MainPage'
import About from './pages/About'
import Skills from './pages/Skills'
import MegaBlog from './pages/projects/MegaBlog'
import EcoSangam from './pages/projects/EcoSangam'
import CppBlog from './pages/blogs/CppBlog'
import Links from './pages/Links'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/links" element={<Links />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects/megablog" element={<MegaBlog />} />
      <Route path="/projects/ecosangam" element={<EcoSangam />} />
      <Route path="/blogs/cpp-memory" element={<CppBlog />} />
    </Routes>
    </>
  )
}

export default App