/**
 * Scrolls to an in-page section and moves focus to it, WITHOUT changing
 * location.hash — the hash belongs to HashRouter, so `#experience`-style
 * fragment URLs would be misread as routes and blank the page.
 * Returns false when the target is not on the current page.
 */
export function scrollToSection(targetId: string): boolean {
  const target = document.getElementById(targetId)
  if (!target) return false

  target.scrollIntoView()
  target.focus({ preventScroll: true })
  return true
}
