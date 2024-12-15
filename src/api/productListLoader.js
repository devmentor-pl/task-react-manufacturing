import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { gender, category, subcategory },
  request,
}) {
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get("page") || 1;
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (foundGender && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subCategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/home");
      }
    }

    url = `${url}&_limit=5&_page=${page}`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const total = response.headers.get("X-Total-Count");

      return response.json().then((products) => {
        const numberOfPages = Math.ceil(Number(total) / 5);

        return {
          products,
          numberOfPages,
        };
      });
    });
  } else {
    redirect("/home");
  }
}
