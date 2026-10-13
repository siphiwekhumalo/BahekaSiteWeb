import Hero from '../components/Hero.jsx'
import TechMarquee from '../components/TechMarquee.jsx'
import Services from '../components/Services.jsx'
import ProductsTeaser from '../components/ProductsTeaser.jsx'
import Industries from '../components/Industries.jsx'
import Approach from '../components/Approach.jsx'
import Stats from '../components/Stats.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import Testimonials from '../components/Testimonials.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <ProductsTeaser />
      <Industries />
      <Approach />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}
