import React from 'react'

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--cream)',
      padding: '100px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>Get In Touch</p>
            <span />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--navy)',
            marginTop: 12,
          }}>Visit Our Campus</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                icon: '📍',
                title: 'Address',
                lines: ['Godhi, Mandir Hasaud,', 'Naya Raipur, Chhattisgarh'],
              },
              {
                icon: '📞',
                title: 'Phone',
                lines: ['+91 91651 87777'],
                isPhone: true,
              },
              {
                icon: '🕐',
                title: 'School Hours',
                lines: ['Monday – Saturday', '8:00 AM – 2:00 PM'],
              },
              {
                icon: '🏛️',
                title: 'Board Affiliation',
                lines: ['Chhattisgarh Board of', 'Secondary Education (CGBSE)'],
              },
            ].map(c => (
              <div key={c.title} style={{
                background: 'var(--white)',
                borderRadius: 16,
                padding: '24px 24px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                border: '1px solid rgba(201,168,76,0.1)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-gold)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(201,168,76,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6, fontSize: '0.92rem' }}>{c.title}</div>
                  {c.lines.map((l, i) => (
                    c.isPhone
                      ? <a key={i} href={`tel:+919165187777`} style={{ display: 'block', color: 'var(--gold)', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none' }}>{l}</a>
                      : <div key={i} style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.6 }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-navy)', border: '3px solid rgba(201,168,76,0.2)' }}>
            <iframe
              title="Bright Public School Location"
              src="https://maps.google.com/maps?q=21.2494674,81.845539&z=18&output=embed&hl=en"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  )
}
