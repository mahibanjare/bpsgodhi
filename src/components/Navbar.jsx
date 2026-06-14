import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Clock, Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admission', href: '#admission' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="top-bar" style={{
        background: 'var(--navy)', color: 'rgba(255,255,255,0.82)',
        fontSize: '0.78rem', padding: '8px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        letterSpacing: '0.03em',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <MapPin size={13} color="var(--gold)" /> Godhi, Mandir Hasaud, Naya Raipur, Chhattisgarh
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="tel:+919165187777" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Phone size={13} /> 91651 87777
          </a>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Clock size={13} color="var(--gold)" /> Mon–Sat: 8:00 AM – 2:00 PM
          </span>
        </span>
      </div>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 999,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 12px 40px rgba(16,36,61,0.10)' : '0 1px 0 rgba(16,36,61,0.06)',
        transition: 'all 0.3s var(--ease)',
        padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 66 : 76,
      }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={46} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--navy)', lineHeight: 1.1 }}>
              Bright Public School Godhi
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
              CGBSE • English Medium • Nursery–XII
            </div>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-links">
          {links.map(l => {
            const isActive = active === l.href.slice(1)
            return (
              <a key={l.label} href={l.href} style={{
                position: 'relative',
                padding: '8px 14px',
                fontSize: '0.88rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--gold)' : 'var(--navy)',
                textDecoration: 'none',
                borderRadius: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                {l.label}
                <span style={{
                  position: 'absolute', left: 14, right: 14, bottom: 2, height: 2,
                  background: 'linear-gradient(90deg, var(--gold), var(--sun))',
                  borderRadius: 2, transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left', transition: 'transform 0.3s var(--ease)',
                }} />
              </a>
            )
          })}
          <a href="#admission" className="btn-gold" style={{ marginLeft: 10, padding: '10px 22px', fontSize: '0.85rem' }}>
            Apply Now
          </a>
        </div>

        <button onClick={() => setOpen(true)} aria-label="Open menu" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          padding: 6, color: 'var(--navy)',
        }} className="hamburger">
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,22,40,0.97)',
        backdropFilter: 'blur(6px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 22, padding: '30px 20px',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.3s var(--ease)',
      }}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" style={{
          position: 'absolute', top: 22, right: 22,
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)',
        }}>
          <X size={32} />
        </button>
        <Logo size={64} />
        {links.map((l, i) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
            color: '#fff', textDecoration: 'none',
            fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 600,
            transform: open ? 'translateY(0)' : 'translateY(16px)',
            opacity: open ? 1 : 0,
            transition: `all 0.4s var(--ease) ${0.05 * i + 0.1}s`,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
          >{l.label}</a>
        ))}
        <a href="#admission" className="btn-gold" onClick={() => setOpen(false)} style={{ marginTop: 12 }}>
          Apply Now
        </a>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          .top-bar { display: none !important; }
        }
        @media (max-width: 600px) {
          nav { padding: 0 16px !important; }
        }
      `}</style>
    </>
  )
}
