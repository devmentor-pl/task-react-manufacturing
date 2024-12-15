import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 1410px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.textCart}rem;
  text-transform: uppercase;
  margin: 0 0 3.12rem;
  align-self: start;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 18px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 1rem;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.textMedium}rem;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const ProductWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 70%;
  width: 100%;
`;
