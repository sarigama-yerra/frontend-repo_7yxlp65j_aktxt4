import { useEffect, useState } from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-wide">Flames Blue</a>
        <nav className="hidden md:flex items-center gap-6 text-zinc-300">
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" className="text-zinc-300 hover:text-white"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="text-zinc-300 hover:text-white"><Linkedin size={18} /></a>
          <a href="mailto:hello@example.com" className="text-zinc-300 hover:text-white"><Mail size={18} /></a>
          <button className="md:hidden text-zinc-300 hover:text-white"><Menu /></button>
        </div>
      </div>
    </header>
  )
}
