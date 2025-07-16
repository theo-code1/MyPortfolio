import GridBackground from '../assets/GridBackground'
import NavBar from './NavBar'
import SeeArrow from '../assets/Icons/SeeArrow'
import GoArrow from '../assets/Icons/GoArrow'
import trust1 from '../assets/trust1.webp'
import trust2 from '../assets/trust2.webp'
import trust3 from '../assets/trust3.webp'

const HeroSection = () => {
  return (
    <section className='h-[200dvh] pt-24'>
        <GridBackground className='absolute top-0 left-1/2 -translate-x-1/2 w-fit -z-10 '/>
        <NavBar />

        <div className="cta-content flex flex-col gap-6 text-center w-fit mx-auto mt-24">
            <h1 className='text-6xl text-center font-clash-display font-bold '><span>Think,</span><span>Plan</span><br/><span>let</span> <span>me</span> <span>get</span> <span>it</span> <span>into</span> <span>reality</span></h1>
            <h1 className='text-6xl text-center font-clash-display font-bold hidden'><span>Think,</span><span>Plan</span><br/><span>let</span> <span>me</span> <span>turn</span> <span>it</span> <span>into</span> <span>Website</span></h1>
            <h3 className='text-xl font-switzer text-dark-blue mb-8'>Never miss a note, an idea, or a connection again—stay organized, inspired,<br />and effortlessly connected every step of the way.</h3>
            <div className="cta-buttons flex items-center gap-6 mx-auto">
                <button type="button" className='flex items-center gap-2 px-8 py-4 bg-white border-2 border-black rounded-xl font-switzer font-medium text-lg hover:shadow-[0_2px_20px_0_var(--color-shadow-black)] cursor-pointer transition-all duration-200 group'>See Projects <SeeArrow className='text-2xl group-hover:translate-x-2  transition-all duration-200' /></button>
                <button type="button" className='flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-xl font-switzer font-medium text-lg hover:brightness-90 active:brightness-60 transition-all duration-200 cursor-pointer group'>Start Your Project <GoArrow className='text-2xl group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-200'/></button>
            </div>
            <div className="trust flex gap-4 items-center mx-auto">
              <h3 className='text-lg text-dark-blue font-medium'>Trusted by</h3>
              <div className="people-trusted flex gap-0 w-fit">
                <img src={trust1} alt="person One" className='size-10' />
                <img src={trust2} alt="person Two" className='size-10 -translate-x-4' />
                <img src={trust3} alt="person Three" className='size-10 -translate-x-8' />
              </div>
            </div>
        </div>

    </section>
  )
}

export default HeroSection