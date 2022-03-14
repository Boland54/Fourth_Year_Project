import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/HeroSection.css';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/siteHeader';
import axios from "axios";
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext";






function HeroSection() {
  const { dispatch } = useContext(AuthContext);


  const handleClick12 = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
    <SiteHeader />
    <div className='hero-container'>
      <h1>REPORTING IS IMPORTANT!</h1>
      <p>Never fail to report accidents, defective equipment and or unsafe conditions.</p>
      <div className='hero-butns'>

      <a href="/report" target="_parent">
        <Button
          className='butns'
          buttonStyle='butn--outline'
          buttonSize='butn--large'
          component={Link} to="/"       >
          REPORT
        </Button>
        </a>
        

        <a href="https://www.youtube.com/watch?v=4bkr5lpKGUM" target="_parent">
        <Button
          className='butns1'
          buttonStyle='butn--primary'
          buttonSize='butn--large'
          onClick={console.log('hey')}
        >
          Safety Features <i className='far fa-play-circle' />
        </Button>
        </a>

            <Button
                  label="logout"
                  className='butns'
                  buttonStyle='butn--outline'
                  buttonSize='butn--large'
                  component={Link} to="/report"  
                  onClick={handleClick12}
                > LOGOUT
                </Button>            </div>
    </div>
    </>
  );
}

export default HeroSection;