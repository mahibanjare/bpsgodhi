import React, { useState } from 'react'
import { Sprout, BookOpen, Microscope, Trophy, GraduationCap, ArrowRight } from 'lucide-react'

const programs = [
  {
    Icon: Sprout, title: 'Early Childhood', subtitle: 'Nursery · LKG · UKG', color: '#27AE60',
    desc: 'A nurturing foundation built on play-based learning. Children develop language, numeracy, creativity, and social skills in a safe and joyful environment.',
    features: ['Activity-Based Learning', 'Story & Rhyme Sessions', 'Motor Skills Development', 'Phonics & Early Reading'],
  },
  {
    Icon: BookOpen, title: 'Primary School', subtitle: 'Class I to V', color: '#2980B9',
    desc: 'Strong foundational academics with emphasis on conceptual understanding. Students explore Science, Math, English, Hindi, and Social Studies through engaging methods.',
    features: ['CGBSE Curriculum', 'Smart Board Classes', 'Project-Based Learning', 'Regular Assessments'],
  },
  {
    Icon: Microscope, title: 'Middle School', subtitle: 'Class VI to VIII', color: '#8E44AD',
    desc: 'Building depth and critical thinking. Introduction to advanced Mathematics, Sciences, and Social Sciences prepares students for board examinations.',
    features: ['Science Lab Access', 'Computer Education', 'Debate & Public Speaking', 'Art & Craft'],
  },
  {
    Icon: Trophy, title: 'Secondary School', subtitle: 'Class IX to X', color: '#E67E22',
    desc: 'Comprehensive preparation for CGBSE Board Examinations with expert faculty, regular mock tests, and personalized mentoring for every student.',
    features: ['Board Exam Preparation', 'Expert Faculty', 'Regular Mock Tests', 'Personalized Mentoring'],
  },
  {
    Icon: GraduationCap, title: 'Senior Secondary', subtitle: 'Class XI to XII', color: '#C9A84C',
    desc: 'Specialized streams — Science, Commerce, and Arts — with career counseling, competitive exam guidance, and industry-aligned curriculum.',
    features: ['Science / Commerce / Arts', 'Career Counseling', 'Competitive Exam Guidance', 'Leadership Programs'],
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]
  const Icon = prog.Icon

  return (
    <section id="programs" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
        background: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
        backgroundSize: '30px 30px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Academic Programs</p><span /></div>
          <h2 className="section-title">Education for Every Stage</h2>
          <p className="section-subtitle">From first steps to final year — a complete learning journey under one roof.</p>
        </div>

        {/* Tabs */}
        <div className="reveal" style={{ display: 'flex', gap: 8, marginBottom: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {programs.map((p, i) => {
            const TabIcon = p.Icon
            const on = active === i
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px',
                border: on ? `2px solid ${p.color}` : '2px solid rgba(16,36,61,0.14)',
                background: on ? `${p.color}18` : '#fff',
                color: on ? p.color : 'var(--navy)',
                borderRadius: 40, cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
                transition: 'all 0.3s var(--ease)', whiteSpace: 'nowrap',
              }}>
                <TabIcon size={16} /> {p.title}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="program-card reveal reveal-zoom" key={active} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
          background: `linear-gradient(135deg, ${prog.color}0c, transparent 60%)`,
          border: '1px solid rgba(16,36,61,0.08)', borderRadius: 'var(--radius-lg)', padding: '48px 52px',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 18px',
              background: `${prog.color}1a`, border: `1px solid ${prog.color}40`,
              borderRadius: 40, marginBottom: 22,
            }}>
              <Icon size={20} color={prog.color} />
              <span style={{ color: prog.color, fontWeight: 700, fontSize: '0.88rem' }}>{prog.subtitle}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 18 }}>
              {prog.title}
            </h3>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: 30, fontSize: '0.97rem' }}>{prog.desc}</p>
            <a href="#admission" className="btn-gold">Enroll Now <ArrowRight size={16} /></a>
          </div>

          <div>
            <div style={{
              width: 96, height: 96, borderRadius: 24, margin: '0 auto 24px',
              background: `${prog.color}18`, border: `2px solid ${prog.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={48} color={prog.color} strokeWidth={1.6} />
            </div>
            <div className="prog-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {prog.features.map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
                  background: '#fff', border: '1px solid rgba(16,36,61,0.08)', borderRadius: 10,
                  boxShadow: 'var(--shadow-card)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: prog.color, flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-dark)', fontSize: '0.82rem', fontWeight: 600 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #programs .program-card { grid-template-columns: 1fr !important; padding: 32px 24px !important; gap: 28px !important; }
          #programs .program-card > div:last-child { order: 2; }
          #programs .program-card > div:first-child { order: 1; }
        }
        @media (max-width: 480px) {
          #programs .prog-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
