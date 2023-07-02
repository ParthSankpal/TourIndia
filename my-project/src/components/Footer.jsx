import React,{useState} from "react";
import logo from "../../src/assets/logo.svg";
import language from '../assets/language.svg';
import Appstore from "../assets/appstore.png";
import Playstore from "../assets/googleplay.png";
import Authority from "../assets/Authority.jpeg";
import { IoLogoLinkedin,IoLogoTwitter,IoLogoWhatsapp,IoLogoYoutube,IoLogoInstagram,IoIosArrowDropupCircle } from "react-icons/io";


const Footer = () => {
  const [dropdownShow, setDropdownShow] = useState(false)
    const handleToggle=() => {
        setDropdownShow(!dropdownShow)
    }
  return (
    <>
    <section className="  pb-20">
      <div className="mx-24 text-[#374772]  justify-between flex  ">
        <div className="pr-9 w-80 border-r">
          <img src={logo} alt="logo" className="w-36 bg-[#374772]" />
          <div className="text-justify  flex flex-col  text-xs ml-8 mt-4">
            <p>Copyright © 2023 Inaian Tourism Authority.</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="text-justify w-80 pl-5 border-r ">
          <header className=" text-lg font-semibold pb-6">
            Seasons & Events
          </header>
          <div className="gap-3 flex flex-col">
            <div className="hover:translate-x-4 duration-700">Boulevard Riyadh City </div>
            <div className="hover:translate-x-4 duration-700">Riyadh Season</div>
            <div className="hover:translate-x-4 duration-700">Jeddah Yacht Club</div>
          </div>
        </div>
        <div className="text-justify w-80 pl-5 border-r ">

          <header className=" text-lg font-semibold pb-6">
            Discover Saudi
          </header>
          <div className="gap-3 flex flex-col">
            <div className="hover:translate-x-4 duration-700">See & Do </div>
            <div className="hover:translate-x-4 duration-700">Plan sYour Trip</div>
            <div className="hover:translate-x-4 duration-700">Travel Essentials</div>
          </div>
        </div>
        <div className="text-justify w-80 pl-5  ">
          <header className=" text-lg font-semibold pb-6">
            Useful Information
          </header>
          <div className="gap-3 flex flex-col">
            <div className="hover:translate-x-4 duration-700">About Saudi</div>
            <div className="hover:translate-x-4 duration-700">Safty Travel Tips</div>
            <div className="hover:translate-x-4 duration-700">Useful Contacts</div>
            <div className="hover:translate-x-4 duration-700">Travel Guidelines</div>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#374772]">
    <div className="mx-24 text-[#fffff3] pt-12 pb-10 text-justify justify-between flex  ">
        <div className="pr-9 w-80 border-r">
        <p className="text-[#ffffff6a]">Powered By</p>
          <img src={Authority} alt="Associ. logo" className="w-44" />
          
        </div>
        <div className="text-justify w-80 pl-5 border-r ">
          <header className=" text-lg s font-semibold pb-6">
            Preference
          </header>
          <button type='button' onClick={handleToggle} className='inline-flex  mr-10 w-24 justify-center gap-x-1.5 rounded-md bg-[#374772] px-3 py-1 text-sm  text-gray-900 ' id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src={language} alt='glob' className='w-4 '/>
                <a  class="text-gray-700  hover:font-semibold  block pb-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Eng</a>
                {dropdownShow && 
                <div class="absolute right-18 z-10 border-[#374772] mt-2 w-24 origin-top-right rounded-md bg-[#374772] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <a class="text-gray-700  hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Eng</a>
                        <a class="text-gray-700  hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Hin</a>
                        <a class="text-gray-700  hover:font-semibold block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Mar</a>
                        
                    </div>
                </div>}
                
            </button>
        </div>
        <div className="text-justify w-80 pl-5 border-r ">

          <header className=" text-lg font-semibold pb-6">
          Call center
          </header>
          <div className="flex flex-col">
            <a>Local Call Center </a>
            <a>International Call Center</a>
          </div>
        </div>
        <div className="text-justify w-80 pl-5  ">
          <header className=" text-lg font-semibold pb-6">
            Download our mobile app
          </header>
          <div className="gap-3 flex ">
            <a href="APPSTORE LINK"><img src={Appstore} alt="App Store"/></a>
            <a href="GOOGLEPLAY LINK"><img src={Playstore} alt="App Store"/></a>
          </div>
        </div>
      </div>
      <div className="mx-24 border-t  text-sm text-[#fffff3] py-8  text-justify justify-between flex">
        <div className="flex gap-5 items-center">
          <a>Contact us</a>
          <a>Privacy Policy</a>
          <a>Cookies</a>
        </div>
        <div className="flex gap-5 items-center ">
        <div>
          connect with us
        </div>
        <button className=""><IoLogoLinkedin/></button>
        <button><IoLogoTwitter/></button>
        <button><IoLogoWhatsapp/></button>
        <button><IoLogoYoutube/></button>
        <button><IoLogoInstagram/></button>
        <button className="flex items-center gap-2 border-l p-2">Back to top<IoIosArrowDropupCircle /></button>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
