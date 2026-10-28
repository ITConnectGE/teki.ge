import Icon from './Icon.jsx'
import { CardText, CardTitle, SecHead, Section, asset } from './ui.jsx'
import { TEAM_PHOTO } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

// Same order as t.pillars.items: management, equipment records, service.
const ICONS = ['users', 'box', 'wrench']

export default function Pillars({ band }) {
  const { t } = useI18n()
  const p = t.pillars
  return (
    <Section band={band} labelledBy="pillars-title">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-12">
        <img src={asset(TEAM_PHOTO)} alt={p.photoAlt} width="800" height="1000" className="aspect-[4/5] h-auto w-full max-w-[420px] rounded-xl object-cover" />
        <div>
          <SecHead kicker={p.kicker} title={p.title} id="pillars-title" />
          <div className="mt-6 grid gap-3">
            {p.items.map((x, i) => (
              <div key={x.title} className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 rounded-xl bg-(--card) p-5">
                <Icon name={ICONS[i]} className="size-7 text-accent" />
                <div className="grid gap-1.5"><CardTitle>{x.title}</CardTitle><CardText>{x.text}</CardText></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
