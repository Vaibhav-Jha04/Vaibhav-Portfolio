import { Link, useLocation, useNavigate } from 'react-router-dom'

const CV_URL = 'https://drive.google.com/file/d/13OaCgMhfXAHl1_FqjMNcnl_pNzI-KGGc/view?usp=sharing'

const NAV_ITEMS = [
  { label: 'Work',     id: 'work'     },
  { label: 'Projects', id: 'projects' },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollTo = (id) => {
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
    <>
      <Link to="/" className="brand">vjha.dev</Link>

      <nav className="dock" aria-label="Primary">
        {NAV_ITEMS.map(({ label, id }) => (
          <button key={id} className="dock__link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
        <span className="dock__sep" aria-hidden="true" />
        <a href={CV_URL} target="_blank" rel="noreferrer" className="dock__link">
          Resume
        </a>
      </nav>
    </>
  )
}
