import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// The preview build ("hash" mode) runs from any path, so it routes by URL hash and renders on the client.
const hashMode = import.meta.env.MODE === 'hash'
const Router = hashMode ? HashRouter : BrowserRouter
const app = <StrictMode><Router><App /></Router></StrictMode>
const root = document.getElementById('root')

if (!hashMode && root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
