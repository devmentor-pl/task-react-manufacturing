import { Container, Wrapper, Title } from "./Section.styled";

export const Section = ({ menu }) => {
  const [title, items] = Object.entries(menu)[0];
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Container>
    </Wrapper>
  );
};
