import React from 'react'
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className='flex grid flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <img src={assets.logo} className='w-32 mb-5' alt="" />
            <p className='w-full text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde ad voluptatibus nulla accusamus, nostrum natus, laudantium iure doloribus magni non magnam, itaque quod ratione velit eos consectetur qui voluptatem.</p>
        </div>
        
        <div>
            <p className='mb-5 text-xl font-medium'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                
            </ul>
        </div>
        
        <div>
            <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94-12-3456789</li>
                <li>info@forever.com</li>
            </ul>
        </div>
      </div>
      
      <div>
        <hr />
        <p className='py-5 text-center test-sm'>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
