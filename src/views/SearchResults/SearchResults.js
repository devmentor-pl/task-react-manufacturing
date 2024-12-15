import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Products } from "../../components/Products/Products";
import { NoResultsContainer } from "../../components/NoResultsContainer/NoResultsContainer";

export const SearchResults = () => {
  const allProducts = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const phrase = localStorage.getItem("searchPhrase")?.toLowerCase() || "";
    setSearchPhrase(phrase);

    const filtered = allProducts.filter((product) =>
      ["category", "subcategory", "productName"].some((key) =>
        product[key].toLowerCase().includes(phrase)
      )
    );

    setFilteredProducts(filtered);
  }, [allProducts]);

  return (
    <>
      {filteredProducts.length > 0 ? (
        <Products
          products={filteredProducts}
          headerText={`Results for "${searchPhrase}"`}
        />
      ) : (
        <NoResultsContainer />
      )}
    </>
  );
};
