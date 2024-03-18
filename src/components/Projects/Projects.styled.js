import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledProjects = styled.section`
  padding: 7rem 10rem;
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 0;

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
    margin-bottom: 4rem;
    color: var(--main-color-blue);

    ${media.tablet`
      font-size: 2.5rem;
    `}

    ${media.mobile`
      font-size: 2.2rem;
      margin-bottom: 5rem;
    `}
  }

  .projects__introduction {
    line-height: 1.6;
    padding: 1rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: var(--border-radius);
    margin-bottom: 5rem;

    ${media.tablet`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${media.mobile`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }
  .project {
    display: flex;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;

    &:nth-child(odd) {
      flex-direction: row;

      ${media.tablet`
      flex-direction:column-reverse;
    `}
      .project__details {
        text-align: center;
        margin-left: 2rem;
        ${media.tablet`
        width: 85%;
        margin-left: 0
        `}
        ${media.mobile`
          margin: 0 auto;  
    `}
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;

      ${media.tablet`
      flex-direction:column-reverse;
    `}
      .project__details {
        text-align: center;
        margin-right: 2rem;
        ${media.tablet`
        width: 90%;
        margin-right: 0
        `}
        ${media.mobile`
          margin: 0 auto;  
    `}
      }
    }
  }

  .project__image-container {
    text-align: center;
    position: relative;
    ${media.tablet`
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.60);
        border-radius: var(--border-radius);
      }
    `}
  }

  .project__image {
    width: 100%;
    max-width: 100%;
    min-width: 23rem;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project__details {
    text-align: center;
    ${media.tablet`
      text-align: center;
      position: absolute;
    `};
  }

  .project__name {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--main-color-blue);

    ${media.tablet`
    color: var(--main-color-white);
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: bold;
    `}
    ${media.mobile`
      font-size: 2rem;
      margin-bottom: 1rem;
    `};
  }

  .project__description {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    max-width: 50ch;
    background-color: var(--project-description-background);
    padding: 2rem;
    border-radius: var(--border-radius);
    line-height: 1.1;

    ${media.tablet`
    background-color: transparent;
      font-size: 1.4rem;
      line-height: 1.4;
    `};
    ${media.mobile`
      font-size: 1rem;
      line-height: 1.1;
      margin-bottom: .5rem;
    `};
  }

  .project__link-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    ${media.mobile`
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    `}
  }
  .project__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    background-color: var(--main-color-dark);
    color: var(--font-main-white);
    font-size: 1.35rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition) ease;
    border: 3px solid var(--main-color-dark);

    &:hover,
    &:focus {
      background-color: darken(var(--main-color-dark), 10%);
      color: var(--font-main-white);
    }

    &:active {
      background-color: lighten(var(--main-color-dark), 10%);
      border-color: lighten(var(--main-color-dark), 10%);
      transform: translateY(2px);
    }

    ${media.tablet`
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
    `}

    ${media.mobile`
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
    `}

    .project__link--external-icon, 
    .project__link--github-icon {
      height: 1.75rem;
      width: 1.75rem;
      padding-left: 1rem;
      filter: var(--icon-color-white);
    }
  }
`;

export default StyledProjects;
