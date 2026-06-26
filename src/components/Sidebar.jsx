//src/components/Sidebar.jsx:
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ProfilePic from '../assets/profile-pic.jpg'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={ProfilePic} alt="Vaibhav Jha" className="profile-pic" />
      <h2>Vaibhav Jha</h2>
      <p>Computer Science • AI & Data Science</p>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      <div className="social-links">
        <a href="https://github.com/Vaibhav-Jha04?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vaibhav-jha-6b6b46221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:vaibhav130304@gmail.com" aria-label="Email">
          <MdEmail />
        </a>
      </div>
    </aside>
  )
}
