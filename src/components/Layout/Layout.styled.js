import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.2rem;
`;

export const MainContent = styled.div`
  width: 100%;
  flex: 1;
`;

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.63rem 1.25rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
