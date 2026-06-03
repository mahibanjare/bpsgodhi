import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: 'var(--navy)',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '0.78rem',
        padding: '7px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        letterSpacing: '0.03em',
        position: 'relative',
        zIndex: 1000,
      }}>
        <span>📍 Godhi, Mandir Hasaud, Naya Raipur, Chhattisgarh</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="tel:+919165187777" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>
            📞 91651 87777
          </a>
          <span>|</span>
          <span>Mon–Sat: 8:00 AM – 2:00 PM</span>
        </span>
      </div>

      {/* Main Nav */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: scrolled ? 'var(--white)' : 'rgba(255,255,255,0.97)',
        boxShadow: scrolled ? '0 2px 24px rgba(10,22,40,0.12)' : '0 1px 0 rgba(10,22,40,0.06)',
        transition: 'all 0.3s ease',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={48} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)', lineHeight: 1.1 }}>
              Bright Public School
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
              CBSE • English Medium • Nursery–XII
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-links">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              padding: '6px 14px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--navy)',
              textDecoration: 'none',
              borderRadius: 3,
              transition: 'all 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.background = 'rgba(201,168,76,0.08)'; }}
            onMouseLeave={e => { e.target.style.color = 'var(--navy)'; e.target.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
          <a href="#admission" className="btn-gold" style={{ marginLeft: 8, padding: '10px 22px', fontSize: '0.85rem' }}>
            Apply Now
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
        }} className="hamburger">
          <div style={{ width: 24, height: 2, background: 'var(--navy)', margin: '5px 0', transition: '0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : '' }} />
          <div style={{ width: 24, height: 2, background: 'var(--navy)', margin: '5px 0', opacity: open ? 0 : 1, transition: '0.3s' }} />
          <div style={{ width: 24, height: 2, background: 'var(--navy)', margin: '5px 0', transition: '0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--navy)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: 24, right: 24,
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'white', fontSize: '2rem',
          }}>✕</button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              color: 'white', textDecoration: 'none',
              fontFamily: 'var(--font-display)', fontSize: '1.8rem',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'white'}
            >{l.label}</a>
          ))}
          <a href="#admission" className="btn-gold" onClick={() => setOpen(false)} style={{ marginTop: 16 }}>
            Apply Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 600px) {
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
