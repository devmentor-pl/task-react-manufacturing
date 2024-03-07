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
          <CloseIcon onClick={toggleNav} />
        ) : (
          <HamburgerIcon onClick={toggleNav} />
        )}
        <div>
          <a href="#">
            <span>00. </span>About
          </a>
          <a href="#">
            <span>01. </span>Projects
          </a>
          <a href="#">
            <span>02. </span>Contact
          </a>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
