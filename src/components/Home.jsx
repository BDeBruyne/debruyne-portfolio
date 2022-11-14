import React from 'react'

const Home = () => {
  

  return (
    <div name='home' className='w-full h-screen' >

        {/* Container */}        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>         
            <p className='text-[#125b83] text-xl'>Hello, my name is</p>
            <h1 class='centerText' className='lg:text-7xl md:text-7xl  text-[#ff7300] centerText'>Brad DeBruyne</h1>
            <h2 class='centerText'  className='lg:text-5xl sm:text-3xl  md:text-4xl font-bold text-[#125b83] pb-4 centerText'>Aspiring Full Stack Developer</h2>
        <div className='flex flex-col justify-center items-center pt-2 text-[#125b83]'>
            <p  >I am a recent graduate of the <span class='special-word'>Full-stack Web Developer</span> program at <span class='special-word'>Robertson College</span>,
            as well as a graduate of the <span class='special-word'>Digital Media and Design</span> program at <span class='special-word'>McKenzie College</span>.
            <br></br><br></br>

            I am an experienced customer service professional who is dedicated to effectively overcoming challenges and working towards the successful completion of projects and goals.
            <br></br><br></br>
            If you are looking for a creative developer to join your team or upcoming project please feel free to reach out.
            <br></br>
            I am always available to share ideas and happy to help.
            </p>
        </div>
            
        </div>
    </div>    
  )
}
export default Home