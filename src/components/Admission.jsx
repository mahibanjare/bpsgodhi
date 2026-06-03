import React, { useState } from 'react'

export default function Admission() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', class: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', phone: '', email: '', class: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: 8,
    color: 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.25s',
  }

  const steps = [
    { n: '01', title: 'Fill Inquiry Form', desc: 'Complete the online inquiry form with your details.' },
    { n: '02', title: 'Visit School', desc: 'Schedule a campus tour and meet our academic team.' },
    { n: '03', title: 'Document Submission', desc: 'Submit required documents and complete registration.' },
    { n: '04', title: 'Welcome Aboard!', desc: 'Your child joins the Bright Public School family.' },
  ]

  return (
    <section id="admission" style={{
      background: 'var(--navy)',
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
            color: 'var(--white)',
            marginTop: 12,
          }}>
            Join the <span style={{ color: 'var(--gold)' }}>Bright Family</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 12, fontSize: '0.97rem', maxWidth: 500, margin: '12px auto 0' }}>
            Admissions are now open for Nursery to Class XII. Secure your child's future today.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          marginBottom: 72,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '28px 20px',
              background: 'rgba(255,255,255,0.04)',
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
              <h4 style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8, fontSize: '0.95rem' }}>{s.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{
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
              color: 'var(--white)',
              marginBottom: 16,
            }}>Admission Inquiry</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.7, fontSize: '0.92rem' }}>
              Fill out the form and our team will get in touch with you within 24 hours to guide you through the admission process.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📞', label: '91651 87777' },
                { icon: '📍', label: 'Godhi, Mandir Hasaud, Naya Raipur, CG' },
                { icon: '🕐', label: 'Mon–Sat: 8:00 AM – 2:00 PM' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit}>
            {sent && (
              <div style={{
                background: 'rgba(39,174,96,0.15)',
                border: '1px solid rgba(39,174,96,0.4)',
                borderRadius: 10,
                padding: '14px 20px',
                color: '#2ecc71',
                marginBottom: 20,
                fontSize: '0.9rem',
              }}>
                ✅ Thank you! We'll contact you shortly.
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <input name="name" value={form.name} onChange={handle} placeholder="Parent/Guardian Name" required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
              />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Mobile Number" required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
              />
            </div>
            <input name="email" value={form.email} onChange={handle} placeholder="Email Address" style={{ ...inputStyle, marginBottom: 14 }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
            />
            <select name="class" value={form.class} onChange={handle} required style={{ ...inputStyle, marginBottom: 14 }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
            >
              <option value="" disabled>Select Class for Admission</option>
              {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
                'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'].map(c => (
                <option key={c} value={c} style={{ background: '#0A1628' }}>{c}</option>
              ))}
            </select>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Any specific query or message..." rows={4}
              style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
            />
            <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: 16 }}>
              Submit Inquiry →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #admission > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #admission > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
          #admission { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  )
}
