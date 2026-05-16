import './MangaGrid.css'
import { useEffect, useState} from 'react'
import PageTurn from './PageTurn'
import { Eye, Heart, Timer } from 'lucide-react'

function MangaGrid() {

  const [navigateTo, setNavigateTo] = useState(null)

  const handlePanelClick = (path) => {
    setNavigateTo(path)
  }
  
useEffect(() => {
  const text = "UMESH\nRATHOD"
  const el = document.getElementById('heroName')
  let i = 0
  el.innerHTML = ''
  let started = false

  if (started) return
  started = true

  const type = () => {
    if (i < text.length) {
      if (text[i] === '\n') {
        el.innerHTML += '<br/>'
      } else {
        el.innerHTML += `<span class="typed-char">${text[i]}</span>`
      }
      i++
      setTimeout(type, 100)
    }
  }

  setTimeout(type, 400)

  fetch('https://countapi.xyz/hit/umeshrathod-portfolio/visits')
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById('visitorCount')
      if (el) el.textContent = data.value
    })

  let seconds = 0
  const timer = setInterval(() => {
    seconds++
    const el = document.getElementById('timeSpent')
    if (el) el.textContent = seconds
  }, 1000)

  return () => {
    clearInterval(timer)
    i = text.length
  }
}, [])

  return (
    <>
     <div className="manga-grid">
        <div className="panel hero-panel">
        <span className="hero-chapter">第01話</span>
        <h1 className="hero-name"id="heroName" >UMESH<br/>RATHOD</h1>
        <p className="hero-sub">IT Student · NIT Jalandhar · Web Developer</p>
    </div>

      {/* about */}
      <div className="panel about-panel" data-num="02" id="about" onClick={() => handlePanelClick('/about')}  style={{ cursor: 'pointer' }}>
        <span className="panel-label">第02話 · ABOUT</span>
        <div className="about-content">
          <p className="about-intro">Rathod Umesh. 21</p>
          <p className="about-line">Started with GTA on a friend's PC.<br/>Ended up building AI-powered web apps.</p>
          <p className="about-accent">Not a bad arc.</p>
         <p className="about-line">
            Still in training arc.<br/>
            React, Node.js, DSA - mastering each arc.<br/>
            Power level : rising.
        </p>
          <p className="about-sign">Luffy never stops until he's King of the Pirates.<br/>I don't stop either.</p>
        </div>
      </div>

      {/* Skills */}
      <div className="panel skills-panel" data-num="03" id="skills" onClick={() => handlePanelClick('/skills')}  style={{ cursor: 'pointer' }}>
        <span className="panel-label">第03話 · SKILLS</span>
        
        <div className="skills-content">
          
          <div className="skill-group">
            <span className="skill-arc">⚔ Current Arc</span>
            <div className="skill-tags">
              <span className="tag tag-lg">React</span>
              <span className="tag tag-lg">JavaScript</span>
              <span className="tag tag-md">Redux Toolkit</span>
              <span className="tag tag-md">Tailwind CSS</span>
              <span className="tag tag-sm">HTML · CSS</span>
            </div>
          </div>

          <div className="skill-divider">— unlocking —</div>

          <div className="skill-group">
            <span className="skill-arc">Next Arc</span>
            <div className="skill-tags">
              <span className="tag tag-lg unlocking">Node.js</span>
              <span className="tag tag-md unlocking">Express</span>
              <span className="tag tag-md unlocking">MongoDB</span>
            </div>
          </div>

          <div className="skill-divider">— always training —</div>

          <div className="skill-group">
            <span className="skill-arc">Always Training</span>
            <div className="skill-tags">
              <span className="tag tag-md">C++</span>
              <span className="tag tag-md">DSA</span>
              <span className="tag tag-sm">Git</span>
            </div>
          </div>

        </div>
      </div>

      {/* Projects Header */}
      <div className="panel projects-header-panel">
        <span className="panel-label"></span>
        <h2 className=" panel-label panel-title">第04話 · WHAT I'VE BUILT</h2>
      </div>

      {/* Project1 */}
      <div className="panel project1-panel" data-num="01" id="about" onClick={() => handlePanelClick('/projects/megablog')}  style={{ cursor: 'pointer' }}>
        <span className="panel-label">PROJECT 01</span>
        <h3 className="project-title">Mega Blog</h3>
        <p className="project-desc">Production-grade blogging platform. Write, publish, own your words.</p>
        <div className="project-stack">
          <span className="tag tag-sm">React</span>
          <span className="tag tag-sm">Appwrite</span>
          <span className="tag tag-sm">Redux</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/UMESHRATHOD16/MegaBlogApp" target="_blank" className="project-link">↗ GitHub</a>
        </div>
      </div>


      {/* Project2 */}
      <div className="panel project2-panel" data-num="02" id="about" onClick={() => handlePanelClick('/projects/ecosangam')}  style={{ cursor: 'pointer' }} >
        <span className="panel-label">PROJECT 02</span>
        <h3 className="project-title">EcoSangam</h3>
        <p className="project-desc">AI-driven sustainability platform. Track carbon footprint with Gemini-powered insights.</p>
        <div className="project-stack">
          <span className="tag tag-sm">React</span>
          <span className="tag tag-sm">Node.js</span>
          <span className="tag tag-sm">MongoDB</span>
          <span className="tag tag-sm">Gemini API</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/UMESHRATHOD16/ecoSangam" target="_blank" className="project-link">↗ GitHub</a>
        </div>
      </div>

    {/* BLOGS HEADER */}
    <div className="panel blogs-header-panel" id="blogs">
      <span className="panel-label">第05話</span>
      <h2 className="panel-title">Stuff I Needed to<br/>Understand</h2>
    </div>

    {/* BLOG CARD */}
    <div className="panel blog1-panel" data-num="01" onClick={() => handlePanelClick('/blogs/cpp-memory')} style={{ cursor: 'pointer' }}>
      <span className="panel-label">LATEST ENTRY</span>
      <div className="blog-meta">
        <span className="blog-date">May 3, 2026</span>
        <span className="blog-read">2 min read</span>
      </div>
      <h3 className="blog-title">I Broke C++ Memory On Purpose — Here's What Happened</h3>
      <p className="blog-desc">A deep dive into what happens when you intentionally corrupt memory in C++. Spoiler: it gets weird.</p>
      <a href="https://umeshblog1.hashnode.dev/i-broke-c-memory-on-purpose-here-s-what-happened" target="_blank" className="blog-link">
        Read Entry ↗
      </a>
    </div>

    {/* MORE COMING */}
    <div className="panel blog2-panel" data-num="??">
      <span className="panel-label">NEXT ENTRY</span>
      <div className="blog-coming">
        <p className="coming-text">Currently figuring out<br/>something new.</p>
        <p className="coming-sub">Check back soon.</p>
        <a href="https://hashnode.com/@umeshhhhh" target="_blank" className="blog-link">
          Follow on Hashnode ↗
        </a>
      </div>
    </div>

      {/* Contact */}
<div className="panel contact-panel">
  <span className="panel-label">第06話 · LET'S CONNECT</span>
  <div className="contact-content">

    <div className="contact-top">
      <h2 className="contact-heading">If you're building something,
        or know someone who is- <br/>let's talk.</h2>
    </div>

    <div className="contact-grid">
      <a href="https://github.com/UMESHRATHOD16" target="_blank" className="contact-card">
        <span className="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </span>
        <span className="contact-name">GitHub</span>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="https://www.linkedin.com/in/rathodumesh" target="_blank" className="contact-card">
        <span className="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </span>
        <span className="contact-name">LinkedIn</span>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="mailto:umeshhhhhrathod@gmail.com" className="contact-card">
        <span className="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
        </span>
        <span className="contact-name">Email</span>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="https://instagram.com/__umeshrathod" target="_blank" className="contact-card">
        <span className="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </span>
        <span className="contact-name">Instagram</span>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="https://hashnode.com/@umeshhhhh" target="_blank" className="contact-card">
        <span className="contact-icon">
          <svg viewBox="0 0 337 337" fill="currentColor"><path d="M168.5 0C75.36 0 0 75.36 0 168.5S75.36 337 168.5 337 337 261.64 337 168.5 261.64 0 168.5 0zm-9.46 246.53c-43.46 4.05-80.07-32.56-76.02-76.02 3.47-37.23 33.89-67.65 71.12-71.12 43.46-4.05 80.07 32.56 76.02 76.02-3.47 37.23-33.89 67.65-71.12 71.12z"/></svg>
        </span>
        <span className="contact-name">Hashnode</span>
        <span className="contact-arrow">↗</span>
      </a>
    </div>
  </div>
</div>

    
    <footer className="manga-footer">
      <div className="footer-left">
        <span className="footer-visitors">
          <Eye size={14} strokeWidth={1.5} /> 
          <span id="visitorCount">...</span> viewers so far
        </span>
        <span className="footer-time">
          <Timer size={14} strokeWidth={1.5} />
          You've been here <span id="timeSpent">0</span>s
        </span>
      </div>
      <div className="footer-center">
        Made with <Heart size={11} strokeWidth={2.5} className="heart-icon" /> by <strong>Umesh Rathod</strong>
      </div>
      <div className="footer-right">
        <span className="footer-sig">第END話</span>
      </div>
    </footer>
    </div>

    {navigateTo && <PageTurn to={navigateTo} />}

    </>
  )
}

export default MangaGrid