import React from 'react'
import CSharp from '../assets/cSharp.jpg';
import Java from '../assets/java.jpg';
import JavaScript from '../assets/javaScript.jpg';
import Illustrator from '../assets/illustrator.jpg';

const Work = () => {
    return (
      <div name='work' className='w-full h-screen bg-[white] text-[#ff7300]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div class='centerText max-w-[1000px] w-full' >
                <p  className='text-5xl border-b-4 border-[#125b83] border-double'>Work</p>
                <p className='py-4 pt-6 text-[#125b83]'>Projects I've worked on.                   
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-lg font-bold  pt-8'>
                <div style={{backgroundImage: `url(${JavaScript})`}} class='backgroundImg' className='shadow-md shadow-gray-900 hover:scale-110 duration-500 backgroundImg'>  
                    <div className=' w-full h-full'>
                            <span className='text-sm font-bold text-black tracking-wider'>
                                Story Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://raw.githubusercontent.com/BDeBruyne/JavaScript/main/StoryGenerator/StoryGeneratorCode" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-sm px-4 py-14 m-2 text-black font-bold text-sm hover:text-red-600'>ViewCode</button>
                                </a>
                            </div>
                        </div>              
                </div>
                <div style={{backgroundImage: `url(${Java})`}} class='backgroundImg'className='shadow-md shadow-gray-900 hover:scale-110 duration-500 backgroundImg'>
                <div className=' w-full h-full'>
                            <span className='text-sm font-bold text-black tracking-wider'>
                                Vowel Counter
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://raw.githubusercontent.com/BDeBruyne/Java/main/VowelCounter/VowelCounterCode" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-sm px-4 pt-14 m-2   text-black font-bold text-sm hover:text-red-600'>View Code</button>
                                </a>
                            </div>
                        </div>             
                </div>
                <div style={{backgroundImage: `url(${CSharp})`}} class='backgroundImg' className='shadow-md shadow-gray-900 hover:scale-110 duration-500 backgroundImg'>
                <div className=' w-full h-full'>
                            <span className='text-sm font-bold text-black tracking-wider '>
                                 Prime Factors
                            </span>
                            <div className='pt-16 text-center'>
                                <a href="https://raw.githubusercontent.com/BDeBruyne/CSharp/main/PrimeFactors/Program.cs" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-sm px-4 pt-6 m-2   text-black font-bold text-sm hover:text-red-600'>View Code</button>
                                </a>
                            </div>
                        </div>             
                </div>
                <div style={{backgroundImage: `url(${Illustrator})`}} class='backgroundImg' className='shadow-md shadow-gray-900 hover:scale-110 duration-500 backgroundImg'>
                <div className=' w-full h-full'>
                            <span className='text-sm font-bold text-black tracking-wider '>
                                 Character Design
                            </span>
                            <div className='pt-16 text-center'>
                                <a href="https://raw.githubusercontent.com/BDeBruyne/Illustrator/main/characterFace.svg" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-sm px-4 pt-6 m-2   text-black font-bold text-sm hover:text-red-600'>View</button>
                                </a>
                            </div>
                        </div>             
                </div> 
            </div>
        </div>
    </div>
    )
  }
  
  export default Work