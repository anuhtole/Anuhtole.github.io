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
      'Co-authored a NeurIPS 2026 workshop paper on plan-bound monitoring: across prompt-injected DNA synthesis orders, the plan-bound monitor blocked 30/30 redirected orders where a static-rule baseline let 22 through.',
      'Co-designed the default-deny tool-call gate (p99 under 50 ms) that intercepts every agent action pre-execution, a hash-chained tamper-evident audit log, and a context-isolated plan reviewer that untrusted data never reaches, so prompt injection is blocked by construction.',
      'Ran a pre-registered AgentDojo study (1,312 attacks across 22 agent LLMs): the isolated monitor matched full-context attack-success rate at 21x lower cost.',
      'Wrote the threat model and a 165-case prompt-injection corpus that red-teams the reviewer in CI, making isolation a tested invariant rather than a design intention.',
      'Per-session drift scoring with an exponential-moving-average accumulator and configurable flag and block thresholds, plus eight LLM behavioral monitors (exfiltration, PII, privilege escalation, rate abuse) on a bounded tool-use runtime.',
    ],
  },
  {
    name: 'ContextPilot',
    tagline: 'Rent-or-buy context compaction for AI agents',
    highlight: 'Sole-author paper · Novel compaction policy',
    meta: 'Oct 2026 – Present',
    art: './art/starry-night.jpg',
    artAlt: 'Van Gogh painting of a swirling night sky over a village',
    github: 'https://github.com/anuhtole/contextpilot',
    publication: {
      title: 'When Should an Agent Compact? Cache-Aware Rent-or-Buy Timing for LLM Agent Context',
      authors: 'Anatole Seychal · sole author · 17 pages',
      venue: 'Preprint · Nov 2026',
      status: 'Paper',
      pdfPath: 'contextpilot-paper.pdf',
    },
    figure: {
      src: './figures/contextpilot-flatness.png',
      alt: 'Chart of steady-state cost against the history size at which compaction triggers, under four cache-pricing regimes, with the optimum marked for each',
      caption: 'Steady-state cost of a compaction trigger relative to the optimum. The optimal point moves with cache pricing, not with the context window.',
    },
    bullets: [
      'Devised a novel compaction policy using ski-rental economics: carrying history is rent paid in cache-read tokens on every call, compacting is a one-time buy, so the agent compacts the moment cumulative rent reaches the buy price. It replaces the fixed thresholds shipped by Claude Code, Anthropic’s compaction API, OpenAI’s Responses API, and Gemini CLI.',
      'Proved the optimal compaction point is independent of the context window: in steady state the problem is the Economic Order Quantity, H* = σ + √(2gA/h). Near-window triggers on 1M-token models cost 28% more in trace-driven simulation, and the online rule stays within 1.6% of the hindsight-best threshold across 17 pricing regimes where a once-tuned threshold loses up to 16.5%.',
      'Built a cost model with every term measured from Claude Code’s usage counters that matches real bills within 0.8%; replaying 40 real sessions (2,773 calls) against Claude Code’s own default, the policy beat it by 12%, within one point of per-session hindsight.',
      'Ran 60+ pre-registered real-agent experiments: a dose-response study found no measurable recall loss per compaction (slope −0.05, 95% CI −0.39 to +0.32), and a failed −35% savings prediction is decomposed in the paper rather than dropped.',
      'Wrote it up as a sole-author 17-page paper targeting ICLR 2027 workshops, with every table regenerated from the repo, and shipped a recommend CLI that fits a user’s own Claude Code logs and prints the trigger and autoCompactWindow to set.',
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
      'Reads the three places owed money hides (the ledger, vendor email, and contracts plus public status pages) and surfaces five kinds of leak: duplicate charges, refunds promised by email that never posted, billing after a cancellation, SLA outage credits, and charges above a contract-locked price. Each case lands as Recoverable, Needs review, or Not recoverable, with no confidence scores.',
      '“The model reads, code decides”: Claude extracts vendor promises as typed structured output with no tools, and a proposal becomes a case only if the sender’s domain is in the vendor directory, the quote appears verbatim in the email, and the amount equals a number in that quote. A fully hijacked extractor in the test suite produces zero harmful actions.',
      'Three read-only connectors behind one interface: Ramp card transactions, Gmail restricted to DMARC- or DKIM-verified vendor domains, and live vendor status pages (Jira, Confluence, GitHub) priced per component against each vendor’s published SLA.',
      'A chat agent on a short leash answers “What is my company owed?” with six tools, none of which can send; the demo scan reads 15 vendor emails against 455 transactions and finds 15 claims worth $13.7k across 11 vendors, then drafts the urgent ones for one-slide human approval.',
      'FastAPI, SQLAlchemy, and Alembic backend with a React and TypeScript front end; 370 tests at 95% line coverage, strict mypy, idempotent ingest and detection, and 14 architecture decision records.',
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
      'Cost-aware reverse proxy and Express middleware defending against denial-of-wallet attacks: meters each visiting AI agent by the backend dollar cost it incurs, not its request count, and throttles, downgrades, or blocks it before the cloud bill takes the damage.',
      'Five-stage pipeline (classify → estimate → decide → meter → reconcile): bot classification with rDNS/CIDR verification, a per-route dollar cost model with latency-based inference for zero-backend-work deployment, sliding-window per-actor budgets, and EWMA reconciliation against real reported costs.',
      'Per-operator live policies (OpenAI, Anthropic, Perplexity, and any detected agent) with editable dollar limits and allow/throttle/downgrade/block actions applied without redeploy, plus a global agent-spend ceiling as a backstop against recursive agent spawning.',
      'Live WebSocket dashboard demonstrating the core claim: two agents at identical request rates where only the expensive one gets stopped, including an LLM stream cut off mid-response at the dollar line.',
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
      'Streaming chat agent (Next.js, TypeScript, Prisma) exposing 31 model-callable tools across email, calendar, Drive, and Canvas, backed by 107 API routes and 21 database models.',
      'Retrieval-augmented knowledge base ingests and syncs email, Drive, and Canvas content into SQLite with vector embeddings, surfacing relevant context into every chat.',
      'Never-send-autonomously as a structural property: the model has no send tool at all, every mutating action queues as a pending approval card, and drafts go out only on an explicit user click.',
      'Vault-grounded resume builder with layered anti-fabrication guards: numeric provenance checks, a strict metric allow-list, and per-sentence drift guards tracing every claim to a cited source.',
      'Cross-session memory extracts structured facts with trust-aware injection that protects user-edited facts from being auto-overwritten.',
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
