import { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { StockProducts } from '../assets/products';
import TrendingCard from '../components/TrendingCard';
const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
const Trending = () => {
   
    const [items, setItems] = useState([]);

    useEffect(() => {
      const shuffledArray = shuffleArray(StockProducts);
      const randomItems = shuffledArray.slice(0, 8);
      setItems(randomItems);
    }, []);
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate('/Shop');
    };
  return (
    <section className="mb-12 max-container  ">
    <div className='relative flex justify-between px-[5rem] max-sm:px-1 bg-white  mt-[5rem] h-[5rem]'>
         <h1 className='flex justify-center items-center font-roboto'>Trending on <span className='font-bold italic ml-2'> MedMart </span></h1>
         <h1 className=' flex justify-center items-center gap-10 px-2 h-12 mt-4 max-sm:h-8 max-sm:mt-6 max-sm:gap-3'><button onClick={handleButtonClick} className='flex italic font-roboto font-light items-center justify-center gap-4'>View all products < FaChevronRight/></button></h1>
    </div>
    <div className='flex items-center justify-center '>
      <div className='w-[90%] mb-2 h-[0.1px]  bg-[#b6c5b6] flex px-12 '></div>
      </div>

    <div id="home" className=" max-w-screen-xl m-auto px-7  grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-10">
    {items.map((item)=>(
        <TrendingCard key={item.index}  { ...item}/>
    ))}
   </div>
   

   
</section>
  )
}

export default Trending