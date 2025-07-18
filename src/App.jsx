import { useRef } from 'react'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import OfferSection from './Components/OfferSection'
import WorkSection from './Components/WorkSection'

const App = () => {

  const overviewRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  return (
    <>
      <HeroSection overviewRef={overviewRef} aboutRef={aboutRef} workRef={workRef} />
      <AboutSection aboutRef={aboutRef} />
      <OfferSection  />
      <WorkSection workRef={workRef}/>
    </>
  )
}

export default App