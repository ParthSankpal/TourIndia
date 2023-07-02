import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import seeDobg from '../assets/seeDobg.jpg';


const SeeDo = () => {

  //NAVBAR COLOUR
  // const [colour, setcolour] = useState(false);
  // // changeColor=()=>{
  // //   (window.scrollY>=90) ? setcolour(true) : setcolour(false)
  // // }
  // window.addEventListener("scroll", (window.scrollY>=90) ? setcolour(true) : setcolour(false))

  return (
    <>
      <header className=" bg-center" style={{backgroundImage:`url(${seeDobg})`} }>
      <Navbar />
      <div className='justify-start text-4xl flex px-32 text-[#ffff]'>
        See & do
      </div>
      </header>
    </>
  )
}

export default SeeDo