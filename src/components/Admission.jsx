import React from 'react'

export default function Admission() {

  const steps = [
    { n: '01', title: 'Fill Inquiry Form', desc: 'Complete the online inquiry form with your details.' },
    { n: '02', title: 'Visit School', desc: 'Schedule a campus tour and meet our academic team.' },
    { n: '03', title: 'Document Submission', desc: 'Submit required documents and complete registration.' },
    { n: '04', title: 'Welcome Aboard!', desc: 'Your child joins the Bright Public School family.' },
  ]

  return (
    <section id="admission" style={{
      background: 'var(--surface)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>Admissions 2026–27</p>
            <span />
          </div>
            <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
              color: 'var(--navy)',
            marginTop: 12,
          }}>
            Join the <span style={{ color: 'var(--gold)' }}>Bright Family</span>
          </h2>
            <p style={{ color: 'var(--text-mid)', marginTop: 12, fontSize: '0.97rem', maxWidth: 500, margin: '12px auto 0' }}>
            Admissions are now open for Nursery to Class XII. Secure your child's future today.
          </p>
        </div>

        {/* Steps */}
        <div className="admission-steps" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          marginBottom: 72,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '28px 20px',
                  background: 'var(--surface-soft)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 16,
              position: 'relative',
            }}>
              {i < 3 && (
                <div style={{
                  position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                  color: 'rgba(201,168,76,0.3)', fontSize: '1.2rem', zIndex: 3,
                }}>→</div>
              )}
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 900,
                color: 'var(--navy)', fontSize: '1rem',
                margin: '0 auto 16px',
              }}>{s.n}</div>
              <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 8, fontSize: '0.95rem' }}>{s.title}</h4>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="admission-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--navy)',
              marginBottom: 16,
            }}>Admission Inquiry</h3>
            <p style={{ color: 'var(--text-mid)', marginBottom: 32, lineHeight: 1.7, fontSize: '0.92rem' }}>
              Use the form below to submit your admission inquiry directly to our admissions team.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📞', label: '91651 87777' },
                { icon: '📍', label: 'Godhi, Mandir Hasaud, Naya Raipur, CG' },
                { icon: '🕐', label: 'Mon–Sat: 8:00 AM – 2:00 PM' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
                  <span style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <iframe
              title="Admission Google Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1M3Cy-Vsndu2b2udEm84xHGeRBXFeVTtMFsHqSjie-aIQbA/viewform?embedded=true"
              width="100%"
              height="820"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{
                borderRadius: 20,
                border: '1px solid rgba(201,168,76,0.18)',
                minHeight: 560,
                background: 'white',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #admission { padding: 60px 20px !important; }
          #admission .admission-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #admission .admission-grid > div:first-child { order: 1; }
          #admission .admission-grid > div:last-child { order: 2; }
          #admission .admission-steps { grid-template-columns: repeat(2, 1fr) !important; }
          #admission iframe { height: 780px !important; }
        }
        @media (max-width: 600px) {
          #admission .admission-grid { gap: 24px !important; }
          #admission .admission-steps { grid-template-columns: 1fr !important; }
          #admission iframe { height: 920px !important; }
        }
        @media (max-width: 600px) {
          #admission .admission-grid { gap: 24px !important; }
          #admission iframe { height: 920px !important; }
        }
      `}</style>
    </section>
  )
}
