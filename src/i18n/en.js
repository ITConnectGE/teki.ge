import { PRICE_FROM as P } from '../content.js'

export default {
  meta: {
    home: { title: '', description: 'Teki.GE — engineering maintenance for hotels, offices, shops, cafés and restaurants since 2019: electrical, heating and cooling, generators. A fixed monthly fee, planned visits and a digital client portal.' },
    who: { title: 'Who it’s for', description: 'Teki.GE is for directors, engineering managers and business owners of hotels, offices, shops, cafés and restaurants.' },
    services: { title: 'Services', description: 'Teki.GE services: electrical systems, heating and cooling equipment and generators. Planned visits, response to requests and subcontractor management.' },
    digital: { title: 'Digital services', description: 'Teki.GE digital services: helpdesk, equipment inventory, reports, photo gallery, repair and warranty history — all in the client portal.' },
    pricing: { title: 'Pricing', description: `Teki.GE Basic package: from ${P} GEL per month per site. What the package includes and what is quoted separately.` },
    team: { title: 'Team', description: 'The Teki.GE team: working with hotels, restaurants and commercial sites since 2019.' },
    contact: { title: 'Contact', description: 'Contact Teki.GE: +995 32 2 420 710, info@teki.ge, 37m Ilia Chavchavadze Ave, Tbilisi. Request a site assessment.' },
    notFound: { title: 'Page not found', description: 'Teki.GE — page not found.' },
  },

  nav: {
    who: 'Who it’s for', services: 'Services', digital: 'Digital services', pricing: 'Pricing', team: 'Team', contact: 'Contact',
    portal: 'Client portal', home: 'Teki.GE, home', main: 'Main menu', menu: 'Menu', footer: 'Footer menu', language: 'Language',
  },

  common: {
    request: 'Request an assessment',
    requestShort: 'Request an assessment',
    more: 'Learn more',
    priceBefore: 'from', priceAfter: '₾', perMonth: '/ month',
    priceNote: 'Price per site. We confirm the final amount during the survey, based on the size of the site and the number of units.',
    ctaLabel: 'Request an assessment',
    ctaTitle: 'Start with a site survey',
    ctaText: 'We visit your site, list the equipment and send you a price and a plan.',
    copyright: '© 2019–2026 Teki LLC',
  },

  fab: { open: 'Contact us', close: 'Close', call: 'Call us', email: 'Email us', form: 'Request an assessment' },

  home: {
    kicker: 'Engineering management · since 2019',
    title: 'Your building’s engineering systems — with one accountable team',
    lead: 'Electrical, heating and cooling and generators for hotels, offices, shops, cafés and restaurants. We manage the work, keep a record of every unit and service it for a fixed monthly fee. Every unit has a QR code: scan it to see its history.',
    secondary: 'What’s included and what it costs',
    facts: [['2019', 'serving businesses since'], ['QR', 'code on every unit'], [`${P} ₾`, 'and up, per month, per site'], ['1 visit', 'planned every month']],
    digKicker: 'Digital services',
    digTitle: 'Everything that happens at your site — online',
    digLead: 'Helpdesk, inventory, reports and history in one portal. You and your team have access.',
    digMore: 'All features',
    whoKicker: 'Who it’s for',
    whoTitle: 'For the people responsible for the building',
    svcKicker: 'Services',
    svcTitle: 'Three disciplines, one team',
    svcMore: 'All services',
    priceKicker: 'Pricing',
    priceTitle: 'One package, priced by the size of your site',
    priceBullets: ['1 planned visit a month', 'Response to requests and minor repairs', 'Equipment register and history online'],
    priceMore: 'What is and isn’t included',
  },

  pillars: {
    kicker: 'What we do', title: 'Engineering management, equipment records and service',
    items: [
      { title: 'Engineering management', text: 'We plan the work, manage subcontractors and keep deadlines and costs under control. You deal with one accountable team.' },
      { title: 'Equipment records', text: 'Every unit is recorded with its serial number, location, photos and warranty, and has its own QR code.' },
      { title: 'Service', text: 'Planned and call-out visits. Every job is written into the unit’s history.' },
    ],
  },

  qr: {
    kicker: 'QR code', title: 'Every unit gets its own QR code',
    lead: 'Scan it with a phone to see the unit’s full history: what was done, when and by whom, the warranty terms and the next planned visit.',
    steps: ['We put a QR sticker on every unit during the survey', 'Your staff or a technician scans it with a phone', 'The unit’s card opens: history, photos, warranty and a button to open a request'],
    example: 'Example', unit: 'Air conditioner · 18,000 BTU', place: 'Room 204', historyTitle: 'Unit history',
    history: [['12.10', 'Planned visit: filter cleaning'], ['03.09', 'Repair: drain cleared'], ['15.06', 'Planned visit: operating modes checked']],
    warranty: 'Warranty: until March 2027', next: 'Next visit: 12 November', action: 'Open a request', qrAlt: 'Illustration of a QR code',
  },

  roles: [
    { role: 'For directors', title: 'Costs known in advance', short: 'A fixed monthly fee; work outside the package only with your approval.', points: ['A fixed monthly fee', 'Work outside the package only with your approval, priced in advance', 'One contract and one partner for all three disciplines'] },
    { role: 'For engineering managers', title: 'The full picture on every unit', short: 'A register with serial numbers, a visit schedule and history in the portal.', points: ['Equipment register with serial numbers and QR codes', 'Planned visit schedule and service history in the portal', 'We find and manage subcontractors'] },
    { role: 'For owners', title: 'Business keeps running', short: 'Planned checks catch problems before they become breakdowns.', points: ['Planned checks catch problems before breakdowns', 'Response to requests and status online', 'One accountable team instead of several handymen'] },
  ],

  services: [
    { name: 'Electrical', short: 'Distribution boards, wiring and lighting.', sub: 'Distribution boards, wiring and lighting.', visit: ['Inspection of boards and breakers', 'Checks of wiring and connections', 'Lighting checks'], request: ['Fault diagnosis', 'Minor repairs (labour)', 'Larger work — quoted in advance'] },
    { name: 'Heating and cooling', short: 'Air conditioners and heating and cooling equipment.', sub: 'Heating and cooling equipment: air conditioners and climate systems.', visit: ['Filter cleaning', 'Checks of operating modes', 'Drainage checks'], request: ['Fault diagnosis', 'Minor repairs (labour)', 'Parts and refrigerant — quoted in advance'] },
    { name: 'Generators', short: 'Backup power when the grid goes down.', sub: 'Backup power when the grid goes down.', visit: ['Test run', 'Fuel, oil and battery checks', 'Automatic transfer switch checks'], request: ['Fault diagnosis', 'Minor repairs (labour)', 'Parts and servicing — quoted in advance'] },
  ],

  servicesPage: {
    kicker: 'Services',
    title: 'Three disciplines, one team and one contract',
    lead: 'Electrical, heating and cooling and generators. A planned visit every month, and a response when something breaks.',
    visit: 'During planned visits', request: 'On request',
    allKicker: 'With every service', allTitle: 'What comes with every discipline',
    all: [
      { title: 'Register and history', text: 'Every unit has a serial number; every visit and repair is visible in the client portal.' },
      { title: 'Subcontractors', text: 'For work outside the package we plan it, find the contractor, manage and supervise them.' },
      { title: 'Specialised equipment', text: 'Equipment we can’t service is flagged during the survey, so you know in advance.' },
    ],
  },

  digital: [
    { title: 'Helpdesk', text: 'Open a request for a specific unit and follow its status and messages.' },
    { title: 'Inventory', text: 'Every unit with its serial number, location and description.' },
    { title: 'Reports', text: 'Reporting on every unit: visits, repairs, open requests.' },
    { title: 'Photo gallery', text: 'Photos of equipment and completed work, dated by visit.' },
    { title: 'Repair history', text: 'What was done, when and by whom, for every unit.' },
    { title: 'Warranty history', text: 'Warranty terms and expiry dates for every unit.' },
    { title: 'Visit calendar', text: 'Planned visit dates, in advance.' },
    { title: 'Team access', text: 'Several people from your site can sign in to the portal.' },
  ],

  digitalPage: {
    kicker: 'Digital services',
    title: 'Everything that happens at your site — online',
    lead: 'Every unit, request, visit and repair is in one portal. You and your team have access at any time.',
    featKicker: 'Client portal', featTitle: 'What you get access to',
    login: 'Sign in to the portal',
    forKicker: 'What it gives you', forTitle: 'One picture for everyone',
    for: [
      { role: 'For directors', title: 'Work and cost together', text: 'Reports show what was done, when and on which unit.' },
      { role: 'For engineering managers', title: 'Inventory and history', text: 'Every unit, its repairs, photos and warranty in one place.' },
      { role: 'For owners', title: 'Transparency', text: 'You can see that planned visits happen and requests get answered.' },
    ],
  },

  steps: {
    kicker: 'How we start',
    title: 'Three steps from the first call to service',
    items: [
      { title: 'Survey and assessment', text: 'We visit your site, list the equipment and send you an exact price.' },
      { title: 'Contract and plan', text: 'We give every unit a serial number and a QR code, set the planned visit schedule and give you portal access.' },
      { title: 'Service', text: 'Monthly visits, response to requests and a full history for every unit.' },
    ],
  },

  whoPage: {
    kicker: 'Who it’s for',
    title: 'For the people responsible for the building',
    lead: 'A director needs control of costs, an engineering manager needs the full picture, and an owner needs a business that doesn’t stop. One service answers all three.',
    rolesLabel: 'Roles',
    typesKicker: 'Sites', typesTitle: 'Who we serve',
    types: [
      { title: 'Small hotels', text: 'Boutique and family-run hotels. Electrical and climate in rooms, lobbies and plant rooms, with planned and call-out visits. We plan work so guests aren’t disturbed.' },
      { title: 'Offices', text: 'Lighting, climate and backup power, including for the server room. We plan work so staff aren’t disrupted.' },
      { title: 'Shops', text: 'Lighting, climate and backup power. A shop shouldn’t stop during opening hours.' },
      { title: 'Cafés and restaurants', text: 'Power for the dining room and kitchen, heating and cooling and generators, planned around peak hours.' },
    ],
  },

  pricingPage: {
    kicker: 'Pricing',
    title: 'One package, priced by the size of your site',
    lead: `The Basic package starts from ${P} GEL per month. We confirm the exact amount during the survey.`,
    scopeKicker: 'Service and price', scopeTitle: 'What it covers and what it costs',
    includedTitle: 'Included in the package',
    included: ['1 planned visit a month', 'Equipment records and a QR code on every unit', 'Response to requests, history in the portal', 'Minor repairs (labour)', 'Coordination with subcontractors'],
    quotedTitle: 'Separately, with a quote in advance',
    quoted: ['Materials and parts', 'Major repairs', 'Installation and relocation'],
    note: 'Specialised equipment we can’t service is flagged separately during the survey.',
    faqKicker: 'Questions', faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What will it cost for our site?', a: `The Basic package starts from ${P} GEL per month. We set the exact price during the survey, based on the size of the site and the number of units.` },
      { q: 'What happens if a job is outside the package?', a: 'We send you a quote first. Work starts only after you approve it; we find and manage the subcontractor.' },
      { q: 'How do we see what was done?', a: 'In the client portal: the list of units, every visit and repair, planned visit dates and the status of your requests.' },
    ],
  },

  work: {
    kicker: 'At work', title: 'How we work on site',
    lead: 'Real footage from our jobs: laser-guided installation, teamwork and the finished result.',
    more: 'Team',
    clips: ['Marking and mounting with a laser level', 'Two engineers on one job', 'Result: TV mounted on the wall', 'Hotel corridor: lighting and exit signs'],
  },

  teamPage: {
    kicker: 'Team',
    title: 'Our engineers on site',
    lead: 'Since 2019 we have worked with hotels, restaurants and commercial sites: from construction to day-to-day maintenance.',
    workKicker: 'At work', workTitle: 'One team for every discipline',
    workLead: 'One accountable team plans visits, answers requests and manages subcontractors.',
    since: 'since',
    photos: [
      { alt: 'An engineer installing equipment on a ceiling', caption: 'Installation in a hotel interior' },
      { alt: 'An engineer setting up a workstation at a reception desk', caption: 'Setting up a workstation' },
      { alt: 'An engineer on a ladder installing equipment near the ceiling', caption: 'Ceiling installation' },
    ],
  },

  contactPage: {
    kicker: 'Contact',
    title: 'Start with an assessment',
    lead: 'We visit your site, list the equipment and propose a price and a plan.',
    label: 'Contact details and form',
    how: 'How to reach us',
    phone: 'Phone', email: 'Email', address: 'Address',
    addressValue: '37m Ilia Chavchavadze Ave, Tbilisi',
  },

  form: {
    honeypot: 'Website',
    name: 'Name', type: 'Type of site',
    phone: 'Phone', message: 'Comment', optional: '(optional)', choose: 'Select',
    messagePlaceholder: 'e.g. city, approximate number of units',
    types: ['Hotel', 'Shop', 'Café', 'Restaurant', 'Office', 'Other'],
    submit: 'Send request',
    note: 'We’ll contact you to arrange a visit.',
    errors: { name: 'Enter your name', phone: 'Enter a phone number', type: 'Select the type of site' },
    ok: ['Request received.', 'We’ll contact you to arrange a visit.'],
    unavailable: ['The form is temporarily unavailable.', 'Please call or email us — the details are next to the form.'],
    invalid: ['Please check the fields.', 'Name, phone and type of site are required.'],
    tooMany: ['Too many attempts.', 'Try again in a few minutes or call us.'],
    failed: ['Sending failed.', 'Try again or call us.'],
  },

  notFound: { kicker: '404', title: 'Page not found', lead: 'The link may have changed. Go back to the home page.', home: 'Home page', label: 'Links' },
}
