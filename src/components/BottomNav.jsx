import React from 'react'

const BottomNav = () => {
  return (
    <div className=' justify-center items-center hidden max-md:flex'>
     <form className="form relative ">
  <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
    <svg
      width="17"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="search"
      className="w-5 h-5 text-gray-700"
    >
      <path
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
  <input
    className="input rounded-full w-[100vw] px-8 py-1 border-2   focus:outline-none focus:border-blue-200 placeholder-gray-400"
    placeholder="Search..."
    required=""
    type="text"
  />
  <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
  <svg
    className="size-6 absolute top-[-0.5rem] right-3 text-gray-500"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
  </button>
</form> 


     
    </div>
  )
}

export default BottomNav
