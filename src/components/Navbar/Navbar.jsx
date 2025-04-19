import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [rotateButton, setRotateButton] = useState(false);

  function closeNavbar() {
    setRotateButton(true);
    setNavbar(false);
  }
  
  function showNavbar() {
    setNavbar(true);
    setRotateButton(false);
  }

  console.log(navbar);
  
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
        <div className="group">
          
          {/* <ul className={navbar ? ' navbar-nav show-navbar-nav' : 'navbar-nav show-navbar-nav' } > */}
          <ul className={navbar ? "navbar-nav show-navbar-nav" : "navbar-nav hode-navbar-nav"}>
          <CloseRoundedIcon onClick={closeNavbar}  className={!rotateButton ? 'close-btn' : 'close-btn roll'} sx={{fontSize: 34}} />
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
            
              <AnchorLink className="nav-link" href="#about">
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#skills">
                Skills
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#services">
                Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
          
        </div>
            <div className="toggle-box">
              <MenuIcon onClick={showNavbar} className='toggle' />
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
