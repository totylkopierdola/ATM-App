import { createContext, useContext, useState, useEffect } from "react";
import {
  removeLeadingZeros,
  validateWithdrawal,
  validateDeposit,
} from "../utils/helpers";
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

  useEffect(() => {
    return () => {
      // Cleanup function to reset state when unmounting or navigating away
      setWithdrawalAmount("0");
      setDepositAmount("");
      setError("");
    };
  }, []);

  const onWithdraw = () => {
    const parsedWithdrawalAmount = parseInt(withdrawalAmount, 10);
    const withdrawalError = validateWithdrawal(parsedWithdrawalAmount, balance);

    if (withdrawalError) {
      setError(withdrawalError);
      return;
    }

    setBalance((prevBalance) => prevBalance - parsedWithdrawalAmount);
    setWithdrawalAmount("0");
    setError("");
  };

  const onDeposit = () => {
    const parsedDepositAmount = parseInt(depositAmount, 10);
    const depositError = validateDeposit(parsedDepositAmount);

    if (depositError) {
      setError(depositError);
      return;
    }

    setBalance((prevBalance) => prevBalance + parsedDepositAmount);
    setDepositAmount("0");
    setError("");
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
        setError,
        onWithdraw,
        onDeposit,
      }}
    >
      {children}
    </ATMContext.Provider>
  );
};

export default ATMProvider;
