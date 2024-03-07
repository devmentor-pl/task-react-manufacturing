import React from 'react';
import StyledHeader from './Header.styled';
import Navbar from '../Navigation/Navbar';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <h1>Hello world</h1>
    </StyledHeader>
  );
};

export default Header;
