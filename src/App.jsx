import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import GameZone from './sections/GameZone'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

export default function App() {
  return (
    <>
      <div className="ambient-light light-1"></div>
      <div className="ambient-light light-2"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <GameZone />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
