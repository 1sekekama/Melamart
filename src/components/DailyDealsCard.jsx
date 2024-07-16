import React from 'react';
import { FaArrowAltCircleRight, FaShoppingCart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdFavorite } from "react-icons/md";
const DailyDealsCard = ({img_url,title,category,price,brand_name,quantity}) => {
  return (
    <>
    
    <div className='  rounded-md h-auto border-[1px] border-gray-200 py-6 z-30 hover:shadow-md hover:border-transparent shadow-none  duration-200 relative flex flex-col gap-4 '>
    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-400">
            {category}
          </span>
          {/* <span className='hidden max-md:block top-[15rem] right-5 absolute '>
                  <GrFavorite/>
                </span> */}
    <div className=' w-full h-auto flex items-center justify-center relative group hover:shadow-2xl'>
      <img src={img_url} alt={title} className=' w-[200px] h-[200px]  object-contain' />
     {/*  */}
     <ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flexzazazaza           vvvvvvvvvvvvvvvvv flex-col justify-center items-end gap-2">
             
              <li className="productLi">
                Add to Cart
                <span>
                  <FaShoppingCart />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <MdFavorite />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <FaArrowAltCircleRight />
                </span>
              </li>
             
            </ul>
     {/*  */}
      </div>
      <div className='flex mt-[-1rem] items-center justify-center '>
      <div className='w-[90%] h-[0.05rem]  bg-[#394839] flex px-12 '></div>
      </div>
      <div className='flex flex-col items-center justify-center px-3 z-[10] bg-white'>
      <p className='mt-2 italic font-semibold font-roboto text-gray-600 text-sm leading-normal'>
        {brand_name}
      </p>
      <h3 className='mt-2 text-xl leading-normal font-semibold font-roboto'>
        {title}
      </h3>
      {/* <p className='mt-2 font-semibold font-montserrat text-coral-red text-sm leading-normal'>
        {category}
      </p> */}
      <p className='mt-2 font-semibold font-roboto text-gray-400 text-sm leading-normal'>
        {quantity}
      </p>
      <div className='text-[yellow] flex text-sm '>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      </div>
      <p className='mt-2 font-extrabold font-roboto text-[#72c22c] text-xl leading-normal'>
        KSh {price}
      </p>
      
      
      </div>
       <button  className="w-full py-1.5 rounded-md mt-3 font-roboto font-medium text-base bg-gradient-to-tr from-yellow-100 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
              Add to Cart
            </button>
      </div>
      </>
    
  )
}

export default DailyDealsCard 
