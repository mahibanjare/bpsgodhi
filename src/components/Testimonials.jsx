import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sunita Sharma',
    role: 'Parent of Class VII Student',
    avatar: 'SS',
    text: 'Bright Public School has been a wonderful experience for our daughter. The teachers are dedicated, the environment is nurturing, and we can see her confidence growing every day. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Rajesh Verma',
    role: 'Parent of Class X Student',
    avatar: 'RV',
    text: 'The academic quality here is exceptional. My son scored among the top students in his CGBSE boards, and the school\'s personalized attention to each child made all the difference. A truly excellent institution.',
    stars: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Parent of LKG Student',
    avatar: 'PP',
    text: 'Sending my little one to Bright Public School was the best decision. The Nursery wing is vibrant, safe, and the teachers are so caring. My daughter loves going to school every day!',
    stars: 5,
  },
  {
    name: 'Amit Tiwari',
    role: 'Parent of Class XII Student',
    avatar: 'AT',
    text: 'Excellent faculty, modern infrastructure, and great career guidance. My son got into a top engineering college thanks to the strong foundation built here. Forever grateful to BPS.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  // Auto-slideshow every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" style={{
      background: 'var(--surface)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-30%', left: '-10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>Parent Testimonials</p>
            <span />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--navy)',
            marginTop: 12,
          }}>
            What Our Community Says
          </h2>
        </div>

        {/* Main testimonial */}
        <div style={{
          background: 'var(--surface-soft)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 20,
          padding: '48px 56px',
          marginBottom: 32,
          position: 'relative',
          transition: 'opacity 0.6s ease-in-out',
          opacity: 1,
        }}>
          {/* Quote mark */}
          <div style={{
            position: 'absolute', top: 24, left: 40,
            fontFamily: 'var(--font-display)',
            fontSize: '8rem',
            color: 'rgba(201,168,76,0.1)',
            lineHeight: 1,
            userSelect: 'none',
          }}>"</div>

          {/* Stars */}
          <div style={{ marginBottom: 20 }}>
            {'★'.repeat(testimonials[active].stars).split('').map((s, i) => (
              <span key={i} style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>{s}</span>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-italic)',
            fontSize: '1.25rem',
            color: 'var(--text-dark)',
            lineHeight: 1.85,
            fontStyle: 'italic',
            marginBottom: 32,
            position: 'relative', zIndex: 2,
          }}>
            "{testimonials[active].text}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, color: 'var(--navy)', fontSize: '1rem',
              fontFamily: 'var(--font-display)',
            }}>
              {testimonials[active].avatar}
            </div>
            <div>
              <div style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '1rem' }}>{testimonials[active].name}</div>
              <div style={{ color: 'var(--gold)', fontSize: '0.82rem', marginTop: 2 }}>{testimonials[active].role}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 32 : 10,
              height: 10,
              borderRadius: 5,
              border: 'none',
              background: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials { padding: 70px 20px !important; }
          #testimonials > div { padding: 0 10px; }
          #testimonials > div > div:nth-child(2) { padding: 32px 24px !important; }
        }
        @media (max-width: 600px) {
          #testimonials > div > div:nth-child(2) { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  )
}
