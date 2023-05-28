import React,{useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import logo from '../../src/assets/logo.jpeg';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import language from '../assets/language.svg';

const Navbar = () => {

    const [dropdownShow, setDropdownShow] = useState(false)
    const handleToggle=() => {
        setDropdownShow(!dropdownShow)
    }
  return (
    <>
        <nav className='text-[#374772] w-full justify-between h-10   flex flex-nowrap bg-[#fffff3] lg:px-11 sm: px-2 py-2 border-b border-b-[#e6ebf4]'>
            <Link className='font-Merienda hover:font-semibold ml-14 text-sm'>
                Contact Us
            </Link>
            <button type='button' onClick={handleToggle} className='inline-flex  mr-10 w-24 justify-center gap-x-1.5 rounded-md bg-[#fffff3] px-3 py-1 text-sm  text-gray-900 hover:bg-[#fffff0]' id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src={language} alt='glob' className='w-4'/>
                <a href="#" class="text-gray-700 font-Merienda hover:font-semibold  block pb-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Eng</a>
                {dropdownShow && 
                <div class="absolute right-18 z-10 border-[#374772] mt-2 w-24 origin-top-right rounded-md bg-[#fffff3] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <a href="#" class="text-gray-700 font-Merienda hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Eng</a>
                        <a href="#" class="text-gray-700 font-Merienda hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Hin</a>
                        <a href="#" class="text-gray-700 font-Merienda hover:font-semibold block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Mar</a>
                        
                    </div>
                </div>}
                
            </button>
        </nav>
        <header className='text-[#374772]  w-full flex justify-between items-center  bg-[#fffff3] lg:px-14 sm: px-8 py-4 border-b border-b-[#e6ebf4]'>
            <div className='flex font-Merienda flex-nowrap align-middle gap-8'>
                <div>
                    <Link >
                        <img src={logo} alt='logo' className='w-24  object-contain'/>
                    </Link>
                </div>
                <Link className='font-Merienda hover:font-semibold'>
                    See & Do
                </Link>
                <Link className='font-Merienda hover:font-semibold'>
                    Plan Your Trip
                </Link>
                <Link className='font-Merienda hover:font-semibold'>
                    Travel Essentials
                </Link>
                <Link className='font-Merienda hover:font-semibold'>
                    India Calender
                </Link>
                <Link className='font-Merienda hover:font-semibold '>
                    Experiences
                </Link>
                <Link className='font-Merienda hover:font-semibold'>
                    India Map
                </Link>
            </div>
            <div className='flex flex-nowrap align-middle gap-4'>
                <Link className='font-inner w-6 pt-2 font-medium'>
                    <img src={search} alt='search'/>
                </Link>
                <Link className='font-inner w-6 pt-2 font-medium'>
                    <img src={profile} alt='profile'/>
                </Link>
                <Link to="/visaapplication" className='text-[#fffff3] font-inner font-Merienda font-medium bg-[#374772] text-white px-4 py-2 rounded-full'>
                    Apply for eVisa
                </Link>
                
            </div>
          </header>
    </>
  )
}

export default Navbar