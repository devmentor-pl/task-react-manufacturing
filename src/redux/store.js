import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/TransactionsSlice";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    transactions: store.getState().transactions,
  });
});

export default store;
