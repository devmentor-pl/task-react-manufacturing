import styled from "styled-components";

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1rem;

  @media (min-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 30%;
  max-width: 135px;
  border: ${({ $active, theme }) =>
    $active ? `2px solid ${theme.colors.text}` : ""};
  cursor: pointer;

  @media (min-width: 1100px) {
    margin: 0;
    justify-self: flex-start;
    width: 90px;
  }
`;

export const ZoomImage = styled.img`
  width: 100%;
  margin: 0 auto;
  max-width: 440px;

  @media (min-width: 1100px) {
    margin: 0;
    width: 500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  gap: 1rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    width: 40%;
  }
`;
