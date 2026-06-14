import React, { useState } from 'react'
import { MonitorPlay, FlaskConical, Medal, Trophy, PartyPopper, Flag, Music, BookOpen } from 'lucide-react'

const categories = ['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Cultural']

const items = [
  { label: 'Campus Entrance', cat: 'Campus', photo: '/campus.png', featured: true },
  { label: 'Smart Classroom', cat: 'Classrooms', Icon: MonitorPlay, from: '#1E3A5F', to: '#0A1628' },
  { label: 'Science Lab', cat: 'Classrooms', Icon: FlaskConical, from: '#1a3a4a', to: '#0e2230' },
  { label: 'Annual Sports Day', cat: 'Sports', Icon: Medal, from: '#3a5a1a', to: '#1f3310' },
  { label: 'Cricket Ground', cat: 'Sports', Icon: Trophy, from: '#1a4a2d', to: '#0f2c1a' },
  { label: 'Annual Day Function', cat: 'Events', Icon: PartyPopper, from: '#5a2a1a', to: '#331810' },
  { label: 'Republic Day', cat: 'Events', Icon: Flag, from: '#3a1a4a', to: '#220f2c' },
  { label: 'Cultural Dance', cat: 'Cultural', Icon: Music, from: '#5a4a1a', to: '#332a0f' },
  { label: 'Library Reading', cat: 'Classrooms', Icon: BookOpen, from: '#2d1a4a', to: '#190f2c' },
]

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? items : items.filter(i => i.cat === cat)

  return (
    <section id="gallery" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>School Life</p><span /></div>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">A glimpse into the vibrant life at Bright Public School.</p>
        </div>

        <div className="reveal" style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
          {categories.map(c => {
            const on = cat === c
            return (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '8px 20px', borderRadius: 40,
                border: on ? '2px solid var(--navy)' : '2px solid rgba(10,22,40,0.15)',
                background: on ? 'var(--navy)' : 'transparent',
                color: on ? '#fff' : 'var(--text-mid)',
                fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer', transition: 'all 0.25s var(--ease)',
              }}>{c}</button>
            )
          })}
        </div>

        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {filtered.map((item, i) => {
            const big = item.featured
            return (
              <figure key={item.label} className="reveal" style={{
                margin: 0,
                aspectRatio: big ? '2 / 1' : '4 / 3',
                gridColumn: big ? 'span 2' : 'span 1',
                background: item.photo ? 'var(--navy)' : `linear-gradient(150deg, ${item.from}, ${item.to})`,
                borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'transform 0.35s var(--ease)', position: 'relative',
                overflow: 'hidden', border: '1px solid rgba(201,168,76,0.18)',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {item.photo ? (
                  <img src={item.photo} alt={item.label} loading="lazy" decoding="async"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <item.Icon size={big ? 64 : 44} color="rgba(255,255,255,0.92)" strokeWidth={1.5}
                    style={{ animation: 'float 4s ease-in-out infinite', position: 'relative', zIndex: 2 }} />
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />
                <figcaption style={{ position: 'absolute', bottom: 16, left: 20, color: '#fff', fontWeight: 700, fontSize: '0.92rem', zIndex: 2 }}>
                  {item.label}
                </figcaption>
                <span style={{
                  position: 'absolute', top: 12, right: 12, zIndex: 2,
                  background: 'linear-gradient(90deg, var(--gold), var(--sun))', color: 'var(--navy)',
                  fontSize: '0.68rem', fontWeight: 800, padding: '3px 10px', borderRadius: 40, letterSpacing: '0.05em',
                }}>{item.cat}</span>
              </figure>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #gallery .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #gallery .gallery-grid figure:first-child { grid-column: span 2 !important; }
        }
        @media (max-width: 460px) {
          #gallery .gallery-grid { grid-template-columns: 1fr !important; }
          #gallery .gallery-grid figure { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
