import { BACK_END_URL } from "../constants/api";

export const favouritesLoader = () => {
  return fetch(`${BACK_END_URL}/favourites?_expand=product`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching favourites:", error);
    });
};
