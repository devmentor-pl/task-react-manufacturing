import { Product } from "../Product/Product";
import { Container, Header, Wrapper } from "./Products.styled";

export const Products = ({ products, headerText }) => (
  <Container>
    <Header>{headerText}</Header>
    <Wrapper>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </Wrapper>
  </Container>
);
