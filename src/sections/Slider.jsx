import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Hero, Hero2, Hero3 } from "./Hero";

export default function SimpleSlider() {
  var settings = {
    
    autoplay:true,
    
    infinite: true,
    speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
    
    
  };
  return (
     <>
    <Slider className=" xxl:max-w-[85%] xl:max-w-[87%] w-[110%] lg:mt-7 h-full dmb overflow-hidden" {...settings} >
    <div className='mt-[3.3rem] overflow-hidden max-md:mt-[6.2rem]   max-lg:mt-[3.5rem]     z-[-999]'>
    <Hero/>
    </div>
    <div className='mt-[3.3rem] overflow-hidden max-md:mt-[6.2rem]  max-lg:mt-[3.5rem]   z-[-999]'>
    <Hero2/>
    </div>
    <div className='mt-[3.3rem] overflow-hidden max-md:mt-[6.2rem]  max-lg:mt-[3.5rem]    z-[-999]'>
    <Hero3/>
    </div>
    
    </Slider>
  
   </>
  );
}

