import React, { useMemo } from "react";
import { useATMOperations } from "../hooks/useATMOperations";
import { useInputHandler } from "../hooks/useInputHandler";

export const ATMContext = React.createContext();

const ATMProvider = ({ children }) => {
  const { balance, error, withdraw, deposit, setError } = useATMOperations();
  const {
    value: withdrawalAmount,
    handleInput: handleWithdrawalInput,
    clearInput: clearWithdrawalInput,
    setValue: setWithdrawalAmount,
  } = useInputHandler();
  const {
    value: depositAmount,
    handleInput: handleDepositInput,
    clearInput: clearDepositInput,
    setValue: setDepositAmount,
  } = useInputHandler();

  const onWithdraw = () => {
    if (withdraw(withdrawalAmount)) {
      clearWithdrawalInput();
    }
  };

  const onDeposit = () => {
    if (deposit(depositAmount)) {
      clearDepositInput();
    }
  };

  const contextValue = useMemo(
    () => ({
      balance,
      withdrawalAmount,
      setWithdrawalAmount,
      handleWithdrawalInput,
      depositAmount,
      setDepositAmount,
      handleDepositInput,
      error,
      setError,
      onWithdraw,
      onDeposit,
      clearWithdrawalInput,
      clearDepositInput,
    }),
    [
      balance,
      withdrawalAmount,
      depositAmount,
      error,
      handleWithdrawalInput,
      handleDepositInput,
    ]
  );

  return (
    <ATMContext.Provider value={contextValue}>{children}</ATMContext.Provider>
  );
};

export default ATMProvider;
