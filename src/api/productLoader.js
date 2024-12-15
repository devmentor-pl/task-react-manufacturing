import { BACK_END_URL } from "../constants/api";

export const productLoader = ({ params: { productId } }) => {
  if (!productId) {
    console.warn("Product ID is missing.");
    throw new Error("Invalid product ID.");
  }

  return fetch(`${BACK_END_URL}/products/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID ${productId}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error("Error in productLoader:", error);
    });
};
