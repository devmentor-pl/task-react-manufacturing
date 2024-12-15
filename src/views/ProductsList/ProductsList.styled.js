import styled from "styled-components";
export const FlexContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1410px;
  margin: 0 auto;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperContent = styled.div`
  flex-grow: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  width: 100px;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
