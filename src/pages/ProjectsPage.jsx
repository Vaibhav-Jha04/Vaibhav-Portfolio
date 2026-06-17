import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <Link
            to="/"
            className="btn btn-outline btn-sm"
            style={{ marginBottom: '32px', display: 'inline-flex' }}
          >
            <FiArrowLeft size={14} /> Back
          </Link>
          <p className="section-label">Projects</p>
          <h1 className="section-title">Everything I've built</h1>
          <p className="section-sub">
            A complete list of personal, academic, and professional projects — spanning AI/ML,
            full-stack web, mobile, robotics, and data science.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: '96px' }}>
        <div className="proj-grid proj-grid--all">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__text">© 2025 Vaibhav Jha. All rights reserved.</p>
          <Link to="/" className="footer__text" style={{ color: 'var(--text-2)' }}>
            Back to home
          </Link>
        </div>
      </footer>
    </>
  )
}
