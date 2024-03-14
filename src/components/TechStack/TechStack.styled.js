import styled, { keyframes } from 'styled-components';
import { media } from '../Styled/mediaqueries';

const slide = keyframes`
from{
   transform: translateX(0%);
} to{
   transform: translateX(-50%);
}
`;

const StyledTechStack = styled.div`
  min-height: 50vh;
  padding: 4rem 2rem;
  text-align: center;

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
    `}

    ${media.mobile`
      font-size: 2.2rem;
      margin-bottom: 1.5rem;

    `}
  }

  .carousel {
    overflow: hidden;
    white-space: nowrap;
  }

  .carousel__track {
    display: flex;
    animation: ${slide} 20s linear infinite;
  }

  .tech-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin-right: 2rem;
    background-color: #eee;
    font-size: 1.5rem;
    text-align: center;
    line-height: 100px;
  }
`;

export default StyledTechStack;
