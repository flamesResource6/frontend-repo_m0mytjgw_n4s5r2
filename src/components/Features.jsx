import { motion } from 'framer-motion'
import { WifiOff, Sparkle, Users, Trees } from 'lucide-react'

const features = [
  {
    icon: <WifiOff className="w-6 h-6" />, title: 'Offline Friendly',
    desc: 'Play anywhere — tents, trails, and no-signal zones. No internet required once installed.'
  },
  {
    icon: <Users className="w-6 h-6" />, title: 'Made for Groups',
    desc: 'Perfect for patrols and big campfire circles. Quick rounds and inclusive prompts.'
  },
  {
    icon: <Trees className="w-6 h-6" />, title: 'Scout-Themed',
    desc: 'Outdoorsy design and prompts that celebrate teamwork, courage, and adventure.'
  },
  {
    icon: <Sparkle className="w-6 h-6" />, title: 'Dynamic Questions',
    desc: 'Always fresh with adjustable intensity and categories to match your vibe.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Built for the great outdoors
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mb-3 text-emerald-300">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
