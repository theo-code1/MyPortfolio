import MyLogo from '../assets/MyLogo.webp'
import { useState, useEffect } from 'react';
import useScrollDirection from './hook/UseScrollDirection';
import { Link } from 'react-router';

import Menu from '../assets/Icons/Menu'
import Close from '../assets/Icons/Close'


const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};



const NavBar = ({ overviewRef, aboutRef, workRef }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPhoneMenuOpened, setIsPhoneMenuOpened] = useState(false)
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
    

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPhoneMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPhoneMenuOpened]);



  return (
    <nav className={`bg-white/50 md:bg-transparent flex items-center justify-between md:gap-4 px-4 md:px-8 lg:px-20 backdrop-blur-2xl md:backdrop-blur-none rounded fixed top-0 left-0 w-full z-50 transition-all duration-400 ${!isMobile && 'animate-nav'}
        ${scrollDirection === 'down' ? '-translate-y-32' : 'translate-y-0'}
        ${isScrolled ? 'pt-4 pb-2' : 'pt-6'} `}>
        <div className={`logo items-center ${isScrolled ? 'flex md:hidden' : 'flex'}`}>
            <img src={MyLogo} alt="theoKode Brand Logo" className='w-10 md:w-12 select-none' draggable='false' />
            <h1 className='text-xl md:text-2xl font-switzer font-medium '>TheoKode</h1>
        </div>

        <ul className={`hidden md:flex items-center md:gap-8 lg:gap-16 text-[16px] font-switzer font-medium px-4 lg:px-8 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-black)] border border-black/10 backdrop-blur-lg ${isScrolled ? 'mx-auto bg-white/50' : 'bg-white'}`}>
            <li onClick={() => scrollToSection(overviewRef)}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Overview</li>
            <li onClick={() => scrollToSection(aboutRef)}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>About</li>
            <li onClick={() => scrollToSection(workRef)}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Work</li>
            <Link to={'/contact'} ><li className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Contact</li></Link>
        </ul>

        <Link to={'/contact'} className={`hidden md:flex bg-primary-blue brightness-105 hover:brightness-95 shadow-[0_4px_10px_0_var(--color-shadow-black)] hover:shadow-[0_2px_10px_0_var(--color-shadow-black-02)] transition-all duration-200 px-4 lg:px-8 py-3 rounded-xl text-[16px] text-white font-switzer font-medium cursor-pointer ${isScrolled ? 'md:hidden' : 'flex'}`}>Let's Connect</Link>
        
        <Menu onClick={() => setIsPhoneMenuOpened(!isPhoneMenuOpened)} className='flex md:hidden text-4xl ' />

        <PhoneMenu overviewRef={overviewRef} aboutRef={aboutRef} workRef={workRef} 
          isPhoneMenuOpened={isPhoneMenuOpened} setIsPhoneMenuOpened={setIsPhoneMenuOpened}
        />
    </nav>
  )
}

export default NavBar

export const PhoneMenu = ({ overviewRef, aboutRef, workRef, isPhoneMenuOpened, setIsPhoneMenuOpened }) => {
  

  return(
    <div className={`fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-8 md:hidden ${isPhoneMenuOpened ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}>
        <div className='absolute top-7 right-4'>
        <Close onClick={() => setIsPhoneMenuOpened(false)} className='text-4xl rounded-2xl active:bg-gray-100 ' />
      </div>

      <ul className={`flex flex-col items-center gap-4 mx-auto w-full text-xl font-switzer font-medium px-8 py-2 `}>
            <li onClick={() => {
              scrollToSection(overviewRef)
              setIsPhoneMenuOpened(false)
            }}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Overview</li>
            <hr className='w-1/2 text-black/30 ' />
            <li onClick={() => {
              scrollToSection(aboutRef)
              setIsPhoneMenuOpened(false)
            }}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>About</li>
            <hr className='w-1/2 text-black/30 ' />
            <li onClick={() => {
              scrollToSection(workRef)
              setIsPhoneMenuOpened(false)
            }}  className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Work</li>
            <hr className='w-1/2 text-black/30 ' />
            <Link to={'/contact'} ><li onClick={() => setIsPhoneMenuOpened(false)} className='cursor-pointer text-black hover:text-dark-blue/90 px-2 py-1 transition-all duration-200'>Contact</li></Link>
        </ul>

        <Link to={'/contact'} className={`flex md:hidden w-fit bg-primary-blue brightness-105 active:brightness-95 shadow-[0_4px_10px_0_var(--color-shadow-black)] active:shadow-[0_2px_10px_0_var(--color-shadow-black-02)] transition-all duration-200 px-8 py-3 rounded-xl text-lg text-white font-switzer font-medium `}>Let's Connect</Link>

    </div>
  // )}
  )
}