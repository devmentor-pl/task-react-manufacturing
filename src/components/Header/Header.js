import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import StyledHeader from './Header.styled';
import { SearchIcon } from '../Common/icons';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
];

export default function Header({ onSearchClick }) {
  const { pathname } = useLocation();

  return (
    <StyledHeader.Header>
      <StyledHeader.HeaderInner>
        <StyledHeader.Logo as={Link} to="/">
          SAVORY
        </StyledHeader.Logo>

        <StyledHeader.Nav>
          {LINKS.map((link) => (
            <StyledHeader.NavLink
              as={Link}
              key={link.to}
              to={link.to}
              $active={pathname === link.to}
            >
              {link.label}
            </StyledHeader.NavLink>
          ))}
        </StyledHeader.Nav>

        <StyledHeader.Actions>
          <StyledHeader.SearchButton type="button" aria-label="Search" onClick={onSearchClick}>
            <SearchIcon />
          </StyledHeader.SearchButton>
          <StyledHeader.HeaderCTA as={Link} to="/signin" $variant="primary">
            Sign In
          </StyledHeader.HeaderCTA>
        </StyledHeader.Actions>
      </StyledHeader.HeaderInner>
    </StyledHeader.Header>
  );
}
