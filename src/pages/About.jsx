import { useState } from 'react'
import PageTurn from '../components/PageTurn'
import './About.css'
import Navbar from '../components/Navbar'

function About() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      <Navbar/>
      {goBack && (
        <PageTurn 
          to="/"
          chapter="第00話"
          title="MAIN PAGE"
        />
      )}
      <div className="about-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="about-chapter-num">第02話</div>

        <h1 className="about-chapter-title">ORIGIN STORY</h1>

        <div className="about-divider" />

        <div className="about-body">

          <p className="about-p">
            Hi, I'm Umesh. I'm a 21-year-old builder and IT student at NIT Jalandhar.
          </p>

          <p className="about-p">
            I build full-stack web apps from React frontends to Node.js backends with real auth systems, databases, and AI integrations. Currently sharpening my React skills and growing into backend development.
          </p>

          <p className="about-p">
            I also write about things I figure out on <a href="https://umeshblog1.hashnode.dev/" target="_blank" className="about-link">Hashnode</a> and you can find my work on <a href="https://github.com/UMESHRATHOD16" target="_blank" className="about-link">GitHub</a>.
          </p>

          <p className="about-quote">
            "Luffy never stops until he's free.<br/>
            I don't stop either."
          </p>

          <p className="about-p">
            Currently open to internship opportunities. Check out my projects below or reach out directly.
          </p>

        </div>

        <div className="resume-section">
          <span className="resume-label">// RESUME</span>
          <p className="resume-text">Want the full picture? Here's my resume.</p>
          <a 
            href="https://drive.google.com/file/d/1gE0N8QBSGXH5E4K1_W3qsfZpp0zU499U/view?usp=sharing" 
            target="_blank" 
            className="resume-cta"
          >
            View Resume ↗
          </a>
        </div>

        <div className="about-end">— 第02話 · END —</div>

      </div>
    </>
  )
}

export default About