import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, type, description, tags = [], image, github, demo, featured } = project

  const hasLinks = github || demo

  return (
    <article className={`proj-card${featured ? ' proj-card--featured' : ''}`}>
      {image ? (
        <img
          src={image}
          alt={title}
          className="proj-card__img"
          loading="lazy"
        />
      ) : (
        <div className={`proj-card__placeholder proj-card__placeholder--${featured ? 'feat' : 'sm'}`}>
          {type}
        </div>
      )}

      <div className="proj-card__body">
        <p className="proj-card__type">{type}</p>
        <h3 className="proj-card__title">{title}</h3>
        <p className="proj-card__desc">{description}</p>

        {tags.length > 0 && (
          <div className="proj-card__tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}

        {hasLinks && (
          <div className="proj-card__links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="card-link"
                aria-label={`View ${title} source on GitHub`}
              >
                <FiGithub size={14} />
                Source
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="card-link"
                aria-label={`View ${title} live demo`}
              >
                <FiExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
