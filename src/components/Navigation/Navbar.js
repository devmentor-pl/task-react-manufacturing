import React, { useState, useRef, useEffect } from 'react';
import StyledNavbar from './Nav.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/Hamburger.svg';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import ArrowUp from '../ArrowUp';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef();

  const handleToggleNav = (event) => {
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

  const handleScrollToSection = (sectionId, event) => {
    event.preventDefault();

    setIsNavOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = navbarRef.current
        ? navbarRef.current.offsetHeight
        : 0;

      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionTop,
      });
    }
  };

  return (
    <>
      <StyledNavbar open={isNavOpen} ref={navbarRef}>
        <div ref={navbarRef} className="navbar__container">
          {isNavOpen ? (
            <CloseIcon
              aria-label="Close navigation"
              tabIndex="0"
              className="navbar__toggle-icon"
              onClick={handleToggleNav}
              role="button"
            />
          ) : (
            <HamburgerIcon
              aria-label="Open navigation"
              tabIndex="0"
              className="navbar__toggle-icon"
              onClick={handleToggleNav}
              role="button"
            />
          )}
          <div className="navbar__links">
            <a
              className="navbar__link"
              href="#about"
              onClick={(e) => handleScrollToSection('about', e)}
            >
              About
            </a>
            <a
              className="navbar__link"
              href="#techStack"
              onClick={(e) => handleScrollToSection('techStack', e)}
            >
              Tech stack
            </a>
            <a
              className="navbar__link"
              href="#projects"
              onClick={(e) => handleScrollToSection('projects', e)}
            >
              Projects
            </a>
            <a
              className="navbar__link"
              href="#contact"
              onClick={(e) => handleScrollToSection('contact', e)}
            >
              Contact
            </a>
          </div>
        </div>
      </StyledNavbar>
      <ArrowUp />
    </>
  );
};

export default Navbar;
