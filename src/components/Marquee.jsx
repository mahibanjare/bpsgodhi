import React from 'react'
import { useSite } from '../SiteContext'
import { fmtPhone } from '../siteConfig'

export default function Marquee() {
  const { session, phone } = useSite()

  const items = [
    `🌟 Admissions Open ${session}`,
    '📚 CGBSE Affiliated English Medium School',
    '🏆 Excellence in Education',
    '🎨 Co-curricular Activities',
    '💻 Smart Classrooms',
    '🌿 Eco-Friendly Campus',
    '🏅 Sports & Cultural Programs',
    `📞 Call: ${fmtPhone(phone)}`,
  ]
  const doubled = [...items, ...items]
  return (
    <div className="bps-marquee" style={{
      background: 'linear-gradient(90deg, var(--gold), var(--sun))',
      color: 'var(--navy)', overflow: 'hidden', padding: '12px 0',
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.88rem',
      letterSpacing: '0.04em', position: 'relative', zIndex: 10,
    }}>
      <div className="bps-marquee-track" style={{
        display: 'flex', gap: 56, whiteSpace: 'nowrap',
        animation: 'marquee 32s linear infinite', width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {item}
            <span style={{ opacity: 0.45 }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`.bps-marquee:hover .bps-marquee-track { animation-play-state: paused; }`}</style>
    </div>
  )
}
