import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledAboutMe = styled.section`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  padding: 3rem 5rem;
  box-sizing: border-box;
  position: relative;
  min-height: 50vh;

  ${media.tablet`
    padding: 5rem 2rem;
  `}

  ${media.mobile`
    padding: 5rem 1rem;
  `}

  .aboutme__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 2rem;
    text-decoration: underline;

    ${media.tablet`
      font-size: 2.5rem;
    `}

    ${media.mobile`
      font-size: 2rem;
    `}
  }

  .aboutme__content {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .aboutme__text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.tablet`
      font-size: 1.3rem;
    `}

    ${media.mobile`
      font-size: 1.1rem;
    `}
  }

  .aboutme__paragraph {
    max-width: 30vw;
    line-height: 1.6;
    text-align: left;
    font-size: 1.4rem;
  }

  .aboutme__image {
    position: relative;
    margin-top: 2rem;
    width: 60%;
    display: flex;
    justify-content: center;
  }

  .aboutme__photo {
    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    position: relative;
  }
`;

export default StyledAboutMe;
