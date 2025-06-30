import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomeProvider } from './context/HomeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeProvider>
    <App />
    </HomeProvider>
  </StrictMode>,
)
