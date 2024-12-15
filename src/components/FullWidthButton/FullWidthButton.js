import { Button } from "./FullWidthButton.styled";

export const FullWidthButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
