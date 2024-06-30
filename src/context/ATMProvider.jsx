import { createContext, useContext, useState } from "react";

export const ATMContext = createContext(undefined);

export const useATMContext = () => {
  const atmContext = useContext(ATMContext);

  if (atmContext === undefined) {
    throw new Error("useATMContext must be used within an ATMProvider");
  }
  return atmContext;
};

const ATMProvider = ({ children }) => {
  const [balance, setBalance] = useState(128000);
  const [withdrawalAmount, setWithdrawalAmount] = useState("0");
  const [depositAmount, setDepositAmount] = useState("");
  const [error, setError] = useState("");

  const validateWithdrawal = (amount) => {
    if (amount > balance) {
      setError("You don't have enough funds");
      return false;
    }

    if (amount % 10 !== 0) {
      setError("Please enter a multiple of 10");
      return false;
    }

    if (amount > 1000) {
      setError("You can withdraw a maximum of 1000 PLN");
      return false;
    }

    if (amount <= 0) {
      setError("Please enter a valid amount");
      return false;
    }

    setError("");
    return true;
  };

  const onWithdraw = () => {
    const parsedWithdrawalAmount = parseInt(withdrawalAmount, 10);

    if (!validateWithdrawal(parsedWithdrawalAmount)) {
      return;
    }

    setBalance((prevBalance) => prevBalance - parsedWithdrawalAmount);
    setWithdrawalAmount("0");
  };

  return (
    <ATMContext.Provider
      value={{
        balance,
        setBalance,
        withdrawalAmount,
        setWithdrawalAmount,
        depositAmount,
        setDepositAmount,
        error,
        onWithdraw,
      }}
    >
      {children}
    </ATMContext.Provider>
  );
};

export default ATMProvider;
