import { Card, CardText, CardTitle, CheckList, CtaBand, Grid, H2, Kicker, PageHead, Role, Section, usePageTitle } from '../components/ui.jsx'
import { ROLES } from '../content.js'

const TYPES = [
  { title: 'სასტუმრო', text: 'ნომრების, ლობისა და ტექნიკური ოთახების ელექტროობა და კლიმატი. სამუშაოს ვგეგმავთ ისე, რომ სტუმარი არ შეწუხდეს.' },
  { title: 'მაღაზია', text: 'განათება, კლიმატი და სარეზერვო კვება. მაღაზია სამუშაო საათებში არ უნდა გაჩერდეს.' },
  { title: 'კაფე და რესტორანი', text: 'დარბაზისა და სამზარეულოს ელექტრომომარაგება, გათბობა-გაგრილება და გენერატორი, პიკის საათების გათვალისწინებით.' },
]

export default function Who() {
  usePageTitle('ვისთვის')
  return (
    <>
      <PageHead
        kicker="ვისთვის"
        title="მათთვის, ვინც ობიექტზე პასუხისმგებელია"
        lead="დირექტორს ხარჯის კონტროლი სჭირდება, საინჟინრო მენეჯერს — სრული სურათი, მფლობელს — ბიზნესი, რომელიც არ ჩერდება. ერთი მომსახურება სამივეს პასუხობს."
      />
      <Section label="როლები">
        <Grid className="!mt-0">
          {ROLES.map((r) => (
            <Card key={r.role} className="gap-3">
              <Role>{r.role}</Role>
              <h3 className="text-lg leading-7 font-extrabold">{r.title}</h3>
              <CheckList items={r.points} />
            </Card>
          ))}
        </Grid>
      </Section>
      <Section band labelledBy="types-title">
        <Kicker>ობიექტები</Kicker>
        <H2 id="types-title">ვის ვემსახურებით</H2>
        <Grid>
          {TYPES.map((t) => <Card key={t.title}><CardTitle>{t.title}</CardTitle><CardText>{t.text}</CardText></Card>)}
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
