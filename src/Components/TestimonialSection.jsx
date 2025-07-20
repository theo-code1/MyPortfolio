import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import PersonImg from '../assets/trust3.webp'
import FiveStars from '../assets/5stars.webp'
import FourStars from '../assets/4stars.webp'
import ThreeStars from '../assets/3stars.webp'
import SeeArrow from '../assets/Icons/SeeArrow'

const TestimonialSection = () => {

  const commentsInfo = [
    {
      profile: { img: PersonImg, name: 'Jane Cooper', username: '@Jane_Cooper'},
      platform: 'twitter',
      message: "I haven't worked with you directly yet, but I've been following your work and really appreciate the quality and attention to detail in your projects. Your professionalism and the way you present your services stand out. Looking forward to seeing more from you!",
      stars: 4,
      link: '#'
    },
    {
      profile: { img: PersonImg, name: 'Jane Cooper', username: '@Jane_Cooper'},
      platform: 'twitter',
      message: "I haven't worked with you directly yet, but I've been following your work and really appreciate the quality and attention to detail in your projects. Your professionalism and the way you present your services stand out. Looking forward to seeing more from you!",
      stars: 5,
      link: '#'
    },
    {
      profile: { img: PersonImg, name: 'Jane Cooper', username: '@Jane_Cooper'},
      platform: 'twitter',
      message: "I haven't worked with you directly yet, but I've been following your work and really appreciate the quality and attention to detail in your projects. Your professionalism and the way you present your services stand out. Looking forward to seeing more from you!",
      stars: 4,
      link: '#'
    },
    {
      profile: { img: PersonImg, name: 'Jane Cooper', username: '@Jane_Cooper'},
      platform: 'twitter',
      message: "I haven't worked with you directly yet, but I've been following your work and really appreciate the quality and attention to detail in your projects. Your professionalism and the way you present your services stand out. Looking forward to seeing more from you!",
      stars: 3,
      link: '#'
    },
  ]

  return (
    <section className='h-screen bg-white flex flex-col items-center gap-16 pt-24 font-switzer '>
      <div className="heading flex flex-col text-center gap-2">
          <h1 className='text-[2rem] text-black font-semibold text-center'>What people say matters</h1>
          <p className='text-center text-sm text-black/50 '>Insights From People Who've Seen My Work in Action</p>
      </div>
      <div className="testimonial-articles grid grid-cols-3 gap-4 ">
        {commentsInfo.map((comment, index) => (
          <TestimonialArticle 
            key={index}
            Img={comment.profile.img}
            name={comment.profile.name}
            userName={comment.profile.username}
            platform={comment.platform}
            message={comment.message}
            link={comment.link}
            stars={comment.stars}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection

export const TestimonialArticle = ({ Img, name, userName, platform, message, stars, link }) => {
  return(
    <article className='bg-[#EBEBEB]/20 flex flex-col gap-4 rounded-2xl h-fit p-4 border-2 border-black/30'>
      <div className="header flex items-center justify-between ">
        <div className="profile flex items-center gap-2">
          <img src={Img} alt="" className='size-14' />
          <div className="person-info flex flex-col gap-1">
            <h1 className='text-xl'>{name}</h1>
            <h3 className='text-sm text-black/50'>{userName}</h3>
          </div>
        </div>
        {platform === 'twitter' && (<FaXTwitter className='text-4xl'/> )}
        {platform === 'threads' && (<FaThreads className='text-4xl'/> )}
        {platform === 'linkedin' && (<FaLinkedinIn className='text-4xl'/> )}
      </div>
      <p className='text-[16px] w-[420px]'>{message}</p>

      <div className="article-bottom flex items-center justify-between w-full">
        {stars === 5 && ( <img src={FiveStars} alt='Stars Rate' className='h-6 select-none' draggable='false' /> )}
        {stars === 4 && ( <img src={FourStars} alt='Stars Rate' className='h-6 select-none' draggable='false' /> )}
        {stars === 3 && ( <img src={ThreeStars} alt='Stars Rate' className='h-6 select-none' draggable='false' /> )}
        <a href={link}  className='flex items-center gap-2 text-lg cursor-pointer' >See <SeeArrow className='text-xl' /></a>
      </div>

    </article>
  )
}