import styled from 'styled-components';

export const Footer = styled.footer`
  background: #130f0b;
  border-top: 1px solid var(--border);
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 40px) 28px;
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

export const FooterBrand = styled.div``;

export const FooterLogo = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text);
`;

export const FooterText = styled.p`
  margin-top: 14px;
  max-width: 34ch;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
`;

export const FooterCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterColTitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
`;

export const FooterLink = styled.a`
  font-size: 13px;
  color: var(--muted);
  transition: color var(--ease);

  &:hover {
    color: var(--text);
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding: 18px clamp(20px, 5vw, 40px);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--dim);
  font-size: 12px;
`;

const StyledFooter = {
  Footer,
  FooterInner,
  FooterBrand,
  FooterLogo,
  FooterText,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterBottom,
};

export default StyledFooter;
