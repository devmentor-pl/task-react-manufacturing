import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.footer};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 1410px;
  gap: 3rem;
  padding: 1rem 2rem;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 273px;
  flex-grow: 2;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  margin-bottom: 1rem;
`;

export const Contact = styled.a`
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

export const SocialItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Link = styled.a`
  padding: 0.5rem 0;
`;
