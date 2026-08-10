import React, { useEffect, useState } from 'react'
import {
  Lock, LogOut, Save, Settings, UserRound, IndianRupee, Bell, Image as ImageIcon,
  FileText, KeyRound, Trash2, Plus, CheckCircle2, AlertTriangle, ArrowLeft, Upload,
  Eye, EyeOff, MonitorSmartphone,
} from 'lucide-react'
import { useSite } from '../SiteContext'
import { adminExec, BACKEND_READY, fmtPhone } from '../siteConfig'
import Logo from './Logo'
import { defaultItems as defaultGalleryItems } from './Gallery'

/* Compress an image file to a small WebP data-URL (keeps DB light) */
function compressImage(file, maxW = 1280, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, maxW / img.width)
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(img.width * scale)
      canvas.height = Math.round(img.height * scale)
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/webp', quality))
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

const GALLERY_CATS = ['Campus', 'Classrooms', 'Sports', 'Events', 'Cultural']
const NOTICE_TAGS = ['Notice', 'Admission', 'Event', 'Exam', 'Holiday']
const uid = () => Math.random().toString(36).slice(2, 9)

/* ── tiny styled primitives ── */
const inp = {
  width: '100%', padding: '11px 14px', borderRadius: 10, border: '1.5px solid rgba(16,36,61,0.15)',
  fontSize: '0.92rem', fontFamily: 'var(--font-body)', color: 'var(--text-dark)', background: '#fff',
  outline: 'none', boxSizing: 'border-box',
}
const lbl = { display: 'block', fontWeight: 700, fontSize: '0.78rem', color: 'var(--navy)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 7 }
const cardBox = { background: '#fff', borderRadius: 14, border: '1px solid rgba(16,36,61,0.08)', padding: 20, boxShadow: '0 2px 10px rgba(16,36,61,0.05)' }
const btnSm = { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem' }

function Field({ label, children }) {
  return <div style={{ marginBottom: 16 }}><label style={lbl}>{label}</label>{children}</div>
}

/* Show/Hide switch — green Eye = section/photo site par dikh raha hai */
function VisToggle({ on, onChange, size = 'md' }) {
  const pad = size === 'sm' ? '5px 10px' : '8px 14px'
  return (
    <button onClick={onChange} title={on ? 'Site par dikh raha hai — chhupane ke liye click karein' : 'Chhupa hua hai — dikhane ke liye click karein'} style={{
      ...btnSm, padding: pad,
      background: on ? 'rgba(31,110,61,0.12)' : 'rgba(160,60,60,0.12)',
      color: on ? '#1f6e3d' : '#a03c3c',
    }}>
      {on ? <Eye size={size === 'sm' ? 13 : 15} /> : <EyeOff size={size === 'sm' ? 13 : 15} />}
      {size !== 'sm' && (on ? 'Show' : 'Hidden')}
    </button>
  )
}

export default function Admin() {
  const liveConfig = useSite()
  const [pwd, setPwd] = useState(() => sessionStorage.getItem('bps_admin') || '')
  const [authed, setAuthed] = useState(false)
  const [loginPwd, setLoginPwd] = useState('')
  const [busy, setBusy] = useState(false)
  const [toast, setToast] = useState(null) // {ok, msg}
  const [tab, setTab] = useState('general')
  const [draft, setDraft] = useState(null)
  const [newPwd, setNewPwd] = useState('')

  useEffect(() => { document.title = 'Admin Panel | Bright Public School' }, [])

  // auto-login from session
  useEffect(() => {
    if (pwd && !authed) {
      adminExec(pwd, 'verify').then(() => setAuthed(true)).catch(() => sessionStorage.removeItem('bps_admin'))
    }
  }, []) // eslint-disable-line

  // seed draft only after the remote config has actually loaded — otherwise a
  // quick "Save" could overwrite the database with stale defaults
  useEffect(() => {
    if (authed && !draft && liveConfig._loaded) {
      const { _loaded, ...rest } = liveConfig
      setDraft(JSON.parse(JSON.stringify(rest)))
    }
  }, [authed, liveConfig]) // eslint-disable-line

  const show = (ok, msg) => { setToast({ ok, msg }); setTimeout(() => setToast(null), 3500) }
  const set = patch => setDraft(d => ({ ...d, ...patch }))

  async function login(e) {
    e.preventDefault()
    setBusy(true)
    try {
      await adminExec(loginPwd, 'verify')
      setPwd(loginPwd); setAuthed(true)
      sessionStorage.setItem('bps_admin', loginPwd)
    } catch (err) { show(false, err.message) }
    setBusy(false)
  }

  async function saveAll() {
    setBusy(true)
    try {
      const { ...data } = draft
      await adminExec(pwd, 'save', data)
      show(true, 'Saved! Site updated — sabhi visitors ko naya content dikhega.')
    } catch (err) { show(false, err.message) }
    setBusy(false)
  }

  async function changePassword() {
    if (!newPwd || newPwd.length < 6) return show(false, 'Password kam se kam 6 characters ka rakhein.')
    setBusy(true)
    try {
      await adminExec(pwd, 'change_password', { new_password: newPwd })
      setPwd(newPwd); sessionStorage.setItem('bps_admin', newPwd); setNewPwd('')
      show(true, 'Password badal gaya.')
    } catch (err) { show(false, err.message) }
    setBusy(false)
  }

  function logout() {
    sessionStorage.removeItem('bps_admin')
    setAuthed(false); setPwd(''); setDraft(null)
  }

  /* ─────────── screens ─────────── */

  const shell = body => (
    <div style={{ minHeight: '100vh', background: 'var(--off-white, #f6f5f0)', fontFamily: 'var(--font-body)' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 99,
          background: toast.ok ? '#1f6e3d' : '#a03c3c', color: '#fff', padding: '12px 22px',
          borderRadius: 10, fontWeight: 600, fontSize: '0.88rem', boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          display: 'flex', alignItems: 'center', gap: 8, maxWidth: '90vw',
        }}>
          {toast.ok ? <CheckCircle2 size={17} /> : <AlertTriangle size={17} />} {toast.msg}
        </div>
      )}
      {body}
    </div>
  )

  if (!BACKEND_READY) {
    return shell(
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <Logo size={64} />
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', margin: '18px 0 10px' }}>Admin Panel</h1>
        <div style={{ ...cardBox, textAlign: 'left' }}>
          <p style={{ lineHeight: 1.8, color: 'var(--text-mid)', margin: 0 }}>
            ⚠️ Backend (Supabase) abhi connect nahi hua hai. Supabase project ready hone ke baad
            yeh panel apne aap chalu ho jayega — yahin se aap gallery, mobile number, session year,
            notices sab kuch update kar payenge.
          </p>
        </div>
        <a href="#home" onClick={() => { window.location.hash = '' }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, color: 'var(--navy)', fontWeight: 700, textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Site par wapas jaayein
        </a>
      </div>
    )
  }

  if (!authed) {
    return shell(
      <div style={{ maxWidth: 400, margin: '0 auto', padding: '90px 20px', textAlign: 'center' }}>
        <Logo size={64} />
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', margin: '16px 0 24px', fontSize: '1.6rem' }}>Admin Login</h1>
        <form onSubmit={login} style={cardBox}>
          <div style={{ position: 'relative', marginBottom: 14 }}>
            <Lock size={16} color="var(--text-light)" style={{ position: 'absolute', left: 14, top: 14 }} />
            <input
              type="password" value={loginPwd} onChange={e => setLoginPwd(e.target.value)}
              placeholder="Admin password" autoFocus
              style={{ ...inp, paddingLeft: 40 }}
            />
          </div>
          <button type="submit" disabled={busy || !loginPwd} className="btn-gold" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', opacity: busy ? 0.7 : 1 }}>
            {busy ? 'Checking…' : 'Login'}
          </button>
        </form>
        <a href="#home" onClick={() => { window.location.hash = '' }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, color: 'var(--navy)', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
          <ArrowLeft size={15} /> Site par wapas
        </a>
      </div>
    )
  }

  if (!draft) return shell(<p style={{ textAlign: 'center', padding: 80, color: 'var(--text-mid)' }}>Loading…</p>)

  const tabs = [
    ['general', 'General', Settings],
    ['principal', 'Principal', UserRound],
    ['fees', 'Fees', IndianRupee],
    ['notices', 'Notices', Bell],
    ['gallery', 'Gallery', ImageIcon],
    ['documents', 'Documents', FileText],
    ['password', 'Password', KeyRound],
  ]

  return shell(
    <>
      {/* header */}
      <header style={{
        background: 'var(--navy)', padding: '14px 22px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 12, position: 'sticky', top: 0, zIndex: 50, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={38} />
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '0.98rem' }}>BPS Admin Panel</div>
            <div style={{ color: 'var(--gold)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Bright Public School, Godhi</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="https://bpsgodhi-webapp.vercel.app" target="_blank" rel="noopener noreferrer" title="BPS School ERP kholein"
            style={{ ...btnSm, background: 'rgba(255,255,255,0.12)', color: 'var(--gold)', textDecoration: 'none' }}>
            <MonitorSmartphone size={15} /> School ERP
          </a>
          <button onClick={saveAll} disabled={busy} style={{ ...btnSm, background: 'linear-gradient(90deg, var(--gold), var(--sun))', color: 'var(--navy)', padding: '10px 20px', opacity: busy ? 0.7 : 1 }}>
            <Save size={15} /> {busy ? 'Saving…' : 'Save Changes'}
          </button>
          <button onClick={logout} style={{ ...btnSm, background: 'rgba(255,255,255,0.12)', color: '#fff' }}>
            <LogOut size={15} /> Logout
          </button>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '22px 16px 80px' }}>
        {/* tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
          {tabs.map(([id, label, Icon]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              ...btnSm, padding: '9px 16px',
              background: tab === id ? 'var(--navy)' : '#fff',
              color: tab === id ? 'var(--gold)' : 'var(--navy)',
              border: '1px solid rgba(16,36,61,0.12)',
            }}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {/* ── GENERAL ── */}
        {tab === 'general' && (
          <div style={cardBox}>
            <Field label="Academic Session (e.g. 2026–27)">
              <input style={inp} value={draft.session} onChange={e => set({ session: e.target.value })} />
            </Field>
            <Field label="School Mobile Number (10 digit)">
              <input style={inp} value={draft.phone} maxLength={10}
                onChange={e => set({ phone: e.target.value.replace(/\D/g, '') })} />
              <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', marginTop: 6 }}>
                Site par dikhega: <b>{fmtPhone(draft.phone)}</b> · Call/WhatsApp buttons bhi isi number par jayenge.
              </p>
            </Field>
            <Field label="Sections dikhana / chhupana">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['showFees', 'Fee Structure section'],
                  ['showNotices', 'Notice Board & Events section'],
                ].map(([key, label]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '10px 14px', background: 'rgba(16,36,61,0.04)', borderRadius: 10 }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{label}</span>
                    <VisToggle on={draft[key] !== false} onChange={() => set({ [key]: draft[key] === false })} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', marginTop: 8 }}>
                Hidden karne par wo section (aur uske menu links) poori site se hat jayega.
              </p>
            </Field>
          </div>
        )}

        {/* ── PRINCIPAL ── */}
        {tab === 'principal' && (
          <div style={cardBox}>
            <Field label="Name">
              <input style={inp} value={draft.principal.name} onChange={e => set({ principal: { ...draft.principal, name: e.target.value } })} />
            </Field>
            <Field label="Designation">
              <input style={inp} value={draft.principal.role} onChange={e => set({ principal: { ...draft.principal, role: e.target.value } })} />
            </Field>
            <Field label="Message">
              <textarea style={{ ...inp, minHeight: 140, resize: 'vertical' }} value={draft.principal.message}
                onChange={e => set({ principal: { ...draft.principal, message: e.target.value } })} />
            </Field>
            <Field label="Photo">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                {draft.principal.photo
                  ? <img src={draft.principal.photo} alt="Principal" style={{ width: 74, height: 88, objectFit: 'cover', borderRadius: 10, border: '2px solid rgba(201,168,76,0.4)' }} />
                  : <span style={{ width: 74, height: 88, borderRadius: 10, background: 'rgba(16,36,61,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserRound size={30} color="var(--text-light)" /></span>}
                <label style={{ ...btnSm, background: 'var(--navy)', color: '#fff' }}>
                  <Upload size={14} /> Photo choose karein
                  <input type="file" accept="image/*" hidden onChange={async e => {
                    const f = e.target.files[0]
                    if (f) set({ principal: { ...draft.principal, photo: await compressImage(f, 600) } })
                  }} />
                </label>
                {draft.principal.photo && (
                  <button onClick={() => set({ principal: { ...draft.principal, photo: '' } })} style={{ ...btnSm, background: 'rgba(160,60,60,0.1)', color: '#a03c3c' }}>
                    <Trash2 size={14} /> Remove
                  </button>
                )}
              </div>
            </Field>
          </div>
        )}

        {/* ── FEES ── */}
        {tab === 'fees' && (
          <div style={cardBox}>
            {draft.fees.map((f, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: 8, marginBottom: 10, alignItems: 'center' }}>
                <input style={inp} placeholder="Class group" value={f.group}
                  onChange={e => set({ fees: draft.fees.map((x, j) => j === i ? { ...x, group: e.target.value } : x) })} />
                <input style={inp} placeholder="Admission ₹" value={f.admission}
                  onChange={e => set({ fees: draft.fees.map((x, j) => j === i ? { ...x, admission: e.target.value } : x) })} />
                <input style={inp} placeholder="Monthly ₹" value={f.monthly}
                  onChange={e => set({ fees: draft.fees.map((x, j) => j === i ? { ...x, monthly: e.target.value } : x) })} />
                <button onClick={() => set({ fees: draft.fees.filter((_, j) => j !== i) })} style={{ ...btnSm, background: 'rgba(160,60,60,0.1)', color: '#a03c3c', padding: 9 }}>
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
            <button onClick={() => set({ fees: [...draft.fees, { group: '', admission: '', monthly: '' }] })} style={{ ...btnSm, background: 'var(--navy)', color: '#fff', marginTop: 6 }}>
              <Plus size={14} /> Row jodein
            </button>
            <Field label="Note (table ke niche dikhega)">
              <textarea style={{ ...inp, minHeight: 70, resize: 'vertical', marginTop: 14 }} value={draft.feesNote}
                onChange={e => set({ feesNote: e.target.value })} />
            </Field>
          </div>
        )}

        {/* ── NOTICES ── */}
        {tab === 'notices' && (
          <div style={cardBox}>
            {draft.notices.map((n, i) => (
              <div key={n.id} style={{ display: 'grid', gridTemplateColumns: '150px 130px 1fr auto', gap: 8, marginBottom: 10, alignItems: 'center' }}>
                <input type="date" style={inp} value={n.date}
                  onChange={e => set({ notices: draft.notices.map((x, j) => j === i ? { ...x, date: e.target.value } : x) })} />
                <select style={inp} value={n.tag}
                  onChange={e => set({ notices: draft.notices.map((x, j) => j === i ? { ...x, tag: e.target.value } : x) })}>
                  {NOTICE_TAGS.map(t => <option key={t}>{t}</option>)}
                </select>
                <input style={inp} placeholder="Notice / event title" value={n.title}
                  onChange={e => set({ notices: draft.notices.map((x, j) => j === i ? { ...x, title: e.target.value } : x) })} />
                <button onClick={() => set({ notices: draft.notices.filter((_, j) => j !== i) })} style={{ ...btnSm, background: 'rgba(160,60,60,0.1)', color: '#a03c3c', padding: 9 }}>
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
            <button onClick={() => set({ notices: [...draft.notices, { id: uid(), date: new Date().toISOString().slice(0, 10), tag: 'Notice', title: '' }] })}
              style={{ ...btnSm, background: 'var(--navy)', color: '#fff', marginTop: 6 }}>
              <Plus size={14} /> Notice jodein
            </button>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', marginTop: 12 }}>Site par latest 6 notices dikhte hain (date ke hisaab se).</p>
          </div>
        )}

        {/* ── GALLERY ── */}
        {tab === 'gallery' && (
          <div style={cardBox}>
            {draft.gallery === null ? (
              <div>
                <p style={{ color: 'var(--text-mid)', marginBottom: 14, lineHeight: 1.7, fontSize: '0.88rem' }}>
                  Abhi site par default (built-in) gallery dikh rahi hai. Niche har item ko show/hide kar sakte hain,
                  ya apni photos ke liye custom gallery shuru karein.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10, marginBottom: 16 }}>
                  {defaultGalleryItems.map(d => {
                    const hidden = (draft.hiddenDefaults || []).includes(d.label)
                    return (
                      <div key={d.label} style={{
                        border: '1px solid rgba(16,36,61,0.1)', borderRadius: 12, overflow: 'hidden',
                        background: '#fafafa', opacity: hidden ? 0.45 : 1,
                      }}>
                        <div style={{
                          height: 74, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                          background: d.photo ? 'var(--navy)' : `linear-gradient(150deg, ${d.from}, ${d.to})`,
                        }}>
                          {d.photo
                            ? <img src={d.photo} alt={d.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            : <d.Icon size={28} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />}
                        </div>
                        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.3 }}>{d.label}</span>
                          <VisToggle size="sm" on={!hidden} onChange={() => set({
                            hiddenDefaults: hidden
                              ? (draft.hiddenDefaults || []).filter(l => l !== d.label)
                              : [...(draft.hiddenDefaults || []), d.label],
                          })} />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <button onClick={() => set({ gallery: [] })} style={{ ...btnSm, background: 'var(--navy)', color: '#fff' }}>
                  <ImageIcon size={14} /> Custom gallery shuru karein (apni photos)
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, marginBottom: 14 }}>
                  {draft.gallery.map((g, i) => (
                    <div key={g.id} style={{ border: '1px solid rgba(16,36,61,0.1)', borderRadius: 12, overflow: 'hidden', background: '#fafafa', opacity: g.hidden ? 0.45 : 1 }}>
                      <img src={g.image} alt={g.label} style={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} />
                      <div style={{ padding: 8 }}>
                        <input style={{ ...inp, padding: '6px 9px', fontSize: '0.8rem', marginBottom: 6 }} placeholder="Caption" value={g.label}
                          onChange={e => set({ gallery: draft.gallery.map((x, j) => j === i ? { ...x, label: e.target.value } : x) })} />
                        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                          <select style={{ ...inp, padding: '6px 8px', fontSize: '0.78rem' }} value={g.cat}
                            onChange={e => set({ gallery: draft.gallery.map((x, j) => j === i ? { ...x, cat: e.target.value } : x) })}>
                            {GALLERY_CATS.map(c => <option key={c}>{c}</option>)}
                          </select>
                          <VisToggle size="sm" on={!g.hidden}
                            onChange={() => set({ gallery: draft.gallery.map((x, j) => j === i ? { ...x, hidden: !x.hidden } : x) })} />
                          <button onClick={() => set({ gallery: draft.gallery.filter((_, j) => j !== i) })}
                            style={{ ...btnSm, background: 'rgba(160,60,60,0.1)', color: '#a03c3c', padding: '6px 9px' }}>
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <label style={{ ...btnSm, background: 'var(--navy)', color: '#fff' }}>
                    <Upload size={14} /> Photos upload karein
                    <input type="file" accept="image/*" multiple hidden onChange={async e => {
                      const files = [...e.target.files]
                      const items = []
                      for (const f of files) items.push({ id: uid(), label: f.name.replace(/\.[^.]+$/, ''), cat: 'Campus', image: await compressImage(f) })
                      set({ gallery: [...draft.gallery, ...items] })
                    }} />
                  </label>
                  <button onClick={() => set({ gallery: null })} style={{ ...btnSm, background: 'rgba(16,36,61,0.07)', color: 'var(--navy)' }}>
                    Default gallery par wapas jayein
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── DOCUMENTS ── */}
        {tab === 'documents' && (
          <div style={cardBox}>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-mid)', marginBottom: 14, lineHeight: 1.7 }}>
              Certificates / disclosure documents ke liye Google Drive ya kisi bhi link ka istemal karein
              (Drive par upload karke "Anyone with the link" share link yahan paste karein).
            </p>
            {draft.documents.map((d, i) => (
              <div key={d.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr auto', gap: 8, marginBottom: 10 }}>
                <input style={inp} placeholder="Document ka naam (e.g. Affiliation Letter)" value={d.title}
                  onChange={e => set({ documents: draft.documents.map((x, j) => j === i ? { ...x, title: e.target.value } : x) })} />
                <input style={inp} placeholder="https://drive.google.com/…" value={d.url}
                  onChange={e => set({ documents: draft.documents.map((x, j) => j === i ? { ...x, url: e.target.value } : x) })} />
                <button onClick={() => set({ documents: draft.documents.filter((_, j) => j !== i) })} style={{ ...btnSm, background: 'rgba(160,60,60,0.1)', color: '#a03c3c', padding: 9 }}>
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
            <button onClick={() => set({ documents: [...draft.documents, { id: uid(), title: '', url: '' }] })} style={{ ...btnSm, background: 'var(--navy)', color: '#fff', marginTop: 6 }}>
              <Plus size={14} /> Document jodein
            </button>
          </div>
        )}

        {/* ── PASSWORD ── */}
        {tab === 'password' && (
          <div style={cardBox}>
            <Field label="Naya password (min 6 characters)">
              <input type="password" style={inp} value={newPwd} onChange={e => setNewPwd(e.target.value)} />
            </Field>
            <button onClick={changePassword} disabled={busy} style={{ ...btnSm, background: 'var(--navy)', color: '#fff', padding: '11px 20px' }}>
              <KeyRound size={14} /> Password badlein
            </button>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: 30, fontSize: '0.8rem', color: 'var(--text-mid)' }}>
          Changes tabhi live honge jab aap upar <b>Save Changes</b> dabayenge.
        </p>
      </div>
    </>
  )
}
