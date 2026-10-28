import { CtaBand, H2, Kicker, Lead, PageHead, Section, asset, usePageTitle } from '../components/ui.jsx'
import { PHOTOS, TEAM_PHOTO } from '../content.js'
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
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:gap-12">
          <div>
            <Kicker>{tm.workKicker}</Kicker>
            <H2 id="team-title">{tm.workTitle}</H2>
            <Lead>{tm.workLead}</Lead>
            <p className="mt-6 text-[44px] leading-[44px] font-extrabold tracking-tight text-accent">
              2019<small className="block text-[13px] leading-5 font-semibold tracking-normal text-ink-2">{tm.since}</small>
            </p>
          </div>
          <img src={asset(TEAM_PHOTO)} alt={tm.groupAlt} width="800" height="1000" className="aspect-[4/5] h-auto w-full max-w-[420px] rounded-xl object-cover" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PHOTOS.map((src, i) => (
            <figure key={src} className="m-0">
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
