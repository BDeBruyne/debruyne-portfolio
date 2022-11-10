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
                    </p><br></br>
                    <p>In 2003 I graduated from <span class='special-word'>McKenzie College</span> after 
                        completing their&nbsp;<span class='special-word'>Digital Media Design</span> program. 
                        In that program I learned the fundamentals of &nbsp;<span class='special-word'>Graphic</span> and &nbsp;
                        <span class='special-word'>Web Design</span> using the <span class='special-word'>Adobe Creative Suite</span>, 
                        as well as <span class='special-word'>Web Development</span>&nbsp;basics using <span class='special-word'>HTML</span>,
                         <span class='special-word'>CSS</span>, <span class='special-word'>JavaScript</span> and 
                         &nbsp;<span class='special-word'>Flash <span class='special-word text-sm'>(Adobe Animate)</span></span>.
                    </p><br></br>
                    <p>I currently find myself a recent honor roll graduate of 
                    &nbsp;<span class='special-word'>Robertson College's</span>&nbsp;&nbsp;<span class='special-word'>Full Stack Web Development</span> 
                    &nbsp;program.
                                             
                        In this program I have learned the fundamentals of <span class='special-word'>
                        Front End Development</span> using HTML, CSS, JavaScript, Angular and React, as well as programming on the 
                        &nbsp;<span class='special-word'>Back End Development</span>&nbsp;side with such languages as <span class='special-word'>Java</span>,
                        &nbsp;<span class='special-word'>C#</span> and <span class='special-word'>.Net<span className='text-sm'>(ASP and Core)</span></span>. 
                        I also learned <span class='special-word'>Database Concepts</span>
                        , &nbsp;<span class='special-word'>Design</span> and &nbsp;<span class='special-word'>MySQL</span> tying them 
                        all together into fully functional dynamic web applications.
                    </p><br></br>
                 
                        
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default About