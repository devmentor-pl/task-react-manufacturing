import styled from "styled-components";

export const NoResults = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.textCategory}rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  color: ${({ theme }) => theme.colors.text};
`;
