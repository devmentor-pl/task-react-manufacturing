import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledFooter = styled.footer`
  background-color: var(--project-description-background);
  padding: 3rem 0;
  text-align: center;
  ${media.tablet`
     padding: 2rem 0;

  `}

  .footer__container {
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .footer__paragraph {
    color: var(--icons-carousel-backgroud);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: wrap;

    ${media.tablet`
    font-size: 0.9rem;
  `}

    ${media.mobile`
    font-size: 0.8rem;
  `}
  }
`;

export default StyledFooter;
