/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import OfferSection from './Components/OfferSection';
import WorkSection from './Components/WorkSection';
import AllWorkSection from './Pages/AllWorkSection';
import ContactSection from './Pages/ContactSection';
import TestimonialSection from './Components/TestimonialSection';
import Footer from './Components/Footer';
import MyLogoLight from './assets/MyLogoLight.svg'
import MyLogo from './assets/MyLogo.svg'




function App() {
  const overviewRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Function to update the favicon based on theme
    const updateFavicon = (isDark) => {
      const favicon = document.getElementById('favicon');
      if (isDark) {
        favicon.href = MyLogoLight;
      } else {
        favicon.href = MyLogo;
      }
    };

    // Check initial theme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    updateFavicon(darkModeMediaQuery.matches);

    // Listen for theme changes
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
      updateFavicon(e.matches);
    };

    // Add listener
    darkModeMediaQuery.addListener(handleChange);

    // Cleanup
    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);

  // Rest of your component...


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
              <Footer aboutRef={aboutRef} workRef={workRef} />
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