import styled from "styled-components";

export const CategoryContent = styled.div`
  width: 100%;
  max-width: 1410px;
  margin: 0 auto 3rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1.56rem;

  @media (min-width: 800px) {
    height: 600px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-self: stretch;
  gap: 25px;

  & > :nth-child(2) {
    background-position: 77%;
  }
`;
