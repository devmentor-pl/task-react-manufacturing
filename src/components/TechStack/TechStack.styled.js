import styled, { keyframes } from 'styled-components';
import { media } from '../Styled/mediaqueries';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const StyledTechStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 50vh;
  padding: 3rem 2rem;

  ${media.tablet`
  margin-top: -7rem;
  padding: 0rem 1rem;
    `}

  .techstack__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 3rem;

    ${media.tablet`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    `}

    ${media.mobile`
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    `}
  }
  .techstack {
    max-width: var(--max-width);
    background: var(--icons-carousel-backgroud);
    overflow: hidden;
    width: 95%;
    padding: 60px 0;
    margin: 0 auto;
    position: relative;
    white-space: nowrap;
    border-radius: var(--border-radius);

    &:hover {
      cursor: pointer;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 250px;
      height: 100%;
      z-index: 2;
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
      transform: scale(0.95);
    }

    .techstack__icon-img {
      height: 75px;
      object-fit: contain;

      ${media.tablet`
      height: 50px;
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
    }
  }
`;

export default StyledTechStack;
