import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledNavbar = styled.nav`
  padding: 1rem 5rem;
  width: 100%;
  font-size: 2rem;
  box-sizing: border-box;
  background-color: rgba(26, 26, 32, 0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--font-main-white);
  height: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;

  ${media.small`
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
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
    filter: invert(69%) sepia(11%) saturate(0%) hue-rotate(136deg)
      brightness(94%) contrast(93%);
    z-index: 2;
    width: 40px;
    height: 40px;
    transition: var(--transition), transform 0.3s ease;
    ${media.small`
      display: block;
    `}

    &:hover {
      filter: invert(30%) sepia(95%) saturate(3500%) hue-rotate(150deg)
        brightness(100%) contrast(97%);
      transform: rotate(15deg);
    }
  }

  .navbar__links {
    max-width: 1500px;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    font-size: 1rem;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0%);
    opacity: 1;
    visibility: visible;

    ${media.small`
      flex-direction: column;
      justify-content: flex-start;
      position: fixed;
      padding: 1rem 2rem;
      top: 0;
      right: 0;
      height: 100vh;
      width: 40vw;
      background-color: rgba(26, 26, 32, 0.55);
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

  .navbar__link-prefix {
    margin-right: 0.5rem;
    color: var(--main-color-blue);
  }
`;

export default StyledNavbar;
