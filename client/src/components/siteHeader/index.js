import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faHome, faListCheck } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/problems",
  icon: faListCheck,
  label: "Problems"
},{
  route: "/accidents",
  icon: faWarning,
  label: "Accidents"
}]


const SiteHeader = (props) => {

  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-black text-warning d-none d-lg-block sticky-top" role="navigation">
      <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/home">SafetyApp</a>
          <Nav className="ml-auto">
            <NavItem>
                
              <NavLink to="/" className="nav-link text-warning">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
                
              <NavLink to="/problems" className="nav-link text-warning">
                Problems
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/accidents" className="nav-link text-warning">
                Accidents
              </NavLink>
            </NavItem>
          </Nav>
      </div>
    </nav>


    <div className='ccc'>

  <nav className="navbar fixed-bottom d-block bg-black text-warning d-lg-none bottom-tab-nav" role="navigation">

    <Nav className="w-100">

      
      <div className=" d-flex flex-row justify-content-around w-100">
        {
          tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className="nav-link bottom-nav-link text-warning" activeClassName="active">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={tab.icon}/>
                  <div className="bottom-tab-label">{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))
        }
      </div>
    </Nav>


  </nav>
  </div>
  </div>
  )
};

export default SiteHeader;