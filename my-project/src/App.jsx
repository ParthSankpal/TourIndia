import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'
import Explore from './components/Explore';
import {SeeDo, Home} from "./pages";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/see-do' element={<SeeDo/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
