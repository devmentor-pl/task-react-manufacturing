import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import {
  Container,
  List,
  ListItem,
  Title,
  Wrapper,
  Cost,
} from "./Details.styled";
import { NumberOfProduct } from "../NumberOfProduct/NumberOfProduct";
import { SelectedOptions } from "../SelectedOptions/SelectedOptions";
import { Price } from "../Price/Price";
import { useProductOptions } from "../../hooks/useProductOptions";

export const Details = ({ product, content }) => {
  const {
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
    handleAddToCart,
  } = useProductOptions(product);

  const price = <Price product={product} />;

  return (
    <Container>
      <h2>{product.brand}</h2>
      <Title>{product.productName}</Title>
      <Cost>{price}</Cost>
      <Accordion items={content} />
      <SelectedOptions
        sizes={product.size}
        colors={product.color}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />
      <Wrapper>
        <NumberOfProduct value={quantity} onChange={setQuantity} />
        <FullWidthButton onClick={handleAddToCart}>
          dodaj do koszyka
        </FullWidthButton>
      </Wrapper>
      <List>
        <ListItem>
          <img src={CAR_ICON} alt="car icon" /> Dostawa do 24h
        </ListItem>
        <ListItem>
          <img src={RETURN_ICON} alt="return arrow" /> Zwrot do koszyka
        </ListItem>
      </List>
    </Container>
  );
};
