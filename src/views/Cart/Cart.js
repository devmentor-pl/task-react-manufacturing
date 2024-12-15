import { CardProductList } from "../../components/CardProductList/CardProductList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <FlexContainer>
      <CardProductList products={cartItems} />
    </FlexContainer>
  );
};
