import { NightSky } from '../components/NightSky'
import { Nav } from '../components/Nav'
import { Hero } from '../sections/Hero'
import { Experience } from '../sections/Experience'
import { Projects } from '../sections/Projects'
import { Research } from '../sections/Research'
import { Contact } from '../sections/Contact'
import { scrollToSection } from '../lib/scroll'

function Home() {
  return (
    <>
      <a
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          scrollToSection('main')
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xs focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <NightSky />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
    </>
  )
}

export default Home
