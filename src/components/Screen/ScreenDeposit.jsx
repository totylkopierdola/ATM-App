import React, { useContext } from "react";
import { ATMContext } from "../../context/ATMProvider";
import TransactionScreen from "./TransactionScreen";

const ScreenDeposit = () => {
  const { balance, depositAmount, handleDepositInput, error, onDeposit } =
    useContext(ATMContext);

  return (
    <TransactionScreen
      amount={depositAmount}
      balance={balance}
      error={error}
      onSubmit={onDeposit}
      onInputChange={handleDepositInput}
      transactionType="deposit"
    />
  );
};

export default ScreenDeposit;
