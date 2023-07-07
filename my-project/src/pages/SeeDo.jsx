import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import seeDobg from "../assets/seeDobg.jpg";
import promobanner from "../assets/promobanner.png";
import activitiesattractions from "../assets/activitiesattractions.jpg";
import indialandscapesone from "../assets/indialandscapesone.jpg";
import Rajasthan from "../assets/Rajasthan.png";

import experiencestours from "../assets/experiencestours.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SeeDo = () => {
  //NAVBAR TRANSPERENT COLOUR
  const [colour, setcolour] = useState(true);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
      setcolour(false);
    } else {
      setcolour(true);
    }
  });

  return (
    <>
      <Navbar transparentMode={colour} textColorMode={colour} />
      <header
        className=" bg-center"
        style={{ backgroundImage: `url(${seeDobg})` }}
      >
        <div className="justify-start text-6xl flex pt-64 px-32 pb-44 text-[#ffff]">
          See & do
        </div>
      </header>
      <div className=" ">
        <div className="flex mx-32 mt-32 text-4xl ">What to do in India</div>
        <div className="mt-8  mx-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl text-left overflow-auto flex h-96 shadow-lg hover:shadow-2xl w-full">
            <div className="w-1/2">
              <img
                src={activitiesattractions}
                alt="img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8  w-1/2 justify-start">
              <div></div>
              <div className="text-2xl ">Adventure & attreactions</div>
              <div className="text-left py-8">
                Discover the untamed wilderness of the Rajasthan, wander the
                bustling lanes of jeddah's oldest souks, and dive among the
                technicolour reefs of the Red Sea.
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-auto flex h-96 shadow-lg hover:shadow-2xl w-full">
            <div className="w-1/2">
              <img
                src={experiencestours}
                alt="img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8  w-1/2 justify-start">
              <div className="text-2xl">Experiences and Tours</div>
              <div className="text-left py-8">
                Choose one of our unique tour packages and discover the
                brrathtaking regions of India.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-24  bg-[#66005d] hover:bg-[#66005d] duration-300 overflow-hidden relative rounded-2xl flex justify-between">
          <div className="z-10  w-[85%]">
            <div className="w-full  justify-between  items-center text-justify  flex m-24 ">
              <div className="text-[#fffff3]">
                <div className=" ">For Unique Travel Experience</div>
                <div className=" text-2xl">Explore our Exclusive Offers</div>
              </div>
              <div className="">
                <Link
                  to="/visaapplication"
                  className="text-[#66005d] bg-[#fff]  font-medium  text-white px-4 py-2 rounded-full"
                >
                  Check Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full absolute left-[50%]">
            <img
              src={promobanner}
              alt="img"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>

      <div className="mx-32 ">
        <div className="flex text-4xl pb-10 ">
          Experience India's culinary scene
        </div>
        <div className="grid grid-cols-1 rounded-2xl shadow-lg hover:shadow-2xl">
          <div className="lg:flex">
            <video className="lg:w-1/2">
              <source src="" alt="Vdeio" />
            </video>
            <div className="lg:w-1/2 h-full flex flex-col justify-start align-middle text-left px-28 py-20">
              <div className="text-3xl pb-8">Food & drinks</div>
              <div>
                Saudi Arabia’s culinary scene is diverse, delicious and booming.
                From delectable gourmet cuisine to fragrant Arabic dishes,
                there’s something to suit every appetite and budget.
              </div>
              <div className=" py-8">
                <Link
                  to="/visaapplication"
                  className="text-[#fffff3] bg-[#66005d]  font-medium  text-white px-4 py-2 rounded-full"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-4xl mt-28">Unexpected India</div>
        <div className="grid grid-cols-4 gap-8 pt-10 pb-32 text-[#374772]">
          <div className="rounded-2xl overflow-auto flex flex-col  shadow-lg hover:shadow-2xl ">
            <div>
              <img src={Rajasthan} alt="Rajasthan" className="rounded-lg" />
            </div>
            <div className="flex flex-col justify-between h-full mx-8 gap-8">
              <div className=" text-justify ">
                <div className=" text-2xl py-3 text-opacity-10 ">
                  India Photography
                </div>
                <div className=" line-clamp-3 text-start">
                  Though Parth Sankpal is an engineer by day, his global experiences inspiring his breathtaking India Photography.
                </div>
              </div>

              <div className="flex border-t  py-2 text-justify justify-between ">
                <span>Explore</span>
                <span>
                  <BsChevronRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-2xl overflow-auto flex h-full shadow-lg hover:shadow-2xl w-full">
              <div className="lg:w-1/2">
                <img
                  src={indialandscapesone}
                  alt="landscape1"
                  className="object-cover w-full rounded-lg h-full"
                />
              </div>
              <div className="px-8 pt-8  w-1/2 flex flex-col text-left justify-between">
                <div >
                  <div className="text-3xl">India's cities and landscapes</div>
                  <div className="text-left py-8">
                    Using his unique experiences as a guide , artist Picaso showcase India cities and landsacapes that highlight the beauty and wounder of the kingdom. 
                  </div>
                </div>
                <div className="flex align-bottom border-t py-2 text-justify justify-between align-middles">
                  <span>Explore</span>
                  <span>
                    <BsChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-auto flex flex-col  shadow-lg hover:shadow-2xl ">
            <div>
              <img src='https://scth.scene7.com/is/image/scth/10instagram-worthysunsetspotsinsaudi_hero:crop-1920x1080?defaultImage=10instagram-worthysunsetspotsinsaudi_hero&wid=1160&hei=652' alt="Rajasthan" className="rounded-lg" />
            </div>
            <div className="flex flex-col justify-between h-full mx-8 gap-8">
              <div className=" text-justify align-top">
                <div className=" text-2xl py-3 text-opacity-10 ">
                  10 beautiful spots in India
                </div>
                <div className=" line-clamp-3 text-start">
                  Though Parth Sankpal is an engineer by day, his global experiences inspiring his breathtaking India Photography.
                </div>
              </div>

              <div className="flex  border-t py-2 text-justify justify-between align-middles">
                <span>Explore</span>
                <span>
                  <BsChevronRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SeeDo;
