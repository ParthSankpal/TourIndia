import React, { useState } from "react";
import Bartender from "../assets/bartender.jpg";
import Shopping from "../assets/shopping.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const cardData = [
  {
    heading: "Eat and Drink",
    disc: "From Kashmir to Kanyakumari authentic coffee, you will taste something that is not found anywhere in the world.",
    url: [Bartender],
  },
  {
    heading: "Shopping in India",
    disc: "There are a lot to take with you back home from Saudi shops and creativity.",
    url: [Shopping],
  },
];

import { Link } from "react-router-dom";

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secCUrrentIndex, setSecCurrentIndex] = useState(1);
  const [transitionClass, setTransitionClass] = useState('');

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
    setSecCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
    setTransitionClass('translate-x-full');
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    setSecCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  return (
    <>
      <section
        className="text-justify bg-cover bg-center font-Poppins pt-14 pb-14 text-[#fffff3]"
        style={{ backgroundImage: `url(${cardData[secCUrrentIndex].url})` }}
      >
        <div className="overflow-hidden">
          <header className="text-4xl drop-shadow-2xl mx-36 pb-8 border-b-2">
            Authentically India
          </header>
          <div className=" ">
            <div className=" relative  mt-42 ml-36">
              <div className=" cursor-pointer">
                <div className="flex items-center pt-6 text-sm font-bold">
                  <Link
                    to=""
                    className="rounded-full w-8 h-8 bg-[#eeeeee79] flex  items-center justify-center"
                  >
                    <AiOutlineHeart />
                  </Link>
                  <div className="px-4">Save to my favorites</div>
                </div>
              </div>
              <div className="text-6xl mt-20 mb-5">
                {currentIndex ? cardData[0].heading : cardData[1].heading}
              </div>
              <div className="w-1/3">
                {currentIndex ? cardData[0].disc : cardData[1].disc}
              </div>

              <div className="py-12">
                <div className="  w-36">
                  <Link
                    to="/visaapplication"
                    className="text-[#fffff3] items-center w-36  justify-between flex font-inner font-Poppins font-medium bg-[#374772] text-white px-4 py-2 rounded-full"
                  >
                    Learn More
                    <BsChevronRight />
                  </Link>
                </div>
              </div>
              <div className=" absolute w-70 h-48 left-[65%] bottom-5  flex  gap-4">
                <div className=" items-center grid py-6 justify-between rounded-full">
                  <div className="  bg-[#374772] h-8 w-8 text-white  rounded-full">
                    <BsChevronRight onClick={previousImage} />
                  </div>
                  <div className=" bg-[#374772] h-8 w-8 text-white rounded-full">
                    <BsChevronLeft onClick={nextImage} />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div
                    style={{
                      backgroundImage: `url(${cardData[currentIndex].url})`,
                      transitionClass
                    }}
                    className=" w-80 pr-7 h-full inline-block p-2 cursor-pointer rounded-2xl  bg-center bg-cover transition-transform duration-500 transform translate-x-0 "
                    onClick={previousImage}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${cardData[secCUrrentIndex].url})`,
                      transitionClass
                    }}
                    className=" w-80 pr-7 h-full inline-block p-2 cursor-pointer rounded-2xl  bg-center bg-cover transition-transform duration-500 transform translate-x-0 "
                    onClick={nextImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Features;

{
  /* <div style={{backgroundImage:`url(${cardData[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/> */
}
