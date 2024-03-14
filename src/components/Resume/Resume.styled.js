import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledResume = styled.div`
  .resume__heading {
    color: var(--font-main-white);
    font-size: 2.5rem;
    text-align: center;
    margin: 3rem auto;
    margin-bottom: 5rem;
    max-width: var(--max-width);

    ${media.tablet`
      font-size: 1.3rem;
    `}

    ${media.mobile`
      font-size: 1.2rem;
    `}
  }

  .resume__show-btn {
    display: flex;
    font-size: 2rem;
    padding: 2rem 8rem;
    background-color: var(--main-color-blue);
    color: white;
    margin: 0 auto;
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
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem;
    `}

    ${media.mobile`
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    `}
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
    font-size: var(--close-btn-font-size);
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: var(--transition), transform 0.3s ease;

    ${media.tablet`
    `}

    ${media.mobile`
    `}

    &:hover, &:focus {
      transform: rotate(15deg);
    }
  }

  .resume__iframe {
    width: 90%;
    height: 100%;
    border: none;
  }
`;
export default StyledResume;
