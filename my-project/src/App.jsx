import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'
import Explore from './components/Explore';

function App() {

  return (
    <BrowserRouter>
      <Navbar classname="z-50 overflow-hidden"/>
      <Header/>
      <Main />
      <Features/>
      <Explore/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
