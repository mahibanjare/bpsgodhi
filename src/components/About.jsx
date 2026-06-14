import React from 'react'
import { Check, Target, MapPin, ArrowRight } from 'lucide-react'

const features = [
  'CGBSE Pattern Curriculum',
  'Experienced Faculty',
  'Smart Digital Classrooms',
  'Sports & Arts Programs',
  'Safe & Secure Campus',
  'Holistic Development',
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--cream)' }}>
      <div style={{
        position: 'absolute', right: -80, top: -80, width: 400, height: 400,
        borderRadius: '50%', border: '60px solid rgba(201,168,76,0.06)', pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center',
        }}>
          {/* Left — Visual */}
          <div className="reveal reveal-left" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              boxShadow: 'var(--shadow-navy)', border: '5px solid #fff',
            }}>
              <img
                src="/campus.png" alt="Bright Public School campus entrance"
                width={1280} height={1010} loading="lazy" decoding="async"
                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Mission card */}
            <div className="card" style={{
              position: 'absolute', left: -18, bottom: -34, maxWidth: 320,
              padding: '24px 26px', boxShadow: 'var(--shadow-navy)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, marginBottom: 14,
                background: 'rgba(246,166,35,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Target size={22} color="var(--sun-deep)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, fontSize: '0.86rem' }}>
                To nurture intellectual curiosity, moral integrity, and creative excellence — preparing every child to be a confident global citizen.
              </p>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: -22, right: -16,
              background: 'linear-gradient(135deg, var(--gold), var(--sun))',
              color: 'var(--navy)', padding: '16px 20px', borderRadius: 14,
              textAlign: 'center', boxShadow: 'var(--shadow-gold)',
              animation: 'float 5s ease-in-out infinite 1s',
            }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', marginTop: 2 }}>CGBSE Certified</div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal reveal-right">
            <div className="eyebrow"><span /><p>About Our School</p></div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.15, margin: '12px 0 24px',
            }}>
              A Legacy of<br />
              <span style={{ color: 'var(--gold)' }}>Academic Excellence</span>
            </h2>

            <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 20, fontSize: '0.97rem' }}>
              Bright Public School is situated in the serene environment of Godhi, Mandir Hasaud, Naya Raipur — one of
              Chhattisgarh's most progressive cities. We are a fully affiliated CGBSE school offering English medium
              education from Nursery through Class XII.
            </p>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 32, fontSize: '0.97rem' }}>
              Our school combines a rigorous academic curriculum with a rich variety of co-curricular activities, ensuring
              that every student develops not just intellectually, but emotionally, socially, and physically.
            </p>

            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 34 }}>
              {features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, var(--gold), var(--sun))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Check size={13} color="#fff" strokeWidth={3} />
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 600 }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="cta-group" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#programs" className="btn-gold">Our Programs <ArrowRight size={16} /></a>
              <a href="#contact" className="btn-outline"><MapPin size={16} /> Visit Us</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          #about .feature-grid { grid-template-columns: 1fr !important; }
          #about .cta-group { flex-direction: column !important; }
          #about .cta-group a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
