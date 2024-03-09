import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledHeader = styled.header`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  min-height: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 5rem;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 1;

  ${media.tablet`
    padding: 0 2rem;
    min-height: 600px;
    font-size: 1.5rem;
  `}

  .header__interactive-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;

    ${media.tablet`
      pointer-events: none;
    `}

    ${media.mobile`
      pointer-events: none;
    `}
  }

  .header__content {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 10rem;

    ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
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
  }

  .header__name {
    font-size: 4.5rem;
    color: var(--main-color-blue);
    margin-bottom: 1.5rem;
  }

  .header__profession {
    font-size: 3.25rem;
    margin-bottom: 2rem;
  }

  .header__description {
    font-size: 2.25rem;
    max-width: 50ch;
    margin-bottom: 2.5rem;
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
    padding: 0.75rem 0.75rem;
    border-radius: 5px;
    text-decoration: none;
    font-size: 2.25rem;
    transition: var(--transition) ease;
    border: 2px solid var(--main-color-blue);

    ${media.mobile`
    padding: 0.5rem 0.75rem;
    `}

    &:hover {
      background-color: darken(var(--main-color-blue), 10%);
      border-color: var(--main-color-blue);

      .header__link--icon {
        filter: var(--icon-color-blue);
      }
    }
  }

  .header__link--icon {
    margin-left: 0.5rem auto;
    width: 34px;
    height: 34px;
    fill: var(--font-main-white);
    transition: all 0.3s ease;
    padding-left: 0.75rem;

    .header__link:hover & {
      fill: var(--font-main-white);
    }
  }

  ${media.mobile`
    padding: 1rem 2rem;
    .header__title {
      font-size: 2.5rem;
    }
    .header__name {
      font-size: 3rem;
    }
    .header__profession {
      font-size: 2rem;
    }
    .header__description {
      font-size: 1rem;
    }
    .header__link {
      font-size: 1.2rem;
    }
  `}
`;

export default StyledHeader;
