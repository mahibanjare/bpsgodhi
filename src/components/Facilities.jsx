import React from 'react'
import { MonitorPlay, FlaskConical, Library, Trophy, Palette, Music, UtensilsCrossed, Bus } from 'lucide-react'

const facilities = [
  { Icon: MonitorPlay, title: 'Smart Classrooms', desc: 'Digital boards and multimedia learning tools for interactive education.' },
  { Icon: FlaskConical, title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry & Biology labs for hands-on experiments.' },
  { Icon: Library, title: 'Central Library', desc: 'Vast collection of books, journals, e-resources and reading rooms.' },
  { Icon: Trophy, title: 'Sports Ground', desc: 'Large outdoor ground with facilities for cricket, football, athletics and more.' },
  { Icon: Palette, title: 'Art & Craft Room', desc: 'Dedicated creative space to nurture artistic expression and talent.' },
  { Icon: Music, title: 'Music & Dance', desc: 'Trained instructors for classical and contemporary music and dance.' },
  { Icon: UtensilsCrossed, title: 'Hygienic Canteen', desc: 'Nutritious and hygienic meals prepared under strict quality standards.' },
  { Icon: Bus, title: 'School Transport', desc: 'Safe and reliable bus service covering major areas of Naya Raipur.' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="section" style={{ background: 'var(--off-white)' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 5,
        background: 'linear-gradient(to bottom, var(--gold), var(--leaf))',
      }} />

      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>World-Class Infrastructure</p><span /></div>
          <h2 className="section-title">Facilities That Inspire</h2>
          <p className="section-subtitle">Every corner of our campus is designed to encourage learning, creativity, and well-being.</p>
        </div>

        <div className="facility-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
          {facilities.map((f, i) => (
            <div key={i} className="card reveal" style={{
              padding: '30px 24px', position: 'relative', overflow: 'hidden',
              transitionDelay: `${(i % 4) * 0.06}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 64, height: 64,
                background: 'rgba(246,166,35,0.07)', borderRadius: '0 16px 0 64px',
              }} />
              <div style={{
                width: 52, height: 52, borderRadius: 14, marginBottom: 16,
                background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(246,166,35,0.12))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}>
                <f.Icon size={26} color="var(--sun-deep)" strokeWidth={1.8} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--navy)', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { #facilities .facility-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 760px) { #facilities .facility-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 460px) { #facilities .facility-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
