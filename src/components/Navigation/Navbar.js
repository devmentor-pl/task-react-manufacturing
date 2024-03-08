import React, { useState, useRef, useEffect } from 'react';
import StyledNavbar from './Nav.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/Hamburger.svg';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        isNavOpen
      ) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <StyledNavbar open={isNavOpen}>
      <div ref={navbarRef} className="navbar__container">
        {isNavOpen ? (
          <CloseIcon
            aria-label="Close navigation"
            className="navbar__toggle-icon"
            onClick={toggleNav}
            role="button"
          />
        ) : (
          <HamburgerIcon
            aria-label="Open navigation"
            className="navbar__toggle-icon"
            onClick={toggleNav}
            role="button"
          />
        )}
        <div className="navbar__links">
          <a className="navbar__link" href="#">
            <span className="navbar__link-prefix">00.</span>About
          </a>
          <a className="navbar__link" href="#">
            <span className="navbar__link-prefix">01.</span>Projects
          </a>
          <a className="navbar__link" href="#">
            <span className="navbar__link-prefix">02.</span>Contact
          </a>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
