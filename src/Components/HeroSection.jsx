import React from 'react'
import GridBackground from '../assets/GridBackground'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <section>
        <GridBackground className='absolute top-0 left-0 -z-10'/>
        <NavBar />

    </section>
  )
}

export default HeroSection