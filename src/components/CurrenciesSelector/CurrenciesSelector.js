import { CURRENCIES } from "../../constants/currencies";
import { Select } from "./CurrenciesSelector.styled";
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";

export const CurrenciesSelector = () => {
  const [currency, setCurrency] = useContext(CurrencyContext);
  return (
    <Select
      value={currency}
      onChange={(e) => {
        setCurrency(e.currentTarget.value);
      }}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </Select>
  );
};
