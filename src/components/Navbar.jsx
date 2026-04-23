import { useCallback, useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((open) => !open)
  }, [])

  return (
    <nav className="fixed w-full z-50 top-6 px-4">
      <div className="max-w-4xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

        <a
          href="#"
          className="font-display font-bold text-xl tracking-wide"
          onClick={closeMobileMenu}
        >
          Saquib<span className="text-holoCyan">.</span>
        </a>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-400">
          <a
            href="#about"
            className="hover:text-white hover:text-glow transition-all"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white hover:text-glow transition-all"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-white hover:text-glow transition-all"
          >
            Experience
          </a>
          <a
            href="#game"
            className="hover:text-white hover:text-glow transition-all"
          >
            Game
          </a>
          <a
            href="#contact"
            className="hover:text-white hover:text-glow transition-all"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white relative z-10 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-20 left-4 right-4 glass-panel rounded-3xl p-6 flex-col space-y-4 md:hidden z-40 bg-[#0B0D12]/95 border border-white/10 backdrop-blur-xl`}
      >
        <a
          href="#about"
          className="text-gray-300 hover:text-holoCyan block py-2 text-center text-lg font-medium transition-colors"
          onClick={closeMobileMenu}
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-300 hover:text-holoCyan block py-2 text-center text-lg font-medium transition-colors"
          onClick={closeMobileMenu}
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-gray-300 hover:text-holoCyan block py-2 text-center text-lg font-medium transition-colors"
          onClick={closeMobileMenu}
        >
          Experience
        </a>
        <a
          href="#game"
          className="text-gray-300 hover:text-holoCyan block py-2 text-center text-lg font-medium transition-colors"
          onClick={closeMobileMenu}
        >
          Game
        </a>
        <a
          href="#contact"
          className="text-gray-300 hover:text-holoCyan block py-2 text-center text-lg font-medium transition-colors"
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

