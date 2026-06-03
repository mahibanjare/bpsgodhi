import React, { useState } from 'react'

const categories = ['All', 'Classrooms', 'Sports', 'Events', 'Cultural']

const items = [
  { label: 'Smart Classroom', cat: 'Classrooms', emoji: '💻', bg: '#1a3a5c' },
  { label: 'Science Lab', cat: 'Classrooms', emoji: '🔬', bg: '#1a2f4a' },
  { label: 'Annual Sports Day', cat: 'Sports', emoji: '🏃', bg: '#2d4a1a' },
  { label: 'Cricket Ground', cat: 'Sports', emoji: '🏏', bg: '#1a4a2d' },
  { label: 'Annual Day Function', cat: 'Events', emoji: '🎉', bg: '#4a1a2d' },
  { label: 'Republic Day', cat: 'Events', emoji: '🇮🇳', bg: '#3a1a4a' },
  { label: 'Cultural Dance', cat: 'Cultural', emoji: '💃', bg: '#4a3a1a' },
  { label: 'Music Program', cat: 'Cultural', emoji: '🎵', bg: '#1a4a4a' },
  { label: 'Library Reading', cat: 'Classrooms', emoji: '📚', bg: '#2d1a4a' },
]

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? items : items.filter(i => i.cat === cat)

  return (
    <section id="gallery" style={{
      background: 'var(--off-white)',
      padding: '100px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>School Life</p>
            <span />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--navy)',
            marginTop: 12,
          }}>Photo Gallery</h2>
          <p style={{ color: 'var(--text-mid)', marginTop: 12, fontSize: '0.97rem' }}>
            A glimpse into the vibrant life at Bright Public School.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '8px 22px',
              borderRadius: 40,
              border: cat === c ? '2px solid var(--navy)' : '2px solid rgba(10,22,40,0.15)',
              background: cat === c ? 'var(--navy)' : 'transparent',
              color: cat === c ? 'var(--white)' : 'var(--text-mid)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.25s',
              fontFamily: 'var(--font-body)',
            }}>{c}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {filtered.map((item, i) => (
            <div key={i} style={{
              aspectRatio: i === 0 ? '2/1' : '4/3',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              background: item.bg,
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)',
              }} />
              <div style={{ fontSize: i === 0 ? '5rem' : '3.5rem', animation: 'float 4s ease-in-out infinite', position: 'relative', zIndex: 2 }}>{item.emoji}</div>
              <div style={{
                position: 'absolute', bottom: 16, left: 20,
                color: 'white', fontWeight: 600, fontSize: '0.9rem', zIndex: 2,
              }}>{item.label}</div>
              <span style={{
                position: 'absolute', top: 12, right: 12,
                background: 'rgba(201,168,76,0.9)',
                color: 'var(--navy)',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 40,
                letterSpacing: '0.06em',
                zIndex: 2,
              }}>{item.cat}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #gallery > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
          #gallery > div > div:last-child > div:first-child { grid-column: span 2 !important; }
          #gallery { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          #gallery > div > div:last-child { grid-template-columns: 1fr !important; }
          #gallery > div > div:last-child > div:first-child { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
