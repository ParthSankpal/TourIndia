import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import seeDobg from "../assets/seeDobg.jpg";
import activitiesattractions from "../assets/activitiesattractions.jpg";
import experiencestours from "../assets/experiencestours.jpg";
const SeeDo = () => {
  //NAVBAR COLOUR
  const [colour, setcolour] = useState(true);
  // const changeColor=()=>{
  //   (window.scrollY>=90) ? setcolour(true) : setcolour(false)
  // }
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
      setcolour(true);
    } else {
      setcolour(false);
    }
  });
  return (
    <>
      <Navbar transparentMode={colour} />
      <header
        className=" bg-center"
        style={{ backgroundImage: `url(${seeDobg})` }}
      >
        <div className="justify-start text-6xl flex pt-64 px-32 pb-32 text-[#ffff] font-Rubik">
          See & do
        </div>
      </header>
      <div className=" ">
        <div className="flex mx-32 mt-32 text-4xl ">What to do in India</div>
        <div className="mt-8  mx-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-auto flex h-96 shadow-lg hover:shadow-2xl w-full">
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
      <div className="m-24 h-56 bg-[#66005d] rounded-2xl flex">
        <div className="w-24">
          <img src="" className="h-full rounded-l-2xl" alt="apttern" />
        </div>
        <div className="w-full  justify-between  items-center text-justify  flex m-16 ">
          <div className="text-[#fffff3]">
            <div className=" ">Breathtaking landscape</div>
            <div className=" text-2xl">Discover all destinations</div>
          </div>
          <div className="">
            <Link
              to="/visaapplication"
              className="text-[#046a76] bg-[#fff]  font-medium  text-white px-4 py-2 rounded-full"
            >
              Check Now
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-32 ">
        <div className="flex text-4xl ">
          Experience India's culinary scene
        </div>
        <div className="grid grid-cols-1 rounded-2xl shadow-lg hover:shadow-2xl">
          <div>Hello</div>
        </div>
      </div>
    </>
  );
};

export default SeeDo;
