import React from 'react';

import { Link } from 'react-router-dom';
import StyledFooter from './Footer.styled';

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      ['Recipes', '/recipes'],
      ['Categories', '/categories'],
      ['Collections', '/collections'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about'],
      ['Chefs', '/chefs'],
      ['Careers', '/careers'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy', '/privacy'],
      ['Terms', '/terms'],
      ['Contact', '/contact'],
    ],
  },
];

export default function Footer() {
  return (
    <StyledFooter.Footer>
      <StyledFooter.FooterInner>
        <StyledFooter.FooterBrand>
          <StyledFooter.FooterLogo>SAVORY</StyledFooter.FooterLogo>
          <StyledFooter.FooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </StyledFooter.FooterText>
        </StyledFooter.FooterBrand>

        {COLUMNS.map((col) => (
          <StyledFooter.FooterCol key={col.title}>
            <StyledFooter.FooterColTitle>{col.title}</StyledFooter.FooterColTitle>
            {col.links.map(([label, to]) => (
              <StyledFooter.FooterLink as={Link} key={to} to={to}>
                {label}
              </StyledFooter.FooterLink>
            ))}
          </StyledFooter.FooterCol>
        ))}
      </StyledFooter.FooterInner>

      <StyledFooter.FooterBottom>
        <span>© 2026 Savory</span>
        <span>
          Made with care by <strong>TetraMeister</strong>
        </span>
      </StyledFooter.FooterBottom>
    </StyledFooter.Footer>
  );
}
