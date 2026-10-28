import { CtaBand, H2, Kicker, Lead, PageHead, Section, asset, usePageTitle } from '../components/ui.jsx'
import { PHOTOS } from '../content.js'

export default function Team() {
  usePageTitle('გუნდი')
  return (
    <>
      <PageHead
        kicker="გუნდი"
        title="ჩვენი ინჟინრები ობიექტზე"
        lead="2019 წლიდან ვმუშაობთ სასტუმროებთან, რესტორნებთან და კომერციულ ობიექტებთან: მშენებლობის ეტაპიდან ყოველდღიურ მომსახურებამდე."
      />
      <Section labelledBy="team-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>სამუშაოზე</Kicker>
            <H2 id="team-title">ერთი გუნდი ყველა მიმართულებაზე</H2>
            <Lead>ერთი პასუხისმგებელი გუნდი გეგმავს ვიზიტებს, პასუხობს მოთხოვნებს და მართავს ქვეკონტრაქტორებს.</Lead>
          </div>
          <p className="text-[44px] leading-[44px] font-extrabold tracking-tight text-accent md:text-right">
            2019<small className="block text-[13px] leading-5 font-semibold tracking-normal text-ink-2">წლიდან</small>
          </p>
        </div>
        <div className="mt-8 grid max-w-[880px] grid-cols-2 gap-4 md:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure key={p.src} className={`m-0 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
              <img src={asset(p.src)} alt={p.alt} width="800" height="600" loading="lazy" className="aspect-[4/3] h-auto w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-[13px] leading-5 text-ink-2">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
