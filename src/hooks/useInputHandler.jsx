import { useState, useCallback } from "react";
import { removeLeadingZeros } from "../utils/helpers";

export const useInputHandler = (initialValue = "0") => {
  const [value, setValue] = useState(initialValue);

  const handleInput = useCallback((digit) => {
    setValue((prev) => {
      const newValue = prev === "0" ? digit : prev + digit;
      return removeLeadingZeros(newValue);
    });
  }, []);

  const clearInput = useCallback(() => {
    setValue("0");
  }, []);

  return { value, handleInput, clearInput, setValue };
};
