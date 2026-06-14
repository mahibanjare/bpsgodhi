import React, { useState, useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sunita Sharma', role: 'Parent of Class VII Student', avatar: 'SS', stars: 5,
    text: 'Bright Public School has been a wonderful experience for our daughter. The teachers are dedicated, the environment is nurturing, and we can see her confidence growing every day. Highly recommended!',
  },
  {
    name: 'Rajesh Verma', role: 'Parent of Class X Student', avatar: 'RV', stars: 5,
    text: "The academic quality here is exceptional. My son scored among the top students in his CGBSE boards, and the school's personalized attention to each child made all the difference. A truly excellent institution.",
  },
  {
    name: 'Priya Patel', role: 'Parent of LKG Student', avatar: 'PP', stars: 5,
    text: 'Sending my little one to Bright Public School was the best decision. The Nursery wing is vibrant, safe, and the teachers are so caring. My daughter loves going to school every day!',
  },
  {
    name: 'Amit Tiwari', role: 'Parent of Class XII Student', avatar: 'AT', stars: 5,
    text: 'Excellent faculty, modern infrastructure, and great career guidance. My son got into a top engineering college thanks to the strong foundation built here. Forever grateful to BPS.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive(p => (p + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{
        position: 'absolute', top: '-30%', left: '-10%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: 900, position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Parent Testimonials</p><span /></div>
          <h2 className="section-title">What Our Community Says</h2>
        </div>

        <div className="reveal t-card"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          style={{
            background: 'var(--surface-soft)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 'var(--radius-lg)', padding: '48px 52px', marginBottom: 28,
            position: 'relative', boxShadow: 'var(--shadow-card)',
          }}>
          <Quote size={64} color="rgba(201,168,76,0.16)" fill="rgba(201,168,76,0.16)"
            style={{ position: 'absolute', top: 26, left: 36 }} />

          <div key={active} className="animate-fadeIn" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={20} color="var(--sun)" fill="var(--sun)" />
              ))}
            </div>

            <p style={{
              fontFamily: 'var(--font-italic)', fontSize: '1.3rem', color: 'var(--text-dark)',
              lineHeight: 1.8, fontStyle: 'italic', marginBottom: 30,
            }}>
              "{t.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--sun))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', fontFamily: 'var(--font-display)',
              }}>{t.avatar}</div>
              <div>
                <div style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                <div style={{ color: 'var(--gold)', fontSize: '0.82rem', marginTop: 2, fontWeight: 600 }}>{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} style={{
              width: i === active ? 32 : 10, height: 10, borderRadius: 5, border: 'none',
              background: i === active ? 'linear-gradient(90deg, var(--gold), var(--sun))' : 'rgba(16,36,61,0.18)',
              cursor: 'pointer', transition: 'all 0.3s var(--ease)', padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #testimonials .t-card { padding: 30px 22px !important; }
          #testimonials .t-card p { font-size: 1.12rem !important; }
        }
      `}</style>
    </section>
  )
}
