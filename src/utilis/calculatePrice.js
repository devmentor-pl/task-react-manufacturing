import { CURRENCIES } from "../constants/currencies";
import { CURRENCY_SIGN } from "../context/CurrencyContext";

export const calculatePrice = (currency, product) => {
  const price =
    currency === CURRENCIES.PLN ? product.pricePLN || 0 : product.priceUSD || 0;

  return [price * (product.quantity || 1), price];
};

export const getCurrencySign = (currency) => CURRENCY_SIGN[currency];
