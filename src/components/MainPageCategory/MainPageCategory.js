import {
  ImageFemale,
  MainText,
  StyledLink,
  Text,
} from "./MainPageCategory.styled";

export const MainPageCategory = ({ image, gender }) => {
  return (
    <ImageFemale image={image}>
      <MainText>hot list</MainText>
      <Text>
        <span>{gender}</span>collection
      </Text>
      <StyledLink to={`/${gender}`}>Shop now</StyledLink>
    </ImageFemale>
  );
};
