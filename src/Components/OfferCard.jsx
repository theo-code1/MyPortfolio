import React from 'react'

const OfferCard = ({ IconChild, OfferTitle, OfferDesc, skillsBackground, skillsColor, skills }) => {



  return (
    <article className='relative font-switzer w-[450px] h-[ px-8 pt-16 pb-6 rounded-xl bg-white  flex flex-col gap-8 items-center justify-between border border-black/20 shadow-[0_2px_24px_0_var(--color-shadow-black)] hover:shadow-[0_4px_32px_0_var(--color-shadow-black)] transition-all duration-200 cursor-pointer'>
        <div className="offer-icon absolute -top-8 left-1/2 -translate-x-1/2 w-20 "
        >
            {IconChild}
        </div>
        <h1 className='text-[28px] font-semibold text-black'>{OfferTitle}</h1>
        <p className='text-lg text-black/75 mb-8'>{OfferDesc}</p>
        <div className="skills flex flex-wrap gap-2 ">
          {skills.map((skill, index) => (

            <span key={index} className='text-[16px]  w-fit px-4  py-[2px] rounded-full'
            style={{ backgroundColor: skillsBackground,
              color: skillsColor  
            }}
            >{skill}</span>
          ))}
        </div>
    </article>
  )
}

export default OfferCard

