import type { MouseEvent } from 'react'
import { scrollToSection } from '../lib/scroll'

const SECTION_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, targetId: string) {
  // Never let the fragment reach location.hash — HashRouter owns the hash.
  event.preventDefault()
  scrollToSection(targetId)
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-night/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
      >
        <a
          href="#top"
          onClick={(event) => handleSectionClick(event, 'top')}
          className="font-display text-lg tracking-wide text-ink"
        >
          Anatole Palmer <span className="italic text-gold">Seychal</span>
        </a>
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 sm:flex">
            {SECTION_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(event) => handleSectionClick(event, link.id)}
                  className="font-mono text-xs tracking-[0.18em] uppercase text-ink-dim transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-gold/60 px-3 py-1.5 font-mono text-xs tracking-[0.18em] uppercase text-gold transition-colors hover:bg-gold/10"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
