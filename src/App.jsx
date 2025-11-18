import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Features from './components/Features'
import Download from './components/Download'

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Games />
      <Features />
      <Download />

      <footer className="py-10 text-center text-white/60 text-sm bg-slate-950 border-t border-white/10">
        Built with 💚 for Scout gatherings • © {new Date().getFullYear()} Scout Party Games
      </footer>
    </div>
  )
}

export default App
