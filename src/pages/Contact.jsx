import { useRef, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { Button, H2, PageHead, Section, usePageTitle } from '../components/ui.jsx'
import { CONTACT, LEAD_ENDPOINT } from '../content.js'

const TYPES = ['სასტუმრო', 'მაღაზია', 'კაფე', 'რესტორანი', 'სხვა']
const ROLES = ['დირექტორი', 'საინჟინრო მენეჯერი', 'მფლობელი', 'სხვა']
const EMPTY = { name: '', role: '', company: '', type: '', phone: '', email: '', message: '', website: '' }
const OK = { title: 'მოთხოვნა მიღებულია.', text: 'დაგიკავშირდებით ვიზიტის დროის შესათანხმებლად.' }

const inputCls = 'w-full min-h-11 rounded-lg border bg-bg px-3 py-2.5 text-[15px] leading-[22px] text-ink placeholder:text-ink-2 focus:border-(--focus) focus:outline-2 focus:outline-(--focus) focus:outline-offset-0'

function Field({ id, label, required, optional, error, children }) {
  return (
    <div className="grid min-w-0 content-start gap-1.5">
      <label htmlFor={id} className="text-[13px] leading-5 font-semibold">
        {label}{required && <span className="text-accent" aria-hidden="true"> *</span>}
        {optional && <span className="font-normal text-ink-2"> (არასავალდებულო)</span>}
      </label>
      {children}
      {error && <span className="text-xs leading-[18px] text-accent">{error}</span>}
    </div>
  )
}

function newId() {
  try { return crypto.randomUUID() } catch { return String(Date.now()) + Math.random().toString(16).slice(2) }
}

function LeadForm() {
  const [data, setData] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState(null)
  const [sending, setSending] = useState(false)
  const startedAt = useRef(Date.now())
  const submission = useRef(null)
  const formRef = useRef(null)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))
  const border = (k) => (errors[k] ? 'border-accent' : 'border-line-strong')

  async function submit(e) {
    e.preventDefault()
    const v = Object.fromEntries(Object.entries(data).map(([k, x]) => [k, x.trim()]))
    const errs = {}
    if (!v.name) errs.name = 'მიუთითეთ სახელი'
    if (!v.type) errs.type = 'აირჩიეთ ობიექტის ტიპი'
    if (!v.phone && !v.email) errs.phone = 'მიუთითეთ ტელეფონი ან ელფოსტა'
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = 'ელფოსტა არასწორია'
    setErrors(errs)
    if (Object.keys(errs).length) {
      formRef.current.querySelector(`#${Object.keys(errs)[0]}`)?.focus()
      return
    }
    if (!LEAD_ENDPOINT) {
      setNotice({ error: true, title: 'ფორმა დროებით არ მუშაობს.', text: 'დაგვიკავშირდით ტელეფონით ან ელფოსტით, მონაცემები ფორმის გვერდითაა.' })
      return
    }
    submission.current ??= newId()
    setSending(true)
    try {
      const r = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, ts: startedAt.current, submission_id: submission.current }),
      })
      if (r.ok) {
        setNotice({ title: OK.title, text: OK.text })
        setData(EMPTY)
        submission.current = null
      } else if (r.status === 422) {
        setNotice({ error: true, title: 'გადაამოწმეთ ველები.', text: 'სახელი, ობიექტის ტიპი და ტელეფონი ან ელფოსტა სავალდებულოა.' })
      } else if (r.status === 429) {
        setNotice({ error: true, title: 'ძალიან ბევრი მცდელობა.', text: 'სცადეთ რამდენიმე წუთში ან დაგვირეკეთ.' })
      } else {
        throw new Error(String(r.status))
      }
    } catch {
      setNotice({ error: true, title: 'გაგზავნა ვერ მოხერხდა.', text: 'სცადეთ თავიდან ან დაგვირეკეთ.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <form ref={formRef} noValidate onSubmit={submit} className="grid gap-4 rounded-xl bg-(--card) p-5 sm:p-7">
      {/* Honeypot: hidden from people, filled by bots; the endpoint drops those. */}
      <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
        <label htmlFor="website">ვებგვერდი</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={set('website')} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="სახელი" required error={errors.name}>
          <input id="name" name="name" autoComplete="name" required className={`${inputCls} ${border('name')}`} value={data.name} onChange={set('name')} />
        </Field>
        <Field id="role" label="თანამდებობა">
          <select id="role" name="role" className={`${inputCls} select-arrow pr-10 ${border('role')}`} value={data.role} onChange={set('role')}>
            <option value="">აირჩიეთ</option>{ROLES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="company" label="ობიექტის სახელი">
          <input id="company" name="company" autoComplete="organization" className={`${inputCls} ${border('company')}`} value={data.company} onChange={set('company')} />
        </Field>
        <Field id="type" label="ობიექტის ტიპი" required error={errors.type}>
          <select id="type" name="type" required className={`${inputCls} select-arrow pr-10 ${border('type')}`} value={data.type} onChange={set('type')}>
            <option value="">აირჩიეთ</option>{TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="phone" label="ტელეფონი" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+995 5XX XX XX XX" className={`${inputCls} ${border('phone')}`} value={data.phone} onChange={set('phone')} />
        </Field>
        <Field id="email" label="ელფოსტა" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={`${inputCls} ${border('email')}`} value={data.email} onChange={set('email')} />
        </Field>
      </div>
      <Field id="message" label="კომენტარი" optional>
        <textarea id="message" name="message" rows={3} placeholder="მაგ. ქალაქი, დანადგარების დაახლოებითი რაოდენობა" className={`${inputCls} min-h-24 resize-y ${border('message')}`} value={data.message} onChange={set('message')} />
      </Field>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={sending} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-btn px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-60 sm:w-auto">
          მოთხოვნის გაგზავნა <Icon name="arrow" className="size-[18px]" />
        </button>
        <span className="text-xs leading-[18px] text-ink-2">დაგიკავშირდებით ვიზიტის დროის შესათანხმებლად.</span>
      </div>
      {notice && (
        <div role="status" className={`flex items-start gap-3 rounded-lg p-4 text-sm ${notice.error ? 'bg-accent-soft' : 'bg-ok-soft'}`}>
          <Icon name="check" className={`mt-0.5 size-5 ${notice.error ? 'text-accent' : 'text-ok'}`} />
          <p><strong>{notice.title}</strong> {notice.text}</p>
        </div>
      )}
    </form>
  )
}

export default function Contact() {
  usePageTitle('კონტაქტი')
  const rows = [
    ['ტელეფონი', <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>],
    ['ელფოსტა', <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>],
    ['მისამართი', CONTACT.address],
  ]
  return (
    <>
      <PageHead kicker="კონტაქტი" title="დაიწყეთ შეფასებით" lead="მოვალთ ობიექტზე, აღვწერთ დანადგარებს და შემოგთავაზებთ ფასს და გეგმას." />
      <Section label="კონტაქტი და ფორმა">
        <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14">
          <div>
            <H2>როგორ დაგვიკავშირდეთ</H2>
            <dl className="mt-6 grid">
              {rows.map(([k, v]) => (
                <div key={k} className="grid gap-0.5 py-3 shadow-[0_1px_0_var(--line)] sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-3">
                  <dt className="text-[13px] text-ink-2">{k}</dt>
                  <dd className="font-bold [overflow-wrap:anywhere]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  )
}
