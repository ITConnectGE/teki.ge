import { Button, PageHead, Section, usePageTitle } from '../components/ui.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function NotFound() {
  usePageTitle('notFound')
  const { t } = useI18n()
  const n = t.notFound
  return (
    <>
      <PageHead kicker={n.kicker} title={n.title} lead={n.lead} />
      <Section label={n.label}><Button to="/">{n.home}</Button></Section>
    </>
  )
}
