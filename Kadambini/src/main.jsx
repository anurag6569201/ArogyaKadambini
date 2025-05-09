import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// import {UserProvider} from './global/Context'

// Set global variables here
window.__KADAMBINI_DATA_SERVER__ = import.meta.env.VITE_KADAMBINI_DATA_SERVER;

createRoot(document.getElementById('root')).render(
  // <UserProvider>
    <StrictMode>
      <App />
    </StrictMode>
  // </UserProvider>
)
