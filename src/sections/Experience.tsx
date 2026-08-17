import type { ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { MicrosoftMark, PitchBookMark, DialpadMark } from './CompanyMarks'

type ExperienceEntry = {
  company: string
  role: string
  location: string
  period: string
  mark: ReactNode
  bullets: string[]
}

const ENTRIES: ExperienceEntry[] = [
  {
    company: 'Microsoft Copilot Studio',
    role: 'Product Manager Intern · 0→1 Contact Center AI',
    location: 'Redmond, WA',
    period: 'Jun 2026 – Present',
    mark: <MicrosoftMark />,
    bullets: [
      'Built an end-to-end closed-loop optimization engine for contact-center voice agents, converting live conversations into evidence-backed knowledge, tool, routing, and configuration improvements gated by dual-model adversarial evaluation; now in private preview testing with Fortune 500 customers.',
      'Designed the six-layer data and processing architecture with an eight-stage idempotent analysis pipeline, and authored a 17-section build-ready system specification for the engine, endorsed by the engineering team, data science team, and VP of Product.',
      'Designed an eight-layer evaluation framework spanning groundedness, cluster quality, pre-deployment quality scoring, case regression, expert labeling, and post-deployment outcome measurement, with every change gated behind maker approval and staged rollout.',
      'Built a deterministic, seeded synthetic-data pipeline generating 300+ labeled human-agent interactions across 5 failure modes plus 15 healthy regression controls, driving failure taxonomy, prompt optimization, regression testing, and cross-model evaluation.',
      'Built ContextPilot, a recoverability-aware context optimizer for long-running AI agents using ski-rental token economics: backtests across 10,000 simulated sessions project ~50% token-cost reduction, validated with 0 unsafe releases on 500+ live shadow sessions.',
    ],
  },
  {
    company: 'Microsoft Power Apps',
    role: 'Product Manager Intern',
    location: 'Redmond, WA',
    period: 'Jun 2025 – Aug 2025',
    mark: <MicrosoftMark />,
    bullets: [
      'Conceived, built, and owned the AI Reviewer Agent, analyzing Power App plan changes to detect root-cause logic inconsistencies and the cascading agent failures their interdependencies cause, increasing maker output efficiency by 35%.',
      'Built and shipped an orchestrator layer: a lower-capability, higher-context informant that ingests the maker’s goal and produces the structure of the agentic workflow, informed by the Reviewer Agent; architected the roadmap for click-to-fix reconciliation, scenario simulation, and multi-user editing.',
      'Built both systems end-to-end, spearheading the engineering process, determining the logical triggers, and fine-tuning the LLM logic pipeline.',
      'Led rollout across 100+ stakeholders (+40% maker edit satisfaction, +22% plan edit rate, −15% plan abandonment) and presented the expansion vision to C-suite and product SVPs, winning executive buy-in.',
    ],
  },
  {
    company: 'PitchBook',
    role: 'Project Manager · Product Strategy Engagement',
    location: 'San Francisco, CA · Hybrid',
    period: 'Jan 2025 – May 2025',
    mark: <PitchBookMark />,
    bullets: [
      'Directed a six-consultant team through a 10-week product-strategy engagement, owning scoping, sprint planning, and every client interaction with the PitchBook team.',
      'Led 20+ stakeholder interviews and analyzed analyst and investor workflows across search, export, and diligence flows, building a jobs-to-be-done matrix that exposed 12 core workflow gaps.',
      'Authored MVP requirements and PRDs for a micro-access Chrome-extension model with pay-per-tool pricing for SMB and university users; 3 of 4 product proposals approved by the VP of Product.',
    ],
  },
  {
    company: 'Dialpad',
    role: 'Product Management Intern',
    location: 'San Ramon, CA',
    period: 'Jun 2024 – Aug 2024',
    mark: <DialpadMark />,
    bullets: [
      'Integrated a fine-tuned LLM to streamline legacy IVR voiceover and voice-direction systems, cutting $50,000+ in yearly contract costs.',
      'Built a linear-regression model and used Mixpanel to define and track custom KPIs for cross-functional feature performance.',
      'Revised 30+ features across AI contact and sales centers, email automation, mobile, video conferencing, and settings UX.',
      'Drove product expansion into 10+ languages across 50+ countries, leading French and Spanish expansion, transcription, and integration.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 outline-none"
    >
      <SectionHeading kicker="01 · Professional" title="Experience" />
      <ol className="mt-6">
        {ENTRIES.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="border-b border-line/40 py-12 last:border-b-0">
            <div className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
              <Reveal>{entry.mark}</Reveal>
              <Reveal delayMs={120}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">{entry.company}</h3>
                  <p className="font-mono text-xs tracking-[0.15em] text-ink-dim">{entry.period}</p>
                </div>
                <p className="mt-2 font-mono text-xs tracking-[0.18em] uppercase text-gold">
                  {entry.role} · {entry.location}
                </p>
                <ul className="mt-5 max-w-3xl space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="border-l-2 border-gold/30 pl-4 text-[15px] leading-relaxed text-ink-dim"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
