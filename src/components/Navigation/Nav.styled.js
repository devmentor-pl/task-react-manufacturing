import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  > div {
    display: flex;
    gap: 1rem;

    ${media.small`
      display: ${(props) => (props.open ? 'flex' : 'none')};
      flex-direction: column;
    `}
  }

  svg {
    display: none;
    cursor: pointer;

    ${media.small`
      display: block;
    `}
  }
`;

export default StyledNavbar;
