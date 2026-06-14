import React from 'react'
import { ArrowRight, Landmark, BookOpen, GraduationCap, Phone, ShieldCheck } from 'lucide-react'
import Logo from './Logo'

const infoCards = [
  { icon: Landmark, label: 'Affiliated Board', value: 'CGBSE' },
  { icon: BookOpen, label: 'Medium', value: 'English' },
  { icon: GraduationCap, label: 'Classes', value: 'Nursery–XII' },
  { icon: Phone, label: 'Contact', value: '91651 87777' },
]

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'radial-gradient(120% 90% at 80% 0%, #FFFDF7 0%, var(--surface-soft) 55%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Geometric background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', right: '-10%', top: '-15%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(246,166,35,0.10) 0%, transparent 70%)',
          animation: 'spin-slow 30s linear infinite',
        }} />
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(246,166,35,0.03) 100%)',
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
        }} />
        <div style={{ position: 'absolute', left: '8%', top: '20%', width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', opacity: 0.5, animation: 'float 4s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', left: '15%', top: '70%', width: 5, height: 5, borderRadius: '50%', background: 'var(--sun)', opacity: 0.4, animation: 'float 6s ease-in-out infinite 1s' }} />
        <div style={{ position: 'absolute', right: '25%', top: '15%', width: 6, height: 6, borderRadius: '50%', background: 'var(--leaf)', opacity: 0.4, animation: 'float 5s ease-in-out infinite 0.5s' }} />
      </div>

      <div className="hero-grid" style={{
        maxWidth: 1200, margin: '0 auto', padding: '90px 40px',
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 70,
        alignItems: 'center', position: 'relative', zIndex: 2, width: '100%',
      }}>
        {/* Left content */}
        <div>
          <div className="gold-divider animate-fadeUp" style={{ marginBottom: 20 }}>
            <span />
            <p>Est. Naya Raipur, Chhattisgarh</p>
          </div>

          <h1 className="animate-fadeUp delay-1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 900, color: 'var(--navy)', lineHeight: 1.08, marginBottom: 4,
          }}>
            Bright Public
          </h1>
          <h1 className="animate-fadeUp delay-2" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: 900, lineHeight: 1.08, marginBottom: 22,
            background: 'linear-gradient(100deg, var(--gold), var(--sun))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            School
          </h1>

          <p className="animate-fadeUp delay-3" style={{
            fontFamily: 'var(--font-italic)', fontSize: '1.25rem', color: 'var(--text-dark)',
            fontStyle: 'italic', marginBottom: 16, letterSpacing: '0.02em',
          }}>
            "Illuminating Minds, Building Futures"
          </p>

          <p className="animate-fadeUp delay-4" style={{
            color: 'var(--text-mid)', fontSize: '0.97rem', lineHeight: 1.8,
            maxWidth: 480, marginBottom: 36,
          }}>
            A premier CGBSE English Medium school in the heart of Naya Raipur, offering world-class
            education from Nursery to Class XII. Where every child's potential is nurtured with care and excellence.
          </p>

          <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: 10, marginBottom: 38, flexWrap: 'wrap' }}>
            {['CGBSE Affiliated', 'English Medium', 'Nursery–XII', 'Smart Classrooms'].map(b => (
              <span key={b} style={{
                padding: '6px 16px', border: '1px solid rgba(201,168,76,0.45)',
                borderRadius: 40, color: 'var(--navy)', fontSize: '0.78rem',
                letterSpacing: '0.04em', fontWeight: 600, background: 'rgba(255,255,255,0.6)',
              }}>{b}</span>
            ))}
          </div>

          <div className="animate-fadeUp delay-5" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#admission" className="btn-gold">
              Apply for Admission <ArrowRight size={17} />
            </a>
            <a href="#about" className="btn-outline">Explore School</a>
          </div>
        </div>

        {/* Right — campus photo + emblem */}
        <div className="animate-fadeIn delay-3 hero-visual" style={{ position: 'relative' }}>
          <div style={{
            position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            boxShadow: 'var(--shadow-navy)', border: '4px solid #fff',
          }}>
            <img
              src="/campus.png" alt="Bright Public School campus gate, Godhi"
              width={1280} height={1010} loading="eager" fetchpriority="high"
              style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,22,40,0.55), transparent 55%)',
            }} />
            <div style={{
              position: 'absolute', left: 18, bottom: 16, display: 'flex', alignItems: 'center', gap: 8,
              color: '#fff', fontSize: '0.8rem', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}>
              <ShieldCheck size={16} color="var(--gold)" /> Admissions Open 2026–27
            </div>
          </div>

          {/* Emblem badge overlapping the photo */}
          <div style={{
            position: 'absolute', top: -26, right: -10,
            width: 96, height: 96, borderRadius: '50%',
            background: '#fff', border: '3px solid var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-gold)', animation: 'float 5s ease-in-out infinite',
          }}>
            <Logo size={72} />
          </div>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card" style={{ padding: '15px 18px', boxShadow: 'var(--shadow-card)' }}>
                <Icon size={22} color="var(--gold)" style={{ marginBottom: 8 }} />
                <div style={{ fontSize: '0.68rem', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: '0.98rem', color: 'var(--navy)', fontWeight: 700 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'rgba(16,36,61,0.45)', fontSize: '0.7rem', letterSpacing: '0.12em',
        textTransform: 'uppercase', animation: 'float 2s ease-in-out infinite',
      }}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #home .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 60px 22px !important; }
          #home .hero-visual { max-width: 520px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 600px) {
          #home .hero-visual img { height: 240px !important; }
        }
      `}</style>
    </section>
  )
}
