import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTurn from './PageTurn'
import './Navbar.css'

function Navbar({ dark = false }) {
  const [goHome, setGoHome] = useState(false)
  const [goLinks, setGoLinks] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {goHome && <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />}
      {goLinks && <PageTurn to="/links" chapter="∞" title="LINKS" />}

      <nav className={`top-nav ${dark ? 'dark' : ''}`}>
        {!isHome && (
          <button className="nav-link" onClick={() => setGoHome(true)}>HOME</button>
        )}
        <button className="nav-link" onClick={() => setGoLinks(true)}>LINKS</button>
      </nav>
    </>
  )
}

export default Navbar