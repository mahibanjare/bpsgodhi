import React from 'react'

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--cream)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative element */}
      <div style={{
        position: 'absolute',
        right: -80,
        top: -80,
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: '60px solid rgba(201,168,76,0.06)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left — Visual */}
          <div style={{ position: 'relative' }}>
            {/* Main image card */}
            <div style={{
              background: 'var(--surface)',
              borderRadius: 16,
              padding: 48,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Pattern */}
              <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.05 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#C9A84C"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '4rem', marginBottom: 24, animation: 'float 4s ease-in-out infinite' }}>🏫</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--gold)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  marginBottom: 16,
                }}>Our Mission</h3>
                <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  To provide holistic education that nurtures intellectual curiosity, moral integrity, and creative excellence in every student — preparing them to be confident global citizens.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              background: 'var(--gold)',
              color: 'var(--navy)',
              padding: '20px 24px',
              borderRadius: 12,
              textAlign: 'center',
              boxShadow: 'var(--shadow-gold)',
              animation: 'float 5s ease-in-out infinite 1s',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>100%</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em' }}>CGBSE Certified</div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="gold-divider">
              <span />
              <p>About Our School</p>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--navy)',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              A Legacy of<br />
              <span style={{ color: 'var(--gold)' }}>Academic Excellence</span>
            </h2>

            <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 20, fontSize: '0.97rem' }}>
              Bright Public School is situated in the serene environment of Godhi, Mandir Hasaud, Naya Raipur — one of Chhattisgarh's most progressive cities. We are a fully affiliated CGBSE school offering English medium education from Nursery through Class XII.
            </p>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 36, fontSize: '0.97rem' }}>
              Our school combines a rigorous academic curriculum with a rich variety of co-curricular activities, ensuring that every student develops not just intellectually, but emotionally, socially, and physically.
            </p>

            {/* Feature list */}
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
              {[
                'CGBSE Pattern Curriculum',
                'Experienced Faculty',
                'Smart Digital Classrooms',
                'Sports & Arts Programs',
                'Safe & Secure Campus',
                'Holistic Development',
              ].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="cta-group" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#programs" className="btn-gold">Our Programs</a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                color: 'var(--navy)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1.5px solid var(--navy)',
                borderRadius: 3,
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}>Visit Us</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 60px 20px !important; }
          #about .feature-grid { grid-template-columns: 1fr !important; }
          #about .cta-group { flex-direction: column !important; }
          #about .cta-group a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
