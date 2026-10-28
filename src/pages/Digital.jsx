import Icon from '../components/Icon.jsx'
import { Button, Card, CardText, CardTitle, CtaBand, Grid, H2, Kicker, PageHead, Role, Section, usePageTitle } from '../components/ui.jsx'
import { DIGITAL, PORTAL_URL } from '../content.js'

const FOR = [
  { role: 'დირექტორს', title: 'სამუშაო და ხარჯი ერთად', text: 'ანგარიშებიდან ჩანს, რა გაკეთდა, როდის და რომელ დანადგარზე.' },
  { role: 'საინჟინრო მენეჯერს', title: 'ინვენტარი და ისტორია', text: 'ყველა დანადგარი, მისი შეკეთებები, ფოტოები და გარანტია ერთ ადგილას.' },
  { role: 'მფლობელს', title: 'გამჭვირვალობა', text: 'ხედავთ, რომ გეგმიური ვიზიტები ტარდება და მოთხოვნებს პასუხი ეცემა.' },
]

export default function Digital() {
  usePageTitle('ციფრული სერვისები')
  return (
    <>
      <PageHead
        kicker="ციფრული სერვისები"
        title="ყველაფერი, რაც თქვენს ობიექტზე ხდება — ონლაინ"
        lead="ყველა დანადგარი, მოთხოვნა, ვიზიტი და შეკეთება ერთ პორტალშია. წვდომა გაქვთ თქვენც და თქვენს გუნდსაც, ნებისმიერ დროს."
      />
      <Section labelledBy="feat-title">
        <Kicker>კლიენტის პორტალი</Kicker>
        <H2 id="feat-title">რაზე გაქვთ წვდომა</H2>
        <Grid cols={4}>
          {DIGITAL.map((d) => (
            <Card key={d.title}><Icon name={d.icon} className="size-7 text-accent" /><CardTitle>{d.title}</CardTitle><CardText>{d.text}</CardText></Card>
          ))}
        </Grid>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/contact/">მოითხოვეთ შეფასება <Icon name="arrow" className="size-[18px]" /></Button>
          <Button href={PORTAL_URL} variant="soft" target="_blank" rel="noopener">პორტალში შესვლა</Button>
        </div>
      </Section>
      <Section band labelledBy="dig-who-title">
        <Kicker>რას გაძლევთ</Kicker>
        <H2 id="dig-who-title">ერთი სურათი ყველასთვის</H2>
        <Grid>
          {FOR.map((f) => <Card key={f.role}><Role>{f.role}</Role><CardTitle>{f.title}</CardTitle><CardText>{f.text}</CardText></Card>)}
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
