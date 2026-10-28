import Icon from '../components/Icon.jsx'
import { Card, CardText, CardTitle, CtaBand, Grid, H2, Kicker, PageHead, Section, usePageTitle } from '../components/ui.jsx'
import { SERVICE_IDS } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

function List({ title, items }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">{title}</h3>
      <ul className="grid list-disc gap-1.5 pl-5 text-sm leading-[22px] text-ink-2">
        {items.map((x) => <li key={x}>{x}</li>)}
      </ul>
    </div>
  )
}

export default function Services() {
  usePageTitle('services')
  const { t } = useI18n()
  const s = t.servicesPage
  const [register, ...rest] = s.all
  return (
    <>
      <PageHead kicker={s.kicker} title={s.title} lead={s.lead} />
      <Section label={s.kicker}>
        <div className="grid gap-4">
          {t.services.map((svc, i) => (
            <article key={SERVICE_IDS[i].id} id={SERVICE_IDS[i].id} className="grid scroll-mt-20 gap-5 rounded-xl bg-(--card) p-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-10 md:p-8">
              <div>
                <h2 className="flex items-center gap-3 text-xl leading-7 font-extrabold"><Icon name={SERVICE_IDS[i].icon} className="size-6 text-accent" />{svc.name}</h2>
                <p className="mt-2 text-sm leading-[22px] text-ink-2">{svc.sub}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
                <List title={s.visit} items={svc.visit} />
                <List title={s.request} items={svc.request} />
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section band labelledBy="all-title">
        <Kicker>{s.allKicker}</Kicker>
        <H2 id="all-title">{s.allTitle}</H2>
        <Grid>
          <Card to="/digital/">
            <CardTitle>{register.title}</CardTitle>
            <CardText>{register.text}</CardText>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-sm font-semibold text-accent">{t.nav.digital} <Icon name="arrow" className="size-4" /></span>
          </Card>
          {rest.map((c) => <Card key={c.title}><CardTitle>{c.title}</CardTitle><CardText>{c.text}</CardText></Card>)}
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
