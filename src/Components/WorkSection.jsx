import React from "react";
// import { motion } from "motion/react";
import GlobalIcon from "../assets/Icons/GlobalIcon";
import WorkArticle from "./WorkArticle";
import UivioProject from "../assets/Project03.webp";
import SeeArrow from '../assets/Icons/SeeArrow'

const WorkSection = ({ workRef }) => {
  const websitesInfo = [
    {
      role: "UiVio",
      desc: "This landing page features a sleek, mobile-first clipboard manager app focused on usability and productivity, showcasing clipboard history, cross-device sync, privacy, and smart pasting through clear visuals, concise headings, and strong CTAs that guide users from benefits to testimonials and pricing.",
      features: [
        "Modern, clean design",
        "Optimized React development",
        "Fast, responsive layout",
      ],
      websiteLink: "#",
      websiteImg: UivioProject,
      websiteAlt: "uivio website (clipboard search)",
    },
    {
      role: "website Role",
      desc: "",
      features: ["feature 01", "feature 02", "feature 03"],
      websiteLink: "#",
    },
  ];

  // const variants = {
  //   hidden: { opacity: 0, y: 60 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  // };

  return (
    <section
      ref={workRef}
      id="work-section"
      className="h-[200dvh] max-w-screen flex flex-col gap-16 bg-black overflow-x-hidden relative pt-24 font-switzer px-42 "
    >
      {/* <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > */}
        <div className="headers flex flex-col gap-8">
          <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs inset-shadow- bg-white/10 backdrop-blur-sm border border-white/20">
            <GlobalIcon className="text-white/90 text-4xl" />
            <h2 className="text-white/90 text-2xl font-[400]">Work</h2>
          </div>
          <h3 className="text-[16px] text-white/90 font-medium">
            Developed 4+ sleek, visually stunning and high-performance websites
            using <br /> different technology like React.js and Tailwind CSS
          </h3>
        </div>
       {/* </motion.div> */}
      <div className="work-articles flex flex-col gap-16 mb-8 ">
      {/* <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > */}
          <WorkArticle
            websiteRole={websitesInfo[0].role}
            websiteDesc={websitesInfo[0].desc}
            features={websitesInfo[0].features}
            websiteLink={websitesInfo[0].websiteLink}
            websiteImg={websitesInfo[0].websiteImg}
            websiteAlt={websitesInfo[0].websiteAlt}
          />
        {/* </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        > */}
          <WorkArticle
            websiteRole={websitesInfo[1].role}
            websiteDesc={websitesInfo[1].desc}
            features={websitesInfo[1].features}
            websiteLink={websitesInfo[1].websiteLink}
            websiteImg={websitesInfo[1].websiteImg}
            websiteAlt={websitesInfo[1].websiteAlt}
            />
        {/* </motion.div> */}
      </div>

      <a href="#" className="text-xl text-white/90 flex items-center gap-2 hover:gap-4 px-8 py-4 rounded-xl brightness-110 bg-white/15 w-fit text-center mx-auto transition-all duration-200 " >See More <SeeArrow className='text-xl' /></a>

    </section>
  );
};

export default WorkSection;
