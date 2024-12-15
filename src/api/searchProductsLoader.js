import { BACK_END_URL } from "../constants/api";

export const searchProductsLoader = () => {
  return fetch(`${BACK_END_URL}/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("Error in searchProductsLoader:", error.message);
    });
};
