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
      authors: 'Vishnu Rajeev and Anatole Seychal',
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
  {
    name: 'AutoMate',
    tagline: 'AI vehicle-buying platform built at Berkeley',
    meta: 'Co-founder · SWE & PM · Mar 2024 – Jun 2024',
    art: './art/impression-sunrise.jpg',
    artAlt: 'Monet painting of a harbor at sunrise',
    bullets: [
      'Prompt-tuned LLM extracts buyer preferences through natural chat, powering a heap-based recommendation engine that ranks listings by match and deal quality.',
      'End-to-end data pipelines ingest, clean, and standardize Craigslist vehicle-listing datasets to feed the live ranking engine.',
      'Random Forest model predicts fair market value per vehicle, powering a deal-score system that flags overpriced listings and surfaces good deals.',
    ],
  },
]

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
