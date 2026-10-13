import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import Approach from './components/Approach.jsx'
import Stats from './components/Stats.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Testimonials from './components/Testimonials.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Industries />
        <Approach />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
