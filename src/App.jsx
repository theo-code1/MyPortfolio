import React, { useState, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AnimatePresence } from "framer-motion";
import Loader from './Components/Loader';

const HeroSection = React.lazy(() => import('./Components/HeroSection'));
const AboutSection = React.lazy(() => import('./Components/AboutSection'));
const OfferSection = React.lazy(() => import('./Components/OfferSection'));
const WorkSection = React.lazy(() => import('./Components/WorkSection'));
const AllWorkSection = React.lazy(() => import('./Pages/AllWorkSection'));
const ContactSection = React.lazy(() => import('./Pages/ContactSection'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const overviewRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <Suspense fallback={<div className="text-center p-8">Loading sections...</div>} key="app">
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
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/my-work" element={<AllWorkSection />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      )}
    </AnimatePresence>
  );
};

export default App;