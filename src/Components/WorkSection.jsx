import React from "react";
// import { motion } from "motion/react";
import GlobalIcon from "../assets/Icons/GlobalIcon";
import WorkArticle from "./WorkArticle";
import UivioProject from "../assets/Project03.webp";
import NestleForgeProject from '../assets/Project02.webp'
import SeeArrow from '../assets/Icons/SeeArrow'
import { Link } from "react-router";

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
      websiteLink: "https://uivio-board.vercel.app/",
      websiteImg: UivioProject,
      websiteAlt: "uivio website (clipboard search)",
    },
    {
      role: "NestleForge",
      desc: "I developed this website from Scratch, delivering a suite of powerful image tools. The interface is clean, intuitive, and user-focused—ensuring smooth navigation across features. Built with performance and scalability in mind, the entire experience is optimized for speed, responsiveness, and seamless functionality.",
      features: [
        "Image Converter",
        "Image Compressor",
        "Background Remover",
        "Palette Extractor"
      ],
      websiteLink: "#",
      websiteImg: NestleForgeProject,
      websiteAlt: "NestleFOrge website (Image Tools)",
    },
  ];

  // const variants = {
  //   hidden: { opacity: 0, y: 60 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  // };

  return (
    <section
      ref={workRef}
      id="work"
      className="min-h-[] max-w-screen flex flex-col gap-16 bg-black relative px-4 md:px-8 lg:px-42 py-12 md:py-24 font-switzer overflow-hidden"
    >

        <div className="headers flex flex-col gap-8">
          <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-6 md:pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs inset-shadow- bg-white/10 backdrop-blur-sm border border-white/20">
            <GlobalIcon className="text-white/90 text-3xl md:text-4xl" />
            <h2 className="text-white/90 text-xl md:text-2xl font-[400]">Work</h2>
          </div>
          <h3 className="text-[16px] text-white/90 font-medium">
            Developed sleek, visually stunning and high-performance websites
            using <br className="hidden md:flex" /> different technology like React.js and Tailwind CSS
          </h3>
        </div>
      <div className="work-articles relative flex flex-col gap-16 mb-8 ">
          <WorkArticle
            websiteRole={websitesInfo[0].role}
            websiteDesc={websitesInfo[0].desc}
            features={websitesInfo[0].features}
            websiteLink={websitesInfo[0].websiteLink}
            websiteImg={websitesInfo[0].websiteImg}
            websiteAlt={websitesInfo[0].websiteAlt}
          />
          <WorkArticle
            websiteRole={websitesInfo[1].role}
            websiteDesc={websitesInfo[1].desc}
            features={websitesInfo[1].features}
            websiteLink={websitesInfo[1].websiteLink}
            websiteImg={websitesInfo[1].websiteImg}
            websiteAlt={websitesInfo[1].websiteAlt}
            />
      </div>

      <Link to={'/my-work'} className="text-xl text-white/90 flex items-center gap-2 hover:gap-4 px-8 py-4 rounded-xl brightness-110 bg-white/15 w-fit text-center mx-auto transition-all duration-200 " > 
         See More <SeeArrow className='text-xl' />
        </Link>
    </section>
  );
};

export default WorkSection;
