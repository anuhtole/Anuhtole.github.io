import { useState } from 'react'
import type { ReactNode } from 'react'

type FlipCardProps = {
  front: ReactNode
  back: ReactNode
  className?: string
}

/**
 * Two-faced card that rotates on hover (pointer devices, via CSS) and via
 * an explicit toggle button so keyboard and touch users get the same
 * content. Faces must contain no focusable elements.
 */
export function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleToggle = () => setIsFlipped((flipped) => !flipped)

  return (
    <div className={`flip-scene ${isFlipped ? 'is-flipped' : ''} ${className}`}>
      <div className="flip-inner">
        <div className="flip-face">{front}</div>
        <div className="flip-face flip-back">{back}</div>
      </div>
      <button
        type="button"
        aria-pressed={isFlipped}
        aria-label={isFlipped ? 'Show front of card' : 'Flip card to see details'}
        onClick={handleToggle}
        className="absolute right-3 bottom-3 z-10 rounded-xs border border-line bg-night/70 px-2.5 py-1 font-mono text-[11px] tracking-[0.15em] uppercase text-ink-dim backdrop-blur-sm transition-colors hover:text-gold"
      >
        {isFlipped ? 'Front' : 'Flip'}
      </button>
    </div>
  )
}
