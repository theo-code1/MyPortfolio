import React from 'react'
import GoArrow from '../assets/Icons/GoArrow'

const WorkArticle = ({ websiteRole, websiteDesc, features, websiteLink }) => {
  return (
    <article className='w-full h- rounded-3xl overflow-hidden font-switzer'>
        <div className="content-side h-full w-1/2 bg-light-black text-white pl-16 pr-12 py-36  flex flex-col gap-4">
            <h1 className='text-2xl '>{websiteRole}</h1>
            <p className='text-[16px] text-white/90 mb-4'>{websiteDesc}</p>
            <ul className='text-lg flex flex-col gap-1 mb-8'>
                {features.map((feature, index) => (
                    <li className='list-disc list-inside list-' key={index}>{feature}</li>
                ))}
            </ul>
            <a href={websiteLink} className='flex items-center gap-2 text-lg px-4 py-1.5 rounded-lg  w-fit bg-gradient-to-br from-white/20 to-transparent cursor-pointer ' target='_blank' >See Website <GoArrow className='text-2xl' /> </a>
        </div>

        <div className="img-side h-full w-1/2  "></div>
    </article>
  )
}

export default WorkArticle