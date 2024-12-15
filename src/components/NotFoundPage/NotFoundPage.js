import { Container, BackButton } from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <BackButton to="/home">Go back to home</BackButton>
    </Container>
  );
};
