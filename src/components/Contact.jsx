import React from 'react'
import { MapPin, Phone, Clock, Landmark } from 'lucide-react'

const cards = [
  { Icon: MapPin, title: 'Address', lines: ['Godhi, Mandir Hasaud,', 'Naya Raipur, Chhattisgarh'] },
  { Icon: Phone, title: 'Phone', lines: ['+91 91651 87777'], isPhone: true },
  { Icon: Clock, title: 'School Hours', lines: ['Monday – Saturday', '8:00 AM – 2:00 PM'] },
  { Icon: Landmark, title: 'Board Affiliation', lines: ['Chhattisgarh Board of', 'Secondary Education (CGBSE)'] },
]

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Get In Touch</p><span /></div>
          <h2 className="section-title">Visit Our Campus</h2>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 36, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {cards.map(c => (
              <div key={c.title} className="card reveal reveal-left" style={{
                padding: '22px 22px', display: 'flex', gap: 16, alignItems: 'flex-start',
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-gold)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(201,168,76,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <c.Icon size={20} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6, fontSize: '0.92rem' }}>{c.title}</div>
                  {c.lines.map((l, i) => (
                    c.isPhone
                      ? <a key={i} href="tel:+919165187777" style={{ display: 'block', color: 'var(--gold)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>{l}</a>
                      : <div key={i} style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.6 }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-right" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-navy)', border: '3px solid rgba(201,168,76,0.2)' }}>
            <iframe
              title="Bright Public School location map"
              src="https://maps.google.com/maps?q=21.2494674,81.845539&z=18&output=embed&hl=en"
              width="100%" height="470" style={{ border: 0, display: 'block', minHeight: 360 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
