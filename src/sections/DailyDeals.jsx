import { useEffect, useState } from 'react';
import { StockProducts } from '../assets/products';
import DailyDealsCard from '../components/DailyDealsCard';

const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
const DailyDeals = () => {
   
    const [items, setItems] = useState([]);

    useEffect(() => {
      const shuffledArray = shuffleArray(StockProducts);
      const randomItems = shuffledArray.slice(0, 8);
      setItems(randomItems);
    }, []);

    // countdown timer 
      const initialTime = 24 * 60 * 60; // 24 hours in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // Retrieve stored time from localStorage
    const storedTime = localStorage.getItem('countdownTime');
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    } else {
      setTime(initialTime);
    }

    const countdown = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime - 1;
        // Update localStorage with new time
        localStorage.setItem('countdownTime', newTime.toString());
        // Reset to initial time if countdown reaches zero
        return newTime <= 0 ? initialTime : newTime;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []); // Empty dependency array to run once on component mount

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  return (
    <section className="mb-12 max-container max-sm:mt-12 xl:mt-[15rem] lg:mt-[15rem] md:mt-[15rem] ">
    <div className='flex justify-between px-[5rem] max-sm:px-1 bg-slate-100  mt-12 h-[5rem]'>
         <h1 className='flex justify-center items-center font-semibold font-roboto'>Shop Daily <span className='font-light italic ml-2'> Deals </span></h1>
         <h1 className='bg-[#d34a05] flex justify-center text-white rounded-md items-center gap-10 px-2 h-12 mt-4 max-sm:h-8 max-sm:mt-6 max-sm:gap-3'>Ends in: <span>{formatTime(time)} </span></h1>
    </div>
    <div className='flex items-center justify-center '>
      <div className='w-[90%] mt-[-1.5rem] h-[0.1px]  bg-[#b6c5b6] flex px-12 '></div>
      </div>
    <div id="home" className=" max-w-screen-xl m-auto px-7  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-10">
    {items.map((item)=>(
        <DailyDealsCard key={item.index}  { ...item}/>
    ))}
   </div>

   
</section>
  )
}

export default DailyDeals