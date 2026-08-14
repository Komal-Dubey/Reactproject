import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import EcommerceHeader from './components/EcommerceHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <EcommerceHeader /> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
