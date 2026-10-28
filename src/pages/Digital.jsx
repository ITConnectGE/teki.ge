import Icon from '../components/Icon.jsx'
import { Button, Card, CardText, CardTitle, CtaBand, Grid, H2, Kicker, PageHead, Role, Section, usePageTitle } from '../components/ui.jsx'
import QrSection from '../components/QrSection.jsx'
import { DIGITAL_ICONS, PORTAL_URL } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

export default function Digital() {
  usePageTitle('digital')
  const { t } = useI18n()
  const d = t.digitalPage
  return (
    <>
      <PageHead kicker={d.kicker} title={d.title} lead={d.lead} />
      <Section labelledBy="feat-title">
        <Kicker>{d.featKicker}</Kicker>
        <H2 id="feat-title">{d.featTitle}</H2>
        <Grid cols={4}>
          {t.digital.map((f, i) => (
            <Card key={f.title}><Icon name={DIGITAL_ICONS[i]} className="size-7 text-accent" /><CardTitle>{f.title}</CardTitle><CardText>{f.text}</CardText></Card>
          ))}
        </Grid>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/contact/">{t.common.request} <Icon name="arrow" className="size-[18px]" /></Button>
          <Button href={PORTAL_URL} variant="soft" target="_blank" rel="noopener">{d.login}</Button>
        </div>
      </Section>
      <QrSection band />
      <Section labelledBy="dig-who-title">
        <Kicker>{d.forKicker}</Kicker>
        <H2 id="dig-who-title">{d.forTitle}</H2>
        <Grid>
          {d.for.map((f) => <Card key={f.role}><Role>{f.role}</Role><CardTitle>{f.title}</CardTitle><CardText>{f.text}</CardText></Card>)}
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
