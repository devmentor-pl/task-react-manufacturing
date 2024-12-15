import {
  ButtonColor,
  ButtonSize,
  Container,
  Text,
  Wrapper,
} from "./SelectedOptions.styled";

export const SelectedOptions = ({
  sizes,
  colors,
  setSelectedSize,
  setSelectedColor,
  selectedColor,
  selectedSize,
}) => {
  return (
    <div>
      <Container>
        <Text>Sizes</Text>
        <Wrapper>
          {sizes.map((size) => {
            return (
              <ButtonSize
                $highLight={selectedSize === size}
                onClick={() => setSelectedSize(size)}
                key={size}
              >
                {size}
              </ButtonSize>
            );
          })}
        </Wrapper>
      </Container>
      <Container>
        <Text>color</Text>
        {colors.map((color) => {
          return (
            <ButtonColor
              $highLight={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              key={color}
              color={color}
            ></ButtonColor>
          );
        })}
      </Container>
    </div>
  );
};
