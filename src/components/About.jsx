import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[white] text-black pt-12'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl font-bold inline border-b-4 text-red-600 border-black'>About</p>
                </div>              
            </div>
            <div className='max-w-[1100px] w-full grid sm:grid-cols-1 gap-8 px-4 pt-4'>
                <div className='sm:tex-right text-2xl font-bold'>
                     <p>Hi. I'm <span class='special-word'>Brad</span>, pleased to meet you. This portfolio is to demonstrate
                        some of the skills I have developed this year at <span class='special-word'>Robertson College</span> 
                        &nbsp;and share a little bit about myself.</p>
                </div>                
                <div>
                    <p><strong>I am excited about gaining experience in &nbsp;<span class='special-word'>Web Development</span> 
                        &nbsp;and improving the my skillset as I work towards becoming a professional developer.</strong>
                    </p><br></br>
                    <p><strong>In 2003 I graduated from <span class='special-word'>McKenzie College</span> after 
                        completing their&nbsp;<span class='special-word'>Digital Media Design</span> program. 
                        In that program I learned the fundamentals of &nbsp;<span class='special-word'>Graphic</span> and &nbsp;
                        <span class='special-word'>Web Design</span> using Adobe Illustrator and Photoshop, 
                        as well as &nbsp;<span class='special-word'>Web Development</span>&nbsp;basics using HTML, CSS, JavaScript and 
                        Flash <span class='special-word text-sm'>(Adobe Animate)</span>.</strong>
                    </p><br></br>
                    <p><strong>I currently find myself almost 20 years later a student at <span class='special-word'>Robertson College</span>
                        &nbsp;participating in the &nbsp;<span class='special-word'>Full Stack Web Development</span>&nbsp;program anticipating
                         graduation very soon.<br></br>  In this program I have learned the fundamentals of <span class='special-word'>
                        Front End Development</span> using HTML, CSS, JavaScript and React, as well as programming on the 
                        &nbsp;<span class='special-word'>Back End Development</span>&nbsp;side with such languages as Java, C# and .Net
                        <span className='text-sm'>(ASP and Core)</span>. I also learned <span class='special-word'>Database Concepts</span>
                        , &nbsp;<span class='special-word'>Design</span> and &nbsp;<span class='special-word'>SQL</span> tying them 
                        all together into fully functional dynamic web applications.</strong>
                    </p><br></br>
                    <p><strong>Throughout the last 20 years I have spent most of my time learning and developing skills as a construction 
                        worker, creating and operating a small business and building a family with my wife, but have always maintained an 
                        interest and love for the digital arts, the internet and its inner workings behind the scenes.</strong></p><br></br>
                    <p><strong>I have been able to take part in a handfull projects over the years when time and opportunity presented themselves
                        by developing &nbsp;<span class='special-word'>Flash Websites</span>, &nbsp;<span class='special-word'>
                        Creating Logos</span> and &nbsp;<span class='special-word'>Designing Business Cards</span> for friends and collegues.
                        </strong>
                    </p> 
                    <p><strong>Some examples can be found on my <a href="https://github.com/BDeBruyne" target="_blank" rel="noopener noreferrer">
                        <span class='special-word' className='text-xl special-word'>GitHub</span></a><span className='text-sm'>(click here)
                        </span> and more information on my &nbsp;<a href="https://github.com/BDeBruyne/Resume/blob/main/resume2022.pdf" 
                        target="_blank" rel="noopener noreferrer"><span class='special-word' className='text-xl special-word'>Resume</span></a> 
                        <span className='text-sm'>(click here)</span>.</strong>
                    </p>
                        
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default About