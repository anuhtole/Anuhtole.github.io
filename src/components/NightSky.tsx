type Star = {
  top: string
  left: string
  size: number
  delay: number
}

const STARS: Star[] = [
  { top: '8%', left: '12%', size: 3, delay: 0 },
  { top: '15%', left: '28%', size: 2, delay: 1.2 },
  { top: '6%', left: '46%', size: 2, delay: 2.6 },
  { top: '18%', left: '62%', size: 3, delay: 0.7 },
  { top: '10%', left: '78%', size: 2, delay: 3.4 },
  { top: '26%', left: '8%', size: 2, delay: 1.9 },
  { top: '32%', left: '38%', size: 2, delay: 4.1 },
  { top: '24%', left: '90%', size: 3, delay: 2.2 },
  { top: '44%', left: '18%', size: 2, delay: 0.4 },
  { top: '52%', left: '72%', size: 2, delay: 3.0 },
  { top: '58%', left: '44%', size: 2, delay: 1.5 },
  { top: '70%', left: '10%', size: 2, delay: 2.8 },
  { top: '76%', left: '58%', size: 3, delay: 0.9 },
  { top: '84%', left: '84%', size: 2, delay: 3.7 },
]

/**
 * Fixed full-page animated backdrop: a Monet-daylight sky with slowly
 * drifting cloud fields, a soft sun, faint light specks, a mottled
 * paint-dab wash, and a canvas-grain overlay. Purely decorative —
 * hidden from the a11y tree.
 */
export function NightSky() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="sky-gradient absolute inset-0" />
      <div className="swirl swirl-a" />
      <div className="swirl swirl-b" />
      <div className="swirl swirl-c" />
      <div className="moon" />
      {STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <div className="dabs absolute inset-0" />
      <div className="grain absolute inset-0" />
    </div>
  )
}
