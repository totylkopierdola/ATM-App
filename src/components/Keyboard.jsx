import { useContext } from "react";
import Button from "./ui/Button";
import { ATMContext } from "../context/ATMProvider";
import { Link, useLocation } from "react-router-dom";

const Keyboard = () => {
  const numbersKeyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "000"];

  const {
    withdrawalAmount,
    setWithdrawalAmount,
    depositAmount,
    setDepositAmount,
  } = useContext(ATMContext);

  const currentPath = useLocation().pathname;
  console.log(currentPath);

  const onDigitPress = (digit) => {
    // its being added as a string because state is = '', which is string

    if (currentPath === "/options/withdraw") {
      setWithdrawalAmount((prev) => prev + digit.toString());
    }

    if (currentPath === "/options/deposit") {
      setDepositAmount((prev) => prev + digit.toString());
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
              setWithdrawalAmount("");
              setDepositAmount("");
            }}
            variant="danger"
            className="ml-2"
          >
            Cancel
          </Button>
        </Link>
        <Button
          onClick={() => {
            setWithdrawalAmount("");
            setDepositAmount("");
          }}
          variant="primary"
          className="ml-2"
        >
          Clear
        </Button>
        <Button onClick={null} variant="success" className="ml-2">
          Enter
        </Button>
        <button className="bg-gray-300 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-gray-400 h-full text-white font-bold py-2 px-4 rounded-full ml-2"></button>
      </div>
    </div>
  );
};

export default Keyboard;
