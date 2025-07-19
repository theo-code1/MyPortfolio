/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
import GoArrow from '../assets/Icons/GoArrow'

const WorkArticle = ({ websiteRole, websiteDesc, features, websiteLink, websiteImg, websiteAlt }) => {
  
  const variants = {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };
  
  return (
    <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > 
      <article className='w-full h-auto rounded-3xl overflow-hidden font-switzer flex'>
          <div className="content-side h-full w-1/2 bg-light-black text-white pl-16 pr-12 pt-24 pb-28  flex flex-col gap-4">
              <h1 className='text-2xl '>{websiteRole}</h1>
              <p className='text-[16px] text-white/90 mb-4'>{websiteDesc}</p>
              <ul className='text-lg flex flex-col gap-1 mb-12'>
                  {features.map((feature, index) => (
                      <li className='list-disc list-inside list-' key={index}>{feature}</li>
                  ))}
              </ul>
              <a href={websiteLink} className='flex items-center gap-2 text-lg px-4 py-1.5 rounded-lg  w-fit bg-gradient-to-br from-white/20 hover:from-white/25 from-0% to-80% to-transparent cursor-pointer transition duration-200 group' target='_blank' >See Website <GoArrow className='text-2xl origin-bottom group-hover:scale-[1.1] group-hover:translate-x-[2px] group-hover:translate-y-[2px transition-all duration-200 ' /> </a>
          </div>

          <div className="img-side relative h-[full] w-1/2 bg-gradient-to-br from-[#040404] from-[-20%] to-white/80 to-120% overflow-hidden ">
                  <img src={websiteImg} alt={websiteAlt} className='absolute top-3/20 left-3/20 h-17/20 object-cover object-left-top rounded-tl-3xl select-none' draggable='false' />
          </div>
      </article>
    </motion.div>
  )
}

export default WorkArticle