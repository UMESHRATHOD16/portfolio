import { useState } from 'react'
import PageTurn from '../components/PageTurn'
import './Links.css'

function Links() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      {goBack && <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />}
      <div className="links-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="links-avatar">UR</div>
        <h1 className="links-name">Umesh Rathod</h1>
        <p className="links-bio">Builder · IT Student · NIT Jalandhar</p>

        <div className="links-body">

          <div className="links-section">
            <span className="links-section-label">// CONNECT</span>
            <div className="links-list">
              <a href="https://instagram.com/__umeshrathod" target="_blank" className="link-item">
                <span className="link-name">Instagram</span>
                <span className="link-handle">__umeshrathod ↗</span>
              </a>
              <a href="https://www.linkedin.com/in/rathodumesh" target="_blank" className="link-item">
                <span className="link-name">LinkedIn</span>
                <span className="link-handle">rathodumesh ↗</span>
              </a>
              <a href="mailto:umeshhhhhrathod@gmail.com" className="link-item">
                <span className="link-name">Email</span>
                <span className="link-handle">umeshhhhhrathod@gmail.com ↗</span>
              </a>
            </div>
          </div>

          <div className="links-section">
            <span className="links-section-label">// PROFESSIONAL</span>
            <div className="links-list">
              <a href="https://github.com/UMESHRATHOD16" target="_blank" className="link-item">
                <span className="link-name">GitHub</span>
                <span className="link-handle">UMESHRATHOD16 ↗</span>
              </a>
              <a href="YOUR_RESUME_LINK" target="_blank" className="link-item">
                <span className="link-name">Resume</span>
                <span className="link-handle">View PDF ↗</span>
              </a>
            </div>
          </div>

          <div className="links-section">
            <span className="links-section-label">// CONTENT</span>
            <div className="links-list">
              <a href="https://umeshblog1.hashnode.dev/" target="_blank" className="link-item">
                <span className="link-name">Hashnode</span>
                <span className="link-handle">umeshblog1.hashnode.dev ↗</span>
              </a>
            </div>
          </div>

        </div>

        <div className="links-end">— ∞ —</div>

      </div>
    </>
  )
}

export default Links