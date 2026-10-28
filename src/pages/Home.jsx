import Icon from '../components/Icon.jsx'
import { Button, Card, CardText, CardTitle, CtaBand, Grid, Kicker, Lead, More, PricePlate, Role, SecHead, Section, usePageTitle } from '../components/ui.jsx'
import { DIGITAL, PRICE_FROM, ROLES, SERVICES } from '../content.js'
import Steps from '../components/Steps.jsx'

function Hero() {
  const facts = [
    ['2019', 'წლიდან ვემსახურებით ბიზნესებს'],
    [`${PRICE_FROM} ₾`, 'დან, თვეში, ერთ ობიექტზე'],
    ['1 ვიზიტი', 'გეგმიურად ყოველ თვეში'],
  ]
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy py-12 text-on-navy [--focus:#fff] md:py-16">
      <div className="wrap relative z-10">
        <div className="max-w-[640px]">
          <Kicker onNavy>საინჟინრო მომსახურება · 2019 წლიდან</Kicker>
          <h1 id="hero-title" className="text-[28px] leading-9 font-extrabold tracking-[-.01em] md:text-4xl md:leading-[44px]">
            თქვენი ობიექტის საინჟინრო სისტემები — ერთ პასუხისმგებელ გუნდთან
          </h1>
          <Lead onNavy>
            ელექტროობა, გათბობა-გაგრილება და გენერატორი სასტუმროებისთვის, მაღაზიებისთვის, კაფეებისა და რესტორნებისთვის.
            ფიქსირებული თვიური ფასი, გეგმიური ვიზიტები და ციფრული პორტალი, სადაც ყველა დანადგარი და ყველა სამუშაო ჩანს.
          </Lead>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/contact/" className="w-full sm:w-auto">მოითხოვეთ შეფასება <Icon name="arrow" className="size-[18px]" /></Button>
            <Button to="/pricing/" variant="navy" className="w-full sm:w-auto">რა შედის და რა ღირს</Button>
          </div>
          <dl className="mt-9 grid grid-cols-1 gap-3 pt-6 shadow-[inset_0_1px_0_rgba(255,255,255,.16)] sm:grid-cols-3 sm:gap-4">
            {facts.map(([dt, dd]) => (
              <div key={dt} className="flex items-baseline gap-3 sm:block">
                <dt className="text-[22px] leading-7 font-extrabold whitespace-nowrap">{dt}</dt>
                <dd className="text-[13px] leading-5 text-on-navy-2 sm:mt-1">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-1/2 -right-[260px] hidden size-[420px] -translate-y-1/2 rotate-45 rounded-[42px] bg-brand lg:block xl:-right-[200px] xl:size-[520px] xl:rounded-[52px]" />
    </section>
  )
}

export default function Home() {
  usePageTitle('')
  return (
    <>
      <Hero />

      <Section band labelledBy="dig-title">
        <SecHead kicker="ციფრული სერვისები" title="ყველაფერი, რაც თქვენს ობიექტზე ხდება — ონლაინ" id="dig-title" more={<More to="/digital/">ყველა შესაძლებლობა</More>}>
          <Lead>Helpdesk, ინვენტარი, ანგარიშები და ისტორია ერთ პორტალში. წვდომა გაქვთ თქვენც და თქვენს გუნდსაც.</Lead>
        </SecHead>
        <Grid cols={4}>
          {DIGITAL.slice(0, 4).map((d) => (
            <Card key={d.title}><Icon name={d.icon} className="size-7 text-accent" /><CardTitle>{d.title}</CardTitle><CardText>{d.text}</CardText></Card>
          ))}
        </Grid>
      </Section>

      <Section labelledBy="who-title">
        <SecHead kicker="ვისთვის" title="მათთვის, ვინც ობიექტზე პასუხისმგებელია" id="who-title" more={<More to="/who/">დაწვრილებით</More>} />
        <Grid>
          {ROLES.map((r) => (
            <Card key={r.role}><Role>{r.role}</Role><CardTitle>{r.title}</CardTitle><CardText>{r.short}</CardText></Card>
          ))}
        </Grid>
      </Section>

      <Section band labelledBy="svc-title">
        <SecHead kicker="სერვისები" title="სამი მიმართულება, ერთი გუნდი" id="svc-title" more={<More to="/services/">ყველა სერვისი</More>} />
        <Grid>
          {SERVICES.map((s) => (
            <Card key={s.id} to={{ pathname: '/services/', hash: `#${s.id}` }}>
              <Icon name={s.icon} className="size-7 text-accent" />
              <CardTitle>{s.name}</CardTitle>
              <CardText>{s.short}</CardText>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-sm font-semibold text-accent">დაწვრილებით <Icon name="arrow" className="size-4" /></span>
            </Card>
          ))}
        </Grid>
      </Section>

      <Steps />

      <Section band labelledBy="price-title">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:gap-12">
          <div>
            <Kicker>ფასი</Kicker>
            <h2 id="price-title" className="text-[22px] leading-[30px] font-extrabold md:text-[26px] md:leading-[34px]">ერთი პაკეტი, ფასი ობიექტის ზომით</h2>
            <ul className="mt-5 grid list-disc gap-1.5 pl-5 text-ink-2">
              <li>თვეში 1 გეგმიური ვიზიტი</li>
              <li>რეაგირება მოთხოვნებზე და მცირე შეკეთება</li>
              <li>დანადგარების რეესტრი და ისტორია ონლაინ</li>
            </ul>
            <p className="mt-5"><More to="/pricing/">რა შედის და რა არა</More></p>
          </div>
          <PricePlate />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
