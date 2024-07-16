import { motion } from "framer-motion";
import React from 'react';
import { dentalGalaxy, karma, medicalLogo, smLetters, unicorn, wave } from "../assets/images/brands";
import { StockProducts } from '../assets/products';
import AllProductCard from '../components/AllProductCard';
import Footer from "./Footer";
import Subscribe from "./Subscribe";
const AllProducts = () => {
  return (
    <>
    
    
    
    {/* brands section */}
    <div className="flex items-center justify-center mt-12 mb-12">
    <p className="text-2xl  font-roboto hidden max-md:block   max-lg:text-xl">Listed by the top brands</p>
</div>
    <div className="flex mt-[2rem] max-md:mt-[0px] mb-12">

      <div 
       className="flex items-center justify-between gap-[4.4rem] max-lg:gap-6 max-md:gap-1 m-auto  ">
      <p className="text-2xl  font-roboto max-w-[10rem] max-lg:text-2xl max-md:hidden">Listed by the top brands</p>
      <motion.img initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.1,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }}  src={unicorn} alt="unicorn" className=" w-[100px] max-lg:w-[80px] max-sm:w-[55px]" />
      <motion.img initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.1,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }} 
      src={dentalGalaxy} alt="dentalGalaxy" className="w-[100px] max-lg:w-[80px] max-sm:w-[55px]" />
      <motion.img initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.1,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }} 
       src={smLetters} alt="smLetters" className="w-[100px] max-lg:w-[80px] max-sm:w-[55px]"/>
      <motion.img initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.2,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }} 
      src={karma} alt="karma" className="w-[100px] max-lg:w-[80px] max-sm:w-[55px]"/>
      <motion.img initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.2,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }} 
      src={medicalLogo} alt="medicalLogo" className="w-[100px] max-lg:w-[80px] max-sm:w-[55px]"/>
     
      <motion.img initial={{x:50,opacity:1}} whileInView={{x:0,opacity:1}} transition={{
        delay:0.2,
        x:{type: "spring", stiffness:30},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1
        }} 
      src={wave} alt="medicalLogo" className="w-[100px] max-lg:w-[80px] max-sm:w-[55px]"/>
     
      </div>
    </div>
    <div className='xl:mt-[-8rem] md:mt-[-8rem]'>
       
    <section
    className="max-container max-sm:mt-12 xl:mt-[15rem] lg:mt-[15rem] md:mt-[15rem] "
     >
    <div className='relative flex justify-between px-[5rem] max-sm:px-1 bg-white  mt-12 h-[5rem]'>
         <h1 className='flex justify-center items-center font-roboto'>Happy<span className='font-bold italic ml-2'> Shopping </span></h1>
    </div>
    <div className='flex items-center justify-center '>
      <div className='w-[90%] mb-3 h-[0.1px]  bg-[#b6c5b6] flex px-12 '></div>
      </div>
   <div className='flex items-center justify-center '>
      <div className='w-[90%] mt-[-1.5rem] h-[0.1px]  bg-[#b6c5b6] flex px-12 '></div>
      </div>
   
   <div id="home" className=" max-w-screen-xl m-auto px-7  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-10">
    {StockProducts.map((product)=>(
        <AllProductCard key={product.index}  { ...product}/>
    ))}
   </div>
  
  
  
   

   
   </section>
   </div>
   <Subscribe/>
      <Footer/>
   </>
  )
}

export default AllProducts