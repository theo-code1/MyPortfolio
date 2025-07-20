import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import OfferSection from './Components/OfferSection';
import WorkSection from './Components/WorkSection';
import AllWorkSection from './Pages/AllWorkSection';
import ContactSection from './Pages/ContactSection';
import TestimonialSection from './Components/TestimonialSection';


function App() {
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
              <TestimonialSection />
            </>
          }
        />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/my-work" element={<AllWorkSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;