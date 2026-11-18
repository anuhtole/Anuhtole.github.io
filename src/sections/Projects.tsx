import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { PublicationNote } from '../components/PublicationNote'
import type { Publication } from '../components/PublicationNote'

type Project = {
  name: string
  tagline: string
  meta: string
  art: string
  artAlt: string
  bullets: string[]
  github?: string
  highlight?: string
  publication?: Publication
  figure?: Figure
}

type Figure = {
  src: string
  alt: string
  caption: string
}

const PROJECTS: Project[] = [
  {
    name: 'Spine',
    tagline: 'Agent security and compliance layer for AI agents',
    highlight: '10+ companies in beta · YC top 3%',
    meta: 'Co-founder · Apr 2026 – Present',
    art: './art/wheat-field.jpg',
    artAlt: 'Van Gogh painting of a wheat field with cypresses',
    github: 'https://github.com/Anuhtole/Spine',
    publication: {
      title: 'Order Integrity for Agentic DNA Synthesis Under Prompt Injection',
      authors: 'Anatole Seychal and Vishnu Rajeev',
      venue: 'NeurIPS 2026 · AgenticLS Workshop',
      status: 'Accepted',
      openReviewUrl: 'https://openreview.net/forum?id=jhSn7fQiuu',
      pdfPath: 'spine-paper.pdf',
    },
    bullets: [
      'Default-deny tool-call gate (p99 under 50 ms), hash-chained audit log, and a plan reviewer that untrusted data never reaches, so prompt injection is blocked by construction.',
      'Plan-bound monitor blocked 30/30 prompt-injected DNA synthesis orders where a static-rule baseline let 22 through (NeurIPS 2026 workshop paper).',
      'Pre-registered AgentDojo study across 1,312 attacks and 22 agent LLMs: the isolated monitor matched full-context attack-success rate at 21x lower cost; a 165-case injection corpus red-teams the reviewer in CI.',
    ],
  },
  {
    name: 'ContextPilot',
    tagline: 'Rent-or-buy context compaction for AI agents',
    highlight: 'Novel compaction policy · Paper',
    meta: 'Oct 2026 – Present',
    art: './art/starry-night.jpg',
    artAlt: 'Van Gogh painting of a swirling night sky over a village',
    github: 'https://github.com/anuhtole/contextpilot',
    publication: {
      title: 'When Should an Agent Compact? Cache-Aware Rent-or-Buy Timing for LLM Agent Context',
      authors: 'Anatole Seychal',
      venue: 'Nov 2026',
      status: 'Paper',
      pdfPath: 'contextpilot-paper.pdf',
    },
    figure: {
      src: './figures/contextpilot-flatness.png',
      alt: 'Chart of steady-state cost against the history size at which compaction triggers, under four cache-pricing regimes, with the optimum marked for each',
      caption: 'Steady-state cost of a compaction trigger relative to the optimum. The optimal point moves with cache pricing, not with the context window.',
    },
    bullets: [
      'Devised a novel compaction policy using ski-rental economics, replacing the fixed thresholds shipped by Claude Code, Anthropic’s compaction API, OpenAI, and Gemini CLI.',
      'Proved the optimal compaction point is independent of the context window; near-window triggers on 1M-token models cost 28% more.',
      'Cost model matches real bills within 0.8%; beat Claude Code’s default by 12% replaying 40 real sessions; a pre-registered test found no measurable recall loss per compaction.',
    ],
  },
  {
    name: 'Recoup',
    tagline: 'Finds the money your vendors owe you, with the receipts to get it back',
    meta: 'Team of three · Oct 2026 – Nov 2026',
    art: './art/impression-sunrise.jpg',
    artAlt: 'Monet painting of a harbor at sunrise',
    github: 'https://github.com/anuhtole/recoup',
    figure: {
      src: './figures/recoup-system-flow.svg',
      alt: 'System diagram: read-only sources feed a fixed detection run, a person approves every send, and only a ledger credit closes a case',
      caption: 'Read-only sources feed a fixed detection run. A person approves every send, and a case closes only when the credit posts on the ledger.',
    },
    bullets: [
      'Finds five kinds of money vendors owe a company (duplicate charges, unposted refunds, post-cancellation billing, SLA credits, contract overcharges) from the ledger, vendor email, contracts, and public status pages. Demo scan: 15 claims worth $13.7k across 11 vendors.',
      '“The model reads, code decides”: Claude extracts promises as typed output with no tools, and a case exists only if the sender domain, verbatim quote, and amount all check out. A fully hijacked extractor produces zero harmful actions.',
      'Read-only Ramp, Gmail, and status-page connectors; a person approves every send; 370 tests at 95% coverage with strict mypy.',
    ],
  },
  {
    name: 'CostShield',
    tagline: 'Metering AI-agent traffic by cost, not count',
    meta: 'Jun 2026 – Jul 2026',
    art: './art/cafe-terrace.jpg',
    artAlt: 'Van Gogh painting of a café terrace at night',
    github: 'https://github.com/Anuhtole/CostShield',
    bullets: [
      'Cost-aware reverse proxy against denial-of-wallet attacks: meters each AI agent by the backend dollar cost it incurs, not request count, and throttles, downgrades, or blocks it before the cloud bill takes the damage.',
      'Five-stage pipeline (classify, estimate, decide, meter, reconcile) with rDNS/CIDR bot verification, per-actor dollar budgets, and EWMA reconciliation against real costs.',
      'Per-operator policies for OpenAI, Anthropic, and Perplexity agents, editable without redeploy, plus a live dashboard where only the expensive of two equal-rate agents gets stopped.',
    ],
  },
  {
    name: 'Hatch',
    tagline: 'Vault-grounded personal AI platform',
    meta: 'Personal project · Jan 2026 – Mar 2026',
    art: './art/water-lilies.jpg',
    artAlt: 'Monet painting of water lilies',
    github: 'https://github.com/anuhtole/hatch',
    bullets: [
      'Streaming Claude agent with 30 tools across email, calendar, Drive, and Canvas, over 97 API routes and 21 database models.',
      'The model has no send tool: every mutating action queues as an approval card and goes out only on an explicit click.',
      'Vault-grounded resume builder with numeric provenance checks and a strict metric allow-list, so no number can be invented.',
    ],
  },
]

