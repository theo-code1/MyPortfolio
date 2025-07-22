/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

import CheckCircle from "../assets/Icons/CheckCircle";
import RightArrow from "../assets/Icons/RightArrow";
import ProfileImg from "../assets/ProfileImg.webp";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = ({ aboutRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="max-w-screen font-switzer flex flex-col md:flex-row md:items-center justify-between pl-8 md:pl-12 lg:pl-48 pr-8 md:pr-12 lg:pr-40 pt-12 md:pt-24 pb-16 md:pb-32 overflow-hidden "
    >
      <div className="content-side w-full lg:w-[52%] flex flex-col gap-4 md:gap-8  ">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="online w-fit flex items-center gap-2 px-2 md:px-4 py-1 bg-white border-2 border-black/30 rounded-full ">
            <div className="dot bg-primary-green size-2.5 rounded-full"></div>
            <h3 className="text-[16px] md:text-lg text-black font-medium">
              available for projects
            </h3>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl w-full md:text-[52px] lg:text-[64px] leading-12 md:leading-16 lg:leading-20 font-extrabold mb-2 md:mb-4">
            Who am I, and 
            <br className="hidden md:flex"/>
            {isMobile && (' ')} Why Work with <span className="text-silver">Me</span> ?{" "}
          </h1>
          <div className="paragraphs flex flex-col gap-4 text-start mb-4">
            <p className="text-[16px] md:text-lg text-black/75">
              I&apos;m a web developer based in Morocco, passionate about
              creating clean, responsive websites that help businesses grow.
            </p>
            <p className="text-lg text-black/75">
              Whether it&apos;s building an online presence for a local startup
              or refining the user experience for an established brand, I focus
              on purposeful design and real results.
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
          <ul className="space-y-2 text-[16px] md:text-lg text-black/75 font-medium mb-8">
            <li className={`flex items-center gap-3`}>
              <CheckCircle className="text-lg md:text-2xl text-primary-blue" />
              Modern React & JavaScript development
            </li>
            <li className={`flex items-center gap-3`}>
              <CheckCircle className="text-lg md:text-2xl text-primary-blue" />
              Responsive design with Tailwind CSS
            </li>
            <li className={`flex items-center gap-3`}>
              <CheckCircle className="text-lg md:text-2xl text-primary-blue" />
              Performance-optimized solutions
            </li>
            <li className={`flex items-center gap-3`}>
              <CheckCircle className="text-lg md:text-2xl text-primary-blue" />
              Clean, maintainable code architecture
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="ctas-buttons flex items-center gap-4 ">
            <Link
              to={"/contact"}
              className="flex items-center gap-2 text-[16px] md:text-lg text-white bg-primary-blue px-4 md:px-8 py-3 md:py-4 rounded-lg group cursor-pointer "
            >
              Let's Connect{" "}
              <RightArrow className="text-xl group-hover:translate-x-2 transition-all duration-200" />
            </Link>
            <Link
              to={"/my-work"}
              className="text-[16px] md:text-lg border border-black/40 px-4 md:px-8 py-3 md:py-4 rounded-lg hover:shadow-[0_2px_20px_0_var(--color-shadow-black)] transition-all duration-200 cursor-pointer "
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="img-side hidden lg:flex w-fit relative">
          <img
            src={ProfileImg}
            alt="Profile Image"
            className="w-128 h-120 object-cover rounded-2xl outline-4  outline-white select-none"
            draggable="false"
            loading="lazy"
          />
          <div className="behind-layer absolute top-0 left-0 rounded-2xl rotate-4 w-full h-full bg-primary-blue/40 -z-10 shadow-2xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
