import React from 'react';
import '../App.css';
import { Buttons } from '../components/Button';
import '../components/HeroSection.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import SiteHeader from '../components/siteHeader';




function HeroSection() {



  return (
    <>
    <SiteHeader />
    <div className='hero-container'>
      <h1>REPORTING IS IMPORTANT!</h1>
      <p>Never fail to report accidents, defective equipment and or unsafe conditions.</p>
      <div className='hero-butns'>

      <a href="/report" target="_parent">
        <Buttons
          className='butns'
          buttonStyle='butn--outline'
          buttonSize='butn--large'
          component={Link} to="/report"       >
          Report
        </Buttons>
        </a>
        

        <a href="https://www.youtube.com/watch?v=4bkr5lpKGUM" target="_parent">
        <Buttons
          className='butns1'
          buttonStyle='butn--primary'
          buttonSize='butn--large'
          onClick={console.log('hey')}
        >
          Safety Features <i className='far fa-play-circle' />
        </Buttons>
        </a>
      </div>
    </div>
    <Cards />
<Footer />
    </>
  );
}

export default HeroSection;