import React,{useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import lady from '../assets/lady.png'
import mandir from '../assets/mandir.png';
import TajMahal from '../assets/TajMahal.png';

const Header = () => {

  const cardData=[
    {
      heading: "Eat and Drink",
      disc: "From Kashmir to Kanyakumari authentic coffee, you will taste something that is not found anywhere in the world.",
      img: [lady],
    },
    {
      heading: "Shopping in India",
      disc: "There are a lot to take with you back home from Saudi shops and creativity.",
      img: [mandir],
    },
    {
      heading: "Shopping in India",
      disc: "There are a lot to take with you back home from Saudi shops and creativity.",
      img: [TajMahal],
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondTopIndex, setSecondTopIndex] = useState(1);
  const [thirdTop, setThirdTop] = useState(2);
  const firstClick=()=>{
    setCurrentIndex(0),setSecondTopIndex(1),setThirdTop(2)
  }
  const secondClick=()=>{
    setCurrentIndex(1),setSecondTopIndex(2),setThirdTop(0)
  }
  const thirdClick=()=>{
    setCurrentIndex(2),setSecondTopIndex(0),setThirdTop(1)
  }
  


  return (
    <>
    
    <div className=''>
    <div className='bg-cover  h-5/6 bg-center' style={{ backgroundImage: `url(${cardData[currentIndex].img})`, backgroundSize: '1920px 1920px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backdrop_filter:' blur(20px)'}}>
          <div class=' backdrop-blur-md '>
            <div className='flex h-5/6 text-justify text-[#374772] justify-between px-52 pt-44 pb-28 object-cove'>
            <div class=" pt-24 ">
              <div class=' text-5xl '>
                Rethink Summer
              </div>
              <div class=' py-5 '>
                Find your cooler getaway.
              </div>
              <Link to="/visaapplication" class='text-[#374772]  font-medium bg-transparent border border-[#374772]  px-4 py-2 rounded-full'>
                learn more
              </Link>
            </div>
            <div class=' justify-start items-center px-28 flex'>
              <div class=' absolute inset-y-50 left-50  z-40'>
                <button onClick={firstClick}><img src={cardData[currentIndex].img} alt='img' class='relative w-64  rounded-[24px]' /></button>
              </div>
              <div class='  z-20 '>
                <button onClick={secondClick}><img src={cardData[secondTopIndex].img} alt='img'  class='inset-y-50 w-56 left-48 relative rounded-[24px]' /></button>
              </div>
              <div class='  z-0'>
                <button onClick={thirdClick}><img src={cardData[thirdTop].img} alt='img'  class='inset-y-50 w-48 left-32 relative  rounded-[24px]' /></button>
              </div>
            </div>
            </div>
            <div className='flex justify-center pb-8  text-[#374772] gap-4'>
              <div class=' border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
              <div class=' border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
              <div class=' border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
            </div>
          </div>
          
      
      </div>
    </div>
      
    </>
  )
}

export default Header;

