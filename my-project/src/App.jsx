import { useEffect } from 'react';
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import Explore from './components/Explore';
import {SeeDo, Home} from "./pages";


function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <BrowserRouter>
        <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/see-do' element={<SeeDo/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
