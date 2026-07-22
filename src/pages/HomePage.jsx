import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import EvadeImg from '../assets/evadegpt.jpg'
import ProfileImg from '../assets/profile.jpg'
import LyraImg from '../assets/lyra.png'
import WestpacImg from '../assets/westpac.png'

const RESUME_URL = 'https://drive.google.com/file/d/13OaCgMhfXAHl1_FqjMNcnl_pNzI-KGGc/view?usp=sharing'

const JOBS = [
  {
    company: 'Lyra',
    url: 'https://lyratechnologies.com.au/',
    title: 'Forward Deployed Engineer',
    period: 'Jul 2026 – Present',
    desc: 'Software engineering for the top 1% of startups in Silicon Valley.',
    stack: null,
    img: LyraImg,
  },
  {
    company: 'EvadeGPT.ai',
    url: 'https://www.evadegpt.ai/',
    title: 'Founder & Software Engineer',
    period: 'Aug 2025 – Jul 2026',
    desc: 'Built and launched a full-stack AI SaaS from zero to 26,000+ signups. Custom-trained a 22B-parameter Llama humanisation model on a 1.3M-sample dataset using H100 GPUs, evading major commercial and university AI detectors. Shipped the product on Next.js, Supabase, and Stripe with multi-currency billing, gamification, and referral leaderboards — still generating subscription revenue.',
    stack: 'Next.js · HuggingFace · Python · Stripe · Supabase · RunPod',
    img: EvadeImg,
  },
  {
    company: 'Westpac Banking Corp.',
    url: null,
    title: 'Software Engineer (Contract)',
    period: 'Nov 2025 – May 2026',
    desc: 'Built Python pipeline-generation tooling for Azure Data Lake ingestion, generating configs from IFF/IFS schema files to target a 4,000+ table DB2-to-ADLS migration. Developed OAuth-authenticated backend services and Copilot-integrated unit-test tooling across AWS/Azure CI/CD pipelines.',
    stack: 'Python · Azure ADLS · PySpark · DB2 · SQL · CI/CD',
    img: WestpacImg,
  },
  {
    company: 'AKA Studios',
    url: null,
    title: 'Software Engineer Intern',
    period: 'Jan – Jun 2024',
    desc: 'Delivered a multi-page Python desktop app end to end: real-time colour capture and analysis with OpenCV across RGB/HEX/CMYK/HSL/HSV, plus K-Means palette extraction via scikit-learn.',
    stack: 'Python · OpenCV · scikit-learn · CustomTkinter',
  },
  {
    company: 'HearLocket Jewelry',
    url: null,
    title: 'Software Developer & Marketing Specialist',
    period: 'May 2022 – Nov 2023',
    desc: 'Built a full-stack e-commerce app with Next.js, Supabase, and Stripe, including a custom CMS. Ran end-to-end Facebook Ads campaigns generating $470,000+ AUD over the 2022 Black Friday period.',
    stack: 'Next.js · React · Node.js · Supabase · Stripe',
  },
]

const PROJECT_ROWS = [
  {
    year: '2026',
    name: 'ghostclaw',
    desc: 'AI agent platform with persistent memory, web + iOS clients.',
    type: 'AI',
    url: 'https://github.com/Vaibhav-Jha04/GhostClaw-OpensourceWeekendProject',
  },
  {
    year: '2025',
    name: 'voiceforge',
    desc: 'Multi-character TTS and voice cloning built on Fish-Speech.',
    type: 'Voice',
    url: 'https://github.com/Vaibhav-Jha04/VoiceCloneAI',
  },
  {
    year: '2025',
    name: 'sum-to-one bot',
    desc: 'Guaranteed-arbitrage engine for Polymarket & Kalshi with Kelly sizing.',
    type: 'Quant',
    url: 'https://github.com/Vaibhav-Jha04/SumOfOneBot',
  },
  {
    year: '2025',
    name: 'weather bot',
    desc: 'Prices weather prediction markets against ensemble forecasts.',
    type: 'Quant',
    url: 'https://github.com/Vaibhav-Jha04/WeatherBot',
  },
  {
    year: '2025',
    name: 'copy-trading bot',
    desc: 'Multi-wallet Polymarket copy-trading with risk gates and backtesting.',
    type: 'Quant',
    url: 'https://github.com/Vaibhav-Jha04/CryptoTraderBot',
  },
  {
    year: '2024',
    name: 'firefighting robots',
    desc: 'Formally verified multi-robot simulation in ROS + Gazebo.',
    type: 'Robotics',
    url: 'https://github.com/Vaibhav-Jha04/ROS-PAT-Autonomous-Firefighting-Simulation',
  },
]

const TOOLBOX = [
  { label: 'languages',  items: 'Python, TypeScript, JavaScript, C++, SQL' },
  { label: 'ai / ml',    items: 'HuggingFace Transformers, TensorFlow, scikit-learn, OpenCV, NLP' },
  { label: 'web',        items: 'React, Next.js, Node.js, FastAPI, Supabase, Stripe' },
  { label: 'data',       items: 'Azure Data Lake, PySpark, Kafka, DB2, PostgreSQL' },
  { label: 'cloud',      items: 'AWS, Azure, Docker, CI/CD, RunPod' },
  { label: 'robotics',   items: 'ROS, Gazebo, PAT model checking' },
]

export default function HomePage() {
  const [hoveredJob, setHoveredJob] = useState(null)
  const previewImages = [
    { key: 'me', src: ProfileImg, alt: 'Portrait of Vaibhav Jha' },
    ...JOBS.filter(j => j.img).map(j => ({ key: j.company, src: j.img, alt: j.company })),
  ]
  const activeKey = JOBS.find(j => j.company === hoveredJob)?.img ? hoveredJob : 'me'

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="wrap">
          <div className="hero__avatar">
            <img src={ProfileImg} alt="Vaibhav Jha" />
          </div>
          <p className="hero__status">FDE Engineer @ Lyra</p>
          <h1 className="hero__name">Vaibhav Jha</h1>
          <p className="hero__role">Software Engineer &amp; AI Developer</p>
          <p className="hero__thesis">
            I build AI products end to end, <em>from the model weights to the billing page.</em>
          </p>
          <p className="hero__bio">
            Currently a forward-deployed engineer at{' '}
            <a href="https://lyratechnologies.com.au/" target="_blank" rel="noreferrer">Lyra</a>,
            building with Silicon Valley startups. Before that I founded EvadeGPT — an AI SaaS
            past 26,000 signups, running on a 22B-parameter model I trained myself — and built
            data-pipeline tooling at Westpac.
          </p>
          <p className="hero__bio">
            View my <a href={RESUME_URL} target="_blank" rel="noreferrer">resume</a> to learn more,
            or jump to my <a href="#projects">selected work</a>.
          </p>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section id="work" className="section">
        <div className="exp-wrap">
          <div>
            <h2 className="sec-head">Experience</h2>
            <hr className="sec-rule" />
            {JOBS.map(job => (
              <article
                key={job.company}
                className="job"
                onMouseEnter={() => setHoveredJob(job.company)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                <div className="job__top">
                  <h3 className="job__company">
                    {job.url
                      ? <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                      : job.company}
                  </h3>
                  <p className="job__period">{job.period}</p>
                </div>
                <p className="job__title">{job.title}</p>
                <p className="job__desc">{job.desc}</p>
                {job.stack && <p className="job__stack">{job.stack}</p>}
              </article>
            ))}
          </div>

          <div className="exp-preview" aria-hidden="true">
            {previewImages.map(img => (
              <img
                key={img.key}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={activeKey === img.key ? 'is-active' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section id="projects" className="section">
        <div className="wrap">
          <h2 className="sec-head">projects</h2>
          <hr className="sec-rule" />

          <a
            href="https://www.evadegpt.ai/"
            target="_blank"
            rel="noreferrer"
            className="feat-card"
          >
            <img src={EvadeImg} alt="EvadeGPT landing page" className="feat-card__img" loading="lazy" />
            <div className="feat-card__body">
              <div>
                <p className="feat-card__name">evadegpt</p>
                <p className="feat-card__sub">
                  AI humanizer with a custom-trained 22B model, 26,000+ signups.
                </p>
              </div>
              <p className="feat-card__type">SaaS</p>
            </div>
          </a>

          <div style={{ height: '16px' }} />

          <div className="proj-list">
            {PROJECT_ROWS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="proj-row">
                <span className="proj-row__year">{p.year}</span>
                <span>
                  <span className="proj-row__name">{p.name}</span>
                  <span className="proj-row__desc" style={{ display: 'block' }}>{p.desc}</span>
                </span>
                <span className="proj-row__type">{p.type}</span>
              </a>
            ))}
          </div>

          <Link to="/projects" className="all-link">
            all projects <FiArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────── */}
      <section id="education" className="section">
        <div className="wrap">
          <h2 className="sec-head">education</h2>
          <hr className="sec-rule" />
          <div className="job__top">
            <h3 className="edu__school">Griffith University</h3>
            <p className="job__period">2022 – 2025</p>
          </div>
          <p className="edu__degree">Bachelor of Computer Science — AI &amp; Data Science</p>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="wrap">
          <h2 className="sec-head">about</h2>
          <hr className="sec-rule" />
          <p className="about-p">
            I'm based on the Gold Coast, Australia, working with teams from Sydney to
            San Francisco. I like owning products end to end — training the model, wiring the
            backend, shipping the payments, and watching the signup graph move.
          </p>
          <p className="about-p">
            Outside of work I'm usually at the gym, or deep in a prediction-market rabbit hole
            that becomes the next trading bot.
          </p>

          <div className="toolbox">
            {TOOLBOX.map(row => (
              <div key={row.label} className="tool-row">
                <p className="tool-row__label">{row.label}</p>
                <p className="tool-row__items">{row.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="wrap">
          <h2 className="sec-head">connect</h2>
          <hr className="sec-rule" />
          <div className="connect-grid">
            <a
              href="https://github.com/Vaibhav-Jha04"
              target="_blank"
              rel="noreferrer"
              className="connect-btn"
            >
              GitHub <FiArrowUpRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-jha-6b6b46221/"
              target="_blank"
              rel="noreferrer"
              className="connect-btn"
            >
              LinkedIn <FiArrowUpRight size={15} />
            </a>
            <a href="mailto:Vaibhav130304@gmail.com" className="connect-btn">
              Email <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
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
