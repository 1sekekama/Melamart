import React from 'react'
import Nav from '../components/Nav'

const Contact = () => {
  return (
    <>
    <Nav/>
        <div className='flex items-center justify-center '>
  <div class="w-full max-w-[500px] lg:max-w-[700px] bg-white rounded-lg shadow-md p-6  mt-[8rem]">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 ">Contact Us</h2>

    <form class="flex flex-col">
      <input type="text" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name"/>
      <input type="email" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email"/>
      <textarea name="message" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Message"></textarea>

      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Submit</button>
    </form>
  </div>
  </div>
</>
    
  )
}

export default Contact