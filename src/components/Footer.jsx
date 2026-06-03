import React from 'react'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#060E1A',
      color: 'rgba(255,255,255,0.6)',
      fontFamily: 'var(--font-body)',
    }}>
      {/* CTA band */}
      <div style={{
        background: 'linear-gradient(135deg, var(--gold) 0%, #A8822A 100%)',
        padding: '48px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 6 }}>
            Admissions Open for 2025–26
          </h3>
          <p style={{ color: 'rgba(10,22,40,0.7)', fontSize: '0.95rem' }}>
            Nursery to Class XII · CBSE · English Medium · Call us today!
          </p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="tel:+919165187777" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px',
            background: 'var(--navy)',
            color: 'var(--gold)',
            fontWeight: 700, fontSize: '0.95rem',
            borderRadius: 6, textDecoration: 'none',
            transition: 'all 0.3s',
          }}>📞 91651 87777</a>
          <a href="#admission" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px',
            background: 'transparent',
            border: '2px solid var(--navy)',
            color: 'var(--navy)',
            fontWeight: 700, fontSize: '0.95rem',
            borderRadius: 6, textDecoration: 'none',
          }}>Apply Now →</a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '64px 40px 40px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <Logo size={52} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>
                Bright Public School
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase' }}>
                CBSE • English Medium
              </div>
            </div>
          </div>
          <p style={{ lineHeight: 1.8, fontSize: '0.88rem', maxWidth: 280, marginBottom: 24 }}>
            Illuminating Minds, Building Futures. A premier CBSE English Medium institution in Naya Raipur offering quality education from Nursery to Class XII.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Facebook', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >{s[0]}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Home', '#home'], ['About Us', '#about'], ['Programs', '#programs'],
              ['Facilities', '#facilities'], ['Gallery', '#gallery'], ['Contact', '#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} style={{
                  color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                  fontSize: '0.87rem', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>▶</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Classes */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
            Classes
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Nursery · LKG · UKG', 'Primary (I–V)', 'Middle (VI–VIII)', 'Secondary (IX–X)', 'Sr. Secondary (XI–XII)', 'Science / Commerce / Arts'].map(c => (
              <li key={c} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem' }}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
            Contact Info
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>📍</span>
              <span style={{ fontSize: '0.87rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)' }}>
                Godhi, Mandir Hasaud,<br />Naya Raipur, CG
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: '1rem' }}>📞</span>
              <a href="tel:+919165187777" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem' }}>
                91651 87777
              </a>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1rem' }}>🕐</span>
              <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                Mon–Sat<br />8:00 AM – 2:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 40px',
        maxWidth: 1200, margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ fontSize: '0.8rem' }}>
          © {year} Bright Public School, Naya Raipur. All Rights Reserved.
        </p>
        <p style={{ fontSize: '0.8rem' }}>
          CBSE English Medium School | Nursery to Class XII
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; padding: 48px 20px 32px !important; }
          footer > div:nth-child(1) { padding: 32px 20px !important; }
          footer > div:last-child { padding: 20px !important; flex-direction: column !important; text-align: center !important; }
        }
        @media (max-width: 500px) {
          footer > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
