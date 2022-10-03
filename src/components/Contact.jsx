import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[white] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1adffb66-25b7-46a3-b8ab-c4b33bf32f05" className='flex flex-col max-w-[600px] w-full text-black'>
            <div class='centerText' className='pb-4 centerText'>
                <p className='text-5xl font-bold inline border-b-4 border-black text-red-600'>Contact</p>
                <p className='text-black pt-4 pb-10'><strong>Contact me the with form below or get in touch by email. </strong><br></br><span class='special-word'><b>debruynebrad@gmail.com</b></span></p>
            </div>
            <input className='shadow-md shadow-gray-900 bg-white p-2' type="text"  placeholder='Name' name='name'/>
            <input className='shadow-md shadow-gray-900 my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
            <textarea className='shadow-md shadow-gray-900 bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black font-bold hover:scale-75 hover:text-red-600 duration-500  px-4 py-3 my-5 mx-auto flex items-center'>Submit</button>
        </form>       
    </div>
  )
}
export default Contact