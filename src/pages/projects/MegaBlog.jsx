import { useState } from 'react'
import PageTurn from '../../components/PageTurn'
import './Project.css'

function MegaBlog() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      {goBack && (
        <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />
      )}
      <div className="project-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="project-chapter-num">第04話 · PROJECT 01</div>
        <h1 className="project-chapter-title">MEGA<br/>BLOG</h1>
        <div className="project-divider" />

        <div className="project-body">

          <p className="project-p">
            A production-grade blogging platform built as a showcase of full-stack frontend skills. Users can sign up, write blogs with rich text, upload cover images, and publish them to the world.
          </p>

          <p className="project-p">
            This was my course's mega project — the one where everything clicked. Auth systems, protected routes, state management, file storage — all working together in one real app.
          </p>

          <div className="project-section">
            <span className="project-section-label">// WHAT IT DOES</span>
            <div className="project-features">
              <div className="project-feature">
                <span className="feature-dot" />
                Signup, Login, Logout with full session management
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Create, edit, delete blog posts with rich text editor
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Cover image upload and preview via Appwrite Storage
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Protected routes — only auth users can create posts
              </div>
              <div className="project-feature">
                <span className="feature-dot" />
                Public feed — all active posts visible to everyone
              </div>
            </div>
          </div>

          <div className="project-section">
            <span className="project-section-label">// TECH STACK</span>
            <div className="project-stack-list">
              <div className="stack-row">
                <span className="stack-layer">Frontend</span>
                <span className="stack-val">React · Vite · Tailwind CSS</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">State</span>
                <span className="stack-val">Redux Toolkit</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Backend</span>
                <span className="stack-val">Appwrite (BaaS)</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Auth</span>
                <span className="stack-val">Appwrite Auth</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Storage</span>
                <span className="stack-val">Appwrite Buckets</span>
              </div>
              <div className="stack-row">
                <span className="stack-layer">Forms</span>
                <span className="stack-val">React Hook Form · RTE</span>
              </div>
            </div>
          </div>

          <div className="project-section">
            <span className="project-section-label">// WHAT I LEARNED</span>
            <p className="project-p">
              Service layer pattern - abstracting all Appwrite calls into clean service classes. How Redux truly shines when auth state needs to be everywhere. How to think in components, not pages.
            </p>
          </div>

          <div className="project-links-row">
            <a href="https://github.com/UMESHRATHOD16/MegaBlogApp" target="_blank" className="project-cta">
              View on GitHub ↗
            </a>
          </div>
          
          <div className="project-links-row">
            <a href="https://github.com/UMESHRATHOD16/MegaBlogApp" target="_blank" className="project-cta">
              View Live Site ↗
            </a>
          </div>

        </div>

        <div className="project-end">— 第04話 · PROJECT 01 · END —</div>

      </div>
    </>
  )
}

export default MegaBlog