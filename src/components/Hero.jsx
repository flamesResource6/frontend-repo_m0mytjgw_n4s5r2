import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm text-white/90 backdrop-blur">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Ready for your next campfire night
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              A party in the woods, right in your pocket
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Spin, laugh, and connect with Scout friends through lively minigames made for tents, trails, and campfire circles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#download" className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 transition">
                Get the App
              </a>
              <a href="#games" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition">
                See the Games
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-orange-500/40 via-rose-500/40 to-emerald-400/40 blur-2xl rounded-full" />
              <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 gap-3 text-sm text-white/90">
                  <div className="bg-black/30 rounded-xl p-3">Truth or Dare</div>
                  <div className="bg-black/30 rounded-xl p-3">Who's Most Likely</div>
                  <div className="bg-black/30 rounded-xl p-3">Never Have I Ever</div>
                  <div className="bg-black/30 rounded-xl p-3">Would You Rather</div>
                  <div className="bg-black/30 rounded-xl p-3 col-span-2">Spin the Wheel</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
