/**
 * Bump RESUME_VERSION whenever public/resume.pdf changes so browsers that
 * cached the previous file under the same URL fetch the new one.
 */
const RESUME_VERSION = '2026-11-12'

export const RESUME_HREF = `${import.meta.env.BASE_URL}resume.pdf?v=${RESUME_VERSION}`
