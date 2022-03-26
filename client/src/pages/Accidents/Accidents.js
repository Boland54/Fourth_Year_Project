import React from 'react';
import SiteHeader from '../../components/siteHeader';
import '../../components/accidents.css';
import Pricing from '../../components/Pricing';
import { homeObjOne, homeObjTwo } from './Data';
import Hero from '../../components/Hero';




export default function Accidents() {
  return (
    <> 
    <SiteHeader />
   
    <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Pricing />
    </>
  )
}
