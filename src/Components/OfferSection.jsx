/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import OfferCard from "./OfferCard";
import CodeIcon from "../assets/Icons/CodeIcon";
import WebsiteIcon from "../assets/Icons/WebsiteIcon";
import DesignIcon from "../assets/Icons/DesignIcon";

const OfferSection = () => {

  const cardsInfo = [
  {
    title : "Frontend Development",
    desc : "Develops high-performance, responsive websites using modern technologies like ReactJS and Tailwind CSS. Emphasizes clean, scalable code and adheres to industry best practices for optimal user experience and maintainability."
  },
  {
    title : "Revamp Solution",
    desc : "Transform your website with m comprehensive revamp services that merge technical excellence with clean design. I rebuild, redesign, and optimize your site from the ground up, stunning visual design, and enhanced performance that drives results and captivates your audience."
  },
  {
    title : "UI/UX Design",
    desc : "Basic UI/UX design focused on creating clean, user-friendly interfaces using modern tools like Figma. Each design emphasizes clarity, usability, and seamless frontend integration turning ideas into simple, engaging digital experiences."
  },
]

  const devSkills = ['Html/ Css/ Js', 'JavaScript', 'React JS', 'Tailwind CSS', 'Git&Github'];
  const revampSkills = ['Frontend Design', 'Code Modernization','UI/UX Design' , 'Performance Optimization'];
  const desSkills = ['Figma', 'Prototyping', 'User Research', 'Accessibility'];

  const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

  return (
    <section className="h-screen max-w-screen font-switzer flex flex-col gap-16 items-centeroverflow-x-hidden px-16 my-16">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >

          <div className="headlines flex flex-col items-center gap-4 ">
            <h1 className="text-5xl text-center text-black font-semibold">
              What I Offer ?
            </h1>
            <p className="text-black/75 text-lg text-center">
              Comprehensive web development services focused on creating exceptional
              <br />
              digital experiences
            </p>
          </div>
        </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <div className="offerCards relative w-fit flex gap-12 pt-8 mx-auto ">
            <OfferCard
              IconChild={
                <CodeIcon className="text-[68px] p-3 bg-[#2759EF] brightness-110 text-white rounded-2xl" />
              }
              OfferTitle={cardsInfo[0].title}
              OfferDesc={cardsInfo[0].desc}
              skills={devSkills }
              skillsBackground="var(--color-blue-background)"
              skillsColor="var(--color-primary-blue)"
              />
            <OfferCard
              IconChild={
                <WebsiteIcon className="text-[68px] p-3 bg-silver brightness-110 text-white rounded-2xl" />
              }
              OfferTitle={cardsInfo[1].title}
              OfferDesc={cardsInfo[1].desc}
              skills={revampSkills }
              skillsBackground="var(--color-silver-background)"
              skillsColor="rgba(0, 0, 0, 0.7)"
              />
            <OfferCard
              IconChild={
                <DesignIcon className="text-[68px] p-3 bg-[#2759EF] brightness-110 text-white rounded-2xl" />
              }
              OfferTitle={cardsInfo[2].title}
              OfferDesc={cardsInfo[2].desc}
              skills={desSkills }
              skillsBackground="var(--color-blue-background)"
              skillsColor="var(--color-primary-blue)"
            />
          </div>
          </motion.div>
          <p className="text-[22px] text-center">Have an Idea? <a href="#" className="underline hover:underline-offset-3 font-[400] hover:font-medium transition-all duration-200 " >Let's Bring It to Life.</a></p>
    </section>
  );
};

export default OfferSection;
