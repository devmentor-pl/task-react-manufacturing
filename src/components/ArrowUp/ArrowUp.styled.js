import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';
import { pulse } from '../../animations/keyframes';

const StyledArrowUp = styled.div`
  .arrow-up-icon {
    position: fixed;
    bottom: 1%;
    right: 1%;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    z-index: 1000;
    filter: var(--icon-color-white);
    transition: var(--transition), transform 0.3s ease;
    animation: ${pulse} 2s infinite ease-in-out;

    ${media.tablet`
    width: 60px;
    height: 60px;
    `}

    &:hover,
    &:focus {
      filter: var(--icon-color-blue);
    }

    &:active {
      transform: scale(0.9);
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default StyledArrowUp;
