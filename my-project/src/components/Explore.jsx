import React, { useState } from "react";
import explorebg from "../assets/explorebg.png";
import Rajasthan from "../assets/Rajasthan.png";
import Kerla from "../assets/Kerla.png";
import TajMahal2 from "../assets/TajMahal2.png";
import riversunset from "../assets/riversunset.png";
import Mountains from "../assets/Mountains.png";
import Tips from "../assets/Tips.png";
import About from "../assets/About.png";
import Travel from "../assets/Travel.png";
import Contact from "../assets/Contact.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Explore = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centermode: true,
  //   centerpadding: "0px",
  // };

  // const renderImages = () => {
  //   cardData.map((image, location) => {
  //     <div className="w-72">
  //       <div className="rounded-2xl snap-center  m-5  flex-col shadow-lg hover:shadow-2xl">
  //         <div>
  //           <img
  //             src={image}
  //             alt="Rajasthan"
  //             className="rounded-lg bg-cover duration-300"
  //           />
  //         </div>
  //         <div className="my-2 flex  items-center mx-8 justify-between  ">
  //           <div className=" text-[#68696c84] text-lg pb-2 text-opacity-10 duration-300">
  //             {location}
  //           </div>
  //           <span>
  //             <BsChevronRight />
  //           </span>
  //         </div>
  //       </div>
  //     </div>;
  //   });
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    var slider=document.getElementById("slider");
    slider.scrollLeft= slider.scrollLeft-500;
    const isFirstSlide = currentIndex == 0;
    const nextIndex = isFirstSlide ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex == cardData.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const infoData = [
    { heading: "About India", image: [About] },
    { heading: "Safty Travel Tips", image: [Tips] },
    { heading: "Useful Contcts", image: [Contact] },
    { heading: "Travel Regulations", image: [Travel] },
  ];
  const cardData = [
    { image: [Rajasthan], location: "rajasthan" },
    { image: [Kerla], location: "Kerla" },
    { image: [TajMahal2], location: "TajMahal2" },
    { image: [riversunset], location: "riversunset" },
    { image: [Mountains], location: "Mountains" },
    { image: [Mountains], location: "Mountains" },
    { image: [Mountains], location: "Mountains" },
    
  ];
  return (
    <section className="mt-32   overflow-hidden">
      <header className=" text-3xl py-8 text-justify px-32  text-[#374772]">
        Explore Top Destinations
      </header>
      <main className="flex flex-col mx-18 justify-center ">
        <div className="pt-8  h-96">Map</div>
        <div className="flex w-full  items-center px-32 justify-between">
          <button
            className="rounded-full w-12 h-12 justify-center bg-[#eeeeee79] flex mr-7 items-center"
            onClick={prevSlide}
          >
            <BsChevronLeft />
          </button>
          <div id="slider" className=" flex w-full overflow-x-scroll scroll">
          {cardData.map((cardData) => (
            <div className="w-full">
                  <div className="rounded-2xl mx-5  flex-col shadow-lg hover:shadow-2xl">
                    <div>
                      <img
                        src={cardData.image}
                        alt="Rajasthan"
                        className="rounded-lg bg-cover duration-300"
                      />
                    </div>
                    <div className="my-2 flex  items-center mx-8 justify-between  ">
                      <div className=" text-[#68696c84] text-lg pb-2 text-opacity-10 duration-300">
                        {cardData.location}
                      </div>
                      <span>
                        <BsChevronRight />
                      </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="rounded-full w-12 h-12 justify-center bg-[#eeeeee79] flex ml-7 bg items-center"
          >
            <BsChevronRight />
          </button>
        </div>
      </main>
      <footer className="p-32 text-3xl flex  ">
        <sectoin className="text-justify">
          <div className="  text-[#374772]">Know Before You Go</div>
          <div className="flex gap-10 mt-9">
            {infoData.map((infoData) => (
              <div className="flex gap-10 mt-9 ">
                <div className=" w-72 text-[#374772] shadow-lg rounded-2xl">
                  <img src={infoData.image} className="rounded-2xl" />
                  <div className="my-4 flex flex-col items-start mx-8">
                    <div className=" text-lg pb-20 text-opacity-10 ">
                      {infoData.heading}
                    </div>
                    <div className="pt-2 text-[#374772] border-t w-full justify-between flex  items-center  ">
                      <div className="  text-lg  text-opacity-10 ">
                        Know More
                      </div>
                      <span>
                        <BsChevronRight className=" text-sm" />
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




{/* <div className="w-72">
                  <div className="rounded-2xl snap-center  m-5  flex-col shadow-lg hover:shadow-2xl">
                    <div>
                      <img
                        src={cardData.image}
                        alt="Rajasthan"
                        className="rounded-lg bg-cover duration-300"
                      />
                    </div>
                    <div className="my-2 flex  items-center mx-8 justify-between  ">
                      <div className=" text-[#68696c84] text-lg pb-2 text-opacity-10 duration-300">
                        {cardData.location}
                      </div>
                      <span>
                        <BsChevronRight />
                      </span>
                    </div>
                  </div>
                </div> */}