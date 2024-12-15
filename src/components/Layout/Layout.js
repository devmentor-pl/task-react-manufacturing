import { CurrenciesSelector } from "../CurrenciesSelector/CurrenciesSelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { TopBar } from "../TopBar/TopBar";
import { FlexContainer, MainContent, Loading } from "./Layout.styled";
import { Outlet, useNavigation } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [currency, setCurrency] = useLocalStorage(
    "select_currency",
    CURRENCIES.PLN
  );

  const navigation = useNavigation();
  const isMobile = useIsMobile(800);

  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      <MainContent>
        {navigation.state === "loading" && (
          <Loading className="loading-spinner">Loading...</Loading>
        )}
        <TopBar>
          <Logo
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isSearchBar={isSearchBar}
            setIsSearchBar={setIsSearchBar}
          />
          {!isMobile && (
            <Navigation
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              hideOnSmall={true}
            />
          )}
          <FlexContainer>
            <CurrenciesSelector />
            <IconMenu
              setIsMenuOpen={setIsMenuOpen}
              setIsSearchBar={setIsSearchBar}
              isSearchBar={isSearchBar}
            />
          </FlexContainer>
        </TopBar>
        <Outlet />
      </MainContent>
      <Footer />
    </CurrencyContext.Provider>
  );
};
