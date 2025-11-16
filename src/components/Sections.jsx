import { motion } from 'framer-motion'

export function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
      <span className="bg-clip-text text-transparent bg-[linear-gradient(120deg,#a78bfa,#60a5fa_40%,#22d3ee_80%)] [background-size:200%_100%] animate-[shimmer_6s_ease_infinite]">
        {children}
      </span>
    </h2>
  )
}

export function Skills() {
  const items = [
    { title: 'React', link: '/blog/react' },
    { title: 'FastAPI', link: '/blog/fastapi' },
    { title: 'MongoDB', link: '/blog/mongodb' },
    { title: 'Tailwind', link: '/blog/tailwind' },
    { title: 'Framer Motion', link: '/blog/framer-motion' },
  ]
  return (
    <section id="skills" className="relative py-24 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)] transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 via-indigo-500/0 to-sky-500/0 group-hover:from-fuchsia-500/10 group-hover:via-indigo-500/10 group-hover:to-sky-500/10" />
              <div className="relative">
                <h3 className="text-white text-xl font-semibold">{it.title}</h3>
                <p className="text-zinc-400 mt-2">Read the blog post →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { company: 'Nova Labs', role: 'Senior Frontend', dates: '2022 — Present', desc: 'Leading motion design and performance.' },
    { company: 'PixelWorks', role: 'UI Engineer', dates: '2020 — 2022', desc: 'Built design systems and tooling.' },
  ]
  return (
    <section id="experience" className="relative py-24 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>Experience</SectionHeading>
        <div className="relative border-l border-white/10 ml-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 py-8"
            >
              <span className="absolute left-[-6px] top-8 w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white text-lg font-semibold">{it.company}</h3>
                  <span className="text-zinc-400 text-sm">{it.dates}</span>
                </div>
                <p className="text-zinc-300 mt-1">{it.role}</p>
                <p className="text-zinc-400 mt-3">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  const posts = [
    { title: 'Designing with Motion', tags: ['motion', 'ui'] },
    { title: 'Dark Mode Systems', tags: ['design'] },
    { title: 'Building with FastAPI', tags: ['backend'] },
  ]
  return (
    <section id="blog" className="relative py-24 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>Blog</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md hover:shadow-[0_0_50px_rgba(234,179,8,0.25)]"
            >
              <h3 className="text-white font-semibold">{p.title}</h3>
              <div className="mt-2 flex gap-2 text-xs">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>Contact</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Gmail', href: 'mailto:hello@example.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'GitHub', href: 'https://github.com' },
          ].map((c) => (
            <a key={c.label} href={c.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md text-white hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]">
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
