import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CV_URL = 'https://drive.google.com/file/d/13OaCgMhfXAHl1_FqjMNcnl_pNzI-KGGc/view?usp=sharing'

const NAV_ITEMS = [
  { label: 'Work',     id: 'work'     },
  { label: 'Projects', id: 'projects' },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav className={`nav${scrolled ? ' nav--bordered' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__brand">Vaibhav Jha</Link>

          <div className="nav__links">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} className="nav__link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="nav__actions">
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              Resume
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav__mobile">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              className="nav__link"
              onClick={() => scrollTo(id)}
              style={{ textAlign: 'left' }}
            >
              {label}
            </button>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
            style={{ marginTop: '8px', alignSelf: 'flex-start' }}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
