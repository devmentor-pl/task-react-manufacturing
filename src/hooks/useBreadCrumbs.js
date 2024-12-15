import { useParams } from "react-router-dom";
import { CATEGORIES, NAVITEMS } from "../constants/categories";

export const useBreadCrumbs = () => {
  const { gender, category, subcategory } = useParams();

  const founderGender = NAVITEMS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadCrumbs = [
    {
      categoryName: founderGender.categoryName,
      path: `/${founderGender.path}`,
    },
    {
      categoryName: foundCategory.categoryName,
      path: `/${founderGender.path}/${foundCategory.path}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory.subCategories.find(
      (sc) => sc.path === subcategory
    );

    breadCrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${founderGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }

  return breadCrumbs;
};
