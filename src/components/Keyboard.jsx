import { useContext } from "react";
import Button from "./ui/Button";
import { Link, useLocation } from "react-router-dom";
import { ATMContext } from "../context/ATMProvider";

const Keyboard = () => {
  const numbersKeyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "000"];
  const {
    handleWithdrawalInput,
    handleDepositInput,
    clearWithdrawalInput,
    clearDepositInput,
    setWithdrawalAmount,
    setDepositAmount,
    onWithdraw,
    onDeposit,
  } = useContext(ATMContext);
  const currentPath = useLocation().pathname;

  const onDigitPress = (digit) => {
    if (currentPath === "/options/withdraw") {
      handleWithdrawalInput(digit.toString());
    }
    if (currentPath === "/options/deposit") {
      handleDepositInput(digit.toString());
    }
  };

  const onClear = () => {
    if (currentPath === "/options/withdraw") {
      clearWithdrawalInput();
    }
    if (currentPath === "/options/deposit") {
      clearDepositInput();
    }
  };

  const onEnter = () => {
    if (currentPath === "/options/withdraw") {
      onWithdraw();
    }
    if (currentPath === "/options/deposit") {
      onDeposit();
    }
  };

  return (
    <div className="flex flex-row justify-between mx-2">
      <div className="grid grid-cols-3 gap-2 w-full">
        {numbersKeyboard.map((key) => (
          <button
            key={key}
            onClick={() => onDigitPress(key)}
            className="bg-gray-300 active:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex justify-center shadow-md active:shadow-inner active:shadow-slate-950"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex flex-col h-full gap-2">
        <Link to="/">
          <Button
            onClick={() => {
              setWithdrawalAmount("0");
              setDepositAmount("0");
            }}
            variant="danger"
            className="ml-2"
          >
            Cancel
          </Button>
        </Link>
        <Button onClick={onClear} variant="primary" className="ml-2">
          Clear
        </Button>
        <Button onClick={onEnter} variant="success" className="ml-2">
          Enter
        </Button>
        <button className="bg-gray-300 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-gray-400 h-full text-white font-bold py-2 px-4 rounded-full ml-2"></button>
      </div>
    </div>
  );
};

export default Keyboard;
