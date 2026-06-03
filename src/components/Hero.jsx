import React, { useEffect, useRef } from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Geometric background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Large circle */}
        <div style={{
          position: 'absolute',
          right: '-10%', top: '-15%',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          animation: 'spin-slow 30s linear infinite',
        }} />
        {/* Grid pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Diagonal accent */}
        <div style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: '42%',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)',
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
        }} />
        {/* Floating orbs */}
        <div style={{ position:'absolute', left:'8%', top:'20%', width:8, height:8, borderRadius:'50%', background:'var(--gold)', opacity:0.5, animation:'float 4s ease-in-out infinite' }} />
        <div style={{ position:'absolute', left:'15%', top:'70%', width:5, height:5, borderRadius:'50%', background:'var(--gold)', opacity:0.3, animation:'float 6s ease-in-out infinite 1s' }} />
        <div style={{ position:'absolute', right:'25%', top:'15%', width:6, height:6, borderRadius:'50%', background:'var(--gold)', opacity:0.4, animation:'float 5s ease-in-out infinite 0.5s' }} />
      </div>

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '80px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        width: '100%',
      }}>
        {/* Left Content */}
        <div>
          <div className="gold-divider animate-fadeUp" style={{ marginBottom: 20 }}>
            <span />
            <p>Est. Naya Raipur, Chhattisgarh</p>
          </div>

          <h1 className="animate-fadeUp delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: 8,
          }}>
            Bright Public
          </h1>
          <h1 className="animate-fadeUp delay-2" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--gold)',
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            School
          </h1>

          <p className="animate-fadeUp delay-3" style={{
            fontFamily: 'var(--font-italic)',
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.6)',
            fontStyle: 'italic',
            marginBottom: 16,
            letterSpacing: '0.02em',
          }}>
            "Illuminating Minds, Building Futures"
          </p>

          <p className="animate-fadeUp delay-4" style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            maxWidth: 480,
            marginBottom: 40,
          }}>
            A premier CGBSE English Medium school in the heart of Naya Raipur, offering world-class education from Nursery to Class XII. Where every child's potential is nurtured with care and excellence.
          </p>

          {/* Badges */}
          <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {['CGBSE Affiliated', 'English Medium', 'Nursery–XII', 'Smart Classrooms'].map(b => (
              <span key={b} style={{
                padding: '6px 16px',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: 2,
                color: 'var(--gold-pale)',
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                fontWeight: 500,
              }}>{b}</span>
            ))}
          </div>

          <div className="animate-fadeUp delay-5" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#admission" className="btn-gold">
              Apply for Admission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn-outline">Explore School</a>
          </div>
        </div>

        {/* Right — Emblem Card */}
        <div className="animate-fadeIn delay-3" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}>
          {/* Big Logo */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute',
              width: 280, height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
              animation: 'pulse-gold 3s ease-in-out infinite',
            }} />
            <div style={{
              width: 200, height: 200,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              border: '2px solid rgba(201,168,76,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Logo size={140} />
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%' }}>
            {[
              { icon: '🏛️', label: 'Affiliated Board', value: 'CGBSE' },
              { icon: '📚', label: 'Medium', value: 'English' },
              { icon: '🎓', label: 'Classes', value: 'Nursery–XII' },
              { icon: '📞', label: 'Contact', value: '91651 87777' },
            ].map(c => (
              <div key={c.label} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 8,
                padding: '16px 20px',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{c.icon}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--gold)', fontWeight: 600 }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', letterSpacing: '0.12em',
        textTransform: 'uppercase',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #home > div > div:last-child { display: none !important; }
        }
        @media (max-width: 600px) {
          #home > div { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  )
}
