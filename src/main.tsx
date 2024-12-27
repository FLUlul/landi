import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import App from './App.tsx'
import About from './About.tsx'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
