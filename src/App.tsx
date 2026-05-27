import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HelloPage from './pages/HelloPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import HolisticLiving from './components/HolisticLiving'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                element={<HelloPage />}      />
        <Route path="/about"           element={<AboutPage />}      />
        <Route path="/holistic-living" element={<HolisticLiving />} />
        <Route path="/blog"            element={<BlogPage />}       />
      </Routes>
      <Footer />
    </>
  )
}
