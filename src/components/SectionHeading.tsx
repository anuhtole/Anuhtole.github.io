import { Reveal } from './Reveal'

type SectionHeadingProps = {
  kicker: string
  title: string
}

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-[0.22em] uppercase text-gold">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl font-light text-ink sm:text-5xl">{title}</h2>
      <svg
        aria-hidden="true"
        viewBox="0 0 220 12"
        className="brush mt-4 h-3 w-52 overflow-visible"
      >
        <path
          d="M3 8 C 60 2, 150 12, 217 5"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </Reveal>
  )
}
