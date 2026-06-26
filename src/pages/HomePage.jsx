import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const RESUME_URL = 'https://drive.google.com/file/d/13OaCgMhfXAHl1_FqjMNcnl_pNzI-KGGc/view?usp=sharing'

const SKILLS = [
  {
    label: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'React', 'Next.js', 'Node.js', 'SQL'],
  },
  {
    label: 'AI & Machine Learning',
    items: ['HuggingFace Transformers', 'TensorFlow', 'scikit-learn', 'OpenCV', 'NLTK', 'spaCy', 'NLP', 'Pandas'],
  },
  {
    label: 'Data & Backend',
    items: ['Azure Data Lake (ADLS)', 'PySpark', 'Apache Kafka', 'DB2', 'Informatica', 'FastAPI'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Microsoft Azure', 'Docker', 'CI/CD', 'RunPod', 'Git'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'SQLite'],
  },
  {
    label: 'Integrations',
    items: ['Stripe', 'Google OAuth', 'ROS', 'Gazebo'],
  },
]

export default function HomePage() {
  const homeProjects = projects

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <span className="badge-avail">Available for roles · Computer Science graduate</span>
          </div>
          <h1 className="hero__name">Vaibhav Jha</h1>
          <p className="hero__role">Software Engineer &amp; AI Developer</p>
          <p className="hero__bio">
            Computer Science graduate (AI &amp; Data Science) from Griffith University. I founded and
            shipped EvadeGPT — an AI SaaS now past 26,000+ signups — trained a 22B-parameter
            language model, built data-pipeline tooling at Westpac, and develop multi-robot and
            computer-vision systems. Looking for graduate roles in software engineering or AI/ML.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn-primary btn-md">
              View Projects
            </Link>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-outline btn-md">
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
                <p className="tl-period">Aug 2025 – Present</p>
                <p className="tl-company">EvadeGPT.ai</p>
              </div>
              <div>
                <h3 className="tl-title">Founder &amp; Software Engineer</h3>
                <p className="tl-desc">
                  Independently built and launched a full-stack AI SaaS from zero to 26,000+ user
                  signups. Custom-trained a proprietary 22B-parameter Llama humanisation model on a
                  1.3M-sample dataset using HuggingFace Transformers on RunPod H100 GPUs, achieving
                  output that evades major commercial and university AI detectors. Engineered the
                  product on Next.js, Supabase, and Stripe with multi-currency billing, gamification
                  mechanics, and referral leaderboards — now generating consistent subscription revenue.
                </p>
                <div className="tl-tags">
                  {['Next.js', 'HuggingFace', 'Python', 'Stripe', 'Supabase', 'RunPod'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div>
                <p className="tl-period">Nov 2025 – May 2026</p>
                <p className="tl-company">Westpac Banking Corp.</p>
              </div>
              <div>
                <h3 className="tl-title">Software Engineer (Contract)</h3>
                <p className="tl-desc">
                  Built Python automated pipeline-generation tooling for Azure Data Lake Storage
                  ingestion, architecting scalable config generation from IFF/IFS schema files to
                  target a 4,000+ table DB2-to-ADLS migration and eliminate manual workflows.
                  Developed OAuth-authenticated backend services and Copilot-integrated unit-test
                  generation tooling, and maintained SQL and ADLS workflows across AWS/Azure CI/CD
                  pipelines, monitoring, and compliance reviews.
                </p>
                <div className="tl-tags">
                  {['Python', 'Azure ADLS', 'PySpark', 'DB2', 'SQL', 'CI/CD'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div>
                <p className="tl-period">Jan – Jun 2024</p>
                <p className="tl-company">AKA Studios</p>
              </div>
              <div>
                <h3 className="tl-title">Software Engineer Intern</h3>
                <p className="tl-desc">
                  Built a multi-page Python desktop app (NCM App) in CustomTkinter with a modular,
                  frame-based architecture and dynamic page routing. Developed a real-time colour
                  capture and analysis pipeline using OpenCV and Pillow for per-pixel detection
                  across RGB/HEX/CMYK/HSL/HSV, plus K-Means palette extraction via scikit-learn and
                  ColorThief. Delivered the full application independently within the 6-month internship.
                </p>
                <div className="tl-tags">
                  {['Python', 'OpenCV', 'scikit-learn', 'CustomTkinter'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div>
                <p className="tl-period">May 2022 – Nov 2023</p>
                <p className="tl-company">HearLocket Jewelry</p>
              </div>
              <div>
                <h3 className="tl-title">Software Developer &amp; Marketing Specialist</h3>
                <p className="tl-desc">
                  Designed and built a full-stack e-commerce web app with Next.js, React, Node.js,
                  and Supabase, with Stripe payments and a custom CMS for product and inventory
                  management. Built conversion-optimised landing pages and ran end-to-end Facebook
                  Ads campaigns generating over $470,000 AUD in revenue across the 2022 Black Friday
                  period.
                </p>
                <div className="tl-tags">
                  {['Next.js', 'React', 'Node.js', 'Supabase', 'Stripe'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
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
            {homeProjects.map((p, i) => (
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
            Open to graduate software engineering and AI/ML roles. Based on the Gold Coast,
            Australia. Response time is typically within one business day.
          </p>
          <a href="mailto:Vaibhav130304@gmail.com" className="btn btn-primary btn-md">
            Send an email
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/Vaibhav-Jha04"
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
          <p className="footer__text">© 2026 Vaibhav Jha. All rights reserved.</p>
          <p className="footer__text">Built with React &amp; Vite</p>
        </div>
      </footer>
    </>
  )
}
