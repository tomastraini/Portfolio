import { skillGroups } from '../data/content';

export function Skills() {
  return (
    <div className="skills">
      {skillGroups.map((group) => (
        <div className="skills__group" key={group.label}>
          <h3>{group.label}</h3>
          <ul className="chips" aria-label={group.label}>
            {group.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
