import React from 'react'
import { IndianRupee, Info, Phone } from 'lucide-react'
import { useSite } from '../SiteContext'
import { fmtPhone, telPhone } from '../siteConfig'

export default function Fees() {
  const { fees, feesNote, session, phone } = useSite()

  return (
    <section id="fees" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Session {session}</p><span /></div>
          <h2 className="section-title">Fee <span className="accent">Structure</span></h2>
          <p className="section-subtitle">Transparent and affordable — quality education within every family's reach.</p>
        </div>

        <div className="reveal" style={{
          maxWidth: 860, margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid rgba(201,168,76,0.25)', boxShadow: 'var(--shadow-card)', background: 'var(--surface)',
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: 480 }}>
              <thead>
                <tr style={{ background: 'linear-gradient(120deg, var(--navy), var(--navy-light))' }}>
                  {['Class Group', 'Admission Fee', 'Monthly Fee'].map(h => (
                    <th key={h} style={{
                      color: '#fff', textAlign: 'left', padding: '16px 22px', fontWeight: 700,
                      fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.15)', background: i % 2 ? 'rgba(201,168,76,0.05)' : 'transparent' }}>
                    <td style={{ padding: '15px 22px', fontWeight: 700, color: 'var(--navy)' }}>{f.group}</td>
                    <td style={{ padding: '15px 22px', color: 'var(--text-mid)' }}>
                      {f.admission && f.admission !== '—' ? <span style={{ display: 'inline-flex', alignItems: 'center' }}><IndianRupee size={13} />{f.admission}</span> : '—'}
                    </td>
                    <td style={{ padding: '15px 22px', color: 'var(--text-mid)' }}>
                      {f.monthly && f.monthly !== '—' ? <span style={{ display: 'inline-flex', alignItems: 'center' }}><IndianRupee size={13} />{f.monthly}</span> : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            display: 'flex', gap: 12, alignItems: 'flex-start', padding: '18px 22px',
            background: 'rgba(201,168,76,0.08)', borderTop: '1px solid rgba(201,168,76,0.2)',
          }}>
            <Info size={17} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: 'var(--text-mid)', fontSize: '0.84rem', lineHeight: 1.7, margin: 0 }}>{feesNote}</p>
          </div>
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 30 }}>
          <a href={`tel:${telPhone(phone)}`} className="btn-gold">
            <Phone size={16} /> Fee Details: {fmtPhone(phone)}
          </a>
        </div>
      </div>
    </section>
  )
}
