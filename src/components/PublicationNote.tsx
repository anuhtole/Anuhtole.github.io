export type Publication = {
  title: string
  authors: string
  venue: string
  status: string
  openReviewUrl: string
  pdfPath: string
}

const LINK_CLASS =
  'inline-block rounded-xs border px-3 py-1.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors'

/**
 * Compact publication callout rendered inside a project card: accepted
 * badge, paper title in the display face, authors, and links to the
 * OpenReview page and the camera-ready PDF.
 */
export function PublicationNote({ publication }: { publication: Publication }) {
  const pdfHref = `${import.meta.env.BASE_URL}${publication.pdfPath}`

  return (
    <aside
      aria-label="Publication"
      className="mt-7 rounded-xs border border-gold/25 bg-surface/70 p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase text-surface">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-surface" />
          {publication.status}
        </span>
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-gold">{publication.venue}</p>
      </div>
      <p className="mt-3 font-display text-xl leading-snug text-ink sm:text-2xl">
        {publication.title}
      </p>
      <p className="mt-1.5 text-sm text-ink-dim">{publication.authors}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={publication.openReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK_CLASS} border-gold/60 text-gold hover:bg-gold/10`}
        >
          OpenReview &#8599;
        </a>
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK_CLASS} border-line text-ink-dim hover:border-gold/60 hover:text-ink`}
        >
          Paper · PDF &#8599;
        </a>
      </div>
    </aside>
  )
}
