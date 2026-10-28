import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Who from './pages/Who.jsx'
import Services from './pages/Services.jsx'
import Digital from './pages/Digital.jsx'
import Pricing from './pages/Pricing.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Every page with the title and description the pre-render writes into its HTML head.
export const PAGES = [
  { path: '/', element: <Home />, title: '', description: 'Teki.GE — საინჟინრო მომსახურება სასტუმროებისთვის, მაღაზიებისთვის, კაფეებისა და რესტორნებისთვის 2019 წლიდან: ელექტროობა, გათბობა-გაგრილება, გენერატორი. ფიქსირებული თვიური ფასი, გეგმიური ვიზიტები და ციფრული პორტალი.' },
  { path: '/who/', element: <Who />, title: 'ვისთვის', description: 'ვისთვისაა Teki.GE: დირექტორებისთვის, საინჟინრო მენეჯერებისთვის და ბიზნესის მფლობელებისთვის — სასტუმროები, მაღაზიები, კაფეები და რესტორნები.' },
  { path: '/services/', element: <Services />, title: 'სერვისები', description: 'Teki.GE-ის სერვისები: ელექტროობა, გათბობა-გაგრილების დანადგარები და გენერატორი. გეგმიური ვიზიტები, რეაგირება მოთხოვნებზე და ქვეკონტრაქტორების მართვა.' },
  { path: '/digital/', element: <Digital />, title: 'ციფრული სერვისები', description: 'Teki.GE-ის ციფრული სერვისები: helpdesk, დანადგარების ინვენტარიზაცია, ანგარიშები, ფოტოგალერეა, შეკეთებისა და გარანტიის ისტორია — კლიენტის პორტალში.' },
  { path: '/pricing/', element: <Pricing />, title: 'ფასი', description: 'Teki.GE Basic პაკეტი: 750 ₾-დან თვეში ერთ ობიექტზე. რა შედის პაკეტში და რა ხდება წინასწარი შეთავაზებით.' },
  { path: '/team/', element: <Team />, title: 'გუნდი', description: 'Teki.GE-ის გუნდი: 2019 წლიდან ვმუშაობთ სასტუმროებთან, რესტორნებთან და კომერციულ ობიექტებთან.' },
  { path: '/contact/', element: <Contact />, title: 'კონტაქტი', description: 'დაუკავშირდით Teki.GE-ს: +995 32 2 420 710, info@teki.ge, ილია ჭავჭავაძის გამზირი 37მ, თბილისი. მოითხოვეთ ობიექტის შეფასება.' },
]

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {PAGES.map((p) => <Route key={p.path} path={p.path} element={p.element} />)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
