const ORBITS = [
  { cx: 130, cy: 130, r: 26, duration: '7s', isReverse: false },
  { cx: 240, cy: 105, r: 18, duration: '5.5s', isReverse: true },
  { cx: 250, cy: 168, r: 22, duration: '8s', isReverse: false },
  { cx: 350, cy: 125, r: 25, duration: '6.5s', isReverse: true },
]

const FIELD_SYMBOLS = [
  { cx: 62, cy: 82 },
  { cx: 418, cy: 82 },
  { cx: 62, cy: 178 },
  { cx: 418, cy: 178 },
]

/**
 * Animated diagram of the quantum Hall effect: bulk electrons locked in
 * cyclotron orbits, current carried by chiral one-way edge channels, in a
 * graphene (hexagon-patterned) Hall bar under a perpendicular B field.
 */
export function QuantumHallFigure() {
  return (
    <figure className="mt-10 max-w-3xl">
      <div className="rounded-xs border border-line/60 bg-dusk/70 p-4 sm:p-6">
        <svg
          viewBox="0 0 480 260"
          role="img"
          aria-label="Diagram of the quantum Hall effect. Inside a two-dimensional graphene sample under a strong perpendicular magnetic field, bulk electrons move in closed cyclotron orbits while current flows only through one-way conducting channels along the sample edges."
          className="w-full"
        >
          <defs>
            <pattern id="qhe-hex" width="28" height="24.25" patternUnits="userSpaceOnUse">
              <path
                d="M14 0 L28 8.08 L28 16.17 L14 24.25 L0 16.17 L0 8.08 Z"
                fill="none"
                stroke="rgba(43, 58, 82, 0.12)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Hall bar (graphene sample) */}
          <rect x="30" y="52" width="420" height="156" rx="10" fill="rgba(255, 255, 255, 0.55)" stroke="var(--color-line)" />
          <rect x="30" y="52" width="420" height="156" rx="10" fill="url(#qhe-hex)" />

          {/* B field into the page: circled crosses */}
          {FIELD_SYMBOLS.map((symbol) => (
            <g key={`${symbol.cx}-${symbol.cy}`} stroke="var(--color-ink-dim)" strokeWidth="1.3" opacity="0.5">
              <circle cx={symbol.cx} cy={symbol.cy} r="7" fill="none" />
              <line x1={symbol.cx - 3.5} y1={symbol.cy - 3.5} x2={symbol.cx + 3.5} y2={symbol.cy + 3.5} />
              <line x1={symbol.cx - 3.5} y1={symbol.cy + 3.5} x2={symbol.cx + 3.5} y2={symbol.cy - 3.5} />
            </g>
          ))}
          <text x="30" y="34" fill="var(--color-ink-dim)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            B ⊗ into page
          </text>

          {/* Bulk: quantized cyclotron orbits */}
          {ORBITS.map((orbit) => (
            <g
              key={`${orbit.cx}-${orbit.cy}`}
              className="qhe-orbit"
              style={{
                transformOrigin: `${orbit.cx}px ${orbit.cy}px`,
                animationDuration: orbit.duration,
                animationDirection: orbit.isReverse ? 'reverse' : 'normal',
              }}
            >
              <circle
                cx={orbit.cx}
                cy={orbit.cy}
                r={orbit.r}
                fill="none"
                stroke="rgba(62, 107, 84, 0.35)"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              <circle cx={orbit.cx + orbit.r} cy={orbit.cy} r="4" fill="var(--color-gold)" />
            </g>
          ))}

          {/* Chiral edge channels: top flows right, bottom flows left */}
          <line x1="38" y1="60" x2="442" y2="60" stroke="rgba(127, 151, 198, 0.5)" strokeWidth="1" strokeDasharray="2 6" />
          <line x1="38" y1="200" x2="442" y2="200" stroke="rgba(127, 151, 198, 0.5)" strokeWidth="1" strokeDasharray="2 6" />
          {[0, 1, 2].map((index) => (
            <circle
              key={`top-${index}`}
              cx="45"
              cy="60"
              r="4"
              fill="var(--color-lily)"
              className="qhe-edge-right"
              style={{ animationDelay: `${index * 2.7}s` }}
            />
          ))}
          {[0, 1, 2].map((index) => (
            <circle
              key={`bottom-${index}`}
              cx="435"
              cy="200"
              r="4"
              fill="var(--color-lily)"
              className="qhe-edge-left"
              style={{ animationDelay: `${index * 2.7}s` }}
            />
          ))}
          <text x="450" y="46" fill="var(--color-lily)" fontSize="12" textAnchor="end" opacity="0.8">
            →
          </text>
          <text x="30" y="224" fill="var(--color-lily)" fontSize="12" opacity="0.8">
            ←
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-wide text-ink-dim/80">
        The quantum Hall effect: in a strong perpendicular magnetic field, bulk
        electrons lock into quantized cyclotron orbits while current is carried
        only by one-way channels along the sample edges.
      </figcaption>
    </figure>
  )
}
