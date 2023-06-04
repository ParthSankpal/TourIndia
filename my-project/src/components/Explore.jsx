import React from "react";
import explorebg from "../assets/explorebg.png";
import Rajasthan from "../assets/Rajasthan.png";
import Kerla from "../assets/Kerla.png";
import TajMahal2 from "../assets/TajMahal2.png";
import riversunset from "../assets/riversunset.png";
import Mountains from "../assets/Mountains.png";
import pattern from "../assets/pattern.png";

const cardData = [
  {
    id: 1,
    image: [Rajasthan],
    location: "rajasthan",
    discription: "Rajasthan VIP Tour: Desert Safari & Day Trip",
    cost: "INR 15000",
    mrp: "INR 20000",
    discount: "25%",
  },
  {
    id: 1,
    image: [Kerla],
    location: "Kerla",
    discription: " Kerala: God's Own Country",
    cost: "INR 15000",
    mrp: "INR 20000",
    discount: "25%",
  },
  {
    id: 1,
    image: [TajMahal2],
    location: "Delhi",
    discription: "Taj Mahal: A love story set in stone.",
    cost: "INR 15000",
  },
  {
    id: 1,
    image: [riversunset],
    location: "Andhra",
    discription: "Rajasthan VIP Tour: Desert Safari & Day Trip",
    cost: "INR 15000",
    mrp: "INR 20000",
    discount: "25%",
  },
  {
    id: 1,
    image: [Mountains],
    location: "Maharahtra",
    discription: "Rajasthan VIP Tour: Desert Safari & Day Trip",
    cost: "INR 15000",
    mrp: "INR 20000",
    discount: "25%",
  },
  {
    id: 1,
    image: [Mountains],
    location: "Maharahtra",
    discription: "Rajasthan VIP Tour: Desert Safari & Day Trip",
    cost: "INR 15000",
    mrp: "INR 20000",
    discount: "25%",
  },
];

const Explore = () => {
  return (
    <section
      className="mt-32 bg-cover"
      style={{ backgroundImage: `url(${explorebg})` }}
    >
      <header className=" text-3xl py-8 text-justify px-32 font-Merienda text-[#374772]">
        Explore Top Destinations
      </header>
      <main className="mx-44">
        <div className="pt-8">Map</div>
        <div className="">
          <div className="flex space-x-4">
            <div
              className=" w-80 pr-7 h-full inline-block p-2 cursor-pointer rounded-2xl bg-center bg-cover duration-500 "
            >Hi</div>
            <div
              
              className=" w-80 pr-7 h-full inline-block p-2 cursor-pointer rounded-2xl bg-center bg-cover duration-500 "
            >Bye</div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Explore;
