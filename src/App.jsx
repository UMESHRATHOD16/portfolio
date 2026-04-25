import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutChapter from './pages/AboutChapter'
import SkillsChapter from './pages/SkillsChapter'
import ProjectsChapter from './pages/ProjectsChapter'
import ContactChapter from './pages/ContactChapter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutChapter />} />
      <Route path="/skills" element={<SkillsChapter />} />
      <Route path="/projects" element={<ProjectsChapter />} />
      <Route path="/contact" element={<ContactChapter />} />
    </Routes>
  )
}

export default App