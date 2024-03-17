import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';
import { slide } from '../../animations/keyframes';

const StyledTechStack = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3rem 2rem;
  color: var(--font-main-white);

  ${media.tablet`
  margin-top: -7rem;
  padding: 0rem 1rem;
    `}

  .techstack__header {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .techstack__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin: 5rem 0;

    ${media.tablet`
    font-size: 2.5rem;
    `}

    ${media.mobile`
      font-size: 2.2rem;
      margin: 4rem 0;
    `}
  }

  .techstack__paragraph {
    line-height: 1.6;
    padding: 1rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: var(--border-radius);

    ${media.tablet`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${media.mobile`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }
  .techstack {
    max-width: var(--max-width);
    background: var(--icons-carousel-backgroud);
    overflow: hidden;
    width: 95%;
    padding: 60px 0;
    margin: 4rem auto;
    position: relative;
    white-space: nowrap;
    border-radius: var(--border-radius);

    ${media.tablet`
    margin: 2rem auto;
    padding: 45px 0;
    `}

    ${media.mobile`
    padding: 35px 0;
    margin: 1rem auto;
    `}

    &:hover {
      cursor: pointer;
    }

    &:before,
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 250px;
      height: 100%;

      ${media.tablet`
      width: 150px;
    `}

      ${media.mobile`
      width: 75px;
    `}
    }

    &:before {
      left: 0;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0),
        var(--main-color-blue)
      );
    }

    &:after {
      right: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--main-color-blue)
      );
    }

    &:hover .techstack__carousel-track {
      animation-play-state: paused;
    }
  }

  .techstack__carousel {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .techstack__carousel-track {
    display: flex;
    animation: ${slide} 15s linear infinite;
  }

  .techstack__icon {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    transition: transform 0.3s ease;

    ${media.tablet`
    margin: 0 20px;
    `}

    &:hover {
      transform: scale(0.9);
    }

    .techstack__icon-img {
      height: 75px;
      width: 75px;
      object-fit: contain;

      ${media.tablet`
      height: 50px;
      width: 50px;
    `}

      ${media.mobile`
      height: 30px;
      width: 30px;
    `}
    }

    .techstack__icon-name {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      font-weight: bold;
      color: var(--font-main-black);

      ${media.tablet`
      font-size: 1.2rem;
    `}
      ${media.mobile`
      font-size: 1rem;

    `}
    }
  }
`;

export default StyledTechStack;
