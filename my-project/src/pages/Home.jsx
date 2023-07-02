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
      <Navbar/>
      <Header />
      <Main />
      <Features />
      <Explore />
      <Footer />
    </>
  );
};

export default Home;
