import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import About from './pages/About'
import Skills from './pages/Skills'
import MegaBlog from './pages/projects/MegaBlog'
import EcoSangam from './pages/projects/EcoSangam'
import CppBlog from './pages/blogs/CppBlog'
import Links from './pages/Links'

function App() {
  return (
    <Routes>
      <Route path="/links" element={<Links />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects/megablog" element={<MegaBlog />} />
      <Route path="/projects/ecosangam" element={<EcoSangam />} />
      <Route path="/blogs/cpp-memory" element={<CppBlog />} />
    </Routes>
  )
}

export default App