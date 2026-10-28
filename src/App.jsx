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
import { I18nProvider, LANGS } from './i18n/index.jsx'

// Pages by path inside a language; `key` picks the page's title and description from the dictionary.
export const PAGES = [
  { path: '/', key: 'home', element: <Home /> },
  { path: '/who/', key: 'who', element: <Who /> },
  { path: '/services/', key: 'services', element: <Services /> },
  { path: '/digital/', key: 'digital', element: <Digital /> },
  { path: '/pricing/', key: 'pricing', element: <Pricing /> },
  { path: '/team/', key: 'team', element: <Team /> },
  { path: '/contact/', key: 'contact', element: <Contact /> },
]

export default function App() {
  return (
    <Routes>
      {LANGS.map((l) => (
        <Route key={l.code} path={l.prefix || '/'} element={<I18nProvider lang={l.code}><Layout /></I18nProvider>}>
          {PAGES.map((pg) => pg.path === '/'
            ? <Route key="home" index element={pg.element} />
            : <Route key={pg.key} path={pg.path.slice(1)} element={pg.element} />)}
          <Route path="*" element={<NotFound />} />
        </Route>
      ))}
    </Routes>
  )
}
