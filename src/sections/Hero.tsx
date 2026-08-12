import { FlipCard } from '../components/FlipCard'
import { EmailButton } from '../components/EmailButton'

const AT_A_GLANCE = [
  {
    label: 'Education',
    body: 'UC Berkeley: B.A. Applied Mathematics (AI/ML track), B.A. Data Science, B.A. Political Economy. Class of 2027.',
  },
  {
    label: 'Coursework',
    body: 'Machine Learning · Real & Complex Analysis · Numerical Analysis · Data Mining & Analytics · Data Structures · Abstract Linear Algebra',
  },
  {
    label: 'Toolkit',
    body: 'Evals & benchmarks · agent orchestration · harness engineering · synthetic-data pipelines · red-teaming & adversarial evaluation · RAG · MCP · Anthropic & OpenAI APIs · Claude Code · Python · TypeScript',
  },
  {
    label: 'Languages',
    body: 'English · French (fluent) · Spanish (advanced)',
  },
]

function CardFront() {
  return (
    <div className="h-full w-full border border-line/80 bg-dusk p-2 shadow-[0_24px_60px_rgba(43,58,82,0.25)]">
      <img
        src="./art/woman-with-parasol.jpg"
        alt="Claude Monet's Woman with a Parasol, a woman and child on a breezy hillside under a bright sky"
        className="h-full w-full rounded-xs object-cover"
      />
    </div>
  )
}

function CardBack() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden border border-line/80 bg-dusk p-5 text-center shadow-[0_24px_60px_rgba(43,58,82,0.25)] sm:gap-3.5 sm:p-6">
      <h2 className="font-display text-xl text-ink italic sm:text-2xl">At a glance</h2>
      <dl className="flex flex-col gap-2.5 sm:gap-3.5">
        {AT_A_GLANCE.map((item) => (
          <div key={item.label}>
            <dt className="mb-0.5 font-mono text-[11px] tracking-[0.18em] uppercase text-gold">
              {item.label}
            </dt>
            <dd className="text-[13px] leading-snug text-ink-dim sm:text-sm sm:leading-relaxed">
              {item.body}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      tabIndex={-1}
      className="mx-auto flex max-w-6xl flex-col gap-14 px-5 pt-32 pb-24 outline-none lg:flex-row lg:items-center lg:gap-16 lg:pt-44 lg:pb-36"
    >
      <div className="max-w-xl lg:flex-1">
        <p
          className="animate-fade-up font-mono text-xs tracking-[0.22em] uppercase text-gold"
          style={{ animationDelay: '0.05s' }}
        >
          Product &amp; AI/ML · Berkeley, CA
        </p>
        <h1
          className="animate-fade-up mt-4 font-display text-5xl leading-[1.04] font-light text-ink sm:text-6xl md:text-7xl"
          style={{ animationDelay: '0.15s' }}
        >
          Anatole Palmer <em className="text-gold-bright italic">Seychal</em>
        </h1>
        <p
          className="animate-fade-up mt-6 text-lg leading-relaxed text-ink"
          style={{ animationDelay: '0.3s' }}
        >
          Applied Mathematics (AI/ML), Data Science &amp; Political Economy at UC
          Berkeley, Class of 2027.
        </p>
        <p
          className="animate-fade-up mt-4 leading-relaxed text-ink-dim"
          style={{ animationDelay: '0.4s' }}
        >
          Product manager working at the frontier of agentic AI. At Microsoft
          (Copilot Studio, Power Apps) I have built and shipped 0&rarr;1 agent
          systems end to end: closed-loop optimization engines, multi-layer
          evaluation frameworks, synthetic-data pipelines, and adversarial
          red-teaming that make autonomous agents measurable and safe to ship.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.5s' }}
        >
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
        </div>
      </div>

      <div
        className="animate-fade-up w-full max-w-md lg:max-w-lg"
        style={{ animationDelay: '0.45s' }}
      >
        <FlipCard front={<CardFront />} back={<CardBack />} className="aspect-4/5 w-full" />
        <p className="mt-3 font-mono text-[11px] tracking-wide text-ink-dim/80">
          Claude Monet, Woman with a Parasol (1875) &middot; hover or flip
        </p>
      </div>
    </section>
  )
}
