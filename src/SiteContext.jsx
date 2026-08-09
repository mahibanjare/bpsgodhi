import React, { createContext, useContext, useEffect, useState } from 'react'
import { DEFAULTS, fetchRemoteConfig } from './siteConfig'

const SiteContext = createContext(DEFAULTS)

export function SiteProvider({ children }) {
  const [config, setConfig] = useState(DEFAULTS)

  useEffect(() => {
    let alive = true
    fetchRemoteConfig().then(remote => {
      if (alive && remote) setConfig({ ...DEFAULTS, ...remote })
    })
    return () => { alive = false }
  }, [])

  return <SiteContext.Provider value={config}>{children}</SiteContext.Provider>
}

export const useSite = () => useContext(SiteContext)
