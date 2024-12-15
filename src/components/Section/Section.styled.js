import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textMedium};
`;
