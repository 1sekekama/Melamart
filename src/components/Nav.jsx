
import { motion } from "framer-motion";
import React, { useState } from 'react';
// import { BiHomeAlt } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../Constants";
import logo from "../assets/icon.png";
import BottomNav from "./BottomNav";
const Nav = () => {
 
 const [isMenuOpen,setIsMenuOpen]=useState(false);

 
  return (
    <header className="fixed w-full z-[999]">
    <div className=' top-0 right-0 left-0 bg-blue-950 max-md:py-3  py-2 lg:py-5 lg:mb-12'>
<nav className='mr-5 max-md:mr-2 ml-1'>
  <div className='flex justify-between items-center'>

    <a href='/' className='text-2xl flex items-center space-x-3'><div className='inline-block items-center text-[#f8b73f] 
     '><img src={logo} width={40} height={40} alt="" /></div> <span className='font-bold text-[#f8b73f]' style={{marginLeft:"2px"}}>Med</span><span className='text-[#ff892e] font-bold'style={{marginLeft:0}}>Mart</span></a>
      
    <ul className='md:flex space-x-12'>
      {navLinks.map((link)=>(
        <li key={link.label} className=' max-xl:hidden block text-xl font-bold  text-[#ffffff] hover:text-[#97f497]
        '>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
    
    {/* <input className='w-[15rem] h-7 mt-1 mr-1 rounded-md indent-2'  type="text" placeholder='search'/> */}
    <form className="form relative max-md:hidden">
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
    className="input rounded-full px-8 py-1 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
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
{/* <div className="text-[#ffffff] flex items-center justify-center gap-1 font-roboto text-xl">
<IoIosCall/>
  <button >
    
  (+254) 712345678</button>
</div> */}
<div className="text-white text-2xl relative flex items-center justify-center">
    <button><BsCart3/></button>
    <span className="absolute text-xs top-0 left-4 w-4 font-semibold p-1 h-4 bg-[#f3a847]  rounded-full flex justify-center items-center">
              0
            </span>
    </div>
    <div className=' text-[#ffffff]'>   
    
    <a href="/SignIn" className='font-bold text-lg flex gap-5 '><svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
    <path
      d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
      fill="#ffffff"
    ></path>
  </svg></a>
    {/* <button className='bg-[green] text-white rounded-lg h-7 w-[5rem] text-xl'>Sign Up</button> */}
    {/* <button className="w-[100px] font-bold bg-black h-[30px] my-3 flex items-center justify-center
     rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500
      ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute
       before:top-0 before:-left-full before:w-full before:h-full
        before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)]
         before:transition-all before:duration-500 before:ease-in-out before:z-[-1]
          before:rounded-xl hover:before:left-0 text-[#fff]">
  Sign Up
</button> */}
    </div>
    

    <div className='hidden max-xl:block relative'>
    <button className='text-[#ffffff] ' >
    {isMenuOpen? (< FaXmark className='w-8 h-8 '  onClick={()=>setIsMenuOpen(!isMenuOpen)}/ >)
     : (<FaBars className='w-8 h-8 ' onClick={()=>setIsMenuOpen(!isMenuOpen)} />)}
    </button>
    
    {isMenuOpen &&(
      
      <motion.div  initial={{x:500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.4}} className=' z-[999] absolute h-[60vh] w-[110vw] 
      right-0 mr-[-2rem] top-11  max-md:top-[3.1rem] bg-[#011743] text-[#ffffff]'>

      <ul >
        {navLinks.map((link)=>(
          <li >
            <a className='flex items-center justify-center mt-9 gap-12 font-extrabold hover:text-slate-500' href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      </motion.div>
    )}
    </div>
   
  </div>
</nav>

</div>
<BottomNav />
    </header>
   
  )
}

export default Nav
