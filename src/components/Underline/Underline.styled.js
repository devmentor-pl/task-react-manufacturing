import styled from 'styled-components';
import { headerPulsate } from '../../animations/keyframes';

const StyledUnderline = styled.span`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--main-color-blue);
    transition: all 0.3s ease-in-out;
    animation: ${headerPulsate} 1.5s infinite ease-in-out;
  }

  &:hover:after {
    height: 6px;
    background-color: darken(var(--main-color-blue), 10%);
  }
`;

export default StyledUnderline;
