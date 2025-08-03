import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomeProvider } from './context/HomeProvider.jsx'
import { FirebaseProvider } from './context/Firebase.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeProvider>
      <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </HomeProvider>
  </StrictMode>,
)
