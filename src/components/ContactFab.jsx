import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { CONTACT } from '../content.js'

// Floating contact button in the bottom-right corner: one tap opens call, email and the request form.
const ITEMS = [
  { label: 'დარეკვა', icon: 'phone', href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, bg: 'bg-navy' },
  { label: 'ელფოსტა', icon: 'mail', href: `mailto:${CONTACT.email}`, bg: 'bg-[#0d3b66]' },
  { label: 'შეფასების მოთხოვნა', icon: 'form', to: '/contact/', bg: 'bg-btn' },
]

export default function ContactFab() {
  const [open, setOpen] = useState(false)
  const box = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onDown = (e) => box.current && !box.current.contains(e.target) && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown) }
  }, [open])

  return (
    <div ref={box} className="fixed right-[max(16px,env(safe-area-inset-right))] bottom-[max(16px,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3">
      <ul id="contact-fab-list" aria-hidden={!open} className={`flex flex-col items-end gap-2.5 ${open ? '' : 'pointer-events-none'}`}>
        {ITEMS.map((it, i) => {
          const inner = (
            <>
              <span className="rounded-full bg-bg px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_-4px_rgba(13,27,42,.3)]">{it.label}</span>
              <span className={`inline-flex size-11 items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(13,27,42,.2)] ${it.bg}`}>
                <Icon name={it.icon} className="size-5" />
              </span>
            </>
          )
          const cls = 'flex items-center gap-2.5 no-underline'
          const delay = { transitionDelay: open ? `${(ITEMS.length - 1 - i) * 40}ms` : '0ms' }
          return (
            <li
              key={it.label}
              style={delay}
              className={`transition-all duration-200 motion-reduce:transition-none ${open ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-75 opacity-0'}`}
            >
              {it.to
                ? <Link to={it.to} className={cls} tabIndex={open ? 0 : -1}>{inner}</Link>
                : <a href={it.href} className={cls} tabIndex={open ? 0 : -1}>{inner}</a>}
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="contact-fab-list"
        aria-label={open ? 'დახურვა' : 'დაგვიკავშირდით'}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-[52px] items-center justify-center rounded-full bg-btn text-white shadow-[0_6px_18px_rgba(229,27,35,.4)] transition-colors hover:bg-accent-hover"
      >
        <Icon name={open ? 'close' : 'phone'} className="size-6" />
      </button>
    </div>
  )
}
