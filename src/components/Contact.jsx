import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[white] flex justify-center items-center p-4 pt-20'>
        <form method='POST' action="https://getform.io/f/1adffb66-25b7-46a3-b8ab-c4b33bf32f05" className='flex flex-col max-w-[600px] w-full text-black'>
            <div class='centerText' className='pb-4 centerText'>
                <p className='text-5xl  inline border-b-4 border-[#125b83] border-double text-[#ff7300]'>Contact</p>
                <p className='text-[#125b83] pt-4 pb-10'>Get in touch with me by email through the form below. <br></br></p>
            </div>
            <input className='shadow-md shadow-gray-900 bg-white p-2' type="text"  placeholder='Name' name='name'/>
            <input className='shadow-md shadow-gray-900 my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
            <textarea className='shadow-md shadow-gray-900 bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#125b83] text-xl hover:scale-75 hover:text-[#ff7300] duration-500  px-4 py-3 my-5 mx-auto flex items-center'>Submit</button>
        </form>       
    </div>
  )
}
export default Contact