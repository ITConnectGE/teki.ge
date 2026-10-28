import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { PAGES } from './App.jsx'

export function render(url) {
  return renderToString(<StrictMode><StaticRouter location={url}><App /></StaticRouter></StrictMode>)
}

export const pages = PAGES.map(({ path, title, description }) => ({ path, title, description }))
