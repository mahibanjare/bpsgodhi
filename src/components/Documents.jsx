import React from 'react'
import { FileText, Download, ShieldCheck } from 'lucide-react'
import { useSite } from '../SiteContext'

export default function Documents() {
  const { documents } = useSite()
  if (!documents?.length) return null

  return (
    <section id="documents" className="section" style={{ background: 'var(--off-white)', paddingTop: 70, paddingBottom: 70 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span /><p>Mandatory Public Disclosure</p><span /></div>
          <h2 className="section-title">School <span className="accent">Documents</span></h2>
          <p className="section-subtitle">Certificates and official documents available for public viewing.</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 14, maxWidth: 940, margin: '0 auto',
        }}>
          {documents.map(d => (
            <a key={d.id} href={d.url} target="_blank" rel="noopener noreferrer" className="reveal card" style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
              background: 'var(--surface)', textDecoration: 'none', transition: 'all 0.25s var(--ease)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '' }}>
              <span style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: 'rgba(201,168,76,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={19} color="var(--gold)" />
              </span>
              <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.45, flex: 1 }}>
                {d.title}
              </span>
              <Download size={16} color="var(--text-light)" style={{ flexShrink: 0 }} />
            </a>
          ))}
        </div>

        <p className="reveal" style={{
          textAlign: 'center', marginTop: 26, color: 'var(--text-mid)', fontSize: '0.82rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
        }}>
          <ShieldCheck size={15} color="var(--gold)" /> All documents are provided by the school administration.
        </p>
      </div>
    </section>
  )
}
