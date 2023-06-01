import React from 'react';
import explorebg from '../assets/explorebg.png';
import Rajasthan from '../assets/Rajasthan.png';
import Kerla from '../assets/Kerla.png';
import TajMahal2 from '../assets/TajMahal2.png';
import riversunset from '../assets/riversunset.png';
import Mountains from '../assets/Mountains.png';
import pattern from '../assets/pattern.png';

const cardData=[
  {id:1, image:[Rajasthan],location:"rajasthan", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
  {id:1, image:[Kerla],location:"Kerla", discription:" Kerala: God's Own Country", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
  {id:1, image:[TajMahal2],location:"Delhi", discription:"Taj Mahal: A love story set in stone.", cost:"INR 15000" },
  {id:1, image:[riversunset],location:"Andhra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
  {id:1, image:[Mountains],location:"Maharahtra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"},
  {id:1, image:[Mountains],location:"Maharahtra", discription:"Rajasthan VIP Tour: Desert Safari & Day Trip", cost:"INR 15000",mrp:"INR 20000" ,discount:"25%"}

]



const Explore = () => {
  return (
    <section className='mt-32' >
        <header className=' bg-[#faf7f3] text-3xl py-8 text-justify px-32 font-Merienda text-[#374772]'>
          Explore Top Destinations
        </header>
        <main className="" style={{ backgroundImage: `url(${explorebg})`}}>
              <div className='pt-8'>
                Map
              </div>
              <div className='flex'>
                <div class="snap-x flex ">
                  <div class="snap-center scroll-ml-6   rounded-lg">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div class="snap-center scroll-ml-6 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div class="snap-center scroll-ml-6 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div class="snap-center scroll-ml-6 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  
                </div>
              </div>
        </main>
    </section>
  )
}

export default Explore