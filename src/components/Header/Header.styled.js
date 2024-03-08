import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledHeader = styled.header`
  max-width: var(--max-width);
  background-color: rgba(26, 26, 32, 0.85);
  color: var(--font-main-white);
  height: 100vh;
  margin: 0 auto;
  padding: 0 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  .header__content {
    padding-top: 10rem;
  }

  .header__title,
  .header__name,
  .header__profession,
  .header__description,
  .header__link {
    transition: var(--transition);
  }

  .header__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .header__name {
    font-size: 4rem;
    color: var(--main-color-blue);
    margin-bottom: 1rem;
  }

  .header__profession {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .header__description {
    font-size: 1.5rem;
    max-width: 50ch;
    margin-bottom: 2rem;
  }

  .header__speciality {
    color: var(--main-color-blue);
  }

  .header__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    padding: 0.75rem 0.75rem;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;
    border: 2px solid var(--main-color-blue);

    &:hover {
      background-color: darken(var(--main-color-blue), 10%);
      border-color: var(--main-color-blue);

      .header__link--icon {
        filter: invert(41%) sepia(22%) saturate(2756%) hue-rotate(142deg)
          brightness(94%) contrast(88%);
      }
    }
  }

  .header__link--icon {
    margin-left: 0.5rem auto;
    width: 28px;
    height: 28px;
    fill: var(--font-main-white);
    transition: all 0.3s ease;
    padding-left: 0.75rem;

    .header__link:hover & {
      fill: var(--font-main-white);
    }
  }

  ${media.small`
    padding: 1rem 2rem;
    .header__title {
      font-size: 2.5rem;
    }
    .header__name {
      font-size: 3rem;
    }
    .header__profession {
      font-size: 2rem;
    }
    .header__description {
      font-size: 1rem;
    }
    .header__link {
      font-size: 1.2rem;
    }
  `}
`;

export default StyledHeader;
