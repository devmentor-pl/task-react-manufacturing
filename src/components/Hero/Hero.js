import { CenteredContent } from "../CenteredContent/CenteredContent";
import WOMAN_PIC from "../../assets/woman_1.webp";
import {
  Container,
  ImageBackground,
  Header,
  StyledText,
  StyledLink,
  Flex,
  LineText,
  Text,
  Image,
} from "./Hero.styled";

export const Hero = ({ heroimg }) => {
  return (
    <ImageBackground $heroimg={heroimg}>
      <CenteredContent>
        <Container>
          <Flex>
            <LineText></LineText>
            <Text>summer 2020</Text>
          </Flex>

          <Header>hello new season</Header>
          <StyledText>
            limited time offer - up to 60% off & free shipping
          </StyledText>
          <StyledLink to="/women">discover more</StyledLink>
        </Container>
        <Image src={WOMAN_PIC} />
      </CenteredContent>
    </ImageBackground>
  );
};
