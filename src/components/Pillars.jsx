import Icon from './Icon.jsx'
import { Card, CardText, CardTitle, Grid, SecHead, Section } from './ui.jsx'
import { useI18n } from '../i18n/index.jsx'

// Same order as t.pillars.items: management, equipment records, service.
const ICONS = ['users', 'box', 'wrench']

export default function Pillars({ band }) {
  const { t } = useI18n()
  const p = t.pillars
  return (
    <Section band={band} labelledBy="pillars-title">
      <SecHead kicker={p.kicker} title={p.title} id="pillars-title" />
      <Grid>
        {p.items.map((x, i) => (
          <Card key={x.title}><Icon name={ICONS[i]} className="size-7 text-accent" /><CardTitle>{x.title}</CardTitle><CardText>{x.text}</CardText></Card>
        ))}
      </Grid>
    </Section>
  )
}
