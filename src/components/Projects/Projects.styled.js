import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledProjects = styled.section`
  padding: 7rem 10rem;
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  max-width: var(--max-width);
  margin: 0 auto;

  ${media.tablet`
    padding: 5rem 2rem;
  `}

  ${media.mobile`
    padding: 5rem 1rem;
  `}

  .projects__title {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8rem;
    color: var(--main-color-blue);

    ${media.tablet`
      font-size: 2.5rem;
    `}

    ${media.mobile`
      font-size: 2rem;
    `}
  }

  .project {
    display: flex;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;

    &:nth-child(odd) {
      flex-direction: row;
      .project__details {
        text-align: right;
        margin-left: 2rem;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .project__details {
        text-align: left;
        margin-right: 2rem;
      }
    }

    ${media.tablet`
      flex-direction: column;
    `}

    ${media.mobile`
      flex-direction: column;
    `}
  }

  .project__image-container {
    text-align: center;
  }

  .project__image {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project__details {
    text-align: center;

    ${media.tablet`
      text-align: center;
    `}
  }

  .project__name {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--main-color-blue);

    ${media.tablet`
      font-size: 2rem;
    `}
  }

  .project__description {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 50ch;
    background-color: var(--project-description-background);
    padding: 2rem;
    border-radius: var(--border-radius);

    ${media.tablet`
      font-size: 1.4rem;
    `};
    ${media.mobile`
      font-size: 1.3rem;
    `};
  }

  .project__link {
    display: inline-block;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    font-size: 1.75rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition) ease;
    border: 3px solid var(--main-color-blue);

    &:hover,
    &:focus {
      background-color: darken(var(--main-color-blue), 10%);
      color: var(--font-main-white);
    }

    &:active {
      background-color: lighten(var(--main-color-blue), 10%);
      border-color: lighten(var(--main-color-blue), 10%);
      transform: translateY(2px);
    }

    ${media.tablet`
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
    `}

    ${media.mobile`
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
    `}
  }
`;

export default StyledProjects;
