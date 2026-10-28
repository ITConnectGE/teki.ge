import Icon from '../components/Icon.jsx'
import { Card, CardText, CardTitle, CtaBand, Grid, H2, Kicker, PageHead, Section, usePageTitle } from '../components/ui.jsx'
import { SERVICES } from '../content.js'

function List({ title, items }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">{title}</h3>
      <ul className="grid list-disc gap-1.5 pl-5 text-sm leading-[22px] text-ink-2">
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  )
}

export default function Services() {
  usePageTitle('სერვისები')
  return (
    <>
      <PageHead
        kicker="სერვისები"
        title="სამი მიმართულება, ერთი გუნდი და ერთი ხელშეკრულება"
        lead="ელექტროობა, გათბობა-გაგრილება და გენერატორი. ყოველთვიური გეგმიური ვიზიტი და რეაგირება, როცა რამე წყდება."
      />
      <Section label="სერვისები">
        <div className="grid gap-4">
          {SERVICES.map((s) => (
            <article key={s.id} id={s.id} className="grid scroll-mt-20 gap-5 rounded-xl bg-(--card) p-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-10 md:p-8">
              <div>
                <h2 className="flex items-center gap-3 text-xl leading-7 font-extrabold"><Icon name={s.icon} className="size-6 text-accent" />{s.name}</h2>
                <p className="mt-2 text-sm leading-[22px] text-ink-2">{s.sub}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
                <List title="გეგმიური ვიზიტისას" items={s.visit} />
                <List title="მოთხოვნისას" items={s.request} />
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section band labelledBy="all-title">
        <Kicker>ყველა სერვისზე</Kicker>
        <H2 id="all-title">რაც ყველა მიმართულებას ახლავს</H2>
        <Grid>
          <Card to="/digital/">
            <CardTitle>რეესტრი და ისტორია</CardTitle>
            <CardText>ყველა დანადგარი სერიული ნომრით; ყოველი ვიზიტი და შეკეთება ჩანს კლიენტის პორტალში.</CardText>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-sm font-semibold text-accent">ციფრული სერვისები <Icon name="arrow" className="size-4" /></span>
          </Card>
          <Card><CardTitle>ქვეკონტრაქტორები</CardTitle><CardText>სამუშაოს, რომელიც პაკეტს სცდება, ჩვენ ვგეგმავთ: ვეძებთ შემსრულებელს, ვმართავთ და ვაკონტროლებთ.</CardText></Card>
          <Card><CardTitle>სპეციფიური დანადგარები</CardTitle><CardText>დანადგარებს, რომლებსაც ვერ ვემსახურებით, აღწერისას ცალკე მოვნიშნავთ, რომ წინასწარ იცოდეთ.</CardText></Card>
        </Grid>
      </Section>
      <CtaBand />
    </>
  )
}
