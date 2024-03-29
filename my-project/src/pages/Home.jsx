import React from "react";
import Main from "../components/Main";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar transparentMode={false} logoColourMode={true}/>
      <Header />
      <Main  />
      <Features />
      <Explore />
      <Footer colour={true}/>
    </>
  );
};

export default Home;
