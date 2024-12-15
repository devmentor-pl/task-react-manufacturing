import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from "../constants/api";

export const mainPageLoader = ({ params }) => {
  const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];

  if (backEndPath) {
    return fetch(`${BACK_END_URL}/${backEndPath}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch products for gender: ${params.gender}`
          );
        }

        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching main page data:", error);
      });
  } else {
    console.warn(`Invalid gender: ${params.gender}. Redirecting to /home.`);
    return redirect("/home");
  }
};
