import { BrowserRouter, Route, Routes } from 'react-router'
import { useRef } from 'react'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import OfferSection from './Components/OfferSection'
import WorkSection from './Components/WorkSection'
import AllWorkSection from './Pages/AllWorkSection'
import Contact from './Pages/Contact'

const App = () => {

  const overviewRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection overviewRef={overviewRef} aboutRef={aboutRef} workRef={workRef} />
              <AboutSection aboutRef={aboutRef} />
              <OfferSection />
              <WorkSection workRef={workRef} />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-work" element={<AllWorkSection />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App