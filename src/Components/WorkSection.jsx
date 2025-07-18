import React from "react";
import GlobalIcon from "../assets/Icons/GlobalIcon";
import WorkArticle from "./WorkArticle";

const WorkSection = () => {

  const websitesInfo = [
    {
      role: 'website Role',
      desc: 'lorem lorela lkasdkj askue laksueoiuq laksd oiausro ashjdfieur ajkdoieur aklsjdfur alkcmnxbzco jadhfie jkhasdfu asdasd oiasudadk alksdewr alskjdiu askljdasdjasjd laksueliwue aslkjdlwaue asdhas asejdlauwe asjd asiouaksdh aaskl.',
      features: ['feature 01', 'feature 02', 'feature 03',],
      websiteLink: 'https://github.com/theo-code1'
    },
    {
      role: 'website Role',
      desc: 'lorem lorela lkasdkj askue laksueoiuq laksd oiausro ashjdfieur ajkdoieur aklsjdfur alkcmnxbzco jadhfie jkhasdfu asdasd oiasudadk alksdewr alskjdiu askljdasdjasjd laksueliwue aslkjdlwaue asdhas asejdlauwe asjd asiouaksdh aaskl.',
      features: ['feature 01', 'feature 02', 'feature 03',],
      websiteLink: '#'
    },
  ]

  return (
    <section id='work-section' className="h-[200dvh] max-w-screen flex flex-col gap-16 bg-black overflow-x-hidden relative pt-24 font-switzer px-42 ">
      <div className="headers flex flex-col gap-8">
        <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs inset-shadow- bg-white/10 backdrop-blur-sm border border-white/20">
          <GlobalIcon className='text-white/90 text-4xl' />
          <h2 className="text-white/90 text-2xl font-[400]">Work</h2>
        </div>
        <h3 className="text-[16px] text-white/90 font-medium">Developed 4+ sleek, visually stunning and high-performance websites using <br /> different technology like React.js and Tailwind CSS</h3>
      </div>
      <div className="work-articles flex flex-col gap-12 ">

      <WorkArticle websiteRole={websitesInfo[0].role} websiteDesc={websitesInfo[0].desc} features={websitesInfo[0].features} websiteLink={websitesInfo[0].websiteLink} />

      </div>

    </section>
  );
};

export default WorkSection;
