import {HiArrowNarrowRight} from 'react-icons/hi'
import React from 'react'
import {Link} from 'react-scroll'

const Home = () => {
  

  return (
    <div name='home' className='w-full h-screen' >

        {/* Container */}        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-36'>         
            <p className='text-[#125b83] text-xl'>Hello, my name is</p>
            <h1 class='centerText' className='lg:text-7xl md:text-7xl  text-[#ff7300] centerText'>Brad DeBruyne</h1>
            <h2 class='centerText'  className='lg:text-5xl sm:text-3xl md:text-4xl font-bold text-[#125b83] pb-6 centerText'>Aspiring Full Stack Developer</h2>
        <div className='flex flex-col justify-center items-center pt-6 text-[#125b83]'>
            <p  >I am a recent graduate of the <span class='special-word'>Full-stack Web Developer</span> program at <span class='special-word'>Robertson College</span>.
            This project is to display some of the skills I have developed throughout my year at 
            &nbsp;<span class='special-word'>Robertson College</span> as well as some skills I have worked on over the years.
            <br></br><br></br>

            This site was developed using <span class='special-word'>React JS</span> in <span class='special-word'>Visual Studio Code</span>, 
            <span class='special-word'>&nbsp;&nbsp;Adobe Animate</span> was used to create and give motion to my logo,&nbsp; 
            <span class='special-word'>Adobe Illustrator</span> to re-create the logos found on my skills page 
            and <span class='special-word'>Adobe Photoshop</span> to edit the background <br></br>images for the thumbnails on my work page.</p>
        </div>
            <div>
                <br />
                <button className='text-[#125b83] text-xl group  py-3 my-2 flex items-center hover:scale-75 duration-100'>
                    <Link to="work" smooth={true} duration={500}>
                        View Work 
                    </Link>              
                    <span className='group-hover:rotate-90 duration-300 special-word'>
                        <HiArrowNarrowRight/>
                    </span>            
                </button>
            </div>
        </div>
    </div>    
  )
}
export default Home