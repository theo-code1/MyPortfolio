import React from 'react'

const OfferCard = ({ IconChild, OfferTitle, OfferDesc, SkillsName, iconBackground, skillsBackground, skillsColor }) => {
  return (
    <article className='relative font-switzer '>
        <div className="offer-icon absolute -top-1/2 left-1/2 -translate-x-1/2 w-20 "
            style={{ backgroundColor: iconBackground }}
        >
            {IconChild}
        </div>
        <h1 className='text-2xl text-black'>{OfferTitle}</h1>
        <p className='text-lg text-black/75'>{OfferDesc}</p>
        <div className="skills">
            <span className='text-sm px-2 py-1'
                style={{ backgroundColor: skillsBackground,
                          color: skillsColor  
                 }}
            >{SkillsName}</span>
        </div>
    </article>
  )
}

export default OfferCard