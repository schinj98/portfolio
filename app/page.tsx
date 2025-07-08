import Navbar from './components/navbar/page'
import HeroSection from './components/hero-section/page'
import About from './components/about/page'
import Experience from './components/experience/page'
import Education from './components/education/page'
import TechStack from './components/tech-stack/page'
import Projects from './components/projects/page'
import Contact from './components/contact/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}