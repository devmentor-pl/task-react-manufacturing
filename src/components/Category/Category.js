import WOMEN_PIC from "../../assets/women_cat.jpg";
import MAN_PIC from "../../assets/man_cat.jpg";
import CHILD_PIC from "../../assets/child_cat.jpg";
import { MainPageCategory } from "../MainPageCategory/MainPageCategory";
import { CategoryContent, Container, Wrapper } from "./Category.styled";

export const Category = () => {
  return (
    <CategoryContent>
      <Container>
        <MainPageCategory image={WOMEN_PIC} gender="women" />
        <Wrapper>
          <MainPageCategory image={MAN_PIC} gender="men" />
          <MainPageCategory image={CHILD_PIC} gender="children" />
        </Wrapper>
      </Container>
    </CategoryContent>
  );
};
