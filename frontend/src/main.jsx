import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader/Loader.jsx'

function Root() {
  const [loading, setLoading] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1500)
    const t2 = setTimeout(() => setLoading(false), 1500 + 320)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <StrictMode>
      <BrowserRouter>
        {loading ? (
          <Loader hide={hiding} />
        ) : (
          <>
            <Navbar />
            <App />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
