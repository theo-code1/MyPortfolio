/* eslint-disable no-unused-vars */
import React from "react";
import GoArrow from "../assets/Icons/GoArrow";

const WorkArticle = ({
  websiteRole,
  websiteDesc,
  features,
  websiteLink,
  websiteImg,
  websiteAlt,
  CategoryLabel = false,
  Statuslabel = false,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <article className="w-full h- relative flex flex-col lg:flex-row rounded-2xl overflow-hidden font-switzer ">
      <div className="content-side relative h-full w-full bg-light-black text-white pl-6 md:pl-12 lg:pl-16 pr-4 md:pr-12 lg:pr-[60%] pt-8 md:pt-12 lg:pt-24 pb-8 md:pb-12 lg:pb-28 flex flex-col order-2 lg:order-1 gap-4 rounded-l-2xl">
        {CategoryLabel && (
          <div className="flex items-center gap-2 w-fit absolute right-4 top-7 md:right-6 md:top-8 lg:left-16 lg:top-8 border border-primary-blue text-sm px-4 py-1.5 rounded-xl">
            <div className="dot bg-primary-blue/80 size-2 rounded-full"></div>
            <span>{CategoryLabel}</span>
          </div>
        )}
        {Statuslabel && (
          <div className={`flex items-center gap-2 w-fit absolute right-4 top-7 md:right-6 md:top-8 lg:left-16 lg:top-8 border ${Statuslabel === 'Coming Soon' ? 'border-yellow-200' : 'border-[#2DD4BF]'} text-sm px-4 py-1.5 rounded-xl`}>
            <div className={`dot ${Statuslabel === 'Coming Soon' ? 'bg-yellow-200' : 'bg-[#2DD4BF]'} size-2 rounded-full`}></div>
            <span>{Statuslabel}</span>
          </div>
        )}

        <h1 className="text-2xl ">{websiteRole}</h1>
        <p className="text-sm md:text-[16px] text-white/90 mb-2 md:mb-4">
          {websiteDesc}
        </p>
        <ul className="text-[16px] md:text-lg flex flex-col gap-1 mb-8 md:mb-10 lg:mb-12">
          {features.map((feature, index) => (
            <li className="list-disc list-inside list-" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={Statuslabel ? null : websiteLink}
          o
          className={`flex items-center gap-2 text-lg px-4 py-1.5 rounded-lg  w-fit bg-gradient-to-br from-white/20  ${
            Statuslabel
              ? "cursor-progress"
              : "cursor-pointer md:hover:from-white/25 active:from-white/25 from-0% to-80% to-transparent transition duration-200 group"
          }`}
          target="_blank"
        >
          See Website{" "}
          <GoArrow className="text-2xl origin-bottom md:group-hover:scale-[1.1] group-active:scale-[1.1] md:group-hover:translate-x-[2px] group-active:translate-x-[2px] transition-all duration-200 " />{" "}
        </a>
        <div className="img-side hidden lg:flex absolute top-0 right-0 order-1 lg::order-2 h-full w-1/2 bg-gradient-to-br from-[#040404] from-[-20%] to-white/80 to-120% overflow-hidden ">
          <img
            src={websiteImg}
            alt={websiteAlt}
            className="absolute top-3/20 left-3/20 h-17/20 object-cover object-left-top rounded-tl-3xl rounded-t-3xl select-none"
            draggable="false"
          />
        </div>
      </div>
      <div className="img-side flex lg:hidden relative order-1 lg::order-2 h-[350px] lg:h-[full] w-full lg:w-1/2 bg-gradient-to-br from-[#040404] from-[-20%] to-white/80 to-120% overflow-hidden ">
        <img
          src={websiteImg}
          alt={websiteAlt}
          className="absolute top-3/20 left-3/20 h-17/20 object-cover object-left-top rounded-tl-3xl rounded-t-3xl select-none"
          draggable="false"
        />
      </div>
    </article>
  );
};

export default WorkArticle;
