import Icon from '../components/Icon.jsx'
import { CtaBand, H2, Kicker, PageHead, PricePlate, Section, usePageTitle } from '../components/ui.jsx'
import { FAQ, INCLUDED, PRICE_FROM, QUOTED, SERVICES } from '../content.js'

export default function Pricing() {
  usePageTitle('ფასი')
  return (
    <>
      <PageHead
        kicker="ფასი"
        title="ერთი პაკეტი, ფასი ობიექტის ზომით"
        lead={`Basic პაკეტი იწყება ${PRICE_FROM} ₾-დან თვეში. ზუსტ თანხას ვადგენთ აღწერისას.`}
      />
      <Section labelledBy="scope-title">
        <Kicker>მომსახურება და ფასი</Kicker>
        <H2 id="scope-title">რას მოიცავს და რა ღირს</H2>
        <div className="mt-6 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <span key={s.id} className="inline-flex items-center gap-2 rounded-full bg-bg-2 py-1.5 pr-4 pl-3 text-sm font-semibold">
              <Icon name={s.icon} className="size-[18px] text-accent" />{s.name}
            </span>
          ))}
        </div>
        <div className="mt-8 grid items-start gap-7 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,340px)]">
          <div>
            <h3 className="mb-3 flex items-center gap-2.5 text-[15px] font-bold"><Icon name="check" className="size-[18px] text-ok" />შედის პაკეტში</h3>
            <ul className="grid list-disc gap-1.5 pl-5 text-sm leading-[22px] text-ink-2">{INCLUDED.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2.5 text-[15px] font-bold"><Icon name="wrench" className="size-[18px] text-accent" />ცალკე, წინასწარი შეთავაზებით</h3>
            <ul className="grid list-disc gap-1.5 pl-5 text-sm leading-[22px] text-ink-2">{QUOTED.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="mt-3 text-[13px] leading-5 text-ink-2">სპეციფიურ დანადგარებს, რომლებსაც ვერ ვემსახურებით, აღწერისას ცალკე მოვნიშნავთ.</p>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <PricePlate />
          </div>
        </div>
      </Section>
      <Section band labelledBy="faq-title">
        <Kicker>კითხვები</Kicker>
        <H2 id="faq-title">ხშირად დასმული კითხვები</H2>
        <div className="faq mt-7 grid max-w-[820px] gap-2.5">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-xl bg-(--card)">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-bold">
                {f.q}<Icon name="plus" className="size-5 text-accent transition-transform group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <p className="max-w-[680px] px-5 pb-4 text-sm leading-[22px] text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
