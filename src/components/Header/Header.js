import React from 'react';
import StyledHeader from './Header.styled';
import Navbar from '../Navigation/Navbar';
import { ReactComponent as GitHub } from '../../icons/Github.svg';
import InteractiveCanvas from '../InteractiveCanvas';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div className="header__content">
        <InteractiveCanvas />
        <h1 className="header__title">Hi, my name is</h1>
        <h2 className="header__name">Maciej Nęcka</h2>
        <h3 className="header__profession">I'm a Front-End developer.</h3>
        <p className="header__description">
          I build things for the web. I specialize in{' '}
          <span className="header__speciality">React.js</span>. Currently
          focused on finding opportunities to gain professional experience.
        </p>
        <a
          className="header__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Maciejnecka"
          type="button"
        >
          Check out my GitHub <GitHub className="header__link--icon" />
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
