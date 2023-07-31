import React from 'react';

export default function ContactForm() {
  return (
    <div className='mx-4 md:mx-20'>
      <div className='mx-auto text-center mt-6'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>Message </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg-gradient-to-tr from-[#ffd4f7] to-[#b27aff] bg-opacity-30 rounded-lg shadow-lg p-8 w-full sm:mx-auto mt-16'>
        {/* Hidden image on small screens */}
        <div className='hidden md:block'>
          <img
            src='/komputer.jpg'
            alt=''
            width={200}
            height={200}
            className='w-full h-full rounded-lg'
          />
        </div>

        {/* Column with background image */}
        <div>
          <div className='h-full'>
            <form 
            className='text-black ' 
            action={'https://getform.io/f/ab7b79e2-1b9a-4d97-8892-69235a702349'}
            method='POST'
            encType='multipart/form-data'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='rounded-lg p-1 bg-white'>
                  <input
                    type='name'
                    name='name'
                    className='w-full p-2 outline-none bg-white'
                    placeholder='Name'
                  />
                </div>
                <div className='rounded-lg p-1 bg-white'>
                  <input
                    type='email'
                    name='email'
                    className='w-full p-2 outline-none bg-white'
                    placeholder='Email'
                  />
                </div>
                <div className='md:col-span-2 rounded-lg p-1 bg-white'>
                  <input
                    type='subject'
                    name='subject'
                    className='w-full p-2 outline-none bg-white'
                    placeholder='Subject'
                  />
                </div>
                <div className='md:col-span-2 rounded-lg p-1 bg-white h-60'>
                  <textarea
                    cols={30}
                    rows={5}
                    name='message'
                    className='w-full p-2 outline-none resize-none bg-white'
                    placeholder='Message'
                  />
                </div>
                <div className='md:col-span-2'>
                  <button className='transition bg-gray-200 hover:bg-green-400 hover:duration-150 border-gray-200 shadow-2xl text-black hover:text-white font-medium px-4 py-2 rounded-md w-full pb-[-20px]'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
