import { motion } from "framer-motion";
import React from 'react';
import { covidMask, skinCare, supplements } from '../assets/images';
import { dentalGalaxy, karma, medicalLogo, smLetters, unicorn, wave } from "../assets/images/brands";
const HeroProducts = () => {
  return (
    <>
    {/* heroimages */}
    <div className='flex justify-center xxl:max-w-[90%] xl:max-w-[95%] w-[100%]   xxl:gap-[1.3rem] dmb items-center  max-lg:gap-5 lg:gap-[5rem] xl:gap-1  max-md:gap-2 max-sm:gap-1 h-auto '>
    <motion.div initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.8}} >
        <img src={covidMask} alt="" className='w-full h-full object-content  ' />
    </motion.div>
    <motion.div initial={{x:-500,opacity:-1}} animate={{x:0,opacity:1}} transition={{duration:.9}}>
        <img src={supplements} alt="" className='w-full h-full object-contain '/>
    </motion.div>
    <motion.div initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.8}}>
        <img src={skinCare} alt="" className='w-full h-full object-contain ' />
    </motion.div>
    </div>
     {/* heroimages */}
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
    </>
  )
}

export default HeroProducts