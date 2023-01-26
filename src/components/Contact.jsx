import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#107c91] flex justify-center items-center p-4 '>
        <form action="https://getform.io/f/539b34cb-6bcb-4256-84b6-6bfd1911b923" method="POST"
        className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-purple-400'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - adarshmanjady@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' 
            type='text'
            placeholder='Name'
            name='name' />
            <input className='bg-[#ccd6f6] my-4 p-2' 
            type='email'
            placeholder='Email'
            name='email' />
            <textarea name='message'  cols='30' rows='10' placeholder='Message' className='bg-[#ccd6f6] p-2' ></textarea>
            <button className='text-white font-bold border-2 hover:bg-purple-400 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md shadow-md hover:scale-110 duration-300'>Lets Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;