import LOOP_ICON from "../../assets/search.svg";
import HEART_ICON from "../../assets/heart.svg";
import BAG_ICON from "../../assets/bag.svg";
import {
  BasketItems,
  Icon,
  ListIcons,
  ListItem,
  StyledLink,
} from "./IconMenu.styled";
import { useSelector } from "react-redux";

export const IconMenu = ({ setIsMenuOpen, setIsSearchBar, isSearchBar }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleIconClick = () => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <ListIcons>
      <ListItem $hideOnSmall>
        <div
          onClick={() => {
            setIsSearchBar(!isSearchBar);
          }}
        >
          <Icon src={LOOP_ICON} alt="search icon" />
        </div>
      </ListItem>
      <ListItem $hideOnSmall>
        <StyledLink to="/favourite">
          <Icon src={HEART_ICON} alt="favourite items" />
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/basket" onClick={handleIconClick}>
          <Icon src={BAG_ICON} alt="basket" />
          <BasketItems>{totalQuantity}</BasketItems>
        </StyledLink>
      </ListItem>
    </ListIcons>
  );
};
