import React, { useContext } from "react";
import { ATMContext } from "../../context/ATMProvider";
import TransactionScreen from "./TransactionScreen";

const ScreenWithdraw = () => {
  const {
    balance,
    withdrawalAmount,
    handleWithdrawalInput,
    error,
    onWithdraw,
  } = useContext(ATMContext);

  return (
    <TransactionScreen
      amount={withdrawalAmount}
      balance={balance}
      error={error}
      onSubmit={onWithdraw}
      onInputChange={handleWithdrawalInput}
      transactionType="withdraw"
    />
  );
};

export default ScreenWithdraw;
