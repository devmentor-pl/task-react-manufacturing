import REMOVE_ICON from "../../assets/Vector.svg";
import { NumberOfProduct } from "../NumberOfProduct/NumberOfProduct";
import { useContext, useEffect, useState } from "react";
import { removeFromCart, updateCartItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CurrencyContext } from "../../context/CurrencyContext";
import { calculatePrice, getCurrencySign } from "../../utilis/calculatePrice";
import {
  Button,
  ButtonImage,
  Container,
  FavouriteProduct,
  Image,
  PriceRow,
  Title,
  TopRow,
  Total,
  Option,
  PriceOfProduct,
  Test,
} from "./CardProduct.styled";
import { useIsMobile } from "../../hooks/useIsMobile";

export const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [currency] = useContext(CurrencyContext);
  const [total, setTotal] = useState(0);
  const isMobile = useIsMobile();
  const [check, setIsCheck] = useState(0);

  useEffect(() => {
    const [calculatedTotal, price] = calculatePrice(currency, product);
    setTotal(calculatedTotal);
    setIsCheck(price);
  }, [product, currency]);

  const currencySign = getCurrencySign(currency);

  const handleQuantityChange = (newQuantity) => {
    dispatch(
      updateCartItem({
        id: product.id,
        size: product.size,
        color: product.color,
        quantity: newQuantity,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      removeFromCart({
        id: product.id,
        size: product.size,
        color: product.color,
      })
    );
  };

  return (
    <Container>
      <Image src={product.photo} alt="clothes" />
      <FavouriteProduct>
        <TopRow>
          <Test>
            <Title>
              {product.brand}
              {product.productName}
            </Title>
            <Button onClick={handleRemove}>
              <ButtonImage src={REMOVE_ICON} alt="remove icon" />
            </Button>
          </Test>
          <Option>color: {product.color}</Option>
          <Option>size: {product.size}</Option>
        </TopRow>
        <PriceRow>
          {!isMobile && (
            <PriceOfProduct>
              {check}
              {currencySign}
            </PriceOfProduct>
          )}
          <NumberOfProduct
            value={product.quantity}
            onChange={handleQuantityChange}
          />
          <Total>
            {total}
            {currencySign}
          </Total>
        </PriceRow>
      </FavouriteProduct>
    </Container>
  );
};
