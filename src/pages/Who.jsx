import { Card, CardText, CardTitle, CheckList, CtaBand, Grid, H2, Kicker, PageHead, Role, Section, usePageTitle } from '../components/ui.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function Who() {
  usePageTitle('who')
  const { t } = useI18n()
  const w = t.whoPage
  return (
    <>
      <PageHead kicker={w.kicker} title={w.title} lead={w.lead} />
      <Section label={w.rolesLabel}>
        <Grid className="!mt-0">
          {t.roles.map((r) => (
            <Card key={r.role} className="gap-3">
              <Role>{r.role}</Role>
              <h3 className="text-lg leading-7 font-extrabold">{r.title}</h3>
              <CheckList items={r.points} />
            </Card>
          ))}
        </Grid>
      </Section>
      <Section band labelledBy="types-title">
        <Kicker>{w.typesKicker}</Kicker>
        <H2 id="types-title">{w.typesTitle}</H2>
        <Grid cols={4}>
          {w.types.map((x) => <Card key={x.title}><CardTitle>{x.title}</CardTitle><CardText>{x.text}</CardText></Card>)}
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
