import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledResume = styled.div`
  .resume__heading {
    color: var(--font-main-white);
    font-size: 2.5rem;
    text-align: center;
    margin: 3rem auto;
    margin-bottom: 5rem;
    line-height: 1.4;
    max-width: var(--max-width);

    ${media.tablet`
      font-size: 1.75rem;
      margin-bottom: 3rem;

    `}

    ${media.mobile`
      font-size: 1.25rem;
      margin-bottom: 2rem;

    `}
  }

  .resume__show-btn,
  .resume__download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1.75rem 7rem;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    margin: 5rem auto;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s;
    border: 3px solid var(--main-color-blue);

    &:hover {
      background-color: var(--hover-color-blue);
      border: 3px solid var(--main-color-blue);
    }

    ${media.tablet`
      font-size: 1.25rem;
      padding: 1rem 3rem;
    `}

    ${media.mobile`
      margin: 3rem auto;
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
    `}
  }

  .resume__download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 2rem;
    letter-spacing: 1px;
    max-width: 55%;
  }
  .resume__download-btn--icon {
    filter: var(--icon-color-white);
    color: var(--font-main-white);
    font-weight: bold;
    height: 25px;
    width: 25px;
    padding-left: 1rem;
  }

  .resume__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backdrop-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .resume__cv-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cv-container-bg-color);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    width: 80%;
    max-width: 800px;
    height: 80%;

    ${media.tablet`
      padding: 15px;
      width: 85%;
      max-width: 700px;
      height: 85%;
    `}

    ${media.mobile`
      padding: 10px;
      width: 90%;
      max-width: 600px;
      height: 80%;
    `}
  }

  .resume__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    filter: var(--icon-color-blue);
    border: none;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: var(--transition), transform 0.3s ease;

    ${media.tablet`
    height: 60px;
    width: 60px;
    `}

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .resume__iframe {
    width: 90%;
    height: 100%;
    border: none;
    ${media.tablet`
    width: 100%;
    height: 100%;
    `}
  }
`;

export default StyledResume;
