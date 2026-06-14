import React from 'react'
import { ClipboardList, School, FileCheck2, PartyPopper, Phone, MapPin, Clock, ChevronRight } from 'lucide-react'

const steps = [
  { n: '01', Icon: ClipboardList, title: 'Fill Inquiry Form', desc: 'Complete the online inquiry form with your details.' },
  { n: '02', Icon: School, title: 'Visit School', desc: 'Schedule a campus tour and meet our academic team.' },
  { n: '03', Icon: FileCheck2, title: 'Document Submission', desc: 'Submit required documents and complete registration.' },
  { n: '04', Icon: PartyPopper, title: 'Welcome Aboard!', desc: 'Your child joins the Bright Public School family.' },
]

const contacts = [
  { Icon: Phone, label: '91651 87777' },
  { Icon: MapPin, label: 'Godhi, Mandir Hasaud, Naya Raipur, CG' },
  { Icon: Clock, label: 'Mon–Sat: 8:00 AM – 2:00 PM' },
]

export default function Admission() {
  return (
    <section id="admission" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246,166,35,0.08) 0%, transparent 70%)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Admissions 2026–27</p><span /></div>
          <h2 className="section-title">Join the <span className="accent">Bright Family</span></h2>
          <p className="section-subtitle">Admissions are now open for Nursery to Class XII. Secure your child's future today.</p>
        </div>

        {/* Steps */}
        <div className="admission-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginBottom: 68 }}>
          {steps.map((s, i) => (
            <div key={i} className="reveal card" style={{
              textAlign: 'center', padding: '30px 20px', position: 'relative',
              background: 'var(--surface-soft)', transitionDelay: `${i * 0.08}s`,
            }}>
              {i < 3 && (
                <ChevronRight size={20} color="rgba(201,168,76,0.4)" style={{
                  position: 'absolute', right: -13, top: '50%', transform: 'translateY(-50%)', zIndex: 3,
                }} className="step-arrow" />
              )}
              <div style={{
                width: 56, height: 56, borderRadius: '50%', margin: '0 auto 16px', position: 'relative',
                background: 'linear-gradient(135deg, var(--gold), var(--sun))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.Icon size={24} color="var(--navy)" />
                <span style={{
                  position: 'absolute', top: -6, right: -6, width: 24, height: 24, borderRadius: '50%',
                  background: 'var(--navy)', color: 'var(--gold)', fontSize: '0.66rem', fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)',
                }}>{s.n}</span>
              </div>
              <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 8, fontSize: '0.95rem' }}>{s.title}</h4>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="admission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div className="reveal reveal-left">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 16 }}>
              Admission Inquiry
            </h3>
            <p style={{ color: 'var(--text-mid)', marginBottom: 30, lineHeight: 1.7, fontSize: '0.92rem' }}>
              Use the form to submit your admission inquiry directly to our admissions team.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contacts.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(201,168,76,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <c.Icon size={18} color="var(--gold)" />
                  </span>
                  <span style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>{c.label}</span>
                </div>
              ))}
            </div>
            <a href="tel:+919165187777" className="btn-gold" style={{ marginTop: 28 }}>
              <Phone size={16} /> Call Admissions
            </a>
          </div>

          <div className="reveal reveal-right" style={{ minWidth: 0 }}>
            <iframe
              title="Admission Inquiry Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1M3Cy-Vsndu2b2udEm84xHGeRBXFeVTtMFsHqSjie-aIQbA/viewform?embedded=true"
              width="100%" height="820" frameBorder="0" marginHeight="0" marginWidth="0" loading="lazy"
              style={{ borderRadius: 20, border: '1px solid rgba(201,168,76,0.18)', minHeight: 560, background: '#fff', display: 'block' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #admission .admission-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          #admission .admission-steps { grid-template-columns: repeat(2, 1fr) !important; }
          #admission .step-arrow { display: none !important; }
          #admission iframe { height: 800px !important; }
        }
        @media (max-width: 600px) {
          #admission .admission-steps { grid-template-columns: 1fr !important; }
          #admission iframe { height: 920px !important; }
        }
      `}</style>
    </section>
  )
}
