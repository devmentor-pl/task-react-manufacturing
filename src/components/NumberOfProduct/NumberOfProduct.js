import { Button, Container, Text } from "./NumberOfProduct.styled";

export const NumberOfProduct = ({ value = 1, onChange }) => {
  const handleValueChange = (operation) => {
    const newValue =
      operation === "increase" ? value + 1 : Math.max(value - 1, 1);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Container>
      <Button onClick={() => handleValueChange("decrease")}>-</Button>
      <Text>{value}</Text>
      <Button onClick={() => handleValueChange("increase")}>+</Button>
    </Container>
  );
};
