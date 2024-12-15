import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export const Favourites = () => {
  const favouritesProducts = useLoaderData();

  return <FavouritesList favourites={favouritesProducts} />;
};
