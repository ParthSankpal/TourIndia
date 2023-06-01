import React from 'react';
import Bartender from '../assets/bartender.jpg';
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

import { Link } from 'react-router-dom';


const Features = () => {
  return (<>

        <section className='text-justify bg-cover bg-center font-Merienda pt-14 pb-14 text-[#fffff3]' style={{ backgroundImage: `url(${Bartender})`}}>
            <div className=''>
                <header className='text-4xl mx-36 pb-8 border-b-2'>
                    Authentically India
                </header>
                <div className=' '>
                    <div className=' mt-42 ml-36'>
                        <div className=' cursor-pointer'>
                            <div className='flex items-center text-sm font-bold'>
                                <Link to="" >
                                    <AiOutlineHeart />
                                </Link>
                                <div className='px-4'>
                                    Save to my favorites
                                </div>
                            </div>
                        </div>
                        <div className='text-6xl my-9'>
                            Eat and Drink
                        </div>
                        <div className='w-1/3' >
                            From Kashmir to Kanyakumari authentic coffee, you will taste something that is not found anywhere in the world.
                        </div>
                        
                       
                    
                            <div className='pt-8  w-36'>
                                <Link to="/visaapplication" className='text-[#fffff3] items-center w-36  justify-between flex font-inner font-Merienda font-medium bg-[#374772] text-white px-4 py-2 rounded-full'>
                                    Learn More
                                    <BsChevronRight/>
                                </Link>
                            </div>
                            
                    
                    </div>
                    
                </div>
                <div className=' relative left-100 overflow-x-scroll flex pr-3  '>
                                <div className='h-44'>
                                    <div>
                                        <BsChevronRight/>
                                    </div>
                                    <div>
                                        <BsChevronLeft/>
                                    </div>
                                </div>
                                <ul className='flex flex-row items-end fixed bottom-0 left-[calc(100%-19.375vw)] w-85vw overflow-hidden z-50 '>
                                    <li><img src={Bartender} className=' w-80 inline-block p-2 cursor-pointer bg-cover '/></li>                                    
                                    <li><img src={Bartender} className=' w-80 inline-block p-2 cursor-pointer bg-cover '/></li>                                    
                                                                     


                                </ul>
                            </div>
            </div>
            <div className=' flex ml-56 over  '>
                        
                        
                </div>
        </section>
        
  </>
    )
}

export default Features;