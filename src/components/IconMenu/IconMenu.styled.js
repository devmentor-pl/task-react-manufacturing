import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Icon = styled.img`
  width: 1.25rem;
  cursor: pointer;
`;

export const ListItem = styled.li`
  position: relative;

  ${({ $hideOnSmall }) =>
    $hideOnSmall &&
    `
  @media (max-width: 800px) {
    display: none
  }
  `}
`;

export const StyledLink = styled(Link)`
  padding: 0.25rem 0.5rem;
`;

export const BasketItems = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  background-color: yellow;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
