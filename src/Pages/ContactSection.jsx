import React from 'react'
import { Link } from 'react-router'

import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import SendIcon from '../assets/Icons/SendIcon'

const Contact = () => {
  return (
    <section className='bg-black h-screen max-w-screen flex flex-col gap-16 pt-6 px-36'>
      <ul className={`w-fit mx-auto text-white/90 px-8 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-white)] border border-white/30 flex items-center gap-16 text-[16px] font-switzer font-medium `}>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Overview</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>About</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Work</li> </Link>
            <Link to={'/contact'} ><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Contact</li></Link>
        </ul>

        <div className="contact-content w-full flex items-start justify-between">
          <div className="contact-info  flex flex-col gap-4 text-white/90">
            <div className="work-label relative flex items-center gap-4 w-fit pl-1.5 pr-8 mb-12 py-2 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="dot size-2 bg-white/90 rounded-full ml-2"></div>
              <h2 className="text-white/90 text-xl font-[400] font-switzer">Contact</h2>
            </div>
            <h1 className='text-[34px] '>Get In Touch.</h1>
            <h2 className='text-[26px] mb-2'>I will Respond To Your Message Within 24 Hours</h2>
            <p className='text-lg mb-8'>I'm excited to hear about your project! Get in touch via<br /> the form on the side—let's start the conversation.</p>
            <div className="social-media flex items-center gap-8 text-3xl">
              <a href=""><FaXTwitter /></a>
              <a href=""><FaLinkedinIn /></a>
              <a href=""><FaThreads /></a>
              <a href=""><FaXTwitter /></a>
            </div>
          </div>
          <div className="form-content w-1/2 pl-24 " >

            <form action="https://formspree.io/f/xeozepeg" method='POST' className='bg-white/10 flex flex-col gap-8 border border-white/40 rounded-2xl px-8 pt-10 pb-12'>
              <div className="name-email flex gap-4 w-full">
                
                <div className="name-field flex flex-col gap-3 text-white/90 w-full">
                  <label htmlFor="name" className='text-[16px]' >Name *</label>
                  <input type="text" id='name' className='w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] ' placeholder='Enter full name'/>
                </div>

                <div className="name-field flex flex-col gap-3 text-white/90 w-full">
                  <label htmlFor="email" className='text-[16px]' >Email *</label>
                  <input type="email" id='email'className='w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] ' placeholder='Enter email' />
                </div>
              </div>

              <div className="subject flex flex-col gap-3 text-white/90 w-full">
                <label htmlFor="subject" className='text-[16px]' >Subject *</label>
                <input type="text" id='subject'className='w-full bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px] ' placeholder='e.g. Portfolio, E-commerce...' />
              </div>

              <div className="subject flex flex-col gap-3 text-white/90 ">
                <label htmlFor="message" className='text-[16px]' >Message *</label>
                <textarea name="Message" id="message" className='w-full h-40 resize-none bg-white/5 px-4 py-4 text-lg rounded-lg border-2 border-white/40 placeholder:text-[#A3A3A5] placeholder:text-[16px]' placeholder='how can i help you?' ></textarea>
              </div>

              <button type='submit' className=' w-full  bg-[#0047E1] flex items-center justify-center gap-2 py-4 rounded-lg hover:brightness-90 active:brightness-80 transition-all duration-100 ' >
                <span className='flex items-center gap-2 text-lg text-white text-center '>
                  Send <SendIcon /> 
                </span>
              </button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact