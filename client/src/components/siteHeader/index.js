import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './header.css';
import { MdWarning } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function SiteHeader() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdWarning className='navbar-icon' />
              Safety App
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/problems'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Problems
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/accidents'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Accidents
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/profile' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Profile</Button>
                  </Link>
                ) : (
                  <Link to='/profile' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SiteHeader;