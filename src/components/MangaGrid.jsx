import './MangaGrid.css'

function MangaGrid() {
  return (
    <div className="manga-grid">
        <div className="panel hero-panel"><div className="panel hero-panel">
        <span className="hero-chapter">第01話</span>
        <h1 className="hero-name">UMESH<br/>RATHOD</h1>
        <p className="hero-sub">IT Student · NIT Jalandhar · Web Developer</p>
        </div>
    </div>

      {/* about */}
      <div className="panel about-panel"><div className="panel about-panel">
        <span className="panel-label">第02話 · ABOUT</span>
        <p>Origin Story</p>
        </div>
      </div>

      {/* Skills */}
        <div className="panel skills-panel">
          <div className="panel about-panel">
          <span className="panel-label">第03話 · SKILLS</span>
          <p>Origin Story</p>
          </div>
        </div>


      {/* Project1 */}
        <div className="panel project1-panel">
          <div className="panel about-panel">
          <span className="panel-label">第04話 · WHAT IV'E BUILT</span>
          <p>Origin Story</p>
          </div>
        </div>


      {/* Project2 */}
        <div className="panel project2-panel">
          P2
        </div>


      {/* Project3 */}
        <div className="panel project3-panel">
          P3
        </div>

        
      {/* Contact */}
        <div className="panel contact-panel">
          <div className="panel about-panel">
          <span className="panel-label">第05話 · LET'S CONNECT</span>
          <p>Origin Story</p>
          </div>
        </div>
    </div>
  )
}

export default MangaGrid