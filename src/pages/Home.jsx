import Icon from '../components/Icon.jsx'
import { Button, Card, CardText, CardTitle, CtaBand, Grid, Kicker, Lead, More, PricePlate, Role, SecHead, Section, usePageTitle } from '../components/ui.jsx'
import Steps from '../components/Steps.jsx'
import WorkVideos from '../components/WorkVideos.jsx'
import Pillars from '../components/Pillars.jsx'
import QrSection from '../components/QrSection.jsx'
import { DIGITAL_ICONS, SERVICE_IDS } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

function Hero() {
  const { t } = useI18n()
  const h = t.home
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy py-12 text-on-navy [--focus:#fff] md:py-16">
      <div className="wrap relative z-10">
        <div className="max-w-[680px]">
          <Kicker onNavy>{h.kicker}</Kicker>
          <h1 id="hero-title" className="text-[28px] leading-9 font-extrabold tracking-[-.01em] md:text-4xl md:leading-[44px]">{h.title}</h1>
          <Lead onNavy>{h.lead}</Lead>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/contact/" className="w-full sm:w-auto">{t.common.request} <Icon name="arrow" className="size-[18px]" /></Button>
            <Button to="/pricing/" variant="navy" className="w-full sm:w-auto">{h.secondary}</Button>
          </div>
          <dl className="mt-9 grid grid-cols-1 gap-3 pt-6 shadow-[inset_0_1px_0_rgba(255,255,255,.16)] sm:grid-cols-4 sm:gap-4">
            {h.facts.map(([dt, dd]) => (
              <div key={dt} className="flex items-baseline gap-3 sm:block">
                <dt className="text-[22px] leading-7 font-extrabold whitespace-nowrap">{dt}</dt>
                <dd className="text-[13px] leading-5 text-on-navy-2 sm:mt-1">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-1/2 -right-[260px] hidden size-[420px] -translate-y-1/2 rotate-45 rounded-[42px] bg-brand lg:block xl:-right-[200px] xl:size-[520px] xl:rounded-[52px]" />
    </section>
  )
}

export default function Home() {
  usePageTitle('home')
  const { t } = useI18n()
  const h = t.home
  return (
    <>
      <Hero />

      <Pillars />

      <QrSection band />

      <Section labelledBy="dig-title">
        <SecHead kicker={h.digKicker} title={h.digTitle} id="dig-title" more={<More to="/digital/">{h.digMore}</More>}>
          <Lead>{h.digLead}</Lead>
        </SecHead>
        <Grid cols={4}>
          {t.digital.slice(0, 4).map((d, i) => (
            <Card key={d.title}><Icon name={DIGITAL_ICONS[i]} className="size-7 text-accent" /><CardTitle>{d.title}</CardTitle><CardText>{d.text}</CardText></Card>
          ))}
        </Grid>
      </Section>

      <Section band labelledBy="who-title">
        <SecHead kicker={h.whoKicker} title={h.whoTitle} id="who-title" more={<More to="/who/">{t.common.more}</More>} />
        <Grid>
          {t.roles.map((r) => (
            <Card key={r.role}><Role>{r.role}</Role><CardTitle>{r.title}</CardTitle><CardText>{r.short}</CardText></Card>
          ))}
        </Grid>
      </Section>

      <Section labelledBy="svc-title">
        <SecHead kicker={h.svcKicker} title={h.svcTitle} id="svc-title" more={<More to="/services/">{h.svcMore}</More>} />
        <Grid>
          {t.services.map((s, i) => (
            <Card key={SERVICE_IDS[i].id} to={{ pathname: '/services/', hash: `#${SERVICE_IDS[i].id}` }}>
              <Icon name={SERVICE_IDS[i].icon} className="size-7 text-accent" />
              <CardTitle>{s.name}</CardTitle>
              <CardText>{s.short}</CardText>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-sm font-semibold text-accent">{t.common.more} <Icon name="arrow" className="size-4" /></span>
            </Card>
          ))}
        </Grid>
      </Section>

      <Steps band />

      <WorkVideos more />

      <Section band labelledBy="price-title">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:gap-12">
          <div>
            <Kicker>{h.priceKicker}</Kicker>
            <h2 id="price-title" className="text-[22px] leading-[30px] font-extrabold md:text-[26px] md:leading-[34px]">{h.priceTitle}</h2>
            <ul className="mt-5 grid list-disc gap-1.5 pl-5 text-ink-2">
              {h.priceBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p className="mt-5"><More to="/pricing/">{h.priceMore}</More></p>
          </div>
          <PricePlate />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
