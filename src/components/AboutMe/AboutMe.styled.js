import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledAboutMe = styled.section`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  padding: 3rem 5rem;
  box-sizing: border-box;
  min-height: 50vh;
  margin: 0 auto;

  ${media.tablet`
    padding: 5rem 2rem;
  `}

  ${media.mobile`
    padding: 2rem 1rem;
  `}

  .aboutme__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 3rem;

    ${media.tablet`
      font-size: 2.5rem;
    `}

    ${media.mobile`
      font-size: 2.2rem;
      margin-bottom: 1.5rem;

    `}
  }

  .aboutme__content {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ${media.mobile`
      flex-direction: column-reverse;
      align-items: center;
    `}
  }

  .aboutme__text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.tablet`
      font-size: 1.2rem;
    `}

    ${media.mobile`
      font-size: 1.1rem;
      order: 1;
    `}
  }

  .aboutme__paragraph {
    max-width: 40vw;
    line-height: 1.6;
    text-align: left;
    font-size: 1.4rem;

    ${media.tablet`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${media.mobile`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }

  .aboutme__image {
    position: relative;
    margin-top: 2rem;
    width: 50%;
    display: flex;
    align-items: center;

    ${media.tablet`
    max-width: 50%
    `}

    ${media.mobile`
     justify-content: center
     width: 90%;
     order: 2;
    `}
  }

  .aboutme__photo {
    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transition: var(--transition);

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    ${media.mobile`
    max-height: 500px;
    margin-bottom: 1.5rem;
    `}
  }
`;

export default StyledAboutMe;
