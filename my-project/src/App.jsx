import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/features';
import Footer from './components/Footer';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'
import Explore from './components/Explore';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Main/>
      <Features/>
      <Explore/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
