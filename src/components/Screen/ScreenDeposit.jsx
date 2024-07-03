import React, { useEffect, useContext } from "react";
import { ATMContext } from "../../context/ATMProvider";
import TransactionScreen from "./TransactionScreen";

const ScreenDeposit = () => {
  const {
    balance,
    depositAmount,
    setDepositAmount,
    error,
    setError,
    onDeposit,
  } = useContext(ATMContext);

  useEffect(() => {
    setDepositAmount("0");
    setError("");
  }, [setDepositAmount, setError]);

  return (
    <TransactionScreen
      amount={depositAmount}
      balance={balance}
      error={error}
      onSubmit={onDeposit}
      transactionType="deposit"
    />
  );
};

export default ScreenDeposit;
