import { useEffect, useRef, useState } from "react";
import LOOP_ICON from "../../assets/search.svg";
import { Navigation } from "../Navigation/Navigation";
import {
  StyledLogo,
  HamburgerIcon,
  OverlayMenu,
  SearchOverlayMenu,
  Input,
  StyledLink,
  Icon,
} from "./Logo.styled";
import { useSearchBar } from "../../hooks/useSearchBar";

export const Logo = ({
  showHamburger = true,
  isMenuOpen,
  setIsMenuOpen,
  isSearchBar,
  setIsSearchBar,
}) => {
  const { searchPhrase, searchRef, handleSearchInput, handleSearchSubmit } =
    useSearchBar(setIsSearchBar);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleIconClick = (setter) => {
    if (setter) {
      setter(false);
    }
  };

  return (
    <>
      {showHamburger && (
        <HamburgerIcon
          $hideOnLarge
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          $active={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerIcon>
      )}
      <StyledLogo to="/home" onClick={() => handleIconClick(setIsMenuOpen)} />
      <OverlayMenu $isOpen={isMenuOpen}>
        <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </OverlayMenu>
      {isSearchBar && (
        <SearchOverlayMenu ref={searchRef}>
          <Input
            type="text"
            value={searchPhrase}
            onChange={handleSearchInput}
            placeholder="Search products..."
          />
          <StyledLink to="home/search" onClick={handleSearchSubmit}>
            <Icon src={LOOP_ICON} alt="search icon" />
          </StyledLink>
        </SearchOverlayMenu>
      )}
    </>
  );
};
