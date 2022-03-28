import React from 'react';
import SiteHeader from '../../components/siteHeader';
import '../../components/accidents.css';
import Results from '../../components/Results';
import { homeObjOne, homeObjTwo } from './Data';
import Hero from '../../components/Hero';




export default function Accidents() {
  return (
    <> 
    <SiteHeader />
   
    <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Results />
    </>
  )
}
