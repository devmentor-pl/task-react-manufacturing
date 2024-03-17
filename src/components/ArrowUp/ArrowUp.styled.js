import styled from 'styled-components';
import { pulse } from '../../animations/keyframes';

const StyledArrowUp = styled.div`
  position: fixed;
  bottom: 1%;
  right: 1%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  filter: var(--icon-color-white);
  transition: var(--transition), transform 0.3s ease;
  animation: ${pulse} 2s infinite ease-in-out;
  &:hover,
  &:focus {
    filter: var(--icon-color-blue);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default StyledArrowUp;
