import { useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utilis/localStorageUtils";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() =>
    getFromLocalStorage(key, defaultValue)
  );

  const setValueToLocalStorage = (newValue) => {
    setValue(newValue);
    setToLocalStorage(key, newValue);
  };

  return [value, setValueToLocalStorage];
};
