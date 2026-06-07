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
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61590216284968', icon: 'f' },
                { name: 'Instagram', url: 'https://www.instagram.com/brightpublic.school/', icon: '📷' },
                { name: 'YouTube', url: 'https://www.youtube.com/@BrightPublicSchoolGodhi', icon: '▶' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'var(--surface)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--navy)', fontSize: '0.95rem',
                  textDecoration: 'none',
                }}>
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
          footer > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; padding: 40px 0 0 !important; }
          footer > div > div:first-child { padding: 32px 0 0 !important; }
          footer > div > div:last-child { flex-direction: column !important; text-align: center !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
