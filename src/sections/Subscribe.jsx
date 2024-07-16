import React from 'react';
import { CiMail } from "react-icons/ci";

const Subscribe = () => {
  return (
    <div>
        {/*  lg and md devices*/}
   <div className='h-[10rem] mb-8  flex max-md:hidden items-center border-slate-400 justify-center max-md:gap-12 lg:gap-[20rem] md:gap-[7rem] px-3 bg-slate-100 mt-5'>
    <div className='flex items-center justify-center gap-5'>
    <CiMail className='text-[4rem]'/>
    <div>
      <h1 className='font-roboto font-extrabold text-xl'>Subscribe Newsletter</h1>
      <p className='italic font-light font-roboto'>Never miss out on thousand of super promotions</p>
      </div>
    </div>
    <div class="flex gap-1">
    <div
      class="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"
    >
      <input
        type="text"
        class="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
        placeholder="Email address..."
      />
    </div>
    <button
      class="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400"
    >
      Subscribe
    </button>
  </div>
   </div>
   {/*  */}
   {/* mobile*/}
   <div class="hidden max-md:flex flex-col items-center justify-center mt-7 mb-8  ">
  <div class="w-full max-w-md bg-slate-100 border-slate-200 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">
      Subscribe to Our Newsletter
    </h2>

    <form class="flex flex-col">
      <input
        type="email"
        class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Email address..."
      />

      <button
        type="submit"
        class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Subscribe
      </button>
    </form>

   
  </div>
</div>

   {/*  */}
    </div>
  )
}

export default Subscribe