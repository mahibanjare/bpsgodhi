import React from 'react'
import { MapPin, Phone, Clock, Landmark } from 'lucide-react'
import { useSite } from '../SiteContext'
import { fmtPhone, telPhone } from '../siteConfig'

export default function Contact() {
  const { phone } = useSite()

  const cards = [
    { Icon: MapPin, title: 'Address', lines: ['Godhi, Mandir Hasaud,', 'Naya Raipur, Chhattisgarh'] },
    { Icon: Phone, title: 'Phone', lines: [`+91 ${fmtPhone(phone)}`], isPhone: true },
    { Icon: Clock, title: 'School Hours', lines: ['Monday – Saturday', '8:00 AM – 2:00 PM'] },
    { Icon: Landmark, title: 'Board Affiliation', lines: ['Chhattisgarh Board of', 'Secondary Education (CGBSE)'] },
  ]

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
                      ? <a key={i} href={`tel:${telPhone(phone)}`} style={{ display: 'block', color: 'var(--gold)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>{l}</a>
                      : <div key={i} style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.6 }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-right" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-navy)', border: '3px solid rgba(201,168,76,0.2)' }}>
            <iframe
              title="Bright Public School location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.6411213687481!2d81.84489526954833!3d21.24946739877846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49a388b1014b1857%3A0xc8040a05b8c0c96a!2sBright%20Public%20School%20Godhi!5e1!3m2!1sen!2sin!4v1786277852640!5m2!1sen!2sin"
              width="100%" height="470" style={{ border: 0, display: 'block', minHeight: 360 }}
              allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
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
