import MyLogo from '../assets/MyLogo.webp'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-20 mt-6'>
        <div className="logo flex items-center">
            <img src={MyLogo} alt="theoKode Brand Logo" className='w-12'/>
            <h1 className='text-2xl font-switzer font-medium '>TheoKode</h1>
        </div>

        <ul className='bg-white px-8 py-3 rounded-full shadow-[0_3px_10px_0_var(--color-shadow-black)] border border-black/10 flex items-center gap-16 text-[16px] font-switzer font-medium'>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Overview</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>About</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Work</a></li>
            <li><a className='cursor-pointer text-black hover:text-dark-blue px-2 py-1 transition-all duration-200'>Contact</a></li>
        </ul>

        <button type="button" className='bg-primary-blue px-8 py-3 rounded-xl text-[16px] text-white font-switzer font-medium'>Let's Connect</button>
    </nav>
  )
}

export default NavBar