import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { EmailButton } from '../components/EmailButton'

export function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-24 pb-10 outline-none"
    >
      <SectionHeading kicker="04 · Contact" title="Get in touch" />
      <Reveal delayMs={120}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
          Recruiting, collaborations, or just talking agents and evals: my inbox
          is open.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <EmailButton className="rounded-xs bg-gold px-5 py-2.5 font-medium text-night transition-colors hover:bg-gold-bright">
            aseychal@berkeley.edu
          </EmailButton>
          <a
            href="https://www.linkedin.com/in/anatole-seychal/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-line px-5 py-2.5 text-ink-dim transition-colors hover:border-gold/60 hover:text-ink"
          >
            LinkedIn &#8599;
          </a>
          <a
            href="https://github.com/Anuhtole"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-line px-5 py-2.5 text-ink-dim transition-colors hover:border-gold/60 hover:text-ink"
          >
            GitHub &#8599;
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-line px-5 py-2.5 text-ink-dim transition-colors hover:border-gold/60 hover:text-ink"
          >
            Resume
          </a>
        </div>
      </Reveal>
      <footer className="mt-24 flex flex-wrap items-baseline justify-between gap-3 border-t border-line/40 pt-6">
        <p className="font-mono text-[11px] tracking-wide text-ink-dim">
          &copy; 2026 Anatole Palmer Seychal
        </p>
        <p className="font-mono text-[11px] tracking-wide text-ink-dim/70">
          Artwork: public-domain paintings by Vincent van Gogh and Claude Monet
        </p>
      </footer>
    </section>
  )
}
