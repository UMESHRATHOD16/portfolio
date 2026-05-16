import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PageTurn.css'

function PageTurn({ to, onComplete }) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to)
      if (onComplete) onComplete()
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page-turn-overlay">
      <div className="page-turn-left" />
      <div className="page-turn-right" />
      <div className="page-turn-flash" />
    </div>
  )
}

export default PageTurn