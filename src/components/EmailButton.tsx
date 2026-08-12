import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const EMAIL = 'aseychal@berkeley.edu'
const RESET_DELAY_MS = 2000

type CopyState = 'idle' | 'copied' | 'failed'

const SPARK_POSITIONS = [
  { left: '18%', delay: '0s' },
  { left: '50%', delay: '0.12s' },
  { left: '80%', delay: '0.05s' },
]

/**
 * Copies the email address to the clipboard with a star-sparkle flourish.
 * If the clipboard API is unavailable, shows the address so the visitor can
 * copy it manually.
 */
export function EmailButton({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleClick = async () => {
    let nextState: CopyState = 'copied'
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      nextState = 'failed'
    }
    setCopyState(nextState)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setCopyState('idle'), RESET_DELAY_MS)
  }

  const isCopied = copyState === 'copied'

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative cursor-pointer ${isCopied ? 'copy-flash' : ''} ${className}`}
    >
      {copyState === 'failed' ? (
        EMAIL
      ) : (
        <>
          <span className={isCopied ? 'invisible' : undefined}>{children}</span>
          {isCopied && (
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              Copied &#10022;
            </span>
          )}
        </>
      )}
      {isCopied &&
        SPARK_POSITIONS.map((spark) => (
          <span
            key={spark.left}
            aria-hidden="true"
            className="copy-spark"
            style={{ left: spark.left, animationDelay: spark.delay }}
          >
            &#10022;
          </span>
        ))}
      <span aria-live="polite" className="sr-only">
        {isCopied ? 'Email address copied to clipboard' : ''}
        {copyState === 'failed' ? `Copy this email address: ${EMAIL}` : ''}
      </span>
    </button>
  )
}
