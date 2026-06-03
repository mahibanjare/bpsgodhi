import React from 'react'

const facilities = [
  { icon: '💻', title: 'Smart Classrooms', desc: 'Digital boards and multimedia learning tools for interactive education.' },
  { icon: '🔬', title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry & Biology labs for hands-on experiments.' },
  { icon: '📚', title: 'Central Library', desc: 'Vast collection of books, journals, e-resources and reading rooms.' },
  { icon: '⚽', title: 'Sports Ground', desc: 'Large outdoor ground with facilities for cricket, football, athletics and more.' },
  { icon: '🎨', title: 'Art & Craft Room', desc: 'Dedicated creative space to nurture artistic expression and talent.' },
  { icon: '🎵', title: 'Music & Dance', desc: 'Trained instructors for classical and contemporary music and dance.' },
  { icon: '🍽️', title: 'Hygienic Canteen', desc: 'Nutritious and hygienic meals prepared under strict quality standards.' },
  { icon: '🚌', title: 'School Transport', desc: 'Safe and reliable bus service covering major areas of Naya Raipur.' },
]

export default function Facilities() {
  return (
    <section id="facilities" style={{
      background: 'var(--off-white)',
      padding: '100px 40px',
      position: 'relative',
    }}>
      {/* Accent bar */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 5,
        background: 'linear-gradient(to bottom, var(--gold), var(--navy))',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>World-Class Infrastructure</p>
            <span />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--navy)',
            marginTop: 12,
            lineHeight: 1.2,
          }}>
            Facilities That Inspire
          </h2>
          <p style={{ color: 'var(--text-mid)', marginTop: 12, fontSize: '0.97rem', maxWidth: 500, margin: '12px auto 0' }}>
            Every corner of our campus is designed to encourage learning, creativity, and well-being.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {facilities.map((f, i) => (
            <div key={i}
              style={{
                background: 'var(--white)',
                borderRadius: 16,
                padding: '32px 24px',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid rgba(201,168,76,0.1)',
                cursor: 'default',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 60, height: 60,
                background: 'rgba(201,168,76,0.06)',
                borderRadius: '0 16px 0 60px',
              }} />
              <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--navy)',
                marginBottom: 10,
              }}>{f.title}</h3>
              <p style={{
                color: 'var(--text-mid)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #facilities > div > div:last-child { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 700px) {
          #facilities > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #facilities { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          #facilities > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
