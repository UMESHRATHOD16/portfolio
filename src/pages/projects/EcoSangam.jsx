import { useState } from 'react'
import PageTurn from '../../components/PageTurn'
import './Project.css'
import Navbar from "../../components/Navbar"

function EcoSangam() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      <Navbar/>
      {goBack && (
        <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />
      )}
      <div className="project-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="project-chapter-num">第04話 · PROJECT 02</div>
        <h1 className="project-chapter-title">ECO<br/>SANGAM</h1>
        <div className="project-divider" />

        <div className="project-body">

          <p className="project-p">
            An AI-driven sustainability platform guiding people towards a more sustainable environment. Track your carbon footprint, set eco goals, and get intelligent suggestions powered by Google's Gemini API.
          </p>

          <p className="project-p">
            This was the project where I built my first real backend — Node.js, Express, MongoDB, Google OAuth, email notifications, and AI integration all in one system.
          </p>

          <div className="project-section">
            <span className="project-section-label">// WHAT IT DOES</span>
            <div className="project-features">
              <div className="project-feature">
                <span className="feature-dot" />
                Carbon footprint tracking with real-time dashboard
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                AI-based eco suggestions via Gemini API
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Image-based eco scanner
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                User auth with JWT + Google OAuth
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Email notifications via Nodemailer
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Eco goals system with progress tracking
              </div>
            </div>
          </div>

          <div className="project-section">
            <span className="project-section-label">// TECH STACK</span>
            <div className="project-stack-list">
              <div className="stack-row">
                <span className="stack-layer">Frontend</span>
                <span className="stack-val">React · Vite · TypeScript · Tailwind</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Backend</span>
                <span className="stack-val">Node.js · Express.js</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Database</span>
                <span className="stack-val">MongoDB · Mongoose</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Auth</span>
                <span className="stack-val">JWT · Google OAuth · Passport</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">AI</span>
                <span className="stack-val">Gemini API</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Email</span>
                <span className="stack-val">Nodemailer</span>
              </div>
            </div>
          </div>

          <div className="project-section">
            <span className="project-section-label">// WHAT I LEARNED</span>
            <p className="project-p">
              How a real backend is structured — routes, controllers, models, services. How OAuth actually works under the hood. How to integrate a third-party AI API into a production system. Full-stack thinking.
            </p>
          </div>

          <div className="project-links-row">
            <a href="https://github.com/UMESHRATHOD16/ecoSangam" target="_blank" className="project-cta">
              View on GitHub ↗
            </a>
          </div>

          <div className="project-links-row">
            <a href="https://github.com/UMESHRATHOD16/ecoSangam" target="_blank" className="project-cta">
              View Live Site ↗
            </a>
          </div>

        </div>

        <div className="project-end">— 第04話 · PROJECT 02 · END —</div>

      </div>
    </>
  )
}

export default EcoSangam