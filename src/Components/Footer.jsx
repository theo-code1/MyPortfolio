import React from 'react'
import Logo from '../assets/LogoWhite&blue.webp'

const Footer = ({ aboutRef, workRef}) => {

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    

  return (
    <footer className='h-[70dvh] bg-black font-switzer flex flex-col items-center px-48 pt-26'>
        <div className="first-column flex items-center justify-between w-full">
            <div className="logo flex flex-col items-start gap-2">
                <img src={Logo} alt="Brand Logo" className='w-36' />
                <span className='text-sm text-white/60'>Copyright 2025. All rights reserved.</span>
            </div>
            <div className="resources flex gap-16">
                <ul className='text-sm flex flex-col gap-2 text-white font-light'>
                    <li className='text-lg font-medium mb-2'>Skills used</li>
                    <li className='cursor-pointer'>Javascript</li>
                    <li className='cursor-pointer'>ReactJS</li>
                    <li className='cursor-pointer'>Tailwind CSS</li>
                </ul>
                <ul className='text-sm flex flex-col gap-2 text-white font-light'>
                    <li className='text-lg font-medium mb-2'>About</li>
                    <li onClick={() => scrollToSection(aboutRef)} className='cursor-pointer'>About Me</li>
                    <li onClick={() => scrollToSection(workRef)} className='cursor-pointer'>Work</li>
                    <li className='cursor-pointer'>Resume</li>
                </ul>
                <ul className='text-sm flex flex-col gap-2 text-white font-light'>
                    <li className='text-lg font-medium mb-2'>Resources</li>
                    <li className='cursor-pointer'>Github</li>
                    <li className='cursor-pointer'>vs code</li>
                    <li className='cursor-pointer'>Figma</li>
                </ul>
                <ul className='text-sm flex flex-col gap-2 text-white font-light'>
                    <li className='text-lg font-medium mb-2'>Contact</li>
                    <li className='cursor-pointer'>Email Me</li>
                    <li className='cursor-pointer'>Twitter</li>
                    <li className='cursor-pointer'>LinkedIn</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer