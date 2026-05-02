import './MangaGrid.css'

function MangaGrid() {
  return (
    <div className="manga-grid">
        <div className="panel hero-panel">
        <span className="hero-chapter">第01話</span>
        <h1 className="hero-name">UMESH<br/>RATHOD</h1>
        <p className="hero-sub">IT Student · NIT Jalandhar · Web Developer</p>
    </div>

      {/* about */}
      <div className="panel about-panel">
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
      <div className="panel skills-panel">
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
      <div className="panel project1-panel">
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
      <div className="panel project2-panel">
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


      {/* Contact */}
        <div className="panel contact-panel">
          <span className="panel-label">第05話 · LET'S CONNECT</span>
          <p>Origin Story</p>
        </div>
    </div>
  )
}

export default MangaGrid