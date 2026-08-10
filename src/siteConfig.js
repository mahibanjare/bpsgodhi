/**
 * Central site configuration.
 *
 * The site works fully offline with DEFAULTS. When SUPABASE_URL/KEY are set,
 * the config saved from the admin panel (#/admin) is fetched on load and
 * merged over the defaults — so admin changes reach every visitor.
 */

// ── Supabase connection ──
// The anon (publishable) key is safe to ship in the bundle — it is designed to be
// public; all writes are gated by the admin password inside the database RPC.
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ohzdpxnjafjmafdgvbax.supabase.co'
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oemRweG5qYWZqbWFmZGd2YmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyNzA1NjAsImV4cCI6MjEwMTg0NjU2MH0.hd-lOwFXqn-T90IDhSWHo-2cDJUEW2H5h6-nLQNSIQs'

export const BACKEND_READY = Boolean(SUPABASE_URL && SUPABASE_KEY)

// ── Defaults (used until admin saves something, and as offline fallback) ──
export const DEFAULTS = {
  session: '2026–27',
  phone: '9165187777', // 10-digit mobile; display/tel/wa are derived
  principal: {
    name: 'Principal',
    role: 'Principal, Bright Public School',
    photo: '',
    message:
      'At Bright Public School, we believe every child carries a spark of brilliance. ' +
      'Our mission is to nurture that spark through discipline, curiosity and care — ' +
      'so that each student grows into a confident, compassionate and capable citizen. ' +
      'I warmly invite you to visit our campus and become a part of the Bright family.',
  },
  fees: [
    { group: 'Nursery – UKG', admission: '—', monthly: '—' },
    { group: 'Class I – V', admission: '—', monthly: '—' },
    { group: 'Class VI – VIII', admission: '—', monthly: '—' },
    { group: 'Class IX – X', admission: '—', monthly: '—' },
    { group: 'Class XI – XII', admission: '—', monthly: '—' },
  ],
  feesNote:
    'For the exact fee structure and any applicable concessions, please contact the school office. Fees are payable at the school office.',
  notices: [
    { id: 1, date: '2026-08-01', title: 'Admissions open for session 2026–27 — Nursery to Class XII', tag: 'Admission' },
    { id: 2, date: '2026-08-15', title: 'Independence Day celebration at school campus', tag: 'Event' },
  ],
  documents: [],
  gallery: null, // null → Gallery.jsx shows its built-in items
  hiddenDefaults: [], // labels of built-in gallery items the admin has hidden
  showFees: true,
  showNotices: true,
}

// ── Phone helpers ──
export const fmtPhone = d => {
  const s = String(d || '').replace(/\D/g, '').slice(-10)
  return s.length === 10 ? `${s.slice(0, 5)} ${s.slice(5)}` : String(d || '')
}
export const telPhone = d => `+91${String(d || '').replace(/\D/g, '').slice(-10)}`
export const waPhone = d => `91${String(d || '').replace(/\D/g, '').slice(-10)}`

// ── Backend I/O (plain fetch — no SDK needed) ──
const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
}

export async function fetchRemoteConfig() {
  if (!BACKEND_READY) return null
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/bps_config?id=eq.1&select=data`, { headers })
    if (!res.ok) return null
    const rows = await res.json()
    return rows?.[0]?.data || null
  } catch {
    return null
  }
}

/** Password-gated admin call. action: 'verify' | 'save' | 'change_password' */
export async function adminExec(password, action, payload = {}) {
  if (!BACKEND_READY) throw new Error('Backend is not connected yet.')
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/bps_admin_exec`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ p_password: password, p_action: action, p_payload: payload }),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(body?.message || `Request failed (${res.status})`)
  if (body?.ok !== true) {
    // The database RPC may return Hindi messages (older deployments) — normalize to English
    const map = {
      'Galat password': 'Incorrect password',
      'Password kam se kam 6 characters ka ho': 'Password must be at least 6 characters',
      'Data bahut bada hai (8MB limit). Kam/chhoti photos rakhein.': 'Data too large (8MB limit). Use fewer or smaller photos.',
    }
    const raw = body?.error || 'Incorrect password'
    throw new Error(map[raw] || raw)
  }
  return body
}
