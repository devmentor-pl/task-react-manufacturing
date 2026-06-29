import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledHeader = styled.header`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 10rem;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 1;

  ${media.tablet`
    padding: 0 2rem;
    font-size: 1.5rem;
  `}

  .header__content {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 15rem 0;

    ${media.tablet`
    display: flex;
    padding: 10rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
      `}

    ${media.mobile`
      padding: 7rem 0;
      `}
  }

  .header__title,
  .header__name,
  .header__profession,
  .header__description,
  .header__link {
    transition: var(--transition);
    width: 100%;
  }

  .header__title {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;

    ${media.tablet`
    font-size: 2.75rem;
      `}
  }

  .header__name {
    font-size: 4.5rem;
    color: var(--main-color-blue);
    margin-bottom: 1.5rem;

    ${media.tablet`
    font-size: 3.75rem;
      `}
  }

  .header__profession {
    font-size: 3.25rem;
    margin-bottom: 2rem;

    ${media.tablet`
    font-size: 3rem;
      `}
  }

  .header__description {
    font-size: 2.25rem;
    max-width: 50ch;
    margin-bottom: 2.5rem;

    ${media.tablet`
    font-size: 2rem;
      `}

    ${media.mobile`
    font-size: 2rem;
      `}
  }

  .header__speciality {
    color: var(--main-color-blue);
  }

  .header__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-size: 2.25rem;
    transition: var(--transition) ease;
    border: 3px solid var(--main-color-blue);

    &:hover,
    &:focus {
      background-color: darken(var(--main-color-blue), 10%);
      border: 3px solid var(--main-color-blue);
      color: var(--font-main-white);
    }

    &:active {
      background-color: lighten(var(--main-color-blue), 10%);
      border-color: lighten(var(--main-color-blue), 10%);
      transform: translateY(2px);
    }

    ${media.tablet`
    font-size: 2rem;
  `}

    ${media.mobile`
    padding: 0.5rem 0.75rem;
    font-size: 1.5rem;
  `}
  }

  .header__link--icon {
    margin-left: 0.5rem auto;
    width: 50px;
    height: 50px;
    fill: var(--font-main-white);
    transition: all 0.3s ease;
    padding-left: 0.75rem;

    ${media.tablet`
    width: 36px;
    height: 36px;
    `}

    ${media.mobile`
    width: 26px;
    height: 26px;
    `}

    .header__link:hover & {
      fill: var(--font-main-white);
    }
  }

  ${media.mobile`
    padding: 1rem 0;
    text-align: left;
    
    .header__title {
      font-size: 2rem;
    }
    .header__name {
      font-size: 2.2rem;
    }
    .header__profession {
      font-size: 1.75rem;
    }
    .header__description {
      font-size: 1.1rem;
    }
    .header__link {
      font-size: 1.1rem;
    }
  `}
`;

export default StyledHeader;
