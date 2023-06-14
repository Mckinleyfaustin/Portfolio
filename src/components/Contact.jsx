import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#160e52] text-[#cfd6ee] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/675d28ae-22eb-4695-9ee5-90b86c2d283b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
<p className='text-4xl inline border-b-4 border-[#42e648]'>Contact</p>
<p className='py-4'>Submit the form below or you can send me an email at mckinleyfaustin@gmail.com</p>
            </div>
<input className='bg-white text-black' type='text' placeholder='Name' name='name' />
<input className='my-4 p-2 bg-white text-black' type='email' placeholder='Email' name='email' />
<textarea className='bg-white p-2 text-black' name='message' rows='10' placeholder='Message' />
<button className='border-2 hover:bg-[#42e648] hover:text-[#160e52] px-4 py-3'>Send</button>
        </form>
        
    </div>
  )
}
