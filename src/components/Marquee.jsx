import React from 'react'

const items = [
  '🌟 Admissions Open 2026–27',
  '📚 CGBSE Affiliated English Medium School',
  '🏆 Excellence in Education',
  '🎨 Co-curricular Activities',
  '💻 Smart Classrooms',
  '🌿 Eco-Friendly Campus',
  '🏅 Sports & Cultural Programs',
  '📞 Call: 91651 87777',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      background: 'var(--gold)',
      color: 'var(--navy)',
      overflow: 'hidden',
      padding: '12px 0',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.88rem',
      letterSpacing: '0.04em',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        display: 'flex',
        gap: 60,
        whiteSpace: 'nowrap',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {item}
            <span style={{ opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
