// import React, { useEffect, useState } from 'react'
import BlurText from "./BlurText";
import GridBackground from '../assets/GridBackground'
import NavBar from './NavBar'
import SeeArrow from '../assets/Icons/SeeArrow'
import GoArrow from '../assets/Icons/GoArrow'
import trust1 from '../assets/trust1.webp'
import trust2 from '../assets/trust2.webp'
import trust3 from '../assets/trust3.webp'
// import Project1 from '../assets/project01.webp'
// import Project2 from '../assets/project02.webp'
// import Project3 from '../assets/project03.webp'
// import Project4 from '../assets/project04.webp'
import Carousel from './Carousel'
import GithubIcon from "../assets/Icons/Github";

const HeroSection = () => {

  return (
    <section className='h-max pt-24 pb-12 max-w-screen overflow-x-hidden'>
        <GridBackground className='absolute top-0 left-1/2 -translate-x-1/2 w-fit -z-10 animate-opacity'/>
        <NavBar />

        <div className="cta-content flex flex-col gap-6 text-center w-fit mx-auto mt-24">
            {/* <h1 className='hero-headline text-6xl text-center font-clash-display font-bold '><span className='animated-spans animate-fadeLoad' style={{"--delay": 1}}>Think,</span><span className='animated-spans animate-fadeLoad' style={{"--delay": 2}}>Plan</span><br/><span className='animated-spans animate-fadeLoad' style={{"--delay": 3}}>let</span> <span className='animated-spans animate-fadeLoad' style={{"--delay": 4}}>me</span> <span className='animated-spans animate-fadeLoad' style={{"--delay": 5}}>get</span> <span className='animated-spans animate-fadeLoad' style={{"--delay": 6}}>it</span> <span className='animated-spans animate-fadeLoad' style={{"--delay": 7}}>into</span> <span className='animated-spans animate-fadeLoad' style={{"--delay": 8}}>reality</span></h1> */}
            <div className="hero-headline-motion flex flex-col items-center">
              <BlurText
                text="Think, Plan"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={'handleAnimationComplete'}
                className="text-6xl text-center font-clash-display font-bold"
                />
              <BlurText
                text="let me get it into reality"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={'handleAnimationComplete'}
                className="text-6xl text-center font-clash-display font-bold"
                />
              </div>
            <h1 className='text-6xl text-center font-clash-display font-bold hidden'><span>Think,</span><span>Plan</span><br/><span>let</span> <span>me</span> <span>turn</span> <span>it</span> <span>into</span> <span>Website</span></h1>
            <h3 className='text-xl font-switzer text-dark-blue mb-8 animate-poop' style={{"--delay": 9}}>Never miss a note, an idea, or a connection again—stay organized, inspired,<br />and effortlessly connected every step of the way.</h3>
            <div className="cta-buttons flex items-center gap-6 mx-auto animate-position-opacity">
                <button type="button" className='flex items-center gap-2 px-8 py-4 bg-white border-2 border-black rounded-xl font-switzer font-medium text-lg hover:shadow-[0_2px_20px_0_var(--color-shadow-black)] cursor-pointer transition-all duration-200 group'>See Projects <SeeArrow className='text-2xl group-hover:translate-x-2  transition-all duration-200' /></button>
                <button type="button" className='flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-xl font-switzer font-medium text-lg hover:brightness-95 active:brightness-80 transition-all duration-200 cursor-pointer group'>Start Your Project <GoArrow className='text-2xl group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-200'/></button>
            </div>
            <div className="trust flex gap-4 items-center mx-auto animate-blur mb-24">
              <h3 className='text-lg text-dark-blue font-medium'>Trusted by</h3>
              <div className="people-trusted flex gap-0 w-fit">
                <img src={trust1} alt="person One" draggable='false' className='size-10 select-none' />
                <img src={trust2} alt="person Two" draggable='false' className='size-10 select-none -translate-x-4' />
                <img src={trust3} alt="person Three" draggable='false' className='size-10 select-none -translate-x-8' />
              </div>
            </div>
        </div>
            {/* <div className="projects-slide flex gap-8 w-[90dvw] mx-auto border relative">
              <img src={Project3} alt="Project 03" style={{"--loop-delay": 1}} className='w-[30dvw] rounded-lg shadow-[0_4px_20px_0_var(--color-shadow-black-02)]' />
              <img src={Project1} alt="Project 01" style={{"--loop-delay": 2}} className='w-[30dvw] rounded-lg shadow-[0_4px_20px_0_var(--color-shadow-black-02)]' />
              <img src={Project2} alt="Project 02" style={{"--loop-delay": 3}} className='w-[30dvw] rounded-lg shadow-[0_4px_20px_0_var(--color-shadow-black-02)]' />
              <img src={Project4} alt="Project 04" style={{"--loop-delay": 4}} className='w-[30dvw] rounded-lg shadow-[0_4px_20px_0_var(--color-shadow-black-02)]' />
            </div> */}
        <Carousel />
        <div className="github-link mx-auto w-fit mt-8 hover:brightness-90 transition-all duration-200">
          <a className="text-xl font-switzer font-semibold flex items-center gap-2 pl-3 pr-6 py-2 bg-github-color w-fit rounded-2xl text-white" href="https://github.com/theo-code1" target='_blank' ><GithubIcon className='text-white text-[40px]' /> Github </a>
        </div>
        

    </section>
  )
}

export default HeroSection