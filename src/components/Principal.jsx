import React from 'react'
import { Quote, UserRound } from 'lucide-react'
import { useSite } from '../SiteContext'

export default function Principal() {
  const { principal } = useSite()

  return (
    <section id="principal" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>From the Principal's Desk</p><span /></div>
          <h2 className="section-title">Principal's <span className="accent">Message</span></h2>
        </div>

        <div className="principal-grid reveal" style={{
          display: 'grid', gridTemplateColumns: '260px 1fr', gap: 44, alignItems: 'center',
          maxWidth: 980, margin: '0 auto',
        }}>
          {/* Photo */}
          <div style={{ justifySelf: 'center' }}>
            <div style={{
              width: 220, height: 260, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              border: '3px solid rgba(201,168,76,0.35)', boxShadow: 'var(--shadow-navy)',
              background: 'linear-gradient(150deg, var(--navy), var(--navy-light))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              {principal.photo ? (
                <img src={principal.photo} alt={principal.name} loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <UserRound size={90} color="rgba(255,255,255,0.85)" strokeWidth={1.2} />
              )}
            </div>
          </div>

          {/* Message */}
          <div style={{ position: 'relative' }}>
            <Quote size={44} color="rgba(201,168,76,0.3)" style={{ position: 'absolute', top: -18, left: -8 }} />
            <p style={{
              fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: '1.08rem',
              color: 'var(--text-dark)', lineHeight: 1.9, marginBottom: 22, position: 'relative',
              whiteSpace: 'pre-line',
            }}>
              {principal.message}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 44, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, var(--gold), var(--sun))' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--navy)', fontSize: '1.05rem' }}>
                  {principal.name}
                </div>
                <div style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {principal.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #principal .principal-grid { grid-template-columns: 1fr !important; gap: 28px !important; text-align: center; }
          #principal .principal-grid > div:last-child > div:last-child { justify-content: center; }
        }
      `}</style>
    </section>
  )
}
