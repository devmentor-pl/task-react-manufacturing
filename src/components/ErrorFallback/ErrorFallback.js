import { Container } from "./ErrorFallback.styled";

export const ErrorFallback = ({ message }) => {
  return (
    <Container>
      <h2>Error</h2>
      <p>{message || "An error occurred. Please try again later."}</p>
    </Container>
  );
};
