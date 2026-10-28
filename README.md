# teki.ge

Teki.GE-ის საიტი: საინჟინრო მომსახურება სასტუმროებისთვის, ოფისებისთვის, მაღაზიებისთვის, კაფეებისა და რესტორნებისთვის (ელექტროობა, გათბობა-გაგრილება, გენერატორი).

აწყობილია React-ით, Tailwind CSS-ით და Vite-ით. ყოველი გვერდი build-ის დროს წინასწარ იწერება სტატიკურ HTML-ად, რომ საძიებო სისტემებმა და ნელმა ტელეფონებმა შიგთავსი JavaScript-ის ჩატვირთვამდე დაინახონ.

## გაშვება

```bash
npm install
npm run dev
```

- `npm run build` — საიტი `dist/`-ში, ყველა გვერდით (`/who/`, `/services/`, ...).
- `npm run build:preview` — ვერსია, რომელიც ნებისმიერი მისამართიდან მუშაობს (hash-ით ნავიგაცია); პრევიუსთვის.

## ფაილები

- `src/content.js` — პარამეტრები, რომლებიც ყველა ენაზე ერთნაირია: ტელეფონი, ელფოსტა, ფასი (`PRICE_FROM`), ფორმის მისამართი, მენიუს თანმიმდევრობა.
- `src/i18n/` — ტექსტები ენების მიხედვით: `ka.js` (ქართული, teki.ge/), `en.js` (/en/), `hi.js` (/hi/), `tr.js` (/tr/), `uk.js` (/uk/). ყველა ფაილს ერთნაირი სტრუქტურა აქვს: ახალი ტექსტი ხუთივეში უნდა დაემატოს.
- `src/pages/` — გვერდები: მთავარი, ვისთვის, სერვისები, ციფრული სერვისები, ფასი, გუნდი, კონტაქტი.
- `src/components/` — ჰედერი, ფუტერი, ხატულები და საერთო ელემენტები (ბარათი, ღილაკი, სექცია).
- `src/index.css` — ფერების ტოკენები (ღია და მუქი თემა) და Tailwind-ის თემა.
- `src/App.jsx` — მარშრუტები და თითოეული გვერდის სათაური და აღწერა საძიებო სისტემებისთვის.
- `scripts/prerender.js` — ყველა გვერდის სტატიკური HTML ყველა ენაზე, hreflang ბმულები, `sitemap.xml` და `robots.txt`.
- `public/assets/brand/` — TEKI ლოგოს ნაკრები; `public/assets/photos/` — გუნდის ფოტოები.
- `public/CNAME` — დომენი `teki.ge`.

## ჰოსტინგი: GitHub Pages

`main`-ზე ყოველი push-ის შემდეგ GitHub Actions (`.github/workflows/deploy.yml`) საიტს აწყობს და აქვეყნებს https://teki.ge-ზე. Pages-ის პარამეტრებში წყაროდ GitHub Actions უნდა იყოს არჩეული.

## შეფასების ფორმა

ფორმა მოთხოვნას აგზავნის `src/content.js`-ის `LEAD_ENDPOINT` მისამართზე (JSON POST). იქიდან ის helpdesk CRM-ში ქმნის კონტაქტს და გარიგებას.

GitHub Pages მხოლოდ სტატიკურ ფაილებს ემსახურება, ამიტომ მიმღები ცალკე უნდა გაეშვას. სანამ `LEAD_ENDPOINT` ცარიელია, ფორმა ვიზიტორს სწერს, რომ დროებით არ მუშაობს, და ტელეფონზე ან ელფოსტაზე უთითებს.

## სტოკ ფოტოები და ვიდეოები

`public/assets/stock/`-ში არის Pexels-იდან ჩამოტვირთული უფასო ფაილები ([Pexels License](https://www.pexels.com/license/)): კომერციული გამოყენება თავისუფალია, ავტორის მითითება სავალდებულო არაა. გამოიყენება მხოლოდ საილუსტრაციოდ (სერვისების ბარათები, სერვისების გვერდი, QR ბლოკი) — არა გუნდის გალერეაში და არა „ჩვენი ობიექტების“ ვიდეოებში.

| ფაილი | წყარო |
| --- | --- |
| electric-card.jpg | https://www.pexels.com/photo/electrician-diagnosing-electrical-panel-with-multimeter-34054464/ |
| hvac-card.jpg | https://www.pexels.com/photo/man-checking-an-air-conditioner-5463575/ |
| generator-card.jpg | https://www.pexels.com/photo/technicians-tinkering-with-a-power-generator-18816918/ |
| electric-service.jpg | https://www.pexels.com/photo/a-man-working-on-the-circuit-breaker-switch-9679179/ |
| hvac-service.jpg | https://www.pexels.com/photo/man-drilling-an-aircon-casing-5463581/ |
| generator-service.jpg | https://www.pexels.com/photo/man-repairs-generator-outdoors-in-urban-setting-37190225/ |
| qr-scan.jpg | https://www.pexels.com/photo/woman-taking-photos-of-a-qr-code-with-a-smartphone-16345589/ |
| clip-wiring.mp4 | https://www.pexels.com/video/construction-worker-installing-electrical-wiring-34572318/ |
| clip-control-panel.mp4 | https://www.pexels.com/video/technician-operating-electrical-control-panel-28886877/ |
| clip-battery-bank.mp4 | https://www.pexels.com/video/electrician-working-on-industrial-battery-bank-36167827/ |
| clip-light.mp4 | https://www.pexels.com/video/young-man-fixing-light-5391403/ |
| clip-rooftop.mp4 | https://www.pexels.com/video/industrial-technician-working-on-rooftop-project-35552709/ |
