import styled from "styled-components";

export const ButtonSize = styled.button`
  background-color: transparent;
  border: none;
  border: 1px solid
    ${({ theme, $highLight }) =>
      $highLight ? theme.colors.text : theme.colors.footer};
  cursor: pointer;
  padding: 0 13px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  margin-right: 1rem;
  font-weight: 500;
`;

export const ButtonColor = styled.div`
  background-color: ${({ color }) => color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: ${({ $highLight }) => ($highLight ? "2px solid black" : "none")};
  outline-offset: 5px;

  &::after {
    content: "${({ color }) => color}";
    position: absolute;
    top: -2.2rem;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
  }

  &::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: -1.3rem;
    rotate: 45deg;
    left: 35%;
    transform: translateX(-50%);
    background: black;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    outline: 2px solid black;
    outline-offset: 5px;
  }

  &:hover::after {
    opacity: 1;
  }
  &:hover::before {
    opacity: 1;
  }
`;
