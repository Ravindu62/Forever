import React from 'react'

const NewsLetter = () => {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
        
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta repellat expedita 
        </p>
        <form className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'>
            <input className='w-full outline-none sm:flex-1' placeholder='Enter your e-mail' type="email" required />
            <button className='px-10 py-4 text-xs text-white bg-black' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter

