import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Research from './components/Research'
import TechStack from './components/TechStack'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { ThemeProvider } from './lib/theme'

export default function App() {
  return (
    <ThemeProvider>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <Research />
        <TechStack />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
