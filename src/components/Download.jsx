import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="relative py-24 bg-gradient-to-b from-emerald-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,146,60,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/30 backdrop-blur p-10 md:p-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to spark the next campfire?
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Download the app and bring instant fun to your next gathering. Play offline, anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition shadow-lg">
              <Apple className="w-6 h-6" />
              App Store (Soon)
            </a>
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-lg">
              <Play className="w-6 h-6" />
              Google Play (Soon)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
