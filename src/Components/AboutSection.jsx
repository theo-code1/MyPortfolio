import React from 'react'

const AboutSection = () => {
  return (
    <section className='h-screen max-w-screen font-switzer flex flex-col items-start px-40 pt-24 overflow-x-hidden border'>
        <div className="content-side">
            <div className="online flex items-center gap-2 px-4 py-1 bg-white border-2 border-black/30 rounded-full shadow-[0_2px_10px_0_var(--color-shadow-black)]">
                <div className="dot bg-primary-green size-2.5 rounded-full"></div>
                <h3 className='text-lg text-black'>available for projets</h3>
            </div>
        </div>
        <div className="img-side">

        </div>
    </section>
  )
}

export default AboutSection