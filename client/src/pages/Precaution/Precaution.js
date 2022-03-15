import React from 'react';
import SiteHeader from '../../components/siteHeader';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';


export default function Committee() {
  return (
    <> 
    <SiteHeader />
    <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjFive} />
      <Hero {...homeObjFour} />
 
     <Footer />
    </>
  )
}
