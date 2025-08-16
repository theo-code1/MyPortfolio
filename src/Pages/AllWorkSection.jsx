import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';

import GlobalIcon from '../assets/Icons/GlobalIcon' 
import WorkArticle from '../Components/WorkArticle';
import UivioProject from '../assets/Project03.webp';
import NestleForgeProject from '../assets/Project02.webp';
import Project01 from '../assets/Project01.webp';
import Project04 from '../assets/project04.webp';
import MyPortfolio from '../assets/MyPortfolio.webp'
import SeluxPortfolio from '../assets/selux-portfolio.webp'

const AllWorkSection = () => {

  const [currentFilter, setCurrentFilter] = useState('All')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ProjectsInfo = [
    {
      title: 'Selux Portfolio',
      desc: "A Thumbnail Designer Portfolio designed to boost YouTube creators’ engagement with custom thumbnails. Featuring a sleek dark theme, intuitive layout, and interactive elements like a simple ordering process and client testimonials. Built for performance and professional impact, ideal for clients who value quality and results.",
      features: [
        'Increased user trust and credibility',
        'Responsive, accessible, performance',
        'Increased conversion rates'
      ],
      websiteLink: '#',
      websiteImg: SeluxPortfolio,
      websiteAlt: 'Selux Portfolio (Thumbnail Designer)',
      category: 'Portfolio',
      StatusLabel: 'Working On'
    },
    {
      title: 'UiVio',
      desc: 'A mobile-first landing page crafted for a clipboard manager app, focused on usability and productivity. It highlights features like clipboard history, cross-device sync, privacy, and smart pasting—using clear visuals, concise copy, and strong calls-to-action. The structure flows seamlessly from benefits to testimonials and pricing, guiding users with intent.',
      features: [
        'Modern, clean design',
        'Optimized React development',
        'Fast, responsive layout',
      ],
      websiteLink: 'https://uivio-board.vercel.app/',
      websiteImg: UivioProject,
      websiteAlt: 'uivio website (clipboard search)',
      category: 'Landing Page'
    },
    {
      title: 'My Portfolio',
      desc: 'A clean and modern developer portfolio showcasing creative web solutions with precision and style. Crafted to reflect clarity, performance, and professional impact. Built for clients, collaborators, and opportunities that value quality work.',
      features: [
        'Interactive Showcase',
        'Clean UI Design',
        'Client Testimonials',
      ],
      websiteLink: '#',
      websiteImg: MyPortfolio,
      websiteAlt: 'My Portfolio (Personal)',
      category: 'Portfolio'
    },
    {
      title: 'NestleForge',
      desc: 'I developed this web app from scratch, delivering a powerful suite of image tools. The interface is clean, intuitive, and built for effortless user interaction. Focused on performance and scalability, the platform ensures fast processing, smooth navigation, and reliable functionality across all devices.',
      features: [
        'Image Converter&Compressor',
        'Background Remover',
        'Palette Extractor'
      ],
      websiteLink: '#',
      websiteImg: NestleForgeProject,
      websiteAlt: 'NestleFOrge website (Image Tools)',
      category: 'Web App'
    },
    {
      title: 'Starbucks Hero',
      desc: "A visually striking hero section featuring a Starbucks Frappuccino against a vibrant green background, with repeated 'Starbucks' text for brand emphasis. It includes smooth navigation, a clear product description, and a bold 'Order Now' call to action—designed to capture attention and drive interaction.",
      features: [
        'Visual Appeal',
        'Branding',
        'Engagement',
      ],
      websiteLink: 'https://starbucks-product.vercel.app/',
      websiteImg: Project01,
      websiteAlt: 'E-commerce store website',
      category: 'Practice'
    },
    {
      title: 'Restaurant',
      desc: "A stylish restaurant site combining rich visuals with a refined dining atmosphere. It highlights top dishes, chef-curated menus, and an easy-to-use reservation system. Designed to engage food lovers, the experience is smooth, responsive, and tailored for both desktop and mobile users.",
      features: [
        'Interactive Menu',
        'Online Reservations',
        'Customer Favorites Section'
      ],
      websiteLink: '#',
      websiteImg: Project04,
      websiteAlt: 'Portfolio website',
      category: 'E-commerce',
      StatusLabel: 'Coming Soon'
    }
  ]

  // Filter projects based on current filter
  const filteredProjects = currentFilter === 'All' 
    ? ProjectsInfo 
    : ProjectsInfo.filter(project => project.category === currentFilter);

  return (
    // <section className='bg-black min-h-screen pt-6 pb-12 px-42 flex flex-col gap-16'>
    <section className='relative bg-black h-auto max-w-screen flex flex-col gap-8 lg:gap-16 pt-6  px-4 md:px-12 lg:px-36 pb-32 lg:pb-10 '>
        <ul
                className={`w-fit mx-auto text-white/90 px-4 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-white)] border border-white/30 flex items-center gap-4 md:gap-16 text-sm md:text-[16px] font-switzer font-medium `}
              >
                <Link to={"/"}>
                  <li className="cursor-pointer px-2 py-1 transition-all duration-200">
                    Overview
                  </li>{" "}
                </Link>
                <Link to={"/"}>
                  <li className="cursor-pointer px-2 py-1 transition-all duration-200">
                    About
                  </li>{" "}
                </Link>
                <Link to={"/"}>
                  <li className="cursor-pointer px-2 py-1 transition-all duration-200">
                    Work
                  </li>{" "}
                </Link>
                <Link to={"/contact"}>
                  <li className="cursor-pointer px-2 py-1 transition-all duration-200">
                    Contact
                  </li>
                </Link>
              </ul>
        <div className="headers flex flex-col gap-8">
          <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-6 md:pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs inset-shadow- bg-white/10 backdrop-blur-sm border border-white/20">
            <GlobalIcon className="text-white/90 text-3xl md:text-4xl" />
            <h1 className="text-white/90 text-xl md:text-2xl font-[400] font-switzer">Work</h1>
          </div>
          <h2 className="text-[16px] text-white/90 font-medium">
            Developed sleek, visually stunning and high-performance websites
            using <br className="hidden md:flex" /> different technology like React.js and Tailwind CSS
          </h2>
        </div>
                <div className="filter-bar overflow-x-auto">
          <FilterBar currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
        </div>

        <div className="work-articles relative flex flex-col gap-16 mb-8">
          {filteredProjects.map((project, index) => (
            <WorkArticle
              key={index}
              websiteRole={project.title}
              websiteDesc={project.desc}
              features={project.features}
              websiteLink={project.websiteLink}
              websiteImg={project.websiteImg}
              websiteAlt={project.websiteAlt}
              CategoryLabel={currentFilter === 'All' && !project.StatusLabel ? project.category : ''}
              Statuslabel={project.StatusLabel}
            />
          ))}
        </div>
    </section>
  )
}

export default AllWorkSection




export const FilterBar = ({ currentFilter, setCurrentFilter}) => {

  const filterItems = ['All', 'Landing Page', 'Web App', 'Portfolio', 'E-commerce', 'Practice']

  return(
        <ul className='flex items-center gap-3 select-none flex-nowrap'>
      {filterItems.map((item, index) => (
                <li onClick={() => setCurrentFilter(item)} className={`${currentFilter === item ? 'bg-gradient-to-br from-white/40 from-[-40%] to-transparent' : '' } hover:bg-gradient-to-br from-white/20 from-[-40%] to-transparent backdrop-blur-lg text-lg text-white font-switzer font-medium flex px-4 py-1.5 border border-white/30 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap`} key={index}>{item}</li>
      ))}
    </ul>
  )
}