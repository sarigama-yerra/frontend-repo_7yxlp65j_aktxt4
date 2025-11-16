import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  useEffect(() => {
    // nothing yet, reserved for any runtime tweaks
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#0b0b0f] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),rgba(14,165,233,0.08)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md text-xs text-zinc-300 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-white">
            <span className="bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-400 via-indigo-400 to-sky-400 animate-[spin_8s_linear_infinite] [animation-direction:alternate] [background-size:200%_200%]">
              Flames Blue
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-zinc-300 text-lg leading-relaxed">
            Building immersive, performant web experiences with a focus on motion,
            accessibility, and delightful micro-interactions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-md transition hover:bg-cyan-400/20">
              <span className="relative">Contact</span>
            </a>
            <a href="#work" className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-5 py-2.5 text-fuchsia-200 shadow-[0_0_30px_rgba(232,121,249,0.3)] backdrop-blur-md transition hover:bg-fuchsia-400/20">
              <span className="relative">Work</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(59,130,246,0.25)] backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(800px_400px_at_10%_110%,rgba(147,51,234,0.15),transparent_60%)]" />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
            alt="Portrait"
            className="relative z-10 h-full w-full object-cover object-center mix-blend-luminosity"
          />
        </motion.div>
      </div>
    </section>
  )
}
