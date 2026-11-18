export type Publication = {
  title: string
  authors: string
  venue: string
  status: string
  openReviewUrl?: string
  pdfPath: string
}

const LINK_CLASS =
  'inline-block rounded-xs border px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors'

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
      className="mt-6 rounded-xs border border-line/60 bg-surface/60 px-4 py-3.5"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] tracking-[0.18em] uppercase text-surface">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-surface" />
          {publication.status}
        </span>
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-gold">{publication.venue}</p>
      </div>
      <p className="mt-2 font-display text-lg leading-snug text-ink">
        {publication.title}
      </p>
      <p className="mt-1 text-[13px] text-ink-dim">{publication.authors}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {publication.openReviewUrl && (
          <a
            href={publication.openReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${LINK_CLASS} border-gold/60 text-gold hover:bg-gold/10`}
          >
            OpenReview &#8599;
          </a>
        )}
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK_CLASS} ${publication.openReviewUrl ? 'border-line text-ink-dim hover:border-gold/60 hover:text-ink' : 'border-gold/60 text-gold hover:bg-gold/10'}`}
        >
          Paper · PDF &#8599;
        </a>
      </div>
    </aside>
  )
}
