import { roles } from '../data/content';

export function Experience() {
  return (
    <div className="timeline">
      {roles.map((role) => (
        <article className="role" key={`${role.company}-${role.start}`}>
          <div className="role__when">
            <strong>{role.start}</strong>
            {role.end}
            <div>{role.location}</div>
          </div>

          <div>
            <h3 className="role__title">{role.title}</h3>
            <p className="role__company">{role.company}</p>
            {role.note ? <p className="role__note">{role.note}</p> : null}

            <ul className="role__bullets">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 40)}>{bullet}</li>
              ))}
            </ul>

            <ul className="chips" aria-label={`${role.company} technologies`}>
              {role.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
