import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

import Logo from '../assets/logobd.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div class='navBar' className='fixed w-full h-[100px] bg-white flex justify-between  '>
        <div className='md:hidden z-10 ml-6 pt-12'>
            <img src={Logo} alt="Logo" style={{width: '100px'}} />            
        </div>

        {/* menu */}
        <ul class='' className='hidden  md:flex    mx-auto'>
                <li class='navButtonLeft'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li class='navButtonLeft'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>

                <div><img src={Logo} alt="Logo" style={{width: '132px'}} className='pt-2'/></div>
                
                <li class='navButtonRight'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li class='navButtonRight'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>        

        {/* Hamburger Dropdown Navigation for md and sm screen sizes */}
            <div onClick={handleClick}className='md:hidden z-10 pt-14 text-[#125b83] hover:text-[#ff7300] pr-2'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={
                !nav 
                ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
              }>
                <li className='py-2 text-4xl font-bold text-[#125b83] hover:text-[#ff7300] hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold text-[#125b83] hover:text-[#ff7300] hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>                
                <li className='py-2 text-4xl font-bold text-[#125b83] hover:text-[#ff7300] hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-2 text-4xl font-bold text-[#125b83] hover:text-[#ff7300] hover:scale-75 duration-500'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden xl:flex fixed flex-col bottom-[0%] left-0'>
                <ul>                            
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-92px] hover:ml-[-10px] duration-500 ' target="_blank" rel="noopener noreferrer">
                        <a className='flex justify-between items-center w-full text-[#125b83] hover:text-[#ff7300] 'href='https://www.linkedin.com/in/b-debruyne' target="_blank" rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-81px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-[#125b83] hover:text-[#ff7300] 'href='https://github.com/BDeBruyne?tab=repositories' target="_blank" rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>                   
                    <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-[#125b83] hover:text-[#ff7300]  'href='https://github.com/BDeBruyne/Resume/blob/main/resume2022.pdf' target="_blank" rel="noopener noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-[#125b83] hover:text-[#ff7300]  'href='https://facebook.com' target="_blank" rel="noopener noreferrer">
                            Facebook <FaFacebookSquare size={30} />
                        </a>
                    </li>  
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-10px] duration-500 '>
                        <a className='flex justify-between items-center w-full text-[#125b83] hover:text-[#ff7300]  'href='https://instagram.com' target="_blank" rel="noopener noreferrer">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>            
                </ul>
            </div>
    </div>
  )
}
export default Navbar