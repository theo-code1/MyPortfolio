import React from 'react'
import Logo from '../assets/LogoWhite&blue.webp'

const Footer = ({ aboutRef, workRef}) => {

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    

  return (
    <footer className='relative h-[90dvh] md:h-[60dvh] lg:h-[70dvh] bg-black font-switzer flex flex-col items-center px-4 md:px-16 lg:px-48 pt-12 md:pt-26 overflow-hidden'>
        <div className="first-column flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8 md:gap-auto mb-8 md:mb-16">
            <div className="logo flex flex-col items-center md:items-start gap-2">
                <img src={Logo} alt="Brand Logo" className='w-32 md:w-36 ' />
                <span className='text-sm text-white/60 text-center'>Copyright 2025. All rights reserved.</span>
            </div>
            <div className="resources flex gap-16 flex-wrap md:w-1/2 lg:w-auto">
                <ul className='text-[15px] flex flex-col gap-2 text-white/80 font-[300]'>
                    <li className='text-lg text-white font-medium mb-2'>Skills used</li>
                    <li className=''>Javascript</li>
                    <li className=''>ReactJS</li>
                    <li className=''>Tailwind CSS</li>
                </ul>
                <ul className='text-[15px] flex flex-col gap-2 text-white/80 font-[300]'>
                    <li className='text-lg text-white font-medium mb-2'>Resources</li>
                    <li className=''>Github</li>
                    <li className=''>vs code</li>
                    <li className=''>Figma</li>
                </ul>
                <ul className='text-[15px] flex flex-col gap-2 text-white/80 font-[300]'>
                    <li className='text-lg text-white font-medium mb-2'>About</li>
                    <li onClick={() => scrollToSection(aboutRef)} className='hover:text-white/70 cursor-pointer'>About Me</li>
                    <li onClick={() => scrollToSection(workRef)} className='hover:text-white/70 cursor-pointer'>Work</li>
                    <li className='hover:text-white/70 cursor-pointer'>Resume</li>
                </ul>
                <ul className='text-[15px] flex flex-col gap-2 text-white/80 font-[300]'>
                    <li className='text-lg text-white font-medium mb-2'>Contact</li>
                    <li className='cursor-pointer'><a href='mailto:codingbusiness99@gmail.com' className='hover:text-white/70 transition-all duration-100' target='_blank'>Email Me </a></li>
                    <li className='cursor-pointer'><a href='https://x.com/TheoKode_?t=Aeyn9E65s60T6on178qkMg&s=08' className='hover:text-white/70 transition-all duration-100' target='_blank' >Twitter </a></li>
                    <li className='cursor-pointer'><a href='https://www.linkedin.com/in/theo-kode-0b35a632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-white/70 transition-all duration-100' target='_blank'>LinkedIn </a></li>
                </ul>
            </div>
        </div>
        <h1 className='text-[5rem] md:text-[10rem] lg:text-[16rem] 2xl:text-[18rem] text-center text-white font-clash-display leading-[80%] absolute bottom-2 left-1/2 -translate-x-1/2'>TheoKode</h1>
    </footer>
  )
}

export default Footer