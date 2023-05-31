import React from 'react';
import Bartender from '../assets/bartender.jpg';
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

import { Link } from 'react-router-dom';


const Features = () => {
  return (
        <section className='text-justify bg-cover bg-center font-Merienda pt-14 pb-14 text-[#fffff3]' style={{ backgroundImage: `url(${Bartender})`}}>
            <header className='text-4xl mx-36 pb-8 border-b-2'>
                Authentically India
            </header>
            <div className='flex'>
                <div className='mt-16 mx-36'>
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
                    <div className='w-2/3' >
                        From Kashmir to Kanyakumari authentic coffee, you will taste something that is not found anywhere in the world.
                    </div>
                    <div className='w-36 pt-16 '>
                        <Link to="/visaapplication" className='text-[#fffff3] items-center justify-between flex font-inner font-Merienda font-medium bg-[#374772] text-white px-4 py-2 rounded-full'>
                            Learn More
                            <BsChevronRight/>
                        </Link>
                    </div>
                </div>
                <div className='flex w-3/4'>
                    <div className=''>
                        <div>
                            <BsChevronRight/>
                        </div>
                        <div>
                            <BsChevronLeft/>
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-row  overflow-y-auto'>
                            <li><img src={Bartender}/></li>
                            <li><img src={Bartender}/></li>
                            <li><img src={Bartender}/></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;