import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li:last-of-type img {
    display: none;
  }
`;

export const ItemLink = styled(NavLink)`
  font-size: 0.75rem;
  text-transform: uppercase;

  &.active {
    font-weight: 700;
  }
`;

export const Image = styled.img`
  transform: rotate(-90deg);
  margin-left: 0.5rem;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
`;
