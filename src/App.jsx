import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Facilities from './components/Facilities'
import Testimonials from './components/Testimonials'
import Admission from './components/Admission'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Stats />
        <Facilities />
        <Testimonials />
        <Gallery />
        <Admission />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
