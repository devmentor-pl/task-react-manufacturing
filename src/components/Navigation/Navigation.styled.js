import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $hideOnSmall }) =>
    $hideOnSmall &&
    `
    @media (max-width: 800px) {
    display:none}
  `}

  ${({ $isOpen }) =>
    $isOpen &&
    `
    @media (max-width: 800px) {
    display:flex;
    flex-direction: column;
    gap: 0.63rem;
    margin-top: 2rem;
    }
  `}
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 0.13rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  position: relative;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.75rem;
    left: 0.7rem;
    width: 0;
    height: 0.15rem;
    transition: width 0.28s cubic-bezier(0.47, 0, 0.745, 0.715);
    background-color: currentColor;
  }

  &:hover:after {
    width: 55%;
  }

  &.active:hover:after {
    width: 0;
  }
`;
