import React from 'react';
import SiteHeader from '../components/siteHeader';
import Footer from '../components/Footer';
import '../components/accidents.css';



export default function Accidents() {
  return (
    <> 
    <SiteHeader />
    <div className='acc'>     Accidents:  </div>

    <div className='stats'>
      <img src='../images/2020.png' className='twenty'></img>
      <img src='../images/2019.png' className='nineteen'></img>
      <br />
      
    </div>
    <div className='statss'>
      <p> As you can see from the figures above, the rate of fatal injuries within a workplace is still very high.</p>
      <p> The aim of this app is to help lower these numbers.</p>
      </div>

    <Footer />
    </>
  )
}
