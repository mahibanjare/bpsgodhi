import React, { createContext, useContext, useEffect, useState } from 'react'
import { BACKEND_READY, DEFAULTS, fetchRemoteConfig } from './siteConfig'

const SiteContext = createContext({ ...DEFAULTS, _loaded: true })

export function SiteProvider({ children }) {
  // _loaded flips once the remote fetch settles — the admin panel waits for it
  // before seeding its edit form, so it never starts from stale defaults.
  const [config, setConfig] = useState({ ...DEFAULTS, _loaded: !BACKEND_READY })

  useEffect(() => {
    let alive = true
    fetchRemoteConfig().then(remote => {
      if (alive) setConfig({ ...DEFAULTS, ...(remote || {}), _loaded: true })
    })
    return () => { alive = false }
  }, [])

  return <SiteContext.Provider value={config}>{children}</SiteContext.Provider>
}

export const useSite = () => useContext(SiteContext)
