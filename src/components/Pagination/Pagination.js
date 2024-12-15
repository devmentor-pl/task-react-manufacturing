import { NavLink } from "react-router-dom";
import { List, ListItem } from "./Pagination.styled";

export const Pagination = ({ numberOfPages }) => {
  const pages = Array(numberOfPages).fill(null);

  return (
    <List>
      {pages.map((_, index) => (
        <ListItem key={index}>
          <NavLink to={`?page=${index + 1}`}>{index + 1}</NavLink>
        </ListItem>
      ))}
    </List>
  );
};
