import React, { useEffect, useRef, useState } from 'react'
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const duration = 1500
        const start = performance.now()
        const tick = now => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setCount(Math.round(target * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled', Icon: Users },
  { value: 30, suffix: '+', label: 'Expert Teachers', Icon: GraduationCap },
  { value: 14, suffix: '', label: 'Classes Offered', Icon: BookOpen },
  { value: 100, suffix: '%', label: 'CGBSE Certified', Icon: Award },
]

export default function Stats() {
  return (
    <section style={{
      background: 'linear-gradient(120deg, var(--navy), var(--navy-light))',
      padding: '70px 40px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        background: 'radial-gradient(60% 120% at 100% 0%, rgba(246,166,35,0.16) 0%, transparent 60%)',
      }} />
      <div className="stats-grid" style={{
        maxWidth: 1100, margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, position: 'relative', zIndex: 2,
      }}>
        {stats.map((s, i) => (
          <div key={i} className="reveal" style={{
            textAlign: 'center', padding: '12px 20px',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, margin: '0 auto 14px',
              background: 'linear-gradient(135deg, var(--gold), var(--sun))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <s.Icon size={28} color="var(--navy)" />
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
              fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 8,
            }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{
              fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 16px !important; }
          .stats-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
