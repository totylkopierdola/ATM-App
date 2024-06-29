import { createContext, useContext, useState } from "react";

export const ATMContext = createContext(undefined);

// SAFETY CHECK trying to use the context without the provider
// its just to check if its undefined to avoid errors,
// for example when the component is not wrapped
// by the provider in main.jsx or somewhere else
export const useATMContext = () => {
  const atmContext = useContext(ATMContext);

  if (atmContext === undefined) {
    throw new Error("useATMContext must be used within an ATMProvider");
  }
  return atmContext;
};

const ATMProvider = ({ children }) => {
  const [screenPage, setScreenPage] = useState("HOME_CONTENT");
  const [balance, setBalance] = useState(128000);
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  return (
    <ATMContext.Provider
      value={{
        screenPage,
        setScreenPage,
        balance,
        withdrawalAmount,
        setWithdrawalAmount,
        depositAmount,
        setDepositAmount,
      }}
    >
      {children}
    </ATMContext.Provider>
  );
};

export default ATMProvider;
