import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Skills, Experience, Blog, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
      <footer className="bg-black py-10 text-center text-zinc-500">© 2025 Flames Blue</footer>
    </div>
  )
}

export default App
