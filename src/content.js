// Settings shared by every language. Words live in src/i18n/<lang>.js.

export const CONTACT = {
  phone: '+995 32 2 420 710',
  email: 'info@teki.ge',
}

// Where the lead form posts (helpdesk CRM bridge). GitHub Pages is static, so it runs elsewhere;
// while empty, the form tells visitors to call or email instead.
export const LEAD_ENDPOINT = ''

export const PORTAL_URL = 'https://helpdesk.itconnect.ge'

export const PRICE_FROM = 750

// Menu order; labels come from t.nav[key].
export const NAV = [
  { to: '/who/', key: 'who' },
  { to: '/services/', key: 'services' },
  { to: '/digital/', key: 'digital' },
  { to: '/pricing/', key: 'pricing' },
  { to: '/team/', key: 'team' },
  { to: '/contact/', key: 'contact' },
]

// Same order as t.services.
export const SERVICE_IDS = [
  { id: 'electric', icon: 'electric' },
  { id: 'hvac', icon: 'hvac' },
  { id: 'generator', icon: 'generator' },
]

// Same order as t.digital.
export const DIGITAL_ICONS = ['ticket', 'box', 'chart', 'image', 'history', 'shield', 'calendar', 'users']

// Same order as t.teamPage.photos.
export const PHOTOS = ['assets/photos/install-camera-800.jpg', 'assets/photos/install-workstation-800.jpg', 'assets/photos/install-ladder-800.jpg']

// The lead endpoint accepts these Georgian values whatever language the form is shown in;
// same order as t.form.types.
export const FORM_TYPES = ['სასტუმრო', 'მაღაზია', 'კაფე', 'რესტორანი', 'ოფისი', 'სხვა']

// Short silent loops from our jobs, without the .mp4/.jpg extension; same order as t.work.clips.
export const VIDEOS = ['assets/video/laser', 'assets/video/team-mount', 'assets/video/tv-result', 'assets/video/corridor']
