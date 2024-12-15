import { BACK_END_URL } from "../constants/api";

export const deleteFavouriteAction = ({ params }) => {
  return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to delete favourite with id ${params.favouriteId}: ${response.status}`
        );
      }

      return { success: true };
    })
    .catch((error) => {
      console.error("Error while deleting favourite:", error);
    });
};
