import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';
import { swing } from '../../animations/keyframes';

const StyledNavbar = styled.nav`
  padding: 1rem 5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-navbar-background);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--font-main-white);
  height: 6rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;

  ${media.tablet`
  height: 5rem;
  padding: 1rem 1.5rem;
    `}

  ${media.mobile`
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  height: 0;
  padding: 0 0;
    `}

  .navbar__container {
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .navbar__toggle-icon {
    display: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    filter: var(--icon-color-white);
    z-index: 999;
    width: 40px;
    height: 40px;
    transition: var(--transition), transform 0.3s ease;
    animation: ${swing} 2s ease-in-out;
    ${media.mobile`
      display: block;
    `}

    &:hover, &:focus {
      filter: var(--icon-color-blue);
      transform: rotate(15deg);
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

  .navbar__links {
    max-width: 1500px;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    transition: var(--transition) ease-in-out;
    transform: translateX(0%);
    opacity: 1;
    visibility: visible;

    ${media.tablet`
      gap: 1.5rem;
    `}

    ${media.mobile`
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      position: fixed;
      padding: 1rem 2.5rem;
      gap: 3rem;
      top: 0;
      right: 0;
      height: 100vh;
      width: 40vw;
      min-width: min-content;
      background-color: var(--color-navbar-background);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 1;
      padding-top: 6rem;
      align-items: flex-start;
      display: flex;
      transform: ${(props) =>
        props.open ? 'translateX(0%)' : 'translateX(100%)'};
      opacity: ${(props) => (props.open ? '1' : '0')};
      visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0s linear ${(
        props
      ) => (props.open ? '0s' : '0.5s')};
    `}
  }

  .navbar__link {
    position: relative;
    color: var(--font-main-white);
    text-decoration: none;
    font-size: 2rem;
    transition: var(--transition);
    padding-bottom: 0.5rem;
    white-space: nowrap;

    ${media.tablet`
      font-size: 1.5rem

    `}

    ${media.mobile`
      font-size: 1.5rem
    `}

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 3px;
      bottom: 0;
      right: 0;
      background-color: var(--main-color-blue);
      transition: width 0.4s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: auto;
    }

    &:hover {
      color: var(--main-color-blue);
    }
  }
`;

export default StyledNavbar;
