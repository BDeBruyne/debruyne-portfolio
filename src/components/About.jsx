import React from 'react'
import HTMLImg from '../assets/html5.png';
import CSSImg from '../assets/css3.png';
import JavaScriptImg from '../assets/javaScript22.png';
import ReactImg from '../assets/reactJS.png';
import JavaImg from '../assets/java22.png';
import CSharp from '../assets/cSharp.png';
import Adobe from '../assets/adobe.png';
import NetCore from '../assets/netCore.png';
import Angular from '../assets/angular.png';
import Stackblitz from '../assets/stackblitz.png';
import MySql from '../assets/mysql.png';
import ASP from '../assets/asp.png';
import Profile from '../assets/profile.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[white] text-[#125b83] '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-1 '>
            <div class='centerText' className='pb-4 centerText'>
                <p className='text-5xl   border-b-4  border-[#125b83] border-double text-[#ff7300]'>About</p>
                </div>              
            </div>
            <div className='max-w-[1000px] w-full grid lg:grid-cols-2 sm:grid-cols-1 px-4 pt-4 '>
                            
                <div className='pb-4 '>                                       
                    <p> I am experienced with <span class='special-word'>Graphic Design</span> for print and web,&nbsp; 
                        <span class='special-word'>Animation</span> as well as&nbsp;<span class='special-word'>Front End</span> and 
                        &nbsp;<span class='special-word'>Back End Development</span> programming. &nbsp;I also have 
                        experience with <span class='special-word'>Database Concepts</span>,&nbsp;
                        <span class='special-word'>Design</span> and&nbsp;<span class='special-word'>SQL</span> allowing me to
                        tie everything together into fully functional dynamic web applications.
                    </p><br></br>
                    <p>When I am not at my workstation I enjoy spending time with my family, 
                    participating in sports, chilling out with a good movie or playing video games from time to time.
                    </p>                 
                </div>

                 {/* Container */}
                 
        <div className='max-w-[500px]   flex flex-col justify-center items-center w-full h-full pl-44'>
        <div className=''>
                    <img className=' mx-auto hover:scale-75 duration-500' src={Profile} alt="Profile Picture" />                    
                </div>

        
            <div>                
                <p className=' text-[#ff7300] pb-4 border-b-4 border-[#125b83] border-double text-center  text-xl'>Technologies I've Worked With</p>
            </div>

            <div className='w-full grid grid-cols-3 grid-rows-1  gap-2  pb-60 pt-8'>                
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={HTMLImg} alt="HTML Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={CSSImg} alt="CSS Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={JavaScriptImg} alt="JavaScript Logo" />                    
                </div>                
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={ReactImg} alt="ReactJS Logo" />                    
                </div>  
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={Angular} alt="Angular Logo" />                    
                </div>              
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={Stackblitz} alt="StackBlitz Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={JavaImg} alt="Java Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={CSharp} alt="C# Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={MySql} alt="MySQL Logo" />                    
                </div>
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={NetCore} alt=".Net Core Logo" />                    
                </div>                
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={ASP} alt="ASP Logo" />                    
                </div>                 
                <div className=''>
                    <img className='w-10 mx-auto hover:scale-75 duration-500' src={Adobe} alt="Adobe Logo" />               
                </div>              
            </div>
        </div>

            </div>
        </div>
    </div>
  )
}
export default About