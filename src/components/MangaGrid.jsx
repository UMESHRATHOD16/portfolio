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
      <div className="panel about-panel">ABOUT</div>
      <div className="panel skills-panel">SKILLS</div>
      <div className="panel project1-panel">P1</div>
      <div className="panel project2-panel">P2</div>
      <div className="panel project3-panel">P3</div>
      <div className="panel contact-panel">CONTACT</div>
    </div>
  )
}

export default MangaGrid