import { Container } from "./FlexContainer.styled";

export const FlexContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

// export const FlexContainer = ({ children, flex }) => {
//   return <Container $flex={flex}>{children}</Container>;
// };
