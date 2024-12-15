import styled from "styled-components";

export const Button = styled.button`
  background: none;
  width: 100%;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
