import React, { useState } from "react";
import explorebg from "../assets/explorebg.png";
import Rajasthan from "../assets/Rajasthan.png";
import Kerla from "../assets/Kerla.png";
import TajMahal2 from "../assets/TajMahal2.png";
import riversunset from "../assets/riversunset.png";
import Mountains from "../assets/Mountains.png";
import pattern from "../assets/pattern.png";
import Tips from "../assets/Tips.png";
import About from "../assets/About.png";
import Travel from '../assets/Travel.png';
import Contact from "../assets/Contact.png";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const infoData = [
    { heading: "About India", image:[About]},
    {heading: "Safty Travel Tips", image:[Tips]},
    {heading: "Useful Contcts", image:[Contact]},
    {heading:"Travel Regulations", image:[Travel]}
  ];
  const cardData = [
    { image: [Rajasthan], location: "rajasthan" },
    { image: [Kerla], location: "Kerla" },
    { image: [TajMahal2], location: "Delhi" },
    { image: [riversunset], location: "Andhra" },
    { image: [Mountains], location: "Maharahtra" },
    { image: [Mountains], location: "Maharahtra" },
  ];
  return (
    <section className="mt-32 bg-[#fffff3] overflow-hidden">
      <header className=" text-3xl py-8 text-justify px-32 font-Poppins text-[#374772]">
        Explore Top Destinations
      </header>
      <main className="flex flex-col mx-18 justify-center ">
        <div className="pt-8  h-96">Map</div>
        <div className="flex w-full  items-center justify-center ">
          <div className="rounded-full w-12 h-12 justify-center bg-[#eeeeee79] flex mr-7 items-center">
            <BsChevronLeft />
          </div>
          <div className="w-10/12">
            <div className="flex w-full overflow-hidden h-56 justify-center">
              <div className="flex  snap-x justify-end">
                <div className="rounded-2xl snap-center  m-5 w-[250px] flex-col shadow-lg hover:shadow-2xl">
                  <div>
                    <img
                      src={cardData[0].image}
                      alt="Rajasthan"
                      className="rounded-lg bg-cover"
                    />
                  </div>
                  <div className="my-2 flex  items-center mx-8 justify-between  ">
                    <div className="font-Poppins text-[#68696c84] text-lg pb-2 text-opacity-10 ">
                      {cardData[0].location}
                    </div>
                    <span>
                      <BsChevronRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-full w-12 h-12 justify-center bg-[#eeeeee79] flex ml-7 bg items-center">
            <BsChevronRight />
          </div>
        </div>
      </main>
      <footer className="p-32 text-3xl flex  ">
        <sectoin className="text-justify">
          <div className=" font-Poppins text-[#374772]">Know Before You Go</div>
          <div className="flex gap-10 mt-9">
          {infoData.map((infoData) => (
            <div className="flex gap-10 mt-9 ">
              <div className=" w-72 text-[#374772] shadow-lg rounded-2xl">
                <img src={infoData.image} className="rounded-2xl" />
                <div className="my-4 flex flex-col items-start mx-8">
                  <div className="font-Poppins text-lg pb-20 text-opacity-10 ">
                    {infoData.heading}
                  </div>
                  <div className="pt-2 text-[#374772] border-t w-full justify-between flex  items-center  ">
                    <div className="font-Poppins  text-lg  text-opacity-10 ">
                      Know More
                    </div>
                    <span>
                      <BsChevronRight className=" text-sm"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </sectoin>
      </footer>
    </section>
  );
};

export default Explore;
