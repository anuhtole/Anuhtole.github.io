import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

type Project = {
  name: string
  tagline: string
  meta: string
  art: string
  artAlt: string
  bullets: string[]
  github?: string
}

const PROJECTS: Project[] = [
  {
    name: 'Spine',
    tagline: 'Governance and control plane for AI agents',
    meta: 'Co-founder · Apr 2026 – Aug 2026',
    art: './art/wheat-field.jpg',
    artAlt: 'Van Gogh painting of a wheat field with cypresses',
    github: 'https://github.com/Anuhtole/Spine',
    bullets: [
      'Synchronous policy-enforcement gateway intercepts every agent tool call pre-execution, evaluating a default-deny rule engine at sub-50ms p99 with Redis-cached policies and Prometheus-instrumented latency histograms.',
      'Context-isolated plan reviewer validates each action via a separate LLM call whose input is structurally restricted to the declared plan and action metadata, never the worker agent’s prompts or tool outputs: prompt injection is blocked by construction, and CI isolation tests enforce it.',
      'Per-session drift scoring with an exponential-moving-average accumulator and configurable flag and block thresholds; crossing the block threshold hard-stops off-plan actions synchronously.',
      'Hash-chained, tamper-evident audit log where every event commits to its predecessor’s hash, with on-demand chain verification that detects any insertion, modification, or deletion.',
      'Eight specialized LLM behavioral monitors (exfiltration, PII, privilege escalation, rate abuse, and more) on a bounded tool-use runtime; 117-test backend suite red-teamed in CI with adversarial injection payloads. Two paying pilots.',
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
    bullets: [
      'Streaming chat agent (Next.js, TypeScript, Prisma) exposing 30 model-callable tools across email, calendar, Drive, and Canvas, backed by 97 API routes and 21 database models.',
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
