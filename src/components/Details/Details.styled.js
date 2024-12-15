import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem auto 3rem;
  max-width: 550px;

  @media (min-width: 1100px) {
    width: 40%;
    margin: 0;
  }
`;

export const Title = styled.p`
  margin: 1rem 0;
  font-weight: 500;
`;

export const Cost = styled.p`
  color: ${({ theme }) => theme.colors.price};
  font-size: ${({ theme }) => theme.fontSize.textItem}rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin-top: 2rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 3rem;
`;
