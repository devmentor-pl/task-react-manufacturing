import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export const useProductOptions = (product) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color.");
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        productName: product.productName,
        size: selectedSize,
        color: selectedColor,
        quantity,
        pricePLN: product.pricePLN,
        priceUSD: product.priceUSD,
        photo: product.photos[0],
      })
    );
  };

  return {
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
    handleAddToCart,
  };
};
