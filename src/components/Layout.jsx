import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Icon, { IconSprite } from './Icon.jsx'
import ContactFab from './ContactFab.jsx'
import { Button, asset } from './ui.jsx'
import { CONTACT, NAV, PORTAL_URL } from '../content.js'
import { LANGS, stripLang, useI18n } from '../i18n/index.jsx'

function Logo({ className, white }) {
  if (white) return <img src={asset('assets/brand/teki-logo-white.svg')} alt="Teki.GE" width="626" height="212" className={className} />
  return (
    <>
      <img className={`logo-light ${className}`} src={asset('assets/brand/teki-logo.svg')} alt="Teki.GE" width="626" height="212" />
      <img className={`logo-dark ${className}`} src={asset('assets/brand/teki-logo-white.svg')} alt="Teki.GE" width="626" height="212" />
    </>
  )
}

const navClass = ({ isActive }) => `whitespace-nowrap text-sm font-medium no-underline hover:text-accent ${isActive ? 'text-accent' : ''}`

// Opens the same page in another language.
function LangSelect({ className = '' }) {
  const { t, lang } = useI18n()
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const rest = stripLang(pathname)
  return (
    <select
      aria-label={t.nav.language}
      value={lang}
      onChange={(e) => navigate(LANGS.find((l) => l.code === e.target.value).prefix + rest + hash)}
      className={`select-arrow min-h-9 cursor-pointer rounded-lg bg-bg-2 py-1.5 pr-8 pl-3 text-xs font-semibold text-ink ${className}`}
    >
      {LANGS.map((l) => <option key={l.code} value={l.code}>{l.short} · {l.name}</option>)}
    </select>
  )
}

function Header() {
  const { t, p } = useI18n()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 bg-bg shadow-[0_1px_0_var(--line)]">
      <div className="wrap flex h-16 items-center justify-between gap-5">
        <Link to={p('/')} aria-label={t.nav.home} className="flex shrink-0 items-center">
          <Logo className="h-9 w-auto" />
        </Link>
        <nav aria-label={t.nav.main} className="hidden flex-1 justify-end gap-4 lg:flex xl:gap-5">
          {NAV.map((n) => <NavLink key={n.key} to={p(n.to)} className={navClass}>{t.nav[n.key]}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <LangSelect className="max-[380px]:hidden" />
          <Button to="/contact/" size="sm" className="max-[560px]:hidden lg:max-xl:hidden">{t.common.requestShort}</Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg bg-bg-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-[22px]" />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label={t.nav.menu} hidden={!open} className="bg-bg lg:hidden">
        <div className="wrap grid pb-3">
          {NAV.map((n) => (
            <NavLink key={n.key} to={p(n.to)} className={({ isActive }) => `py-3 text-[15px] font-semibold no-underline ${isActive ? 'text-accent' : ''}`}>{t.nav[n.key]}</NavLink>
          ))}
          <LangSelect className="mt-2 justify-self-start min-[381px]:hidden" />
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  const { t, p } = useI18n()
  const link = 'text-on-navy-2 no-underline hover:text-on-navy hover:underline'
  return (
    <footer className="bg-navy pt-9 pb-[calc(28px+env(safe-area-inset-bottom,0px))] text-[13px] text-on-navy-2 [--focus:#fff]">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <Logo white className="h-8 w-auto" />
        <nav aria-label={t.nav.footer} className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map((n) => <Link key={n.key} to={p(n.to)} className={link}>{t.nav[n.key]}</Link>)}
          <a href={PORTAL_URL} target="_blank" rel="noopener" className={link}>{t.nav.portal}</a>
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-on-navy no-underline">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="text-on-navy no-underline">{CONTACT.email}</a>
          <span>{t.common.copyright}</span>
        </div>
      </div>
      <div className="wrap mt-5 flex flex-wrap gap-x-4 gap-y-1">
        {LANGS.map((l) => <Link key={l.code} to={l.prefix + '/'} lang={l.code} className={link}>{l.name}</Link>)}
      </div>
    </footer>
  )
}

// New page: start at the top, or at the anchor the link points to.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <IconSprite />
      <ScrollManager />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <ContactFab />
    </>
  )
}
