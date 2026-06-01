import { useState } from 'react'
import PageTurn from '../components/PageTurn'
import './Skills.css'

function Skills() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      {goBack && (
        <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />
      )}
      <div className="skills-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="skills-chapter-num">第03話</div>
        <h1 className="skills-chapter-title">ABILITIES</h1>
        <div className="skills-divider" />

        <div className="skills-body">

          <div className="skill-section">
            <span className="skill-section-label">⚔ CURRENT ARC — MASTERED</span>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <span className="skill-desc">Components, hooks, state management, Redux Toolkit. Built production apps with it.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <span className="skill-desc">ES6+, async/await, DOM manipulation, fetch API. The foundation of everything.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '78%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Redux Toolkit</span>
                <span className="skill-desc">Slices, actions, reducers, async thunks. Used in both Mega Blog and EcoSangam.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '72%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Tailwind CSS</span>
                <span className="skill-desc">Utility-first styling. Fast, consistent, production-ready UI.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '75%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML · CSS</span>
                <span className="skill-desc">The basics done properly. Semantic HTML, flexbox, grid, animations.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}} /></div>
              </div>
            </div>
          </div>

          <div className="skill-section unlocking-section">
            <span className="skill-section-label">🔓 NEXT ARC — UNLOCKING</span>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name unlocking">Node.js</span>
                <span className="skill-desc">Server-side JavaScript. Already used in EcoSangam. Going deeper.</span>
                <div className="skill-bar"><div className="skill-fill unlocking" style={{width: '50%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name unlocking">Express.js</span>
                <span className="skill-desc">REST APIs, middleware, routing. The backbone of EcoSangam's backend.</span>
                <div className="skill-bar"><div className="skill-fill unlocking" style={{width: '48%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name unlocking">MongoDB</span>
                <span className="skill-desc">NoSQL database, Mongoose ODM. Used in EcoSangam with real data models.</span>
                <div className="skill-bar"><div className="skill-fill unlocking" style={{width: '45%'}} /></div>
              </div>
            </div>
          </div>

          <div className="skill-section">
            <span className="skill-section-label">🏋 ALWAYS TRAINING</span>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">C++</span>
                <span className="skill-desc">Primary DSA language. Arrays, linked lists, trees, graphs, dynamic programming.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '70%'}} /></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git · GitHub</span>
                <span className="skill-desc">Version control, branching, commits. All projects on GitHub.</span>
                <div className="skill-bar"><div className="skill-fill" style={{width: '72%'}} /></div>
              </div>
            </div>
          </div>

        </div>

        <div className="skills-end">— 第03話 · END —</div>

      </div>
    </>
  )
}

export default Skills