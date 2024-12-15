import { Products } from "../../components/Products/Products";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import {
  Button,
  ButtonWrapper,
  FlexContainers,
  StyledBar,
  WrapperContent,
} from "./ProductsList.styled";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { calculatePrice } from "../../utilis/calculatePrice";

export const ProductsList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const { products, numberOfPages } = useLoaderData();
  const params = useParams();
  const [currency] = useContext(CurrencyContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  let foundSubcategory;

  if (params.subcategory) {
    foundSubcategory = foundCategory.subCategories.find(
      (sc) => params.subcategory === sc.path
    );
  }

  const sortPriceIncreasing = () => {
    const sorted = [...products].sort(
      (a, b) => calculatePrice(currency, a) - calculatePrice(currency, b)
    );
    setFilteredProducts(sorted);
  };

  const sortPriceDeacreasing = () => {
    const sorted = [...products].sort(
      (a, b) => calculatePrice(currency, b) - calculatePrice(currency, a)
    );
    setFilteredProducts(sorted);
  };

  return (
    <FlexContainers>
      <ExpandableMenu />
      <WrapperContent>
        {!isMobile && (
          <StyledBar>
            <BreadCrumbs />
            <ButtonWrapper>
              <Button onClick={sortPriceIncreasing}>Price Up</Button>
              <Button onClick={sortPriceDeacreasing}>Price Down</Button>
            </ButtonWrapper>
          </StyledBar>
        )}
        <Products
          products={filteredProducts}
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
        />
        <Pagination numberOfPages={numberOfPages} />
      </WrapperContent>
    </FlexContainers>
  );
};
