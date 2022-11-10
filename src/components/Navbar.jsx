import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Logo from '../assets/smallLogo.gif'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[130px] flex justify-between   items-center bg-white  text-black '>
        <div className='ml-4'>
            <img src={Logo} alt="Logo" style={{width: '100px'}} />            
        </div>

        {/* menu */}
            <ul className='hidden md:flex '>
                <li className='font-bold hover:text-red-600 hover:scale-75 duration-100'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='font-bold hover:text-red-600 hover:scale-75 duration-100'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='font-bold hover:text-red-600 hover:scale-75 duration-100'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='font-bold hover:text-red-600 hover:scale-75 duration-100'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='font-bold hover:text-red-600 hover:scale-75 duration-100'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>        

        {/* Hamburger Dropdown Navigation for md and sm screen sizes */}
            <div onClick={handleClick}className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={
                !nav 
                ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
              }>
                <li className='py-2 text-4xl font-bold hover:text-red-600 hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold hover:text-red-600 hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold hover:text-red-600 hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold hover:text-red-600 hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold hover:text-red-600 hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col bottom-[0%] left-0'>
                <ul>
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-500 ' target="_blank" rel="noopener noreferrer">
                        <a className='flex justify-between items-center w-full text-black font-bold'href='https://www.linkedin.com/in/b-debruyne' target="_blank" rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-black font-bold'href='https://github.com/BDeBruyne?tab=repositories' target="_blank" rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>                   
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-black font-bold 'href='https://github.com/BDeBruyne/Resume/blob/main/resume2022.pdf' target="_blank" rel="noopener noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  )
}
export default Navbar