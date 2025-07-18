import React from "react";
import GlobalIcon from "../assets/Icons/GlobalIcon";

const WorkSection = () => {
  return (
    <section id='work-section' className="h-[200dvh] bg-black max-w-screen overflow-x-hidden relative pt-24 font-switzer px-42 ">
      <div className="headers flex flex-col gap-8 border">
        <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-8 py-1 rounded-full z-20 shadow-[0_2px_100px_0_rgba(255,255,255,0.5) shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)]  inset-shadow-white inset-shadow-2xs inset-shadow- bg-white/10 backdrop-blur-sm border border-white/20">
          <GlobalIcon className='text-white/90 text-4xl' />
          <h2 className="text-white/90 text-2xl font-[400]">Work</h2>
        </div>
        <h3 className="text-[16px] text-white/90 font-medium">Developed 10+ sleek, visually stunning and high-performance websites using <br /> different technology like React.js and Tailwind CSS</h3>
      </div>

    </section>
  );
};

export default WorkSection;
