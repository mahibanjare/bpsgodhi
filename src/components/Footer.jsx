import React from 'react'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--surface-soft)',
      color: 'var(--text-dark)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '56px 40px 40px',
      }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid rgba(201,168,76,0.18)',
          borderRadius: 24,
          padding: '40px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
          boxShadow: 'var(--shadow-card)',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 10 }}>
              Admissions Open for 2026–27
            </h3>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.97rem', margin: 0 }}>
              Nursery to Class XII · CGBSE · English Medium · Call us today!
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="tel:+919165187777" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px',
              background: 'var(--navy)',
              color: 'var(--gold)',
              fontWeight: 700,
              fontSize: '0.95rem',
              borderRadius: 8,
              textDecoration: 'none',
            }}>
              📞 91651 87777
            </a>
            <a href="#admission" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px',
              background: 'transparent',
              border: '2px solid var(--navy)',
              color: 'var(--navy)',
              fontWeight: 700,
              fontSize: '0.95rem',
              borderRadius: 8,
              textDecoration: 'none',
            }}>
              Apply Now →
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginTop: 40,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <Logo size={52} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)' }}>
                  Bright Public School
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase' }}>
                  CGBSE • English Medium
                </div>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, fontSize: '0.88rem', maxWidth: 320, marginBottom: 24, color: 'var(--text-mid)' }}>
              Illuminating Minds, Building Futures. A premier CGBSE English Medium institution in Naya Raipur offering quality education from Nursery to Class XII.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61590216284968', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                  </svg>
                ) },
                { name: 'Instagram', url: 'https://www.instagram.com/brightpublic.school/', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                ) },
                { name: 'YouTube', url: 'https://www.youtube.com/@BrightPublicSchoolGodhi', icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8 7.2c-.2-.7-.8-1.2-1.6-1.4C18.1 5.6 12 5.6 12 5.6s-6.1 0-8.2.2c-.7.2-1.3.7-1.6 1.4C2 9.4 2 12 2 12s0 2.6.2 4.8c.2.7.8 1.2 1.6 1.4 2.1.2 8.2.2 8.2.2s6.1 0 8.2-.2c.7-.2 1.3-.7 1.6-1.4.2-2.2.2-4.8.2-4.8s0-2.6-.2-4.8z" fill="currentColor" opacity="0.96" />
                    <path d="M10 15.3l5.2-3.3L10 8.7v6.6z" fill="white" />
                  </svg>
                ) }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} aria-label={social.name} style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: 'var(--surface)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--navy)', fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--navy)'; }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0 }}>
              {[
                ['Home', '#home'], ['About Us', '#about'], ['Programs', '#programs'],
                ['Facilities', '#facilities'], ['Gallery', '#gallery'], ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} style={{
                    color: 'var(--text-mid)', textDecoration: 'none',
                    fontSize: '0.87rem', display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>▶</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              Classes
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0, color: 'var(--text-mid)' }}>
              {['Nursery · LKG · UKG', 'Primary (I–V)', 'Middle (VI–VIII)', 'Secondary (IX–X)', 'Sr. Secondary (XI–XII)', 'Science / Commerce / Arts'].map(c => (
                <li key={c} style={{ fontSize: '0.87rem' }}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 20, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--text-mid)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem' }}>📍</span>
                <span style={{ fontSize: '0.87rem', lineHeight: 1.6 }}>
                  Godhi, Mandir Hasaud,<br />Naya Raipur, CG
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ fontSize: '1rem' }}>📞</span>
                <a href="tel:+919165187777" style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem' }}>
                  91651 87777
                </a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem' }}>🕐</span>
                <span style={{ fontSize: '0.87rem', lineHeight: 1.6 }}>
                  Mon–Sat<br />8:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.24)',
          padding: '20px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          color: 'var(--text-mid)',
          fontSize: '0.82rem',
        }}>
          <p>© {year} Bright Public School, Godhi. All Rights Reserved.</p>
          <p>Design & Develop by <a href="https://mbjare.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>Mbjare</a></p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { flex-direction: column !important; align-items: flex-start !important; text-align: left !important; }
          footer > div > div:first-child > div:last-child { width: 100% !important; justify-content: flex-start !important; }
          footer > div > div:first-child > div:last-child > a { width: auto !important; flex: 1 1 auto !important; }
          footer > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; padding: 40px 0 0 !important; }
          footer > div > div:last-child { flex-direction: column !important; text-align: center !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          footer > div > div:first-child { gap: 16px !important; }
        }
      `}</style>
    </footer>
  )
}
