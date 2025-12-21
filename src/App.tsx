import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header, { Nav } from './components/Header'
import Works from './components/Works'
import OurWorks from './pages/OurWorks'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<><Header /><Works /></>} />
        <Route path="/our-works" element={<OurWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

