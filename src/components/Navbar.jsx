import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Flame className="w-7 h-7 text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.75)]" />
            </div>
            <span className="text-white font-bold tracking-tight group-hover:text-orange-100 transition-colors">
              Scout Party Games
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#games">Games</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#download">Download</NavLink>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 sm:px-6 lg:px-8">
          <div className="mt-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-xl">
            <a href="#games" onClick={handleNav} className="block px-4 py-3 text-white/90 hover:bg-white/10">Games</a>
            <a href="#features" onClick={handleNav} className="block px-4 py-3 text-white/90 hover:bg-white/10">Features</a>
            <a href="#download" onClick={handleNav} className="block px-4 py-3 text-white/90 hover:bg-white/10">Download</a>
          </div>
        </div>
      )}
    </header>
  )
}
