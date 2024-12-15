import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouritesProducts } from "../FavouritesProducts/FavouritesProducts";
import { Title, Container, Wrapper } from "./FavouritesList.styled";

export const FavouritesList = ({ favourites }) => {
  return (
    <CenteredContent>
      <Container>
        <Title>wishlist</Title>
        <Wrapper>
          {favourites.map((favourite) => (
            <FavouritesProducts key={favourite.id} favourite={favourite} />
          ))}
        </Wrapper>
      </Container>
    </CenteredContent>
  );
};
