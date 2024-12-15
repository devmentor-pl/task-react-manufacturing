import { CurrencyContext } from "../../context/CurrencyContext";
import { useContext } from "react";
import { calculatePrice, getCurrencySign } from "../../utilis/calculatePrice";

export const Price = ({ product }) => {
  const [currency] = useContext(CurrencyContext);
  const [price] = calculatePrice(currency, product);
  const currencySign = getCurrencySign(currency);

  return (
    <>
      {price}
      {currencySign}
    </>
  );
};
