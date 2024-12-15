import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export const ContentProduct = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
