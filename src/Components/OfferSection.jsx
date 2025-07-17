import React from 'react'
import OfferCard from './OfferCard'

const OfferSection = () => {
  return (
    <section className='h-screen max-w-screen font-switzer flex flex-col items-centeroverflow-x-hidden'>
        <div className="headlines flex flex-col items-center gap-4 ">
            <h1 className='text-5xl text-center text-black font-semibold'>What I Offer</h1>
            <p className='text-black/75 text-lg text-center'>Comprehensive web development services focused on creating exceptional<br />digital experiences</p>
        </div>
        <div className="offerCards">
            <OfferCard />
            <OfferCard />
            <OfferCard />
        </div>
    </section>
  )
}

export default OfferSection