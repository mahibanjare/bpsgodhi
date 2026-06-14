import React, { useEffect, useState } from 'react'
import { Phone, ArrowUp, MessageCircle } from 'lucide-react'

const PHONE = '919165187777'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fab = {
    width: 52, height: 52, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(10,22,40,0.25)',
    cursor: 'pointer', textDecoration: 'none', border: 'none',
    transition: 'transform 0.25s var(--ease)',
  }

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 22, zIndex: 900,
      display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center',
    }}>
      <a
        href={`https://wa.me/${PHONE}?text=Hello%20Bright%20Public%20School%2C%20I%20would%20like%20to%20know%20about%20admissions.`}
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"
        style={{ ...fab, background: '#25D366', color: '#fff', animation: 'pulse-gold 3s ease-in-out infinite' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={24} fill="#fff" stroke="#25D366" />
      </a>

      <a
        href={`tel:+${PHONE}`} aria-label="Call the school" title="Call us"
        style={{ ...fab, background: 'var(--navy)', color: 'var(--gold)' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={20} />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top" title="Back to top"
        style={{
          ...fab, width: 44, height: 44,
          background: 'var(--gold)', color: 'var(--navy)',
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? 'auto' : 'none',
          transform: showTop ? 'translateY(0)' : 'translateY(12px)',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
