import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const Image = styled.img`
  width: 245px;
  height: 300px;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  flex-grow: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonCart = styled.img`
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  gap: 1rem;
`;
