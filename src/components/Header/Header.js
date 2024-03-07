import React from 'react';
import StyledHeader from './Header.styled';
import Navbar from '../Navigation/Navbar';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Hello world</h1>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
