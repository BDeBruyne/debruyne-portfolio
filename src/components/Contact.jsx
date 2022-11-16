import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[white] flex justify-center items-center'>
        <div className='pt-28 sm:pt-12 w-[1000px]'>
          
          <form method='POST' action="https://getform.io/f/1adffb66-25b7-46a3-b8ab-c4b33bf32f05" className='flex flex-col w-full text-black'>
              <div></div>
              <div class='centerText' className=' centerText'>
                  <p className='text-5xl  border-b-4 border-[#125b83] border-double text-[#ff7300]'>Contact</p>
                  <p className='text-[#125b83] pt-4 pb-10'>Get in touch with me by email or reach out on social media. <br></br></p>
              </div>
              <input className='shadow-md shadow-gray-500 bg-white p-2' type="text"  placeholder='Name' name='name'/>
              <input className='shadow-md shadow-gray-500 my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
              <textarea className='shadow-md shadow-gray-500 bg-white p-2' name="message" rows="6" placeholder='Message'></textarea>
              <button className='text-[#125b83] text-xl hover:scale-75 hover:text-[#ff7300] duration-500  px-4 py-4 mx-auto flex items-center'>Submit</button>
          </form>
        </div>       
    </div>
  )
}
export default Contact