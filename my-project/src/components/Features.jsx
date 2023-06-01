import React,{useState} from "react";
import Bartender from "../assets/bartender.jpg";
import Shopping from "../assets/shopping.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const cardData=[
    {url:[Bartender]},
    {url:[Shopping]}
]



import { Link } from "react-router-dom";

const Features = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  return (
    <>
      <section
        className="text-justify bg-cover bg-center font-Merienda pt-14 pb-14 text-[#fffff3]"
        style={{ backgroundImage: `url(${Bartender})` }}
      >
        <div className="overflow-hidden">
          <header className="text-4xl mx-36 pb-8 border-b-2">
            Authentically India
          </header>
          <div className=" ">
            <div className=" mt-42 ml-36">
              <div className=" cursor-pointer">
                <div className="flex items-center text-sm font-bold">
                  <Link to="">
                    <AiOutlineHeart />
                  </Link>
                  <div className="px-4">Save to my favorites</div>
                </div>
              </div>
              <div className="text-6xl my-9">Eat and Drink</div>
              <div className="w-1/3">
                From Kashmir to Kanyakumari authentic coffee, you will taste
                something that is not found anywhere in the world.
              </div>

              <div className="  ">
                <div className="  w-36">
                  <Link
                    to="/visaapplication"
                    className="text-[#fffff3] items-center w-36  justify-between flex font-inner font-Merienda font-medium bg-[#374772] text-white px-4 py-2 rounded-full"
                  >
                    Learn More
                    <BsChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-70  relative left-[1080px]  flex pr-3  ">
            <div className="h-44">
              <div>
                <BsChevronRight />
              </div>
              <div>
                <BsChevronLeft />
              </div>
            </div>
            {/* <div className="flex relative ">

            </div> */}
            

              <div className="flex space-x-4">
                
                    <div
                  style={{backgroundImage:`url(${cardData[currentIndex].url})`}}
                  className=" w-80 pr-7 h-full inline-block p-2 cursor-pointer rounded-2xl bg-cover duration-500 "
                />
                
              </div>
              
            </div>
          </div>

        <div className=" flex ml-56 over  "></div>
      </section>
    </>
  );
};

export default Features;







{/* <div style={{backgroundImage:`url(${cardData[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/> */}
