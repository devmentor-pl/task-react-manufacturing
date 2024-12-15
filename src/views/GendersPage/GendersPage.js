import { Outlet, useLoaderData } from "react-router-dom";
import { Products } from "../../components/Products/Products";
import { HeroGender } from "../../components/HeroGender/HeroGender";

export const GendersPage = () => {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <HeroGender heroImage={heroImageUrl} />
      <Outlet />
      <Products products={bestsellers} headerText="Check out our Bestsellers" />
    </>
  );
};
