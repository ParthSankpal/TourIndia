import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Main/>
    </BrowserRouter>
  )
}

export default App
