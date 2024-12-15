import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 580px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    width: 28rem;
    margin: 0;
  }
`;

export const Title = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.footer};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 500;
  padding-bottom: 1rem;
`;

export const SummaryRow = styled(CardRow)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 500;
`;

export const Delivery = styled.div`
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.text};
`;
