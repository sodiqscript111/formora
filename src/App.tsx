import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header, { Nav } from './components/Header'
import Works from './components/Works'
import GraphicDesignSection from './components/GraphicDesignSection'
import WebsiteWorks from './pages/WebsiteWorks'
import GraphicDesignWorks from './pages/GraphicDesignWorks'

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
        <Route path="/" element={<><Header /><Works /><GraphicDesignSection /></>} />
        <Route path="/website-works" element={<WebsiteWorks />} />
        <Route path="/graphic-design-works" element={<GraphicDesignWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

