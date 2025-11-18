import { motion } from 'framer-motion'
import { Shuffle, Sparkles, Flame, Wand2, Dice6 } from 'lucide-react'

const games = [
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-300" />,
    title: 'Truth or Dare',
    desc: 'Classic campfire chaos. Pull daring prompts and honest truths designed with Scout-friendly fun.'
  },
  {
    icon: <Shuffle className="w-6 h-6 text-pink-300" />,
    title: "Who's Most Likely To",
    desc: 'Point, laugh, and debate! Hilarious superlatives that spark stories and memories.'
  },
  {
    icon: <Wand2 className="w-6 h-6 text-emerald-300" />,
    title: 'Never Have I Ever',
    desc: 'Discover surprising “never have I ever” moments tailored for outdoor adventures.'
  },
  {
    icon: <Dice6 className="w-6 h-6 text-sky-300" />,
    title: 'Would You Rather',
    desc: 'Twisty choices with a Scout twist — camp comfort or trail challenge? You decide!'
  },
  {
    icon: <Flame className="w-6 h-6 text-orange-300" />,
    title: 'Spin the Wheel Challenges',
    desc: 'Spin up laughs with randomized wildcards: sing-alongs, trail trivia, goofy dares, and more.'
  }
]

export default function Games() {
  return (
    <section id="games" className="relative py-20 bg-gradient-to-b from-emerald-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Minigames made for campfire circles
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -inset-12 opacity-0 group-hover:opacity-100 bg-[conic-gradient(at_50%_50%,#fb923c33,#22c55e33,#0ea5e933,#f472b633,#fb923c33)] blur-2xl transition" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mb-3">
                  {g.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{g.title}</h3>
                <p className="text-white/70 text-sm mt-1">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
