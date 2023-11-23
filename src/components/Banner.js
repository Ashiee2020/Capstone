import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0);
    const data = [
        "https://t4.ftcdn.net/jpg/02/94/61/05/240_F_294610557_657jZzmmcGVSU6AjjJrN8ceud9NF9Z05.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9f9ccf167956195.Y3JvcCwxNDAwLDEwOTUsMCw0NjA.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0383ba177302217.Y3JvcCwyNDI0LDE4OTYsMCww.png",
        "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d5a385163460915.Y3JvcCw5ODUsNzcxLDEwNyww.png",
        "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0beee8179914619.Y3JvcCwyMDcxLDE2MjAsMjIwLDA.png",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
         <div 
           style={{transform: `translateX(-${currentSlide * 100}vw)`}}
           className='w-[400vw] h-full flex transition-transform duration-1000' 
          >
            <img
            className='w-screen h-fit object-cover' 
            src={data[0]} 
            alt='ImgOne'
            loading='priority'
             />
              <img
            className='w-screen h-full object-cover' 
            src={data[1]} 
            alt='ImgTwo'
             />
              <img
            className='w-screen h-full object-cover' 
            src={data[2]} 
            alt='ImgThree'
             />
              <img
            className='w-screen h-full object-cover' 
            src={data[3]} 
            alt='ImgFour'
             />
              <img
            className='w-screen h-full object-cover' 
            src={data[4]} 
            alt='ImgFive'
             />

            </div>
               <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-500 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300'>
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-500 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300'>
                    <HiArrowRight />
                </div>
               </div>
        </div>
    </div>
  );
};

export default Banner;
