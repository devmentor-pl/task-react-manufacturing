import { NAVITEMS } from "../../constants/categories";
import { NavList, StyledNavLink } from "./Navigation.styled";

export const Navigation = ({
  isOpen = false,
  setIsOpen,
  hideOnSmall = true,
}) => {
  return (
    <NavList $hideOnSmall={hideOnSmall} $isOpen={isOpen}>
      {NAVITEMS.map((navItem) => (
        <li key={navItem.path}>
          <StyledNavLink
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
            }}
            to={navItem.path}
          >
            {navItem.categoryName}
          </StyledNavLink>
        </li>
      ))}
    </NavList>
  );
};
