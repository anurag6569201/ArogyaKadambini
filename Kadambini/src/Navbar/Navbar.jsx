import './assets/css/navbar.css';
import React, { useState, useEffect } from 'react';
import LogoIcon from './assets/image/logo.png';
import { Link } from 'react-router-dom';


const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


function MainNavbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);


  const navLinks = ["Home", "About Us", "Procedures", "Pricing"];

  return (
    <>
      <nav className="main-navbar">
        <div className='navbar-section1'>
          <div className="navbar-section logo-section">
            <img src={LogoIcon} alt="" height='35' />
            <span className="logo_text">
              <span className="logo-text">AROGYA</span>
              <span className="logo-text-subscript">KADAMBINI</span>
            </span>
          </div>

          <div className="navbar-section nav-links-section">
            {navLinks.map((link, index) => (
              <React.Fragment key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => handleLinkClick(link)}
                  className={`nav-link ${activeLink === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="nav-separator">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="navbar-section buttons-section">
          <button className="navbar-button start-program-button">
            Health Mapping
          </button>

          <button className="navbar-button menu-button menu-button-mobile" onClick={toggleMobileMenu} aria-label="Open menu">
            <MenuIcon />
          </button>
          <button className="navbar-button menu-button-desktop b-0">
            <span className="menu-button-text">MENU</span>
            <div className="menu-icon-style menu-button" onClick={toggleMobileMenu} aria-label="Open menu">
              <MenuIcon />
            </div>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && <div className="background-overlay" onClick={toggleMobileMenu}></div>}

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={toggleMobileMenu} className="close-menu-button" aria-label="Close menu">
          <CloseIcon />
        </button>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link
              to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
              onClick={() => handleLinkClick(link)}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
            >
              {link}
            </Link>
          ))}
          <button className="navbar-button start-program-button mobile-menu-button">
            Start Program
          </button>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;