import { H2, Kicker, Section } from './ui.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function Steps({ band }) {
  const { t } = useI18n()
  return (
    <Section band={band} labelledBy="start-title">
      <Kicker>{t.steps.kicker}</Kicker>
      <H2 id="start-title">{t.steps.title}</H2>
      <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {t.steps.items.map((s, i) => (
          <li key={s.title}>
            <span className="mb-2 block text-[28px] leading-8 font-extrabold tracking-tight text-accent">0{i + 1}</span>
            <h3 className="mb-1.5 text-base leading-6 font-bold">{s.title}</h3>
            <p className="text-sm leading-[22px] text-ink-2">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
