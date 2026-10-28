import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon, { IconSprite } from './Icon.jsx'
import ContactFab from './ContactFab.jsx'
import { Button, asset } from './ui.jsx'
import { CONTACT, NAV, PORTAL_URL } from '../content.js'

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

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 bg-bg shadow-[0_1px_0_var(--line)]">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Teki.GE, მთავარი" className="flex shrink-0 items-center">
          <Logo className="h-9 w-auto" />
        </Link>
        <nav aria-label="მთავარი მენიუ" className="hidden flex-1 justify-end gap-6 lg:flex">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} className={navClass}>{n.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button to="/contact/" size="sm" className="max-[440px]:hidden">შეფასების მოთხოვნა</Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg bg-bg-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="მენიუ"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-[22px]" />
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="მენიუ" hidden={!open} className="bg-bg lg:hidden">
        <div className="wrap grid pb-3">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `py-3 text-[15px] font-semibold no-underline ${isActive ? 'text-accent' : ''}`}>{n.label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  const link = 'text-on-navy-2 no-underline hover:text-on-navy hover:underline'
  return (
    <footer className="bg-navy pt-9 pb-[calc(28px+env(safe-area-inset-bottom,0px))] text-[13px] text-on-navy-2 [--focus:#fff]">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <Logo white className="h-8 w-auto" />
        <nav aria-label="ქვედა მენიუ" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map((n) => <Link key={n.to} to={n.to} className={link}>{n.label}</Link>)}
          <a href={PORTAL_URL} target="_blank" rel="noopener" className={link}>კლიენტის პორტალი</a>
        </nav>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-on-navy no-underline">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="text-on-navy no-underline">{CONTACT.email}</a>
          <span>© 2019–2026 შპს ტეკი</span>
        </div>
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
