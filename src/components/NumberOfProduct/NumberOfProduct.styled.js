import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 24px;
  font-weight: normal;

  @media (min-width: 800px) {
    width: 116px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.colors.footer};
  }
`;

export const Text = styled.p`
  flex-grow: 1;
  text-align: center;
`;

export const Button = styled.button`
  all: unset;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (min-width: 800px) {
    padding: 1rem;
  }
`;
