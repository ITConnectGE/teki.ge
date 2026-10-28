import { createContext, useContext, useEffect } from 'react'
import ka from './ka.js'
import en from './en.js'
import hi from './hi.js'
import tr from './tr.js'
import uk from './uk.js'

// Georgian lives at the site root; every other language under its own prefix.
export const LANGS = [
  { code: 'ka', prefix: '', name: 'ქართული', short: 'KA', locale: 'ka_GE', dict: ka },
  { code: 'en', prefix: '/en', name: 'English', short: 'EN', locale: 'en_US', dict: en },
  { code: 'hi', prefix: '/hi', name: 'हिन्दी', short: 'HI', locale: 'hi_IN', dict: hi },
  { code: 'tr', prefix: '/tr', name: 'Türkçe', short: 'TR', locale: 'tr_TR', dict: tr },
  { code: 'uk', prefix: '/uk', name: 'Українська', short: 'UK', locale: 'uk_UA', dict: uk },
]

const Ctx = createContext(LANGS[0])

export function I18nProvider({ lang, children }) {
  const l = LANGS.find((x) => x.code === lang) ?? LANGS[0]
  useEffect(() => { document.documentElement.lang = l.code }, [l.code])
  return <Ctx.Provider value={l}>{children}</Ctx.Provider>
}

// t: this language's text; p(path): the same path inside this language's prefix.
export function useI18n() {
  const l = useContext(Ctx)
  return { t: l.dict, lang: l.code, p: (path) => l.prefix + path }
}

// Strip any language prefix, so a page can be reopened in another language.
export function stripLang(pathname) {
  for (const l of LANGS) {
    if (l.prefix && (pathname === l.prefix || pathname.startsWith(l.prefix + '/'))) return pathname.slice(l.prefix.length) || '/'
  }
  return pathname
}
