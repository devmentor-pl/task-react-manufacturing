import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/TransactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
