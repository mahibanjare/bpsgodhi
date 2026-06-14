import React from 'react'
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, ChevronRight, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61590216284968', Icon: Facebook },
  { name: 'Instagram', url: 'https://www.instagram.com/brightpublic.school/', Icon: Instagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@BrightPublicSchoolGodhi', Icon: Youtube },
]

const quickLinks = [
  ['Home', '#home'], ['About Us', '#about'], ['Programs', '#programs'],
  ['Facilities', '#facilities'], ['Gallery', '#gallery'], ['Contact', '#contact'],
]

const classes = ['Nursery · LKG · UKG', 'Primary (I–V)', 'Middle (VI–VIII)', 'Secondary (IX–X)', 'Sr. Secondary (XI–XII)', 'Science / Commerce / Arts']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--surface-soft)', color: 'var(--text-dark)', fontFamily: 'var(--font-body)' }}>
      <div className="container" style={{ padding: '56px 40px 36px' }}>
        {/* CTA banner */}
        <div className="footer-cta" style={{
          background: 'linear-gradient(120deg, var(--navy), var(--navy-light))',
          borderRadius: 'var(--radius-lg)', padding: '38px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
          boxShadow: 'var(--shadow-navy)', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
            background: 'radial-gradient(50% 120% at 100% 0%, rgba(246,166,35,0.2) 0%, transparent 60%)',
          }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>
              Admissions Open for 2026–27
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.97rem', margin: 0 }}>
              Nursery to Class XII · CGBSE · English Medium · Call us today!
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', position: 'relative' }}>
            <a href="tel:+919165187777" className="btn-gold"><Phone size={16} /> 91651 87777</a>
            <a href="#admission" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px',
              background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: '#fff',
              fontWeight: 700, fontSize: '0.92rem', borderRadius: 8, textDecoration: 'none',
            }}>Apply Now <ArrowRight size={16} /></a>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 44, marginTop: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Logo size={50} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)' }}>
                  Bright Public School
                </div>
                <div style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase' }}>
                  CGBSE • English Medium
                </div>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, fontSize: '0.88rem', maxWidth: 320, marginBottom: 22, color: 'var(--text-mid)' }}>
              Illuminating Minds, Building Futures. A premier CGBSE English Medium institution in Naya Raipur offering quality education from Nursery to Class XII.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(({ name, url, Icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name} aria-label={name} style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--navy)', textDecoration: 'none', transition: 'all 0.25s var(--ease)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 18, letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0 }}>
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} style={{ color: 'var(--text-mid)', textDecoration: 'none', fontSize: '0.87rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}>
                    <ChevronRight size={14} color="var(--gold)" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 18, letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Classes</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0, color: 'var(--text-mid)' }}>
              {classes.map(c => <li key={c} style={{ fontSize: '0.87rem' }}>{c}</li>)}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 18, letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--text-mid)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.87rem', lineHeight: 1.6 }}>Godhi, Mandir Hasaud,<br />Naya Raipur, CG</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href="tel:+919165187777" style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem' }}>91651 87777</a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Clock size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.87rem', lineHeight: 1.6 }}>Mon–Sat<br />8:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.24)', padding: '20px 0 0', marginTop: 36,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
          color: 'var(--text-mid)', fontSize: '0.82rem',
        }}>
          <p>© {year} Bright Public School, Godhi. All Rights Reserved.</p>
          <p>Design & Develop by <a href="https://mbjare.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>Mbjare</a></p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .footer-cta { flex-direction: column; align-items: flex-start; text-align: left; }
          footer .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .footer-cols { grid-template-columns: 1fr !important; }
          footer .container { padding: 44px 22px 30px !important; }
        }
      `}</style>
    </footer>
  )
}
