import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "../../src/assets/logo.svg";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import language from "../assets/language.svg";
import culture from "../assets/culture.png";
import adventureimg from "../assets/adventure.png";
import familyAction from "../assets/familyActivity.png";
import lifestyle from "../assets/lifestyle.png";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import {
  BsChevronRight,
  BsDash,
  BsFillCloudSunFill,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
  BsBrightnessHigh,
  BsThermometerSun,
  BsThermometerSnow,
  BsTelephone,
  BsPlus,
} from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdDialpad } from "react-icons/md";


const Navbar = ({ transparentMode,textColorMode, logoColourMode}) => {
  const [cityDrop, setCityDrop] = useState(false);
  const cityDropToggle = () => {
    setCityDrop(!cityDrop);
  };

  // for on hover of explore of see n do
  const [explorehover, setExplorehover] = useState(true);
  const explorehover1 = () => {
    setExplorehover(true), setAdventure(false), setFoodHover(false);
  };

  // for on hover of Adventure of see n do
  const [adventure, setAdventure] = useState(false);
  const adventure1 = () => {
    setAdventure(true), setExplorehover(false), setFoodHover(false);
  };

  //for on hover of Food and drinks of see n do
  const [foodHover, setFoodHover] = useState(false);
  const foodHover1 = () => {
    setFoodHover(true), setAdventure(false), setExplorehover(false);
  };


  const [dropdownShow, setDropdownShow] = useState(false);
  const [seeDODrpdown, setSeeDODrpdown] = useState(false);

  //Plan Your trip Toggle
  const [planTripToggle, setPlanTripToggle] = useState(false);
  const planTripToggle1 = () => {
    setPlanTripToggle(!planTripToggle),
      setSeeDODrpdown(false),
      setEssentialToggle(false);
  };

  //Travel Essential Toggle
  const [essentialToggle, setEssentialToggle] = useState(false);
  const essentialToggle1 = () => {
    setEssentialToggle(!essentialToggle),
      setPlanTripToggle(false),
      setSeeDODrpdown(false);
  };

  const seeDoToggle = () => {
    setSeeDODrpdown(!seeDODrpdown),
      setPlanTripToggle(false),
      setEssentialToggle(false);
  };
  const handleToggle = () => {
    setDropdownShow(!dropdownShow);
  };


  

  {/* NVABAR BACKGROUND  */}
  const navbarClassName = transparentMode ? 'bg-transparent transition-colors duration-300': 'bg-[#fff] transition-colors duration-500' ;
  
  // NAVBAR TEXT COLOUR
  const navbarTextColour = textColorMode? 'text-[#fffff3]':'text-[#374772]';

  //LOGO COLOUR
  const logoColour = logoColourMode? 'bg-[#374772]':'bg-[#78006e]' ;

  return (
    <>
      

      

      <div className={`w-full z-50 fixed ${navbarClassName}`} >
      <nav className=" w-full justify-between h-12 items-center flex lg:px-11 sm: px-2 py-2 border-b border-b-[#e6ebf4]" >
        <Link className={`hover:font-semibold ml-14 text-sm ${navbarTextColour}`}>Contact Us</Link>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex  mr-10 w-24 justify-center gap-x-1.5 rounded-md  px-3 py-1 text-sm  text-gray-900 hover:bg-[#fffff0]"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img src={language} alt="glob" className="w-4" />
          <a
            href="#"
            className={`${navbarTextColour} text-gray-700  hover:font-semibold  block pb-2 text-sm`}
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            Eng
          </a>
          {dropdownShow && (
            <div
              className="absolute right-18 z-10 border-[#374772] mt-2 w-24 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700  hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Eng
                </a>
                <a
                  href="#"
                  className="text-gray-700  hover:font-semibold border-[#374772] border-b-2 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-2"
                  id="menu-item-1"
                >
                  Hin
                </a>
                <a
                  href="#"
                  className="text-gray-700  hover:font-semibold block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-3"
                  id="menu-item-2"
                >
                  Mar
                </a>
              </div>
            </div>
          )}
        </button>
      </nav>
      <header className=" w-full flex justify-between items-center  top-7  h-24 lg:px-32  sm: px-8 py-4 border-b border-b-[#e6ebf4]">
        <div className="flex  flex-nowrap align-middle gap-8">
          <div>
            <Link to='/'>
              <img
                src={logo}
                alt="logo"
                className={`w-24 ${logoColour} bg-cover object-contain`}
              />
            </Link>
          </div>
          <button
            onClick={seeDoToggle}
            className={`hover:text-[#37477278] ${navbarTextColour} relative` }
          >
            See & Do
            {seeDODrpdown ? (
              <BsFillCaretUpFill className=" absolute  items-center left-7 -bottom-7 text-xl" />
            ) : null}
          </button>
          <Link className={`hover:text-[#37477278] ${navbarTextColour}`} onClick={planTripToggle1}>
            Plan Your Trip
          </Link>
          <Link className={`hover:text-[#37477278] ${navbarTextColour}`} onClick={essentialToggle1}>
            Travel Essentials
          </Link>
          <Link className={`hover:text-[#37477278] ${navbarTextColour}`}>India Calender</Link>
          <Link className={`hover:text-[#37477278] ${navbarTextColour}`}>Experiences</Link>
          <Link className={`hover:text-[#37477278] ${navbarTextColour}`}>India Map</Link>
        </div>
        <div className="flex flex-nowrap align-middle gap-4">
          <Link className="font-inner w-6 pt-2 font-medium">
            <img src={search} alt="search" />
          </Link>
          <Link className="font-inner w-6 pt-2 font-medium">
            <img src={profile} alt="profile" />
          </Link>
          <Link
            to="/visaapplication"
            className={`text-[#fffff3] font-inner ${logoColour}  font-medium  text-white px-4 py-2 rounded-full`}
          >
            Apply for eVisa
          </Link>
        </div>
      </header>
      <div className="">
        {seeDODrpdown && (
          <div
            className="absolute w-full  left-0 z-50  shadow-lg "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="flex justify-between " role="none">
              <div className="bg-[#43495b] text-md font-semibold text-[#fffff3] py-12  w-5/12 ">
                <div className="flex flex-col text-justify   mx-52 gap-7">
                  <div>
                    <div className="flex h-12 items-center gap-2 hover:translate-x-5 duration-500">
                      <Link
                        to="/see-do"
                        onMouseEnter={explorehover1}
                        onMouseLeave={explorehover1}
                      >
                        Explore All
                      </Link>
                    </div>
                  </div>

                  <div className="flex h-12 items-center gap-2 hover:translate-x-5 duration-500">
                    <Link to="/sdDestination">Destinations</Link>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button onMouseEnter={adventure1} onMouseLeave={adventure1}>
                      Activities & Attractions
                    </button>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button onMouseEnter={foodHover1} onMouseOut={foodHover1}>
                      Food & Drink
                    </button>{" "}
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button
                      onMouseEnter={explorehover1}
                      onMouseLeave={explorehover1}
                    >
                      Experiences & Tours
                    </button>
                  </div>
                </div>
              </div>
              {/* SEE AND DO DROPDOWN */}
              {explorehover && (
                <div className="py-10 transi bg-[#eee] w-7/12">
                  <div className="grid grid-cols-2 gap-8  text-justify px-28 grid-rows-2">
                    <div className="border border-[#6362624b] rounded-md">
                      <div className="pt-7 pl-9 gap-3 align-middle pb-4 flex flex-col">
                        <div className="text-xs text-[#fff] font-semibold">
                          Show time
                        </div>
                        <div className="text-[#646464] font-bold  ">
                          Visit Isha Foundation
                        </div>
                      </div>
                      <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] justify-between flex  items-center  ">
                        <div className="  text-md text-[#fff]">
                          Learn More
                        </div>
                        <span>
                          <BsChevronRight className=" text-md" />
                        </span>
                      </div>
                    </div>
                    <div className="border border-[#6362624b] rounded-md">
                      <div className="pt-7 pl-9 gap-3 align-middle pb-4 flex flex-col">
                        <div className="text-xs text-[#fff] font-semibold">
                          Explore{" "}
                        </div>
                        <div className="text-[#646464] font-bold mr-9   truncate">
                          Dive into Angels deep blue lake with swin skills
                        </div>
                      </div>
                      <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] justify-between flex  items-center  ">
                        <div className="  text-md text-[#fff]">
                          Learn More
                        </div>
                        <span>
                          <BsChevronRight className=" text-md" />
                        </span>
                      </div>
                    </div>
                    <div className=" col-span-2 border border-[#6362624b] rounded-md">
                      <div className="text-xs text-[#fff] font-semibold flex flex-row gap-2 py-4 bg-[#f7f7f7] px-10">
                        <BsFillCloudSunFill />
                        Current weather
                      </div>
                      <div className=" px-10 h-28 flex items-center">
                        <div className="">
                          <div className="text-md text-[#646464]">
                            <div className="flex">
                              <button
                                onClick={cityDropToggle}
                                className="flex gap-28 border-b pb-1"
                              >
                                <span>Mumbai</span>
                                {cityDrop ? (
                                  <BsFillCaretDownFill className="origin-center rotate-180 duration-500 " />
                                ) : (
                                  <BsFillCaretDownFill className="origin-center rotate-0 duration-500 " />
                                )}
                              </button>
                            </div>
                            {cityDrop && (
                              <ul className="pt-2 absolute right-auto w-48 h-24 scrollbar-thin scrollbar-thumb-[#69738e] z-10 text-xs overflow-y-scroll bg-[#eee] shadow-lg">
                                <li className="px-3 py-1 border-b hover:bg-[#6464645e] duration-500 hover:border-b-[#282727]">
                                  <button>Kedarnath</button>
                                </li>
                                <li className="px-3 py-1 border-b hover:bg-[#6464645e] duration-500 hover:border-b-[#282727]">
                                  <button>Jagganath</button>
                                </li>
                                <li className="px-3 py-1 border-b hover:bg-[#6464645e] duration-500 hover:border-b-[#282727]">
                                  <button>Rameshvaram</button>
                                </li>
                                <li className="px-3 py-1 border-b hover:bg-[#6464645e] duration-500 hover:border-b-[#282727]">
                                  <button>Somanath</button>
                                </li>
                                <li className="px-3 py-1 hover:bg-[#6464645e] duration-500 hover:border-b-[#282727]">
                                  <button>Rameshwaram</button>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="flex pl-16  text-3xl gap-6 items-center">
                          <div className="bg-[#bdb8b85e] rounded-full flex flex-col items-center py-5  px-7 ">
                            <BsBrightnessHigh />
                            <div className=" text-xs">Clear</div>
                          </div>
                          <div>34C</div>
                        </div>
                        <div className="flex flex-col border-l text-[#43495b] items-end ml-8 w-full">
                          <div className="flex  gap-2 items-center text-sm">
                            <BsThermometerSun /> 42C
                          </div>
                          <div className="flex  gap-2 items-center text-sm">
                            <BsThermometerSnow /> 24C
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PLAN YOUR TRIP DROPDOWN */}
              {adventure && (
                <div className="py-10 bg-[#eee] w-7/12 px-28">
                  <div className=" flex border-b border-b-[#353535b7] justify-between">
                    <div className=" items-center py-4 text-lg text-[#fff]">
                      Browse by categories
                    </div>
                    <span className="py-4">
                      <button className="flex gap-2 items-center text-md text-[#43495b] hover:translate-x-1 duration-500">
                        View all <BsChevronRight className="  text-xs" />
                      </button>
                    </span>
                  </div>
                  <div className="w-full h-full mt-5">
                    <div className="flex gap-5 pb-5 ">
                      <div className=" w-1/2">
                        <div className="absolute z-10  m-2 p-2  text-[#646464] bg-[#eeeeee70] rounded-full">
                          <HiUserGroup />
                        </div>
                        <div className="absolute mt-24 ml-4 text-[#f7f2eb] font-bold">
                          Adventure Activities
                        </div>
                        <img
                          src={adventureimg}
                          alt="adventure"
                          className="rounded-lg shadow-inner"
                        />
                      </div>
                      <div className="w-1/2">
                        <div className="absolute z-10  m-2 p-2 text-[#646464] bg-[#eeeeee70] rounded-full">
                          <HiUserGroup />
                        </div>
                        <div className="absolute mt-24 ml-4 text-[#f7f2eb] font-bold">
                          Family Activities
                        </div>
                        <img
                          src={familyAction}
                          alt="family"
                          className="rounded-lg shadow-inner"
                        />
                        <div></div>
                      </div>
                    </div>
                    <div className="flex gap-5  h-32">
                      <div className="w-1/2">
                        <div className="absolute z-10  m-2 p-2 text-[#646464] bg-[#eeeeee70] rounded-full">
                          <HiUserGroup />
                        </div>
                        <div className="absolute mt-24 ml-4 text-[#f7f2eb] font-bold">
                          Lifestyle
                        </div>
                        <img
                          src={lifestyle}
                          alt="lifestyle"
                          className="rounded-lg shadow-inner h-full"
                        />
                        <div></div>
                      </div>
                      <div className="w-1/2 ">
                        <div className="absolute z-10  m-2 p-2 text-[#646464] bg-[#eeeeee70] rounded-full">
                          <HiUserGroup />
                        </div>
                        <div className="absolute mt-24 ml-4 text-[#f7f2eb] font-bold">
                          Culture
                        </div>
                        <img
                          src={culture}
                          alt="culture"
                          className="rounded-lg shadow-inner h-full w-full "
                        />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {foodHover && (
                <div className="py-10 bg-[#eee] w-7/12 px-32">
                  <div className=" flex border-b border-b-[#353535b7] justify-between">
                    <div className=" items-center py-4 text-lg text-[#fff]">
                      Must-try eats
                    </div>
                    <span className="py-4">
                      <button className="flex gap-2 items-center text-md text-[#43495b] hover:translate-x-1 duration-500">
                        View all <BsChevronRight className="  text-xs" />
                      </button>
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-9 font-semibold mt-6 text-lg  text-[#646464]">
                    <button className=" shadow-lg rounded-md text-start">
                      <div>
                        <img src={food1} alt="Food1" className="rounded-md" />
                      </div>
                      <div className="mx-4 my-8 ">
                        <header className="line-clamp-2">
                          3 Indian fruit juices that hit the mind blowing
                          experience
                        </header>
                      </div>
                      <div className="flex mx-4 py-3 gap-2 items-center border-t text-sm">
                        Learn more
                        <BsChevronRight />
                      </div>
                    </button>
                    <button className=" shadow-lg rounded-md text-start">
                      <div>
                        <img src={food2} alt="Food1" className="rounded-md" />
                      </div>
                      <div className="mx-4 my-8 ">
                        <header className=" line-clamp-2">
                          Food in India: breakfast, lunch, dinner
                        </header>
                      </div>
                      <div className="flex mx-4 py-3 gap-2 items-center border-t text-sm">
                        Learn more
                        <BsChevronRight />
                      </div>
                    </button>
                    <button className=" shadow-lg rounded-md text-start">
                      <div>
                        <img src={food1} alt="Food1" className="rounded-md" />
                      </div>
                      <div className="mx-4 my-8 ">
                        <header className=" line-clamp-2">
                          3 Indian fruit juices that hit the mind blowing
                          experience
                        </header>
                      </div>
                      <div className="flex mx-4 py-3 gap-2 items-center border-t text-sm">
                        Learn more
                        <BsChevronRight />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {planTripToggle && (
          <div
            className="absolute w-full  left-0 z-50  shadow-lg "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="flex justify-between " role="none">
              <div className="bg-[#43495b] text-md font-semibold text-[#fffff3] py-12  w-5/12 ">
                <div className="flex flex-col text-justify   mx-52 gap-7">
                  <div>
                    <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                      <button>Explore All</button>{" "}
                    </div>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button>Trip Planner</button>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button>Transportation</button>{" "}
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-500">
                    <button>Road Trip Guide</button>
                  </div>
                </div>
              </div>

              <div className="py-10 transi bg-[#eee] w-7/12">
                <div className="grid grid-cols-2 gap-8  text-justify px-28 grid-rows-2">
                  <div className="border border-[#6362624b] rounded-md">
                    <div className="pt-7 pl-9 gap-3 align-middle pb-4 flex flex-col">
                      <div className="text-xs text-[#fff] font-semibold">
                        Island ruins
                      </div>
                      <div className="text-[#646464] font-bold  ">
                        Discovers Maldives
                      </div>
                    </div>
                    <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] gap-4 flex  items-center  ">
                      <div className="  text-md text-[#fff]">Learn More</div>
                      <span>
                        <BsChevronRight className=" text-md" />
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#6362624b] rounded-md">
                    <div className="pt-7 pl-9 gap-3 align-middle pb-4 flex flex-col">
                      <div className="text-xs text-[#fff] font-semibold">
                        Cave adventure{" "}
                      </div>
                      <div className="text-[#646464] font-bold mr-9   truncate">
                        Scale Ajintha Verul
                      </div>
                    </div>
                    <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] justify-between flex  items-center  ">
                      <div className="  text-md text-[#fff]">Learn More</div>
                      <span>
                        <BsChevronRight className=" text-md" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {essentialToggle && (
          <div
            className="absolute w-full  left-0 z-50  shadow-lg "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="flex justify-between " role="none">
              <div className="bg-[#43495b] text-md font-semibold text-[#fffff3] py-12  w-5/12 ">
                <div className="flex flex-col text-justify   mx-52 gap-7">
                  <div>
                    <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-1500">
                      <button>Explore All</button>{" "}
                    </div>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-1500">
                    Destinations
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-1500">
                    <button>Activities & Attractions</button>
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-1500">
                    <button>Food & Drink</button>{" "}
                  </div>
                  <div className="flex h-12  items-center gap-2 hover:translate-x-5  duration-1500">
                    <button>Experiences & Tours</button>
                  </div>
                </div>
              </div>

              <div className="py-10 transi bg-[#eee] w-7/12">
                <div className="grid grid-cols-2 gap-8  text-justify px-28 grid-rows-2">
                  <div className="border border-[#6362624b] rounded-md">
                    <div className="pt-7 px-9 gap-3 align-middle pb-4 flex flex-col">
                      <div className="text-xs text-[#fff] font-semibold">
                        Words to know before you go
                      </div>
                      <div className="text-[#646464] font-bold  truncate">
                        Indian 101 common phrases to be known
                      </div>
                    </div>
                    <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] justify-between flex  items-center  ">
                      <div className="  text-md text-[#fff]">Learn More</div>
                      <span>
                        <BsChevronRight className=" text-md" />
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#6362624b] rounded-md">
                    <div className="pt-7 pl-9 gap-3 align-middle pb-4 flex flex-col">
                      <div className="text-xs text-[#fff] font-semibold truncate">
                        What to expect, how to pack، when to go{" "}
                      </div>
                      <div className="text-[#646464] font-bold mr-9   truncate">
                        India weather: What you need to know
                      </div>
                    </div>
                    <div className="pt-3 pb-4 mx-9 text-[#fff] border-t border-[#6362624b] justify-between flex  items-center  ">
                      <div className="  text-md text-[#fff]">Learn More</div>
                      <span>
                        <BsChevronRight className=" text-md" />
                      </span>
                    </div>
                  </div>
                  <div className=" col-span-2 border border-[#6362624b] rounded-md">
                    <div className="text-xs text-[#fff] font-semibold flex flex-row gap-2 py-4 bg-[#f7f7f7] px-10">
                      <BsTelephone className="text-sm" />
                      Important numbers
                    </div>
                    <div className="grid gap-8 mx-7 my-5 grid-cols-3">
                      <div className="bg-[#fff] p-4 flex gap-4 items-center rounded-lg">
                        <div className="bg-[#eee] rounded-full w-10 h-10 items-center justify-center flex">
                          <MdDialpad className="text-md" />
                        </div>
                        <div className="">
                          966<p className="text-xs ">Dial Code</p>
                        </div>
                      </div>
                      <div className="bg-[#fff] p-4 flex gap-4 items-center rounded-lg">
                        <div className="bg-[#eee] rounded-full w-10 h-10 items-center justify-center flex">
                          <BsPlus className="text-md" />
                        </div>
                        <div className="">
                          977<p className="text-xs ">Ambulance</p>
                        </div>
                      </div>
                      <div className="bg-[#fff] p-4 flex gap-4 items-center rounded-lg">
                        <div className="bg-[#eee] rounded-full w-10 h-10 items-center justify-center flex">
                          <BsTelephone className="text-md" />
                        </div>
                        <div className="">
                          930
                          <p className="text-xs w-16 ">Tourism call center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Navbar;
