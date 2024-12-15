import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.footer};
  margin-bottom: 0.5rem;
  flex-grow: 1;
`;

export const Image = styled.img`
  width: 85px;
  height: 140px;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.textRow}rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const FavouriteProduct = styled.div`
  width: 100%;
  gap: 3rem;
`;

export const PriceRow = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  font-weight: 400;
`;

export const Option = styled.p`
  color: ${({ theme }) => theme.colors.option};
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 400;
`;

export const PriceOfProduct = styled.p`
  color: ${({ theme }) => theme.colors.option};
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  font-weight: 400;
`;

export const Total = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  font-weight: 500;
`;

export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const Test = styled.div`
  display: flex;
  justify-content: space-between;
`;
