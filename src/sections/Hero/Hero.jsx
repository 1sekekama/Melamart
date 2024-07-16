import React from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { bg1 } from "../../assets/images/sliders";

import { useNavigate } from 'react-router-dom';
const Hero2 = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Shop');
  };
  return (
     <>
    <div className='flex items-center justify-center relative '>
     <img src={bg1} alt=""  className=' w-full  object-contain'/>
     
    </div>
    <div className='absolute top-0 md:px-12  w-full h-full flex flex-col justify-center text-gray-900'>
        <div className='md:px-[3rem] font-[roboto] xl:mt-[10rem]  lg:mt-[9em] mt-[7rem] max-md:mt-[6rem] lg:px-[7rem] max-md:px-[2rem] flex flex-col w-full h-full'>
            <h4 className='text-[#31f3e9] lg:mb-4  xl:mb-5 max-md:mb-[-0.5rem] md:mb-[-0.03rem] md:mt-[-2.8rem] font-roboto text-lg max-md:text-[10px] max-md:text-[#3bafa9] '>SPECIAL OFFERS</h4>
            <h2 className='text-2xl xl:mb-2 max-md:mb-[-0.5rem] max-md:text-[10px]'>Your Surgical </h2>
            <h2 className='text-2xl font-bold lg:mb-4 xl:mb-5 max-md:mb-[-0.5rem] md:mb-[0.5rem] max-md:text-[10px]'>Clothes </h2>
            <p className='xl:mb-[4rem] max-md:mb-[-0.05rem] md:mb-[0.8rem]  text-[#92d527] text-lg max-md:text-[10px]'>Now Available at MedMart</p>

            <button onClick={handleButtonClick}
  className="bg-gradient-to-r w-[200px] max-md:w-[110px]  max-md:text-[8px] flex items-center justify-center max-md:justify-start gap-3 from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
>
  Shop Now <FaGreaterThan className='max-md:text-[8px] max-md:px-0'/>
</button>

        </div>
    </div>
</>
  )
}

export default Hero2
