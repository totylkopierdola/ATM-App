import React, { useEffect, useContext } from "react";
import { ATMContext } from "../../context/ATMProvider";
import TransactionScreen from "./TransactionScreen";

const ScreenWithdraw = () => {
  const {
    balance,
    withdrawalAmount,
    setWithdrawalAmount,
    setError,
    error,
    onWithdraw,
  } = useContext(ATMContext);

  useEffect(() => {
    setWithdrawalAmount("0");
    setError("");
  }, [setWithdrawalAmount, setError]);

  return (
    <TransactionScreen
      amount={withdrawalAmount}
      balance={balance}
      error={error}
      onSubmit={onWithdraw}
      transactionType="withdraw"
    />
  );
};

export default ScreenWithdraw;
