import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
  min-height: 50vw;

  @media (min-width: 600px) {
    align-items: start;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
