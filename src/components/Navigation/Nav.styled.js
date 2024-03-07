import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem;
  width: 100%;
  font-size: 2.5rem;
  max-width: var(--max-width);
  box-sizing: border-box;
  background-color: rgba(26, 26, 32, 0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--font-main-white);
  height: 7rem;
  left: 0;
  right: 0;
  z-index: 1000;

  ${media.small`
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
    `}

  .navbar__logo {
    font-size: 2.5rem;
    color: var(--main-color-blue);
    text-decoration: none;
  }

  .navbar__toggle-icon {
    display: none;
    cursor: pointer;
    position: fixed;
    filter: invert(69%) sepia(11%) saturate(0%) hue-rotate(136deg)
      brightness(94%) contrast(93%);
    z-index: 2;
    width: 30px;
    height: 30px;
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
    display: flex;
    gap: 2.5rem;
    align-items: center;

    ${media.small`
      display: ${(props) => (props.open ? 'flex' : 'none')};
      flex-direction: column;
      justify-content: flex-start;
      position: fixed;
      padding: 1rem 2rem;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: rgba(26, 26, 32, 0.55);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 1;
      padding-top: 3rem;
      align-items: flex-start;
    `}
  }

  .navbar__link {
    color: var(--font-main-white);
    text-decoration: none;
    font-size: 2.5rem;
    transition: var(--transition);

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
