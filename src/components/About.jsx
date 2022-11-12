import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[white] text-[#125b83] pt-28'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-1 '>
            <div class='centerText' className='pb-4 centerText'>
                <p className='text-5xl  inline border-b-4  border-[#125b83] border-double text-[#ff7300]'>About</p>
                </div>              
            </div>
            <div className='max-w-[1100px] w-full grid sm:grid-cols-1 px-4 pt-4 '>
                            
                <div>
                    <p>I am excited about gaining experience in &nbsp;<span class='special-word'>Web Development</span> 
                       &nbsp;and improving the my skillset as I work towards becoming a professional developer.
                    </p>
                    <br></br>                    
                    <p> I have experience with <span class='special-word'>Graphic Design</span> for print/web and&nbsp; 
                        <span class='special-word'>Animation</span> using the <span class='special-word'>Adobe Creative Suite</span>,
                        &nbsp;<span class='special-word'>Front End Development</span> using <span class='special-word'>HTML</span>,  
                        &nbsp;<span class='special-word'>CSS</span>, <span class='special-word'>JavaScript</span>, 
                        &nbsp;<span class='special-word'>Angular</span>&nbsp; and <span class='special-word'>React</span>, as well 
                        as programming in &nbsp;<span class='special-word'>Back End Development</span>&nbsp; with such languages
                        as <span class='special-word'>Java</span>,&nbsp;<span class='special-word'>C#</span> and 
                        <span class='special-word'>.Net<span className='text-sm'>(ASP and Core)</span></span>. I also have 
                        experience with <span class='special-word'>Database Concepts</span>, &nbsp;
                        <span class='special-word'>Design</span> and &nbsp;<span class='special-word'>MySQL</span> allowing me to
                        tie everything together into fully functional dynamic web applications.
                    </p><br></br>
                    <p>When I am not at my workstation I enjoy spending time with my <span class='special-word'>family</span>, 
                    participating in sports, chilling out with a good movie or playing video games from time to time.
                    </p>
                 
                        
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default About