import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import GlobalIcon from '../assets/Icons/GlobalIcon' 
import WorkArticle from '../Components/WorkArticle';
import UivioProject from '../assets/Project03.webp';
import NestleForgeProject from '../assets/Project02.webp';
import Project01 from '../assets/Project01.webp';
import Project04 from '../assets/project04.webp';
import MyPortfolio from '../assets/MyPortfolio.webp'

const AllWorkSection = () => {

  const [currentFilter, setCurrentFilter] = useState('All')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ProjectsInfo = [
    {
      title: 'UiVio',
      desc: 'This landing page features a sleek, mobile-first clipboard manager app focused on usability and productivity, showcasing clipboard history, cross-device sync, privacy, and smart pasting through clear visuals, concise headings, and strong CTAs that guide users from benefits to testimonials and pricing.',
      features: [
        'Modern, clean design',
        'Optimized React development',
        'Fast, responsive layout',
      ],
      websiteLink: '#',
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
      websiteAlt: 'uivio website (clipboard search)',
      category: 'Portfolio'
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
      websiteAlt: 'uivio website (clipboard search)',
      category: 'Personal'
    },
    {
      title: 'NestleForge',
      desc: 'I developed this website from Scratch, delivering a suite of powerful image tools. The interface is clean, intuitive, and user-focused—ensuring smooth navigation across features. Built with performance and scalability in mind, the entire experience is optimized for speed, responsiveness, and seamless functionality.',
      features: [
        'Image Converter',
        'Image Compressor',
        'Background Remover',
        'Palette Extractor'
      ],
      websiteLink: '#',
      websiteImg: NestleForgeProject,
      websiteAlt: 'NestleFOrge website (Image Tools)',
      category: 'Practice'
    },
    {
      title: 'Starbucks Hero Section',
      desc: "A visually striking hero section with a Starbucks Frappuccino against a green background, featuring repeated 'Starbucks' text for brand emphasis. Includes navigation, product description, and an 'Order Now' call to action.",
      features: [
        'Visual Appeal',
        'Branding',
        'Engagement',
      ],
      websiteLink: '#',
      websiteImg: Project01,
      websiteAlt: 'E-commerce store website',
      category: 'Practice'
    },
    {
      title: 'Portfolio Website',
      desc: 'A creative portfolio website showcasing artistic work and projects. Features a gallery layout with smooth animations and interactive elements.',
      features: [
        'Gallery layout',
        'Smooth animations',
        'Interactive elements',
        'Responsive design'
      ],
      websiteLink: '#',
      websiteImg: Project04,
      websiteAlt: 'Portfolio website',
      category: 'Portfolio'
    }
  ]

  // Filter projects based on current filter
  const filteredProjects = currentFilter === 'All' 
    ? ProjectsInfo 
    : ProjectsInfo.filter(project => project.category === currentFilter);

  return (
    <section className='bg-black min-h-screen pt-6 px-42 flex flex-col gap-16'>
        <ul className={`w-fit mx-auto text-white/90 px-8 py-2 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-white)] border border-white/30 flex items-center gap-16 text-[16px] font-switzer font-medium `}>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Overview</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>About</li> </Link>
            <Link to={'/'}><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Work</li> </Link>
            <Link to={'/contact'} ><li className='cursor-pointer px-2 py-1 transition-all duration-200'>Contact</li></Link>
        </ul>
        <div className="headers flex flex-col gap-8">
          <div className="work-label relative flex items-center gap-2 w-fit pl-1.5 pr-8 py-1 rounded-full z-20 shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.1)] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)  inset-shadow-white inset-shadow-2xs bg-white/10 backdrop-blur-sm border border-white/20">
            <GlobalIcon className="text-white/90 text-4xl" />
            <h2 className="text-white/90 text-2xl font-[400] font-switzer">Work</h2>
          </div>
          <h3 className="text-lg text-white/90 font-medium font-switzer">
            Developed sleek, visually stunning and high-performance websites
            using <br /> different technology like React.js and Tailwind CSS
          </h3>
        </div>
        <div className="filter-bar">
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
              CategoryLabel={currentFilter === 'All' ? project.category : ''}
            />
          ))}
        </div>
    </section>
  )
}

export default AllWorkSection




export const FilterBar = ({ currentFilter, setCurrentFilter}) => {

  const filterItems = ['All', 'Personal', 'Landing Page', 'Portfolio', 'E-commerce', 'Practice']
 
  console.log(currentFilter)

  return(
    <ul className='flex items-center gap-3 '>
      {filterItems.map((item, index) => (
        <li onClick={() => setCurrentFilter(item)} className={`${currentFilter === item ? 'bg-gradient-to-br from-white/40 from-[-40%] to-transparent' : '' } hover:bg-gradient-to-br from-white/20 from-[-40%] to-transparent backdrop-blur-lg text-lg text-white font-switzer font-medium px-4 py-1.5 border border-white/30 rounded-xl cursor-pointer transition-all duration-200 `} key={index}>{item}</li>
      ))}
    </ul>
  )
}