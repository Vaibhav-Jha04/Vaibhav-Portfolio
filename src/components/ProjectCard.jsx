import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, type, description, tags = [], image, github, demo } = project

  return (
    <article className="proj-card">
      {image && (
        <img src={image} alt={title} className="proj-card__img" loading="lazy" />
      )}

      <div className="proj-card__body">
        <div className="proj-card__top">
          <h3 className="proj-card__title">{title.toLowerCase()}</h3>
          <p className="proj-card__type">{type}</p>
        </div>
        <p className="proj-card__desc">{description}</p>

        {tags.length > 0 && (
          <p className="proj-card__stack">{tags.join(' · ')}</p>
        )}

        {(github || demo) && (
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
                aria-label={`View ${title} live`}
              >
                <FiExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
