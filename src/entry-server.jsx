import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { PAGES } from './App.jsx'
import { LANGS } from './i18n/index.jsx'

export function render(url) {
  return renderToString(<StrictMode><StaticRouter location={url}><App /></StaticRouter></StrictMode>)
}

export const langs = LANGS.map(({ code, prefix, locale, dict }) => ({ code, prefix, locale, meta: dict.meta }))
export const pages = PAGES.map(({ path, key }) => ({ path, key }))
