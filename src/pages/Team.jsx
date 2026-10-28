import { CtaBand, H2, Kicker, Lead, PageHead, Section, asset, usePageTitle } from '../components/ui.jsx'
import { PHOTOS } from '../content.js'
import WorkVideos from '../components/WorkVideos.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function Team() {
  usePageTitle('team')
  const { t } = useI18n()
  const tm = t.teamPage
  return (
    <>
      <PageHead kicker={tm.kicker} title={tm.title} lead={tm.lead} />
      <Section labelledBy="team-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{tm.workKicker}</Kicker>
            <H2 id="team-title">{tm.workTitle}</H2>
            <Lead>{tm.workLead}</Lead>
          </div>
          <p className="text-[44px] leading-[44px] font-extrabold tracking-tight text-accent md:text-right">
            2019<small className="block text-[13px] leading-5 font-semibold tracking-normal text-ink-2">{tm.since}</small>
          </p>
        </div>
        <div className="mt-8 grid max-w-[880px] grid-cols-2 gap-4 md:grid-cols-3">
          {PHOTOS.map((src, i) => (
            <figure key={src} className={`m-0 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
              <img src={asset(src)} alt={tm.photos[i].alt} width="800" height="600" loading="lazy" className="aspect-[4/3] h-auto w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-[13px] leading-5 text-ink-2">{tm.photos[i].caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <WorkVideos band />
      <CtaBand />
    </>
  )
}
