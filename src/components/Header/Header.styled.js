import styled from 'styled-components';
import { Button } from './common.styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 40px);
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text);
  flex: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 34px;
  margin-left: auto;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active }) => ($active ? 'var(--text)' : 'var(--muted)')};
  transition: color var(--ease);

  &:hover {
    color: var(--text);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: 32px;

  @media (max-width: 860px) {
    margin-left: auto;
  }
`;

export const SearchButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--r-btn);
  color: var(--muted);
  transition:
    color var(--ease),
    background var(--ease);

  &:hover {
    color: var(--text);
    background: var(--surface);
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const HeaderCTA = styled(Button)`
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledHeader = {
  Header,
  HeaderInner,
  Logo,
  Nav,
  NavLink,
  Actions,
  SearchButton,
  HeaderCTA,
};

export default StyledHeader;
