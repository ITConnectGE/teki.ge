import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { PRICE_FROM } from '../content.js'

// Public files (logo, photos) live under the build's base, which is "./" for the preview build.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export function usePageTitle(title) {
  useEffect(() => { document.title = title ? `${title} — Teki.GE` : 'Teki.GE' }, [title])
}

export function Dia() {
  return <i className="inline-block size-2 shrink-0 rotate-45 rounded-[1.5px] bg-brand" />
}

export function Kicker({ children, onNavy }) {
  return (
    <span className={`mb-3 inline-flex items-center gap-2.5 text-xs font-semibold ${onNavy ? 'text-on-navy-2' : 'text-accent'}`}>
      <Dia />{children}
    </span>
  )
}

export function H2({ children, id }) {
  return <h2 id={id} className="max-w-[760px] text-[22px] leading-[30px] font-extrabold md:text-[26px] md:leading-[34px]">{children}</h2>
}

export function Lead({ children, onNavy, className = '' }) {
  return <p className={`mt-3 max-w-[640px] text-base leading-[26px] ${onNavy ? 'text-on-navy-2' : 'text-ink-2'} ${className}`}>{children}</p>
}

// A page band. Cards inside read --card, so they stay one step off the band colour without borders.
export function Section({ band, children, label, labelledBy }) {
  return (
    <section
      aria-label={label}
      aria-labelledby={labelledBy}
      className={`py-12 md:py-16 ${band ? 'bg-bg-2 [--card:var(--bg)]' : '[--card:var(--bg-2)]'}`}
    >
      <div className="wrap">{children}</div>
    </section>
  )
}

const BTN = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold no-underline transition-colors motion-reduce:transition-none'
const SIZES = {
  md: 'min-h-11 px-5 py-2.5 text-sm',
  sm: 'min-h-9 px-3.5 py-1.5 text-xs',
}
const VARIANTS = {
  red: 'bg-btn text-white hover:bg-accent-hover',
  navy: 'bg-white/10 text-on-navy hover:bg-white/20',
  soft: 'bg-bg-2 text-ink hover:bg-line',
}

export function Button({ to, href, variant = 'red', size = 'md', className = '', children, ...rest }) {
  const cls = `${BTN} ${SIZES[size]} ${VARIANTS[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <a href={href} className={cls} {...rest}>{children}</a>
}

export function More({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent no-underline hover:underline">
      {children} <Icon name="arrow" className="size-4" />
    </Link>
  )
}

export function SecHead({ kicker, title, id, more, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div>
        <Kicker>{kicker}</Kicker>
        <H2 id={id}>{title}</H2>
        {children}
      </div>
      {more}
    </div>
  )
}

export function Card({ to, children, className = '' }) {
  const cls = `flex flex-col gap-2 rounded-xl bg-(--card) p-6 no-underline ${className}`
  if (to) return <Link to={to} className={`${cls} transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(20,32,46,.25)]`}>{children}</Link>
  return <div className={cls}>{children}</div>
}

export function CardTitle({ children }) {
  return <h3 className="text-base leading-6 font-bold">{children}</h3>
}

export function CardText({ children }) {
  return <p className="text-sm leading-[22px] text-ink-2">{children}</p>
}

export function Role({ children }) {
  return <span className="inline-flex items-center gap-2.5 text-xs font-semibold text-accent"><Dia />{children}</span>
}

export function Grid({ cols = 3, children, className = '' }) {
  const c = cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'
  return <div className={`mt-8 grid grid-cols-1 gap-4 ${c} ${className}`}>{children}</div>
}

export function PageHead({ kicker, title, lead }) {
  return (
    <section className="relative overflow-hidden bg-navy py-11 text-on-navy [--focus:#fff] md:py-14">
      <div className="wrap relative z-10">
        <Kicker onNavy>{kicker}</Kicker>
        <h1 className="max-w-[760px] text-[26px] leading-[34px] font-extrabold md:text-[32px] md:leading-10">{title}</h1>
        <Lead onNavy>{lead}</Lead>
      </div>
      <div aria-hidden="true" className="absolute top-1/2 -right-[150px] hidden size-[300px] -translate-y-1/2 rotate-45 rounded-[30px] bg-brand xl:block" />
    </section>
  )
}

export function CtaBand() {
  return (
    <section aria-label="შეფასების მოთხოვნა" className="bg-navy py-12 text-on-navy [--focus:#fff]">
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-xl leading-7 font-extrabold md:text-[22px] md:leading-[30px]">დაიწყეთ ობიექტის აღწერით</h2>
          <p className="mt-1.5 text-on-navy-2">მოვალთ ობიექტზე, აღვწერთ დანადგარებს და გიგზავნით ფასს და გეგმას.</p>
        </div>
        <Button to="/contact/" className="w-full sm:w-auto">მოითხოვეთ შეფასება <Icon name="arrow" className="size-[18px]" /></Button>
      </div>
    </section>
  )
}

export function PricePlate() {
  return (
    <div className="grid gap-3 rounded-xl bg-(--card) p-6">
      <span className="font-latin text-[22px] leading-6 tracking-[.03em] text-accent">BASIC</span>
      <div className="flex flex-wrap items-baseline gap-1.5">
        <b className="text-[40px] leading-[44px] font-extrabold tracking-tight">{PRICE_FROM}</b>
        <span className="text-lg font-bold">₾-დან</span>
        <small className="text-sm text-ink-2">/ თვე</small>
      </div>
      <p className="text-[13px] leading-5 text-ink-2">ფასი ერთ ობიექტზე. საბოლოო თანხას ვაზუსტებთ აღწერისას, ობიექტის ზომისა და დანადგარების რაოდენობის მიხედვით.</p>
      <Button to="/contact/" className="w-full">მოითხოვეთ შეფასება</Button>
    </div>
  )
}

export function CheckList({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((t) => (
        <li key={t} className="grid grid-cols-[18px_minmax(0,1fr)] gap-2.5 text-sm leading-[22px] text-ink-2">
          <Icon name="check" className="mt-0.5 size-[18px] text-ok" /><span>{t}</span>
        </li>
      ))}
    </ul>
  )
}
