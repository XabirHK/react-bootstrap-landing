import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { AboutUs } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import Navbar from './components/HomePage/Navbar'
import Carosal from './components/HomePage/Carosal'
import About from './components/HomePage/About'
import Featured from './components/HomePage/Featured'
import Highlite from './components/HomePage/Highlight'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Carosal />
      <Navbar />
      <About/>
      <Featured/>
      <Highlite/>
      
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <AboutUs data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
