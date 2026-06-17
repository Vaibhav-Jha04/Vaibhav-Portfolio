import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import CV from '../assets/CV_Vaibhav_2025.pdf'

const FEATURED_IDS = ['evadegpt', 'fire-robot', 'aka-color']

const SKILLS = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    label: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Detectron2', 'OpenCV', 'scikit-learn', 'Pandas'],
  },
  {
    label: 'Web & App',
    items: ['Next.js', 'React', 'React Native', 'FastAPI', 'Node.js'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'AWS', 'Vercel', 'Git'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Supabase', 'MySQL'],
  },
  {
    label: 'Integrations',
    items: ['Stripe', 'Google OAuth', 'ROS', 'Gazebo'],
  },
]

export default function HomePage() {
  const featured = projects.filter(p => FEATURED_IDS.includes(p.id))

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <span className="badge-avail">Available for roles · Graduating Oct 2025</span>
          </div>
          <h1 className="hero__name">Vaibhav Jha</h1>
          <p className="hero__role">Software Engineer &amp; AI Developer</p>
          <p className="hero__bio">
            Final-year Computer Science student at Griffith University, specialising in AI and
            Data Science. I've shipped a production SaaS, built computer vision pipelines, and
            developed multi-robot systems. Looking for graduate roles in software engineering
            or AI/ML.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn-primary btn-md">
              View Projects
            </Link>
            <a href={CV} download="CV_Vaibhav_Jha.pdf" className="btn btn-outline btn-md">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section id="work" className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>

          <div className="timeline" style={{ marginTop: '40px' }}>
            <div className="tl-item">
              <div>
                <p className="tl-period">2025 – Present</p>
                <p className="tl-company">EvadeGPT.ai</p>
              </div>
              <div>
                <h3 className="tl-title">Founder &amp; Software Engineer</h3>
                <p className="tl-desc">
                  Built and shipped EvadeGPT from scratch — a subscription SaaS that detects and
                  rewrites AI-generated content to pass detection tools. Handled the full stack:
                  Next.js frontend, FastAPI Python backend, Stripe billing, Supabase database, and
                  Google OAuth. Reached 50+ early signups and processed 10,000+ words per day
                  during initial testing.
                </p>
                <div className="tl-tags">
                  {['Next.js', 'FastAPI', 'Python', 'Stripe', 'Supabase'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div>
                <p className="tl-period">Mar – Jun 2024</p>
                <p className="tl-company">aka studio</p>
              </div>
              <div>
                <h3 className="tl-title">Software Engineer Intern</h3>
                <p className="tl-desc">
                  Developed an AI Colour Management System for an interactive media studio using
                  Python and OpenCV. The system automated real-time colour tracking and correction,
                  reducing manual adjustment time by approximately 40% and enabling reliable profile
                  prediction across multiple display resolutions.
                </p>
                <div className="tl-tags">
                  {['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div>
                <p className="tl-period">Jan 2022 – Present</p>
                <p className="tl-company">Woolworths</p>
              </div>
              <div>
                <h3 className="tl-title">Customer Service Officer</h3>
                <p className="tl-desc">
                  Handled day-to-day customer-facing operations alongside a full-time CS degree.
                  Developed strong communication, problem-solving, and time-management skills in a
                  high-throughput retail environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section id="projects" className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="proj-header">
            <div>
              <p className="section-label">Projects</p>
              <h2 className="section-title">Selected work</h2>
            </div>
            <Link to="/projects" className="btn btn-outline btn-sm" style={{ flexShrink: 0 }}>
              All projects <FiArrowUpRight size={13} />
            </Link>
          </div>

          <div className="proj-grid proj-grid--home">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={{ ...p, featured: i === 0 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">
            Focused on the intersection of AI/ML and full-stack engineering.
          </p>

          <div className="skills-grid">
            {SKILLS.map(group => (
              <div key={group.label} className="skill-group">
                <p className="skill-group__label">{group.label}</p>
                <div className="skill-group__tags">
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <p className="section-label">Contact</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Let's work together
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-2)',
              lineHeight: 1.65,
              maxWidth: '480px',
              marginBottom: '32px',
            }}
          >
            Open to graduate software engineering and AI/ML roles. Based in Australia,
            graduating October 2025. Response time is typically within one business day.
          </p>
          <a href="mailto:Vaibhav130304@gmail.com" className="btn btn-primary btn-md">
            Send an email
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/VaibhavJha-github"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-jha-6b6b46221/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin size={15} />
              LinkedIn
            </a>
            <a href="mailto:Vaibhav130304@gmail.com" className="contact-link">
              <FiMail size={15} />
              Vaibhav130304@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__text">© 2025 Vaibhav Jha. All rights reserved.</p>
          <p className="footer__text">Built with React &amp; Vite</p>
        </div>
      </footer>
    </>
  )
}
