import REMOVE_ICON from "../../assets/Vector.svg";
import { useFetcher } from "react-router-dom";
import {
  Container,
  Image,
  Title,
  TopRow,
  DeleteButton,
  Wrapper,
} from "./FavouritesProducts.styled";
import { SelectedOptions } from "../SelectedOptions/SelectedOptions";
import { Price } from "../Price/Price";
import { useProductOptions } from "../../hooks/useProductOptions";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export const FavouritesProducts = ({ favourite }) => {
  const { Form } = useFetcher();
  const product = favourite.product;

  const {
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    handleAddToCart,
  } = useProductOptions(product);

  return (
    <Container>
      <div>
        <Image src={product.photos[0]} alt="clothes" />
      </div>
      <div>
        <TopRow>
          <Title>
            <p>{product.productName}</p>
            <p>{product.brand}</p>
            <p>
              <Price product={product} />
            </p>
            <SelectedOptions
              sizes={product.size}
              colors={product.color}
              setSelectedSize={setSelectedSize}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
          </Title>
        </TopRow>
        <Wrapper>
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method="DELETE"
          >
            <DeleteButton>
              <img src={REMOVE_ICON} alt="remove icon" />
            </DeleteButton>
          </Form>
          <FullWidthButton onClick={handleAddToCart}>
            Add to cart
          </FullWidthButton>
        </Wrapper>
      </div>
    </Container>
  );
};
