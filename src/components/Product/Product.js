import { useFetcher } from "react-router-dom";
import { Button, Heart, Image, ItemLink, Title } from "./Product.styled";
import { Price } from "../Price/Price";
import { useState } from "react";

export const Product = ({ product }) => {
  const { Form } = useFetcher();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ItemLink
      to={`/${product.gender}/${product.category}/${product.subcategory}/${product.id}`}
    >
      <Image src={product.photos[0]} />
      <Title>{product.productName}</Title>
      <p>
        <Price product={product} />
      </p>
      <Form
        method="POST"
        action={`/add-to-favaorites/${product.id}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite((prev) => !prev);
        }}
      >
        <Button>
          <Heart $isFavorite={isFavorite}></Heart>
        </Button>
      </Form>
    </ItemLink>
  );
};
