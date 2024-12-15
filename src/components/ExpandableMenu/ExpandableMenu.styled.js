import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ExpandableContainer = styled.div`
  width: 176px;
  margin-top: 1rem;
  padding: 0 2rem;
  @media (min-width: 600px) {
    margin-right: 2rem;
    padding-right: 0;
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Image = styled.img`
  transform: ${({ $active }) => ($active ? "rotate(180deg)" : "none")};
`;

export const List = styled.ul`
  padding-left: 2rem;
  margin-top: 0.5rem;
`;

export const ItemLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;

  &.active {
    font-weight: 700;
  }
`;

export const CategoryLink = styled(ItemLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
