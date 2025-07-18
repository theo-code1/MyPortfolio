import React from 'react'

const WorkArticle = ({ websiteRole, websiteDesc, features }) => {
  return (
    <article className='w-full h- border border-white rounded-2xl overflow-hidden font-switzer'>
        <div className="content-side h-full w-1/2 text-white ">
            <h1 className='text-2xl '>{websiteRole}</h1>
            <p className='text-[16px] text-white/90 '>{websiteDesc}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>

        <div className="img-side h-full w-1/2  "></div>
    </article>
  )
}

export default WorkArticle