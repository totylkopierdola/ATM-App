import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ATMContext } from "../../context/ATMProvider";
import { Undo2 } from "lucide-react";
import { removeLeadingZeros } from "../../utils/helpers";

const ScreenWithdraw = () => {
  const navigate = useNavigate();
  const { balance, setBalance, withdrawalAmount, setWithdrawalAmount } =
    useContext(ATMContext);
  const [error, setError] = useState("");

  const validateWithdrawal = (amount, balance) => {
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
    // Remove leading zeros before parsing the withdrawal amount
    const cleanedWithdrawalAmount = removeLeadingZeros(
      withdrawalAmount.toString()
    );
    const parsedWithdrawalAmount = parseInt(cleanedWithdrawalAmount, 10);

    if (!validateWithdrawal(parsedWithdrawalAmount, balance)) {
      return;
    }

    setBalance((prevBalance) => prevBalance - parsedWithdrawalAmount);
    // navigate("/options/withdraw"); // Uncomment if needed
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <h1 className="text-2xl font-bold mb-4 text-red-500">{balance} PLN</h1>
      <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg w-3/4 h-3/4 mx-auto hover:shadow-xl bg-white">
        <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-1/2 rounded-lg flex items-center justify-center">
          <input
            type="number"
            value={withdrawalAmount}
            readOnly
            className="h-3/5 bg-white rounded bg-opacity-50 border-b border-slate-800 border-opacity-10 text-slate-700 outline-none text-center text-3xl w-10/12"
          />
        </div>
        <div className="px-5 pt-2 flex flex-col">
          <h4 className="font-semibold text-center text-slate-800">
            Enter the amount you wish to withdraw (PLN)
          </h4>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 mt-2">
        <Button
          variant="digital"
          className="bg-blue-500 w-1/2 text-sm"
          onClick={onWithdraw}
        >
          Withdraw
        </Button>
        <Link to="/options">
          <Button variant="digital-secondary">
            <Undo2 />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScreenWithdraw;
