import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <Link to="/" className="back-link">
            <FiArrowLeft size={13} /> back
          </Link>
          <h1 className="sec-head">all projects</h1>
          <p className="page-sub">
            Personal, academic, and professional work — AI/ML, full-stack web, quant trading,
            and robotics.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="proj-stack">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__text">2026 / Vaibhav Jha</p>
          <p className="footer__text">
            <a href="mailto:Vaibhav130304@gmail.com">vaibhav130304@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}
