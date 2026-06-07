import React, { useState } from 'react'

const programs = [
  {
    emoji: '🌱',
    title: 'Early Childhood',
    subtitle: 'Nursery · LKG · UKG',
    color: '#27AE60',
    desc: 'A nurturing foundation built on play-based learning. Children develop language, numeracy, creativity, and social skills in a safe and joyful environment.',
    features: ['Activity-Based Learning', 'Story & Rhyme Sessions', 'Motor Skills Development', 'Phonics & Early Reading'],
  },
  {
    emoji: '📖',
    title: 'Primary School',
    subtitle: 'Class I to V',
    color: '#2980B9',
    desc: 'Strong foundational academics with emphasis on conceptual understanding. Students explore Science, Math, English, Hindi, and Social Studies through engaging methods.',
    features: ['CGBSE Curriculum', 'Smart Board Classes', 'Project-Based Learning', 'Regular Assessments'],
  },
  {
    emoji: '🔬',
    title: 'Middle School',
    subtitle: 'Class VI to VIII',
    color: '#8E44AD',
    desc: 'Building depth and critical thinking. Introduction to advanced Mathematics, Sciences, and Social Sciences prepares students for board examinations.',
    features: ['Science Lab Access', 'Computer Education', 'Debate & Public Speaking', 'Art & Craft'],
  },
  {
    emoji: '🏆',
    title: 'Secondary School',
    subtitle: 'Class IX to X',
    color: '#E67E22',
    desc: 'Comprehensive preparation for CGBSE Board Examinations with expert faculty, regular mock tests, and personalized mentoring for every student.',
    features: ['Board Exam Preparation', 'Expert Faculty', 'Regular Mock Tests', 'Personalized Mentoring'],
  },
  {
    emoji: '🎓',
    title: 'Senior Secondary',
    subtitle: 'Class XI to XII',
    color: '#C9A84C',
    desc: 'Specialized streams — Science, Commerce, and Arts — with career counseling, competitive exam guidance, and industry-aligned curriculum.',
    features: ['Science / Commerce / Arts', 'Career Counseling', 'Competitive Exam Guidance', 'Leadership Programs'],
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section id="programs" style={{
      background: 'var(--surface)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
        background: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
        backgroundSize: '30px 30px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="gold-divider" style={{ justifyContent: 'center' }}>
            <span />
            <p>Academic Programs</p>
            <span />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--navy)',
            lineHeight: 1.2,
            marginTop: 12,
          }}>
            Education for Every Stage
          </h2>
          <p style={{ color: 'var(--text-mid)', marginTop: 12, fontSize: '0.97rem', maxWidth: 500, margin: '12px auto 0' }}>
            From first steps to final year — a complete learning journey under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 40,
          overflowX: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {programs.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '10px 22px',
              border: active === i ? `2px solid ${p.color}` : '2px solid rgba(255,255,255,0.1)',
              background: active === i ? `${p.color}22` : 'transparent',
              color: active === i ? p.color : 'rgba(255,255,255,0.5)',
              borderRadius: 40,
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)',
            }}>
              {p.emoji} {p.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
          background: 'var(--surface-soft)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '48px 56px',
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 20px',
              background: `${prog.color}22`,
              border: `1px solid ${prog.color}44`,
              borderRadius: 40,
              marginBottom: 24,
            }}>
              <span style={{ fontSize: '1.4rem' }}>{prog.emoji}</span>
              <span style={{ color: prog.color, fontWeight: 600, fontSize: '0.9rem' }}>{prog.subtitle}</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: 'var(--white)',
              marginBottom: 20,
            }}>{prog.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 32, fontSize: '0.97rem' }}>
              {prog.desc}
            </p>
            <a href="#admission" className="btn-gold">Enroll Now →</a>
          </div>

          <div>
            <div style={{ fontSize: '5rem', marginBottom: 24, textAlign: 'center' }}>{prog.emoji}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {prog.features.map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: prog.color, flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.83rem', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #programs > div > div:last-child { grid-template-columns: 1fr !important; padding: 32px !important; }
          #programs { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  )
}
