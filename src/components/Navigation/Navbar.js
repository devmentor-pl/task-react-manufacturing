import React, { useState } from 'react';
import StyledNavbar from './Nav.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/Hamburger.svg';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <StyledNavbar open={isNavOpen}>
        {isNavOpen ? (
          <CloseIcon className="navbar__toggle-icon" onClick={toggleNav} />
        ) : (
          <HamburgerIcon className="navbar__toggle-icon" onClick={toggleNav} />
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
      </StyledNavbar>
    </>
  );
};

export default Navbar;
