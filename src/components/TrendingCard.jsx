import React from 'react';
const TrendingCard = ({img_url,title,category,quantity}) => {
  return (
    <>
    
    <div className='  rounded-md h-auto border-[1px] border-gray-200 py-6 z-30 hover:shadow-md hover:border-transparent shadow-none  duration-200 relative flex flex-col gap-4 '>
    <div className=' w-full h-auto flex items-center justify-center '>
      <img src={img_url} alt={title} className=' w-[100px] h-[100px]  object-contain' />
      </div>
     
      <div className='flex flex-col items-center justify-center px-3'>
      
      <h3 className='mt-2 text-xl leading-normal font-semibold font-roboto'>
        {category}
      </h3>
     
      <p className='mt-2 font-semibold font-roboto text-gray-400 text-sm leading-normal'>
        {quantity}
      </p>
    
     
      
      </div>
       
      </div>
      </>
    
  )
}

export default TrendingCard
