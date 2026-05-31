import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PageTurn.css'

function PageTurn({ to, chapter, title }) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to)
    }, 800)

    return () => clearTimeout(timer)
  }, [navigate, to])

  return (
    <div className="page-turn-overlay">

      <div className="chapter-number">
        {chapter}
      </div>

      <div className="chapter-title">
        {title}
      </div>

    </div>
  )
}

export default PageTurn