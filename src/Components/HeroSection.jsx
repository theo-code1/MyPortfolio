import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import BlurText from "./BlurText";
import GridBackground from '../assets/GridBackground'
import NavBar from './NavBar'
import SeeArrow from '../assets/Icons/SeeArrow'
import GoArrow from '../assets/Icons/GoArrow'
import trust1 from '../assets/trust1.webp'
import trust2 from '../assets/trust2.webp'
import trust3 from '../assets/trust3.webp'
import Carousel from './Carousel'
import GithubIcon from "../assets/Icons/Github";

const HeroSection = ({ overviewRef, aboutRef, workRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="Overview" ref={overviewRef} className='h-max pt-10 relative md:pt-20 lg:pt-24 pb-12 px-2 max-w-screen overflow-x-hidden'>
      <GridBackground className='absolute top-0 left-1/2 -translate-x-1/2 w-fit h-screen md:h-auto -z-10 animate-opacity mx-auto'/>
      <NavBar overviewRef={overviewRef} aboutRef={aboutRef} workRef={workRef} />

      <div className="cta-content flex flex-col gap-6 text-center w-fit mx-auto mt-24">
        <div className="hero-headline-motion flex flex-col items-center justify-center text-center mx-auto">
          {!isMobile && (
            <>
              <BlurText
                text="Think, Plan"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={''}
                className="hidden md:flex text-3xl md:text-5xl lg:text-6xl text-center font-clash-display font-bold"
              />
              <BlurText
                text="let me turn it into Website"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={''}
                className="hidden md:flex text-3xl md:text-5xl lg:text-6xl text-center font-clash-display font-bold "
              />
            </>
          )}
          {isMobile && (
            <h1 className="flex md:hidden text-3xl font-clash-display font-bold ">
              Think, Plan<br />let me turn it into Website
            </h1>
          )}
        </div>
        <h3 className={`text-sm md:text-xl font-switzer text-dark-blue mb-8 ${!isMobile && 'animate-poop'} [--delay:0.5] lg:[--delay:1.2]`}  >Never miss a note, an idea, or a connection again—stay organized, inspired,<br className="hidden md:flex" /> and effortlessly connected every step of the way.</h3>
        <div className={`cta-buttons flex items-center gap-3 md:gap-6 mx-auto ${!isMobile && 'animate-position-opacity'}`}>
            <Link to={'/my-work'} className='flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-white border-[1.5px] border-black rounded-xl font-switzer font-medium text-[16px] md:text-lg hover:shadow-[0_2px_20px_0_var(--color-shadow-black)] cursor-pointer transition-all duration-200 group'>See Projects <SeeArrow className='text-2xl group-hover:translate-x-2  transition-all duration-200' /></Link>
            <Link to={'/contact'} className='flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-primary-blue text-white rounded-xl font-switzer font-medium text-[16px] md:text-lg hover:brightness-95 active:brightness-80 transition-all duration-200 cursor-pointer group' >Start Your Project <GoArrow className='text-2xl group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-200'/></Link>
        </div>
        <div className={`trust flex gap-4 items-center mx-auto ${!isMobile && 'animate-blur'} mb-8 md:mb-16 lg:mb-24`}>
          <h3 className='text-[16px] md:text-lg text-dark-blue font-medium'>Trusted by</h3>
          <div className="people-trusted flex gap-0 w-fit">
            <img src={trust1} alt="person One" draggable='false' className='size-10 select-none' />
            <img src={trust2} alt="person Two" draggable='false' className='size-10 select-none -translate-x-4' />
            <img src={trust3} alt="person Three" draggable='false' className='size-10 select-none -translate-x-8' />
          </div>
        </div>
      </div>
      <Carousel />
      <div className="github-link mx-auto w-fit mt-8 hover:brightness-90 transition-all duration-200">
        <a className="text-[16px] md:text-xl font-switzer font-semibold flex items-center gap-2 pl-2 md:pl-3 pr-4 md:pr-6 py-2 bg-github-color w-fit rounded-2xl text-white" href="https://github.com/theo-code1" target='_blank' ><GithubIcon className='text-white text-[32px] md:text-[40px]' /> Github </a>
      </div>
      

    </section>
  )
}

export default HeroSection