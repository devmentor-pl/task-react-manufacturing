import { Hero } from "../../components/Hero/Hero";
import HERO_IMG from "../../assets/hero.webp";
import { Category } from "../../components/Category/Category";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <Hero heroimg={HERO_IMG} />
      <Outlet />
      <Category />
    </>
  );
};
