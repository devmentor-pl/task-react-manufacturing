import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledContact = styled.div`
  .contact__info {
    color: var(--font-main-white);
    text-align: center;
    margin: 3rem auto;
    max-width: var(--max-width);
    line-height: 1.4;

    .contact__heading {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 3rem;
      color: var(--main-color-blue);

      ${media.tablet`
        font-size: 2.5rem;
      `}

      ${media.mobile`
        font-size: 2.2rem;
      margin-bottom: 2rem;
      `}
    }

    .contact__paragraph {
      font-size: 1.8rem;
      margin: 0 auto;
      width: 80%;
      text-align: center;
      ${media.tablet`
        font-size: 1.3rem;
        line-height: 1.5
      `};
      ${media.mobile`
        font-size: 1.1rem;
      `};
    }
  }

  .contact__button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    width: max-content;
    padding: 1.75rem 3rem;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    margin: 5rem auto;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    text-decoration: none;
    border: 3px solid var(--main-color-blue);

    &:hover {
      background-color: transparent;
      border-color: var(--main-color-blue);
    }

    ${media.tablet`
      font-size: 1.25rem;
      padding: 1rem 3rem;
    `}

    ${media.mobile`
      font-size: 1.5rem;
      padding: 0.5rem 1.5rem;
      margin: 3rem auto;
    `}

    .contact__button--icon {
      margin-left: 2rem;
      width: 26px;
      height: 26px;
      filter: var(--icon-color-white);

      ${media.tablet`
      margin-left: 1.25rem;
      font-size: 1.1rem;
      width: 18px;
      height: 18px;
    `}

      ${media.mobile`
      font-size: 1rem;
      margin-left: 1rem;
    `}
    }
  }
`;

export default StyledContact;