function ProjectFigure({ figure }: { figure: Figure }) {
  return (
    <figure className="mt-7 overflow-hidden rounded-xs border border-line/60 bg-surface">
      <img src={figure.src} alt={figure.alt} loading="lazy" className="block w-full" />
      <figcaption className="border-t border-line/40 px-4 py-3 font-mono text-[11px] leading-relaxed tracking-wide text-ink-dim">
        {figure.caption}
      </figcaption>
    </figure>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="overflow-hidden rounded-xs border border-line/60 bg-dusk/70 transition-colors hover:border-gold/40">
      <div className="grid lg:grid-cols-[20rem_1fr]">
        <img
          src={project.art}
          alt={project.artAlt}
          className="h-52 w-full object-cover lg:h-full"
        />
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">{project.name}</h3>
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-gold">
              {project.meta}
            </p>
          </div>
          <p className="mt-2 text-lg leading-relaxed text-ink-dim">{project.tagline}</p>
          {project.highlight && (
            <p className="mt-2 font-mono text-xs tracking-[0.18em] uppercase text-gold">
              {project.highlight}
            </p>
          )}
          <ul className="mt-5 space-y-3">
            {project.bullets.map((bullet) => (
              <li
                key={bullet.slice(0, 40)}
                className="border-l-2 border-gold/30 pl-4 text-[15px] leading-relaxed text-ink-dim"
              >
                {bullet}
              </li>
            ))}
          </ul>
          {project.figure && <ProjectFigure figure={project.figure} />}
          {project.publication && <PublicationNote publication={project.publication} />}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xs border border-gold/60 px-3 py-1.5 font-mono text-xs tracking-[0.18em] uppercase text-gold transition-colors hover:bg-gold/10"
            >
              GitHub &#8599;
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 outline-none"
    >
      <SectionHeading kicker="02 · Projects" title="Projects" />
      <ul className="mt-12 flex flex-col gap-10">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name} delayMs={index * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
      <p className="mt-5 font-mono text-[11px] tracking-wide text-ink-dim/70">
        Card artwork: public-domain paintings by Vincent van Gogh and Claude Monet.
      </p>
    </section>
  )
}
