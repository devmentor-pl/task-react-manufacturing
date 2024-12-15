import styled from "styled-components";

export const Item = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

export const Content = styled.div`
  padding-bottom: 1rem;
`;

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-weight: 500;
  ${({ title }) =>
    title &&
    `text-align: center;
     text-transform: uppercase;
     text-decoration: underline;
  `}
`;

export const TextContent = styled.p`
  ${({ center }) =>
    center &&
    `text-align: center;
     margin-bottom: 1.5rem
  `}
`;
