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
          <p>Origin Story</p>
        </div>

      {/* Projects Header */}
      <div className="panel projects-header-panel">
        <span className="panel-label"></span>
        <h2 className=" panel-label panel-title">第04話 · WHAT I'VE BUILT</h2>
      </div>

      {/* Project1 */}
        <div className="panel project1-panel">
          <p>Mega Blog</p>
        </div>


      {/* Project2 */}
        <div className="panel project2-panel">
          <p>EcoSangam</p>
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