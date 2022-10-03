import React from 'react'
import HTMLImg from '../assets/html5.png';
import CSSImg from '../assets/css3.png';
import JavaScriptImg from '../assets/javaScript22.png';
import ReactImg from '../assets/reactJS.png';
import JavaImg from '../assets/java22.png';
import CSharp from '../assets/cSharp.png';
import Adobe from '../assets/adobe.png';
import NetCore from '../assets/netCore.png';

const Skills = () => {
  return (
    <div class='centerText'  name='skills' className='w-full h-screen bg-[white] text-red-600 centerText'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-black'>Skills</p>
                <p className='py-4 text-black'><strong>These are some of the technologies I've worked with.</strong></p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-lg font-bold py-8'>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTMLImg} alt="HTML Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSSImg} alt="CSS Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScriptImg} alt="JavaScript Logo" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactJS Logo" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaImg} alt="Java Logo" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="C# Logo" />
                    <p className='my-4'>C #</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NetCore} alt=".Net Core Logo" />
                    <p className='my-4'>.NetCore</p>
                </div>
                <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Adobe} alt="Adobe Logo" />
                    <p className='my-4'>Adobe</p>
                </div>                
            </div>
        </div>
    </div>
  )
}
export default Skills