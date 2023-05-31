import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/features';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Main/>
      <Features/>
    </BrowserRouter>
  )
}

export default App
