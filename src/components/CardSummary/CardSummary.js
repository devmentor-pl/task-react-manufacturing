import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CardRow, Container, SummaryRow, Title } from "./CardSummary.styled";
import { getCurrencySign } from "../../utilis/calculatePrice";
import { calculateSummary } from "../../utilis/calculateSummary";

export const CardSummary = ({ products }) => {
  const [currency] = useContext(CurrencyContext);

  const { sum, deliveryCosts, minSumForFreeDelivery, totalCost } =
    calculateSummary(products, currency);

  const currencySign = getCurrencySign(currency);

  return (
    <Container>
      <Title>cart totals</Title>
      <CardRow>
        <p>subtotal</p>
        <p>
          {sum} {currencySign}
        </p>
      </CardRow>
      <CardRow>
        <p>shipping</p>
        <p>
          {sum > minSumForFreeDelivery ? 0 : deliveryCosts} {currencySign}
        </p>
      </CardRow>
      <CardRow>
        <p>Free delivery up</p>
        <p>
          {minSumForFreeDelivery} {currencySign}
        </p>
      </CardRow>
      <SummaryRow>
        <p>total</p>
        <p>
          {totalCost} {currencySign}
        </p>
      </SummaryRow>
      <FullWidthButton>procced to checkout</FullWidthButton>
    </Container>
  );
};
