import { CATEGORIES } from "../../constants/categories";
import {
  Wrapper,
  HeroImage,
  Hero,
  Container,
  Title,
  List,
  StyledNavLink,
} from "./HeroGender.styled";
import { useParams } from "react-router-dom";

export const HeroGender = ({ heroImage }) => {
  const { gender } = useParams();

  return (
    <Wrapper>
      <Hero>
        <HeroImage src={heroImage} alt="women bestsellers" />
        <Container>
          <Title>{gender}</Title>
          <List>
            {CATEGORIES.map((category) => (
              <li key={category.path}>
                <StyledNavLink to={`/${gender}/${category.path}`}>
                  {category.categoryName}
                </StyledNavLink>
              </li>
            ))}
          </List>
        </Container>
      </Hero>
    </Wrapper>
  );
};
