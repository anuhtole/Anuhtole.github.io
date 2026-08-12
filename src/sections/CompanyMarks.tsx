type MarkTileProps = {
  src: string
  alt: string
  isInverted?: boolean
}

/**
 * Framed plaque showing a real company logo with a soft pulsing glow and a
 * gentle float. Logos: Microsoft (Wikimedia Commons, wordmark recolored for
 * contrast), Dialpad (their light-on-dark asset), PitchBook (Commons wordmark,
 * inverted to white via CSS filter).
 */
function MarkTile({ src, alt, isInverted = false }: MarkTileProps) {
  return (
    <div
      aria-hidden="true"
      className="mark-tile relative flex h-20 w-40 items-center justify-center overflow-hidden rounded-xs border border-line/70 bg-dusk/80 shadow-[0_10px_26px_rgba(43,58,82,0.16)]"
    >
      <div className="mark-glow absolute inset-0" />
      <img
        src={src}
        alt={alt}
        className={`relative max-h-9 w-auto max-w-[78%] ${isInverted ? 'brightness-0 invert opacity-90' : ''}`}
      />
    </div>
  )
}

export function MicrosoftMark() {
  return <MarkTile src="./logos/microsoft.svg" alt="" />
}

export function PitchBookMark() {
  return <MarkTile src="./logos/pitchbook.png" alt="" />
}

export function DialpadMark() {
  return <MarkTile src="./logos/dialpad.svg" alt="" />
}

export function UCSCMark() {
  return <MarkTile src="./logos/ucsc.svg" alt="" />
}
