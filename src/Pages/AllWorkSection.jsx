import React, { useState } from 'react'
import { Link } from 'react-router';
import GlobalIcon from '../assets/Icons/GlobalIcon' 

const AllWorkSection = () => {

  const [currentFilter, setCurrentFilter] = useState('All')

  // const scrollToSection = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };


  return (
    <section className='bg-black h-screen pt-6 px-42 flex flex-col gap-16'>
        <ul className={`w-fit mx-auto text-white/90 px-8 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-white)] border border-white/30 flex items-center gap-16 text-[16px] font-switzer font-medium `}>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Overview</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>About</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Work</li> </Link>
            <Link to={'/contact'} ><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Contact</li></Link>
        </ul>
        <div className="headers flex flex-col gap-8">
          <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs bg-white/10 backdrop-blur-sm border border-white/20">
            <GlobalIcon className="text-white/90 text-4xl" />
            <h2 className="text-white/90 text-2xl font-[400] font-switzer">Work</h2>
          </div>
          <h3 className="text-lg text-white/90 font-medium font-switzer">
            Developed sleek, visually stunning and high-performance websites
            using <br /> different technology like React.js and Tailwind CSS
          </h3>
        </div>
        <div className="filter-bar">
          <FilterBar currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
        </div>
    </section>
  )
}

export default AllWorkSection


export const FilterBar = ({ currentFilter, setCurrentFilter}) => {

  const filterItems = ['All', 'Personal', 'Landing Page', 'Portfolio', 'E-commerce', 'Practice']
 
  console.log(currentFilter)

  return(
    <ul className='flex items-center gap-3 '>
      {filterItems.map((item, index) => (
        <li onClick={() => setCurrentFilter(item)} className={`${currentFilter === item ? 'bg-gradient-to-br from-white/40 from-[-40%] to-transparent' : '' }  backdrop-blur-lg text-lg text-white font-switzer font-medium px-4 py-1.5 border border-white/30 rounded-xl cursor-pointer `} key={index}>{item}</li>
      ))}
    </ul>
  )
}