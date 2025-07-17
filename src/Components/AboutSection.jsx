/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import CheckCircle from '../assets/Icons/CheckCircle'
import RightArrow from '../assets/Icons/RightArrow'
import ProfileImg from '../assets/ProfileImg.webp'

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const AboutSection = () => {
  return (
    <section id='About-section' className='h-screen max-w-screen font-switzer flex items-center justify-between px-48 my-8 overflow-x-hidden '>
        <div className="content-side w-[52%] flex flex-col gap-8  ">
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >

            <div className="online w-fit flex items-center gap-2 px-4 py-1 bg-white border-2 border-black/30 rounded-full ">
                <div className="dot bg-primary-green size-2.5 rounded-full"></div>
                <h3 className='text-lg text-black font-medium'>available for projets</h3>
            </div>
                </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
            <h1 className='text-[64px] leading-20 font-extrabold'>Who am I, and<br />Why Work with <span className='text-silver'>Me</span> ? </h1>
            <div className="paragraphs flex flex-col gap-4 text-start mb-4">
                <p className='text-lg text-black/75'>I&apos;m a web developer based in Morocco, passionate about creating clean, responsive websites that help businesses grow.</p>
                <p className='text-lg text-black/75'>Whether it&apos;s building an online presence for a local startup or refining the user experience for an established brand, I focus on purposeful design and real results.</p>
            </div>
                    </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
            <ul className='space-y-2 text-lg text-black/75 font-medium mb-8'>
                <li className={`flex items-center gap-3`}><CheckCircle className='text-2xl text-primary-green' />Modern React & JavaScript development</li>
                <li className={`flex items-center gap-3`}><CheckCircle className='text-2xl text-primary-green' />Responsive design with Tailwind CSS</li>
                <li className={`flex items-center gap-3`}><CheckCircle className='text-2xl text-primary-green' />Performance-optimized solutions</li>
                <li className={`flex items-center gap-3`}><CheckCircle className='text-2xl text-primary-green' />Clean, maintainable code architecture</li>
            </ul>
                    </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
            <div className="ctas-buttons flex items-center gap-4 ">
                <a href='#' className='flex items-center gap-2 text-lg text-white bg-primary-blue px-8 py-4 rounded-lg group cursor-pointer ' >Let's Connect <RightArrow className='text-xl group-hover:translate-x-2 transition-all duration-200' /></a>
                <a href='#' className='text-lg border border-black/40 px-8 py-4 rounded-lg hover:shadow-[0_2px_20px_0_var(--color-shadow-black)] transition-all duration-200 cursor-pointer ' >View Portfolio</a>
            </div>
                    </motion.div>
        </div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
        <div className="img-side w-fit relative">
            <img src={ProfileImg} alt="Profile Image" className="w-112 h-100 object-cover rounded-2xl outline-4  outline-white " />
            <div className="behine-layer absolute top-0 left-0 rounded-2xl rotate-4 w-full h-full bg-primary-blue/40 -z-10 shadow-2xl"></div>
        </div>
                </motion.div>
    </section>
  )
}

export default AboutSection