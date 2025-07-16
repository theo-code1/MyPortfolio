import React from 'react'
import GridBackground from '../assets/GridBackground'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <section className='h-[200dvh]'>
        <GridBackground className='absolute top-0 left-1/2 -translate-x-1/2 w-fit -z-10 '/>
        <NavBar />

        <div className="cta-content">
            <h1 className='text-24 text-center'>Think, Plan<br/>let me get it into reality</h1>
            <h3></h3>
        </div>

    </section>
  )
}

export default HeroSection