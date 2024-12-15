import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const BackButton = styled(Link)`
  margin-top: 1.25rem;
  padding: 0.63rem 1.25rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;
