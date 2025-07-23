/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

import CodeIcon from "../assets/Icons/CodeIcon";
import WebsiteIcon from "../assets/Icons/WebsiteIcon";
import DesignIcon from "../assets/Icons/DesignIcon";

const OfferSection = () => {
  const cardsInfo = [
    {
      title: "Frontend Development",
      desc: "Develops high-performance, responsive websites using modern technologies like ReactJS and Tailwind CSS. Emphasizes clean, scalable code and adheres to industry best practices for optimal user experience and maintainability.",
    },
    {
      title: "Revamp Solution",
      desc: "Transform your website with m comprehensive revamp services that merge technical excellence with clean design. I rebuild, redesign, and optimize your site from the ground up, stunning visual design, and enhanced performance that drives results and captivates your audience.",
    },
    {
      title: "UI/UX Design",
      desc: "Basic UI/UX design focused on creating clean, user-friendly interfaces using modern tools like Figma. Each design emphasizes clarity, usability, and seamless frontend integration turning ideas into simple, engaging digital experiences.",
    },
  ];

  const devSkills = [
    "Html/ Css/ Js",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Git&Github",
  ];
  const revampSkills = [
    "Frontend Design",
    "Code Modernization",
    "UI/UX Design",
    "Performance Optimization",
  ];
  const desSkills = ["Figma", "Prototyping", "User Research", "Accessibility"];

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="h max-w-screen font-switzer flex flex-col gap-16 items-centeroverflow-x-hidden px-4 md:px-0 lg:px-16 my-16 overflow-hidden ">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="headlines flex flex-col items-center gap-4 ">
          <h1 className="text-4xl md:text-5xl text-center text-black font-semibold">
            What I Offer ?
          </h1>
          <p className="text-black/75 text-[16px] md:text-lg text-center">
            Comprehensive web development services focused on creating
            exceptional
            <br className="hidden md:flex"/>
            digital experiences
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="offerCards max-w-screen relative w-fit flex flex-col md:flex-row md:justify-center md:flex-wrap gap-12 md:gap-x-4 lg:gap-8 pt-8 mx-auto overflow-hidden ">
          <OfferCard
            IconChild={
              <CodeIcon className="text-[68px] p-3 bg-[#2759EF] brightness-110 text-white rounded-2xl" />
            }
            OfferTitle={cardsInfo[0].title}
            OfferDesc={cardsInfo[0].desc}
            skills={devSkills}
            skillsBackground="var(--color-blue-background)"
            skillsColor="var(--color-primary-blue)"
          />
          <OfferCard
            IconChild={
              <WebsiteIcon className="text-[68px] p-3 bg-silver brightness-110 text-white rounded-2xl" />
            }
            OfferTitle={cardsInfo[1].title}
            OfferDesc={cardsInfo[1].desc}
            skills={revampSkills}
            skillsBackground="var(--color-silver-background)"
            skillsColor="rgba(0, 0, 0, 0.7)"
          />
          <OfferCard
            IconChild={
              <DesignIcon className="text-[68px] p-3 bg-[#2759EF] brightness-110 text-white rounded-2xl" />
            }
            OfferTitle={cardsInfo[2].title}
            OfferDesc={cardsInfo[2].desc}
            skills={desSkills}
            skillsBackground="var(--color-blue-background)"
            skillsColor="var(--color-primary-blue)"
          />
        </div>
      </motion.div>
      <p className="text-lg md:text-[22px] text-center">
        Have an Idea?{" "}
        <Link to={'/contact'} 
          className="underline hover:underline-offset-3 font-[400] hover:font-medium transition-all duration-200 "
          >
          Let's Bring It to Life.
          </Link>
      </p>
    </section>
  );
};

export default OfferSection;



export const OfferCard = ({ IconChild, OfferTitle, OfferDesc, skillsBackground, skillsColor, skills }) => {



  return (
    <article className='relative font-switzer w-[90dvw] md:w-[400px] lg:w-[450px] px-6 pt-16 pb-6 rounded-xl bg-white  flex flex-col gap-4 md:gap-6 items-center justify-between border border-black/20 shadow-[0_2px_24px_0_var(--color-shadow-black)] hover:shadow-[0_4px_32px_0_var(--color-shadow-black)] transition-all duration-200 cursor-pointer'>
        <div className="offer-icon absolute -top-8 left-1/2 -translate-x-1/2 w-20 "
        >
            {IconChild}
        </div>
        <h1 className='text-2xl md:text-[28px] font-semibold text-black '>{OfferTitle}</h1>
        <p className='text-[16px] md:text-lg text-black/75 mb-4 md:mb-8'>{OfferDesc}</p>
        <div className="skills flex flex-wrap self-end gap-2 ">
          {skills.map((skill, index) => (

            <span key={index} className='text-sm md:text-[17px] w-fit px-2 md:px-[14px] py-[2px] md:py-[2.5px] space-y-2 rounded-full'
            style={{ backgroundColor: skillsBackground,
              color: skillsColor  
            }}
            >{skill}</span>
          ))}
        </div>
    </article>
  )
}

