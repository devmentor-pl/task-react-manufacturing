import { CURRENCIES } from "../constants/currencies";
import { calculatePrice } from "./calculatePrice";

export const calculateSummary = (products, currency) => {
  const minSumsForFreeDelivery = {
    [CURRENCIES.PLN]: 500,
    [CURRENCIES.USD]: 100,
  };

  const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

  const sum = products.reduce((acc, product) => {
    const [price] = calculatePrice(currency, product);
    return acc + price;
  }, 0);

  const deliveryCosts = Math.max(
    0.1 * sum,
    currency === CURRENCIES.PLN ? 20 : 5
  ).toFixed(1);

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCosts;

  return { sum, deliveryCosts, minSumForFreeDelivery, totalCost };
};
