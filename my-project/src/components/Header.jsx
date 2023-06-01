import React,{useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import lady from '../assets/lady.png'
import mandir from '../assets/mandir.png';
import TajMahal from '../assets/TajMahal.png';

const Header = () => {
  
  const [backImg, setBackImg] = useState(lady);
  const topImg=(image)=>{
    setBackImg(image);
  }

  return (
    <>
 
    <div className='bg-cover   h-5/6' style={{ backgroundImage: `url(${lady})`, backgroundSize: '1920px 1920px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
          <div class='flex  h-5/6  text-[#374772]  gap-24 mx-24 px-11 py-44 object-cove'>
            <div class="w-1/3 pt-24 ">
              <div class='font-Merienda text-5xl'>
                Rethink Summer
              </div>
              <div class='font-Merienda py-5 '>
                Find your cooler getaway.
              </div>
              <Link to="/visaapplication" class='text-[#374772] font-Merienda font-medium bg-transparent border border-[#374772]  px-4 py-2 rounded-full'>
                learn more
              </Link>
            </div>
            <div class='w-2/3 justify-start items-center px-28 flex'>
              <div class=' absolute inset-y-50 left-50  z-50'>
                <img src={lady} alt='img' onClick={() => { topImg(lady); } } class='relative w-64  rounded-[24px]' />
              </div>
              <div class='  z-30 '>
                <img src={mandir} alt='img' onClick={() => { topImg(mandir); } } class='inset-y-50 w-56 left-48 relative rounded-[24px]' />
              </div>
              <div class='  z-10'>
                <img src={TajMahal} alt='img' onClick={() => { topImg(TajMahal); } } class='inset-y-50 w-48 left-32 relative  rounded-[24px]' />
              </div>
            </div>
            <div className='flex absolute justify-center mx-36 bottom-0'>
              <div class='font-Merienda border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
              <div class='font-Merienda border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
              <div class='font-Merienda border-t-2 px-11 text-2xl'>
                Rethink Summer
              </div>
            </div>
          </div>
        
      
      </div>
    </>
  )
}

export default Header;

//  object-cover style={{ backgroundImage: `url(${lady})`,backgroundSize: '1920px 1920px',backgroundRepeat: 'no-repeat',backgroundPosition: 'center', }}

{/* <div class='flex w-full h-full gap-24'>
        <div class="w-1/3 pt-24 ">
          <div class='font-Merienda text-5xl'>
            Rethink Summer
          </div>
          <div class='font-Merienda py-5 '>
            Find your cooler getaway.
          </div>
          <Link to="/visaapplication" class='text-[#374772]  font-Merienda font-medium bg-transparent border border-[#374772]  px-4 py-2 rounded-full'>
              learn more
          </Link>
        </div>
        <div class='w-2/3 justify-start items-center px-24 flex'>
          <div class='w-56 absolute inset-y-50 left-50  z-50'>
            <img src={lady} alt='img' onClick={()=>{topImg(lady)}} class='relative  rounded-[24px]'/>
          </div>
          <div class='w-48  z-30 '>
            <img src={mandir} alt='img' onClick={()=>{topImg(mandir)}} class='inset-y-50 left-48 relative rounded-[24px]'/>
          </div>
          <div class='w-44   z-10'>
            <img src={TajMahal} alt='img' onClick={()=>{topImg(TajMahal)}} class='inset-y-50 left-32 relative  rounded-[24px]'/>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-24'>
          Hello
        </div>
      </div> */}