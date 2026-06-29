import React from 'react';
import StyledUnderline from './Underline.styled';

const Underline = ({ children, ...props }) => {
  return <StyledUnderline {...props}>{children}</StyledUnderline>;
};

export default Underline;
