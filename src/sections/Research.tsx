import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { UCSCMark } from './CompanyMarks'
import { QuantumHallFigure } from './QuantumHallFigure'

const BULLETS = [
  'Conducted condensed matter physics research under Prof. Jairo Velasco in the Velasco Lab, investigating the quantum Hall effect in graphene.',
  'Performed hands-on experimentation with carbon nanotubes and other quantum systems via scanning tunneling microscopy (STM).',
  'Gave 3 presentations to UCSC graduate students on graphene monolayers for superconductivity, winning Best Presentation.',
]

export function Research() {
  return (
    <section
      id="research"
      tabIndex={-1}
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 outline-none"
    >
      <SectionHeading kicker="03 · Research" title="Research" />
      <div className="mt-12 grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
        <Reveal>
          <UCSCMark />
        </Reveal>
        <Reveal delayMs={120}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              UC Santa Cruz · Velasco Lab
            </h3>
            <p className="font-mono text-xs tracking-[0.15em] text-ink-dim">Jul 2022 – Aug 2022</p>
          </div>
          <p className="mt-2 font-mono text-xs tracking-[0.18em] uppercase text-gold">
            Quantum Mechanics Researcher · Condensed Matter Physics · Santa Cruz, CA
          </p>
          <ul className="mt-5 max-w-3xl space-y-3">
            {BULLETS.map((bullet) => (
              <li
                key={bullet.slice(0, 40)}
                className="border-l-2 border-gold/30 pl-4 text-[15px] leading-relaxed text-ink-dim"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <QuantumHallFigure />
        </Reveal>
      </div>
    </section>
  )
}
