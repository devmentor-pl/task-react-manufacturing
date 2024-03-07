import React from 'react';
import StyledHeader from './Header.styled';
import Navbar from '../Navigation/Navbar';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div>
        <h1>Hi, my name is</h1>
        <h2>Maciej Nęcka</h2>
        <h3>I'm a Front-End developer.</h3>
        <p>
          I build things for the web. I specialize in <span>React.js</span>.
          Currently focused on finding opportunities to gain professional
          experience.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Maciejnecka"
          type="button"
        >
          Check out my GitHub
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
