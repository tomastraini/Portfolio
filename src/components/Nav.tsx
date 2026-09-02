import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import type { SectionId } from '../types';

const ids = navItems.map((item) => item.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  // The bar sits over the hero photograph, so it stays transparent until the
  // page has moved and only then takes on a background.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close the drawer once the viewport is wide enough to show the full bar,
  // otherwise it stays mounted and invisible with focusable children in it.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const go = (id: SectionId) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
  };

  return (
    <header className={`nav${scrolled || open ? ' nav--solid' : ''}`}>
      <nav className="nav__inner page" aria-label="Main">
        <a
          className="nav__brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            go('top');
          }}
        >
          Tomas Traini <span>· Software Engineer</span>
        </a>

        <ul className="nav__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="nav__link"
                aria-current={active === item.id}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="nav__drawer" id="nav-drawer">
          <ul className="page">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="nav__link"
                  aria-current={active === item.id}
                  onClick={() => go(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
