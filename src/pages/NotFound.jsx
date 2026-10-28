import { Button, PageHead, Section, usePageTitle } from '../components/ui.jsx'

export default function NotFound() {
  usePageTitle('გვერდი ვერ მოიძებნა')
  return (
    <>
      <PageHead kicker="404" title="გვერდი ვერ მოიძებნა" lead="ბმული შეიძლება შეიცვალა. დაბრუნდით მთავარ გვერდზე." />
      <Section label="ბმულები"><Button to="/">მთავარი გვერდი</Button></Section>
    </>
  )
}
