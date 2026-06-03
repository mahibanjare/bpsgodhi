import React, { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 20)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled', icon: '👨‍🎓' },
  { value: 30, suffix: '+', label: 'Expert Teachers', icon: '👩‍🏫' },
  { value: 14, suffix: '', label: 'Classes Offered', icon: '📚' },
  { value: 100, suffix: '%', label: 'CGBSE Certified', icon: '🏅' },
]

export default function Stats() {
  return (
    <section style={{
      background: 'var(--gold)',
      padding: '64px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative lines */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(90deg, rgba(10,22,40,0.07) 0, rgba(10,22,40,0.07) 1px, transparent 0, transparent 25%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 32,
        position: 'relative',
        zIndex: 2,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '20px',
            borderRight: i < 3 ? '1px solid rgba(10,22,40,0.15)' : 'none',
          }}>
            <div style={{ fontSize: '2.4rem', marginBottom: 8 }}>{s.icon}</div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--navy)',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'rgba(10,22,40,0.7)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          section > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
