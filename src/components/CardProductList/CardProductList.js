import { v4 as uuidv4 } from "uuid";
import { CardProduct } from "../CardProduct/CardProduct";
import { CardSummary } from "../CardSummary/CardSummary";
import {
  Content,
  Item,
  List,
  ProductWrapper,
  Text,
  Title,
  Wrapper,
} from "./CardProductList.styled";

export const CardProductList = ({ products }) => {
  return (
    <Content>
      <Title>cart</Title>
      <List>
        <Item>
          <Text>01</Text>
          <div>
            <Text>shopping bag</Text>
            <p>Manage Your Items List</p>
          </div>
        </Item>
        <Item>
          <Text>02</Text>
          <div>
            <Text>shipping and checkout</Text>
            <p>Checkout Your Items List</p>
          </div>
        </Item>
        <Item>
          <Text>03</Text>
          <div>
            <Text>confirmation</Text>
            <p>Review And Submit Your Order</p>
          </div>
        </Item>
      </List>
      <Wrapper>
        <ProductWrapper>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ProductWrapper>
        <CardSummary products={products} />
      </Wrapper>
    </Content>
  );
};
