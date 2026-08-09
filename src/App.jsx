import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Notices from './components/Notices'
import About from './components/About'
import Principal from './components/Principal'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Facilities from './components/Facilities'
import Fees from './components/Fees'
import Testimonials from './components/Testimonials'
import Admission from './components/Admission'
import Gallery from './components/Gallery'
import Documents from './components/Documents'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Admin from './components/Admin'
import { SiteProvider } from './SiteContext'
import useScrollReveal from './hooks/useScrollReveal'

function Site() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Notices />
        <About />
        <Principal />
        <Programs />
        <Stats />
        <Facilities />
        <Fees />
        <Testimonials />
        <Gallery />
        <Admission />
        <Documents />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(() => window.location.hash === '#/admin')

  useEffect(() => {
    const onHash = () => setIsAdmin(window.location.hash === '#/admin')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <SiteProvider>
      {isAdmin ? <Admin /> : <Site />}
    </SiteProvider>
  )
}
