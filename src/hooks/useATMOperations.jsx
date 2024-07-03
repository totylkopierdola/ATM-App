import { useState, useCallback } from "react";
import { validateWithdrawal, validateDeposit } from "../utils/helpers";

export const useATMOperations = (initialBalance = 128000) => {
  const [balance, setBalance] = useState(initialBalance);
  const [error, setError] = useState("");

  const withdraw = useCallback(
    (amount) => {
      const withdrawalAmount = parseInt(amount);
      const validationError = validateWithdrawal(withdrawalAmount, balance);
      if (validationError) {
        setError(validationError);
        return false;
      } else {
        setBalance((prevBalance) => prevBalance - withdrawalAmount);
        setError("");
        return true;
      }
    },
    [balance]
  );

  const deposit = useCallback((amount) => {
    const depositAmount = parseInt(amount);
    const validationError = validateDeposit(depositAmount);
    if (validationError) {
      setError(validationError);
      return false;
    } else {
      setBalance((prevBalance) => prevBalance + depositAmount);
      setError("");
      return true;
    }
  }, []);

  return { balance, error, withdraw, deposit, setError };
};
