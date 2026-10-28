import { PRICE_FROM as P } from '../content.js'

export default {
  meta: {
    home: { title: '', description: 'Teki.GE — 2019’dan beri oteller, ofisler, mağazalar, kafeler ve restoranlar için teknik bakım: elektrik, ısıtma-soğutma, jeneratör. Sabit aylık ücret, planlı ziyaretler ve dijital müşteri portalı.' },
    who: { title: 'Kimler için', description: 'Teki.GE; otel, ofis, mağaza, kafe ve restoranların direktörleri, teknik müdürleri ve işletme sahipleri içindir.' },
    services: { title: 'Hizmetler', description: 'Teki.GE hizmetleri: elektrik sistemleri, ısıtma-soğutma ekipmanları ve jeneratörler. Planlı ziyaretler, taleplere müdahale ve alt yüklenici yönetimi.' },
    digital: { title: 'Dijital hizmetler', description: 'Teki.GE dijital hizmetleri: helpdesk, ekipman envanteri, raporlar, fotoğraf galerisi, onarım ve garanti geçmişi — hepsi müşteri portalında.' },
    pricing: { title: 'Fiyat', description: `Teki.GE Basic paketi: tesis başına aylık ${P} GEL’den başlayan fiyatlarla. Pakete neler dahil, neler ayrıca teklif edilir.` },
    team: { title: 'Ekip', description: 'Teki.GE ekibi: 2019’dan beri oteller, restoranlar ve ticari tesislerle çalışıyoruz.' },
    contact: { title: 'İletişim', description: 'Teki.GE ile iletişime geçin: +995 32 2 420 710, info@teki.ge, Ilia Chavchavadze Caddesi 37m, Tiflis. Tesis değerlendirmesi talep edin.' },
    notFound: { title: 'Sayfa bulunamadı', description: 'Teki.GE — sayfa bulunamadı.' },
  },

  nav: {
    who: 'Kimler için', services: 'Hizmetler', digital: 'Dijital hizmetler', pricing: 'Fiyat', team: 'Ekip', contact: 'İletişim',
    portal: 'Müşteri portalı', home: 'Teki.GE, ana sayfa', main: 'Ana menü', menu: 'Menü', footer: 'Alt menü', language: 'Dil',
  },

  common: {
    request: 'Değerlendirme isteyin',
    requestShort: 'Değerlendirme iste',
    more: 'Ayrıntılar',
    priceBefore: '', priceAfter: '₾’den başlayan', perMonth: '/ ay',
    priceNote: 'Tesis başına fiyattır. Nihai tutarı keşif sırasında, tesisin büyüklüğüne ve ekipman sayısına göre netleştiriyoruz.',
    ctaLabel: 'Değerlendirme isteyin',
    ctaTitle: 'Tesis keşfiyle başlayın',
    ctaText: 'Tesisinize gelir, ekipmanları kayda alır ve size fiyat ile plan göndeririz.',
    copyright: '© 2019–2026 Teki LLC',
  },

  fab: { open: 'Bize ulaşın', close: 'Kapat', call: 'Arayın', email: 'E-posta', form: 'Değerlendirme isteyin' },

  home: {
    kicker: 'Teknik bakım · 2019’dan beri',
    title: 'Tesisinizin teknik sistemleri — tek sorumlu ekiple',
    lead: 'Oteller, ofisler, mağazalar, kafeler ve restoranlar için elektrik, ısıtma-soğutma ve jeneratör. Sabit aylık ücret, planlı ziyaretler ve her ekipmanın, her işin görüldüğü dijital portal.',
    secondary: 'Neler dahil, fiyatı ne',
    facts: [['2019', 'yılından beri işletmelere hizmet'], [`${P} ₾’den`, 'başlayan fiyat, aylık, tesis başına'], ['1 ziyaret', 'her ay planlı']],
    digKicker: 'Dijital hizmetler',
    digTitle: 'Tesisinizde olan her şey — çevrimiçi',
    digLead: 'Helpdesk, envanter, raporlar ve geçmiş tek portalda. Hem siz hem ekibiniz erişebilir.',
    digMore: 'Tüm özellikler',
    whoKicker: 'Kimler için',
    whoTitle: 'Tesisten sorumlu olanlar için',
    svcKicker: 'Hizmetler',
    svcTitle: 'Üç alan, tek ekip',
    svcMore: 'Tüm hizmetler',
    priceKicker: 'Fiyat',
    priceTitle: 'Tek paket, tesis büyüklüğüne göre fiyat',
    priceBullets: ['Ayda 1 planlı ziyaret', 'Taleplere müdahale ve küçük onarımlar', 'Ekipman kaydı ve geçmişi çevrimiçi'],
    priceMore: 'Neler dahil, neler değil',
  },

  roles: [
    { role: 'Direktörler için', title: 'Maliyet önceden belli', short: 'Sabit aylık ücret; paket dışı işler yalnızca sizin onayınızla.', points: ['Sabit aylık ücret', 'Paket dışı işler yalnızca onayınızla, fiyatı önceden belli', 'Üç alan için tek sözleşme ve tek ortak'] },
    { role: 'Teknik müdürler için', title: 'Her ekipmanın tam resmi', short: 'Seri numaralı kayıt, ziyaret takvimi ve portalda geçmiş.', points: ['Seri numaralı ekipman kaydı', 'Planlı ziyaret takvimi ve servis geçmişi portalda', 'Alt yüklenicileri biz bulur ve yönetiriz'] },
    { role: 'İşletme sahipleri için', title: 'İşiniz durmaz', short: 'Planlı kontroller sorunu arızadan önce yakalar.', points: ['Planlı kontroller sorunu arızadan önce yakalar', 'Taleplere müdahale ve durum takibi çevrimiçi', 'Birkaç usta yerine tek sorumlu ekip'] },
  ],

  services: [
    { name: 'Elektrik', short: 'Elektrik panoları, hatlar ve aydınlatma.', sub: 'Elektrik panoları, hatlar ve aydınlatma.', visit: ['Pano ve sigortaların kontrolü', 'Hat ve bağlantıların kontrolü', 'Aydınlatma kontrolü'], request: ['Arıza tespiti', 'Küçük onarımlar (işçilik)', 'Büyük işler — önceden teklifle'] },
    { name: 'Isıtma-soğutma', short: 'Klimalar ve ısıtma-soğutma ekipmanları.', sub: 'Isıtma-soğutma ekipmanları: klimalar ve iklimlendirme sistemleri.', visit: ['Filtre temizliği', 'Çalışma modlarının kontrolü', 'Drenaj kontrolü'], request: ['Arıza tespiti', 'Küçük onarımlar (işçilik)', 'Parça ve gaz dolumu — önceden teklifle'] },
    { name: 'Jeneratör', short: 'Şebeke kesildiğinde yedek güç.', sub: 'Şebeke kesildiğinde yedek güç.', visit: ['Test çalıştırması', 'Yakıt, yağ ve akü kontrolü', 'Otomatik transfer şalterinin kontrolü'], request: ['Arıza tespiti', 'Küçük onarımlar (işçilik)', 'Parça ve bakım — önceden teklifle'] },
  ],

  servicesPage: {
    kicker: 'Hizmetler',
    title: 'Üç alan, tek ekip ve tek sözleşme',
    lead: 'Elektrik, ısıtma-soğutma ve jeneratör. Her ay planlı bir ziyaret ve bir şey bozulduğunda müdahale.',
    visit: 'Planlı ziyarette', request: 'Talep üzerine',
    allKicker: 'Her hizmetle', allTitle: 'Her alana eşlik edenler',
    all: [
      { title: 'Kayıt ve geçmiş', text: 'Her ekipmanın seri numarası var; her ziyaret ve onarım müşteri portalında görünür.' },
      { title: 'Alt yükleniciler', text: 'Paketi aşan işleri biz planlarız: uygulayıcıyı bulur, yönetir ve denetleriz.' },
      { title: 'Özel ekipmanlar', text: 'Hizmet veremediğimiz ekipmanları keşif sırasında ayrıca belirtiriz, önceden bilirsiniz.' },
    ],
  },

  digital: [
    { title: 'Helpdesk', text: 'Belirli bir ekipman için talep açar, durumunu ve yazışmaları görürsünüz.' },
    { title: 'Envanter', text: 'Her ekipman seri numarası, konumu ve açıklamasıyla.' },
    { title: 'Raporlar', text: 'Her ekipman için raporlama: ziyaretler, onarımlar, açık talepler.' },
    { title: 'Fotoğraf galerisi', text: 'Ekipman ve yapılan işin fotoğrafları, ziyaret tarihiyle.' },
    { title: 'Onarım geçmişi', text: 'Her ekipmanda neyin, ne zaman ve kim tarafından yapıldığı.' },
    { title: 'Garanti geçmişi', text: 'Her ekipmanın garanti koşulları ve süreleri.' },
    { title: 'Ziyaret takvimi', text: 'Planlı ziyaret tarihleri önceden.' },
    { title: 'Ekip erişimi', text: 'Tesisinizden birkaç çalışan portala giriş yapabilir.' },
  ],

  digitalPage: {
    kicker: 'Dijital hizmetler',
    title: 'Tesisinizde olan her şey — çevrimiçi',
    lead: 'Her ekipman, talep, ziyaret ve onarım tek portalda. Siz ve ekibiniz istediğiniz zaman erişebilirsiniz.',
    featKicker: 'Müşteri portalı', featTitle: 'Nelere erişiminiz var',
    login: 'Portala giriş',
    forKicker: 'Size ne sağlar', forTitle: 'Herkes için tek tablo',
    for: [
      { role: 'Direktörler için', title: 'İş ve maliyet bir arada', text: 'Raporlar neyin, ne zaman ve hangi ekipmanda yapıldığını gösterir.' },
      { role: 'Teknik müdürler için', title: 'Envanter ve geçmiş', text: 'Her ekipman, onarımları, fotoğrafları ve garantisi tek yerde.' },
      { role: 'İşletme sahipleri için', title: 'Şeffaflık', text: 'Planlı ziyaretlerin yapıldığını ve taleplerin yanıtlandığını görürsünüz.' },
    ],
  },

  steps: {
    kicker: 'Nasıl başlıyoruz',
    title: 'İlk aramadan hizmete üç adım',
    items: [
      { title: 'Keşif ve değerlendirme', text: 'Tesisinize gelir, ekipman listesini çıkarır ve size kesin fiyat göndeririz.' },
      { title: 'Sözleşme ve plan', text: 'Her ekipmana seri numarası verir, planlı ziyaret takvimini belirler ve size portal erişimi açarız.' },
      { title: 'Hizmet', text: 'Aylık ziyaretler, taleplere müdahale ve her ekipman için eksiksiz geçmiş.' },
    ],
  },

  whoPage: {
    kicker: 'Kimler için',
    title: 'Tesisten sorumlu olanlar için',
    lead: 'Direktör maliyet kontrolü, teknik müdür tam resim, işletme sahibi ise durmayan bir iş ister. Tek hizmet üçüne de yanıt verir.',
    rolesLabel: 'Roller',
    typesKicker: 'Tesisler', typesTitle: 'Kimlere hizmet veriyoruz',
    types: [
      { title: 'Küçük oteller', text: 'Butik ve aile otelleri. Odaların, lobinin ve teknik odaların elektriği ve iklimlendirmesi; planlı ve çağrı üzerine ziyaretlerle. İşleri misafirler rahatsız olmayacak şekilde planlarız.' },
      { title: 'Ofis', text: 'Aydınlatma, iklimlendirme ve sunucu odası dahil yedek güç. İşleri çalışanları rahatsız etmeyecek şekilde planlarız.' },
      { title: 'Mağaza', text: 'Aydınlatma, iklimlendirme ve yedek güç. Mağaza çalışma saatlerinde durmamalı.' },
      { title: 'Kafe ve restoran', text: 'Salon ve mutfağın elektriği, ısıtma-soğutma ve jeneratör; yoğun saatler göz önünde bulundurularak.' },
    ],
  },

  pricingPage: {
    kicker: 'Fiyat',
    title: 'Tek paket, tesis büyüklüğüne göre fiyat',
    lead: `Basic paketi aylık ${P} GEL’den başlar. Kesin tutarı keşif sırasında belirliyoruz.`,
    scopeKicker: 'Hizmet ve fiyat', scopeTitle: 'Neleri kapsar, fiyatı ne',
    includedTitle: 'Pakete dahil',
    included: ['Ayda 1 planlı ziyaret', 'Ekipman kaydı ve çevrimiçi izleme', 'Taleplere müdahale, portalda geçmiş', 'Küçük onarımlar (işçilik)', 'Alt yüklenicilerle koordinasyon'],
    quotedTitle: 'Ayrıca, önceden teklifle',
    quoted: ['Malzeme ve parçalar', 'Büyük onarımlar', 'Montaj ve taşıma'],
    note: 'Hizmet veremediğimiz özel ekipmanları keşif sırasında ayrıca belirtiriz.',
    faqKicker: 'Sorular', faqTitle: 'Sık sorulan sorular',
    faq: [
      { q: 'Tesisimiz için fiyat ne olur?', a: `Basic paketi aylık ${P} GEL’den başlar. Kesin fiyatı keşif sırasında, tesisin büyüklüğüne ve ekipman sayısına göre belirliyoruz.` },
      { q: 'İş paketin dışında kalırsa ne olur?', a: 'Önce size fiyatlı bir teklif göndeririz. İşe yalnızca onayınızdan sonra başlarız; alt yükleniciyi biz bulur ve yönetiriz.' },
      { q: 'Yapılanları nasıl görürüz?', a: 'Müşteri portalında: ekipman listesi, tüm ziyaret ve onarımlar, planlı ziyaret tarihleri ve taleplerinizin durumu.' },
    ],
  },

  work: {
    kicker: 'İş başında', title: 'Sahada nasıl çalışıyoruz',
    lead: 'İşlerimizden gerçek görüntüler: lazerle montaj, ekip çalışması ve sonuç.',
    more: 'Ekip',
    clips: ['Lazer hizalayıcıyla işaretleme ve montaj', 'Tek işte iki mühendis', 'Sonuç: duvara monte edilmiş TV', 'Otel koridoru: aydınlatma ve acil çıkış işaretleri'],
  },

  teamPage: {
    kicker: 'Ekip',
    title: 'Mühendislerimiz sahada',
    lead: '2019’dan beri oteller, restoranlar ve ticari tesislerle çalışıyoruz: inşaat aşamasından günlük bakıma kadar.',
    workKicker: 'İş başında', workTitle: 'Tüm alanlar için tek ekip',
    workLead: 'Tek sorumlu ekip ziyaretleri planlar, taleplere yanıt verir ve alt yüklenicileri yönetir.',
    since: 'yılından beri',
    photos: [
      { alt: 'Tavana ekipman monte eden bir mühendis', caption: 'Otel iç mekânında montaj' },
      { alt: 'Resepsiyonda çalışma alanı kuran bir mühendis', caption: 'Çalışma alanı kurulumu' },
      { alt: 'Merdiven üzerinde tavana ekipman monte eden bir mühendis', caption: 'Tavan montajı' },
    ],
  },

  contactPage: {
    kicker: 'İletişim',
    title: 'Değerlendirmeyle başlayın',
    lead: 'Tesisinize gelir, ekipmanları kayda alır ve size fiyat ile plan öneririz.',
    label: 'İletişim bilgileri ve form',
    how: 'Bize nasıl ulaşırsınız',
    phone: 'Telefon', email: 'E-posta', address: 'Adres',
    addressValue: 'Ilia Chavchavadze Caddesi 37m, Tiflis',
  },

  form: {
    honeypot: 'Web sitesi',
    name: 'Ad', type: 'Tesis türü',
    phone: 'Telefon', message: 'Yorum', optional: '(isteğe bağlı)', choose: 'Seçin',
    messagePlaceholder: 'ör. şehir, yaklaşık ekipman sayısı',
    types: ['Otel', 'Mağaza', 'Kafe', 'Restoran', 'Ofis', 'Diğer'],
    submit: 'Talebi gönder',
    note: 'Ziyaret zamanını ayarlamak için sizinle iletişime geçeceğiz.',
    errors: { name: 'Adınızı girin', phone: 'Telefon numarası girin', type: 'Tesis türünü seçin' },
    ok: ['Talebiniz alındı.', 'Ziyaret zamanını ayarlamak için sizinle iletişime geçeceğiz.'],
    unavailable: ['Form geçici olarak çalışmıyor.', 'Lütfen bizi arayın veya e-posta gönderin, bilgiler formun yanında.'],
    invalid: ['Alanları kontrol edin.', 'Ad, telefon ve tesis türü zorunludur.'],
    tooMany: ['Çok fazla deneme.', 'Birkaç dakika sonra tekrar deneyin veya bizi arayın.'],
    failed: ['Gönderilemedi.', 'Tekrar deneyin veya bizi arayın.'],
  },

  notFound: { kicker: '404', title: 'Sayfa bulunamadı', lead: 'Bağlantı değişmiş olabilir. Ana sayfaya dönün.', home: 'Ana sayfa', label: 'Bağlantılar' },
}
