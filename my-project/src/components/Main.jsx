import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Rajasthan from '../assets/Rajasthan.png';
import Kerla from '../assets/Kerla.png';
import TajMahal2 from '../assets/TajMahal2.png';
import riversunset from '../assets/riversunset.png';
import Mountains from '../assets/Mountains.png';
import pattern from '../assets/pattern.png';

import { BsChevronRight } from "react-icons/bs";

const Main = () => {

    const cardData=[
        {id:1, image:[Rajasthan],location:"rajasthan", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
        {id:1, image:[Kerla],location:"Kerla", discription:" Kerala: God's Own Country", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
        {id:1, image:[TajMahal2],location:"Delhi", discription:"Taj Mahal: A love story set in stone.", cost:"INR 15000" },
        {id:1, image:[riversunset],location:"Andhra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
        {id:1, image:[Mountains],location:"Maharahtra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
        {id:1, image:[Mountains],location:"Maharahtra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"}

    ]
  return (
    <>
    <section className=''>
    <header>
        <div className='mx-28 my-16 text-[#374772] justify-between flex'>
            <h2 className='font-El_Messiri text-4xl'>
                What to Experience
            </h2>
            <Link to="/visaapplication" class='text-[#374772] font-Poppins font-medium bg-transparent border border-[#374772]  px-4 py-2 rounded-full'>
                View more
            </Link>
        </div>
    </header>
    <div className='mx-24 '>
        <div className='grid grid-cols-1 gap-14 lg:grid-cols-4'>
            
                {cardData.map((cardData)=>(
                    <div key={cardData.id} className='rounded-2xl overflow-auto flex flex-col h-96 shadow-lg hover:shadow-2xl '>
                        <div>
                            <img src={cardData.image} alt='Rajasthan' className='rounded-lg'/>
                        </div>
                        <div >
                            <div className='mt-5 mx-8 text-justify  '>
                                <div className='font-Poppins text-[#68696c84] text-xs pb-2 text-opacity-10 '>
                                    {cardData.location}
                                </div>
                                <div className='text-[#374772] text-md h-11 font-bold font-Poppins'>
                                    {cardData.discription}
                                </div>
                                <div className=' text-[#374772bd] text-sm pt-4 font-Poppins '>
                                    Starting from
                                </div>
                            </div>
                            <div className='my-2 ml-8  flex text-justify'>
                                <div className='w-2/5 text-[#374772] text-sm '>
                                    {cardData.cost}
                                </div>
                                {cardData.mrp? (
                                    <span className='line-through text-[#3747724c] text-sm '>
                                        {cardData.mrp}
                                    </span>
                                ): null}
                                {cardData.discount ? (
                                    <span className='text-white text-center text-xs w-8 h-4 text-[#ffffff] rounded-md bg-regal-blue ml-2'>
                                        {cardData.discount}
                                    </span>
                                ):null}
                            </div>
                            <div className='text-[#374772] flex mt-4 border-t pt-3 mx-8 text-justify justify-between'>
                                <span >Book Now</span>
                                <span ><BsChevronRight/></span>
                            </div>
                        </div>
                    </div>
                ))}
            
            
            
        </div>
    </div>
        <section className='m-24 h-56 bg-[#046a76] rounded-2xl flex'>
            <div className='w-24  '>
                <img src={pattern} className='h-full rounded-l-2xl' alt='apttern' />
            </div>
            <div className='w-full  justify-between  items-center text-justify  flex m-16 '>
                <div className='text-[#fffff3]'>
                    <div className='font-Poppins '>
                        For Unique Travel Experience
                    </div>
                    <div className='font-Poppins text-2xl'>
                        Explore our Exclusive Offers
                    </div>
                </div>
                <div className=''>
                    <Link to="/visaapplication" className='text-[#046a76] font-inner font-Poppins font-medium bg-[#fffff3] text-white px-4 py-2 rounded-full'>
                        Check Now
                    </Link>
                </div>
            </div>
        </section>

    </section>
    </>
  )
}

export default Main


//  <li className=''>
//                 <div className='rounded-2xl h-96 shadow-lg hover:shadow-2xl '>
//                     <div>
//                         <img src={Rajasthan} alt='Rajasthan' className='rounded-lg'/>
//                     </div>
//                     <div >
//                         <div className='mt-5 mx-8 text-justify  '>
//                             <div className='font-Poppins text-[#68696c84] text-xs pb-2 text-opacity-10 '>
//                                 Rajasthan
//                             </div>
//                             <div className='text-[#374772] text-md font-bold font-Poppins'>
//                                 Rajasthan VIP Tour: Desert Safari & Day Trip
//                             </div>
//                             <div className=' text-[#374772bd] text-sm pt-4 font-Poppins '>
//                                 Starting from
//                             </div>
//                         </div>
//                         <div className='my-2 ml-8  flex text-justify'>
//                             <div className='w-2/5 text-[#374772] text-sm '>
//                                 INR 15000
//                             </div>
//                             <span className='line-through text-[#374772] text-sm '>
//                                 INR 20000
//                             </span>
//                             <span className='text-white text-center text-xs w-8 h-4 text-[#ffffff] rounded-md bg-regal-blue ml-2'>
//                                 25% sale
//                             </span>
//                         </div>
//                         <div className='text-[#374772] flex mt-4 border-t pt-3 mx-8 text-justify justify-between'>
//                             <span >Book Now</span>
//                             <span ><BsChevronRight/></span>
//                         </div>
//                     </div>
//                 </div>
//             </li> 