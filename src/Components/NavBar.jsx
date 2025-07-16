import MyLogo from '../assets/MyLogo.webp'
import { useState, useEffect } from 'react';
import useScrollDirection from './hook/UseScrollDirection';

    const NavBar = () => {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <nav className={`flex-1/2 items-center justify-between px-20 mt-6`}>
    <nav className={`flex items-center justify-between px-20 fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrollDirection === 'down' ? '-translate-y-32' : 'translate-y-0'}
        ${isScrolled ? 'pt-3 pb-2' : 'pt-6'} `}>
        <div className={`logo items-center ${isScrolled ? 'hidden' : 'flex'}`}>
            <img src={MyLogo} alt="theoKode Brand Logo" className='w-12'/>
            <h1 className='text-2xl font-switzer font-medium '>TheoKode</h1>
        </div>

        <ul className={`bg-white px-8 py-3 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-black)] border border-black/10 flex items-center gap-16 text-[16px] font-switzer font-medium ${isScrolled ? 'mx-auto' : ''}`}>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Overview</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>About</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Work</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Contact</a></li>
        </ul>

        <button type="button" className={`bg-primary-blue brightness-105 px-8 py-3 rounded-xl text-[16px] text-white font-switzer font-medium ${isScrolled ? 'hidden' : 'flex'}`}>Let's Connect</button>
    </nav>
  )
}

export default NavBar