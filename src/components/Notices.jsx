import React from 'react'
import { Bell, CalendarDays, Megaphone, PartyPopper } from 'lucide-react'
import { useSite } from '../SiteContext'

const tagStyle = {
  Admission: { bg: 'rgba(201,168,76,0.15)', color: '#8a6d1f', Icon: Megaphone },
  Event: { bg: 'rgba(58,138,80,0.12)', color: '#2c6e42', Icon: PartyPopper },
  Notice: { bg: 'rgba(30,58,95,0.1)', color: 'var(--navy)', Icon: Bell },
  Exam: { bg: 'rgba(160,60,60,0.1)', color: '#a03c3c', Icon: CalendarDays },
  Holiday: { bg: 'rgba(90,60,160,0.1)', color: '#5a3ca0', Icon: CalendarDays },
}

const fmtDate = iso => {
  const d = new Date(iso + 'T00:00:00')
  if (isNaN(d)) return { day: '--', mon: '' }
  return {
    day: String(d.getDate()).padStart(2, '0'),
    mon: d.toLocaleString('en-IN', { month: 'short' }),
  }
}

export default function Notices() {
  const { notices, showNotices } = useSite()
  if (showNotices === false || !notices?.length) return null

  const sorted = [...notices].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <section id="notices" className="section" style={{ background: 'var(--surface-soft)', paddingTop: 70, paddingBottom: 70 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Stay Updated</p><span /></div>
          <h2 className="section-title">Notice Board <span className="accent">& Events</span></h2>
        </div>

        <div className="notices-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16, maxWidth: 1000, margin: '0 auto',
        }}>
          {sorted.slice(0, 6).map(n => {
            const t = tagStyle[n.tag] || tagStyle.Notice
            const { day, mon } = fmtDate(n.date)
            return (
              <div key={n.id} className="reveal card" style={{
                display: 'flex', gap: 16, alignItems: 'center', padding: '18px 20px', background: 'var(--surface)',
              }}>
                <div style={{
                  flexShrink: 0, width: 58, height: 62, borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>{day}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{mon}</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 6,
                    background: t.bg, color: t.color, fontSize: '0.66rem', fontWeight: 800,
                    padding: '3px 10px', borderRadius: 40, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    <t.Icon size={11} /> {n.tag}
                  </span>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                    {n.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
