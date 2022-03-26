import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/problems",
  icon: faSearch,
  label: "Problems"
},{
  route: "/accidents",
  icon: faUserCircle,
  label: "Accidents"
}]


const SiteHeader = (props) => {

  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark d-none d-lg-block sticky-top" role="navigation">
      <div className="container-fluid">
          <a className="navbar-brand" href="/home">Brand</a>
          <Nav className="ml-auto">
            <NavItem>
                
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
                
              <NavLink to="/problems" className="nav-link">
                Problems
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/accidents" className="nav-link">
                Accidents
              </NavLink>
            </NavItem>
          </Nav>
      </div>
    </nav>
    <div className='ccc'>
  <nav className="navbar fixed-bottom d-block d-lg-none bottom-tab-nav" role="navigation">
    <Nav className="w-100">
      <div className=" d-flex flex-row justify-content-around w-100">
        {
          tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
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