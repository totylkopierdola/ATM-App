import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Undo2 } from "lucide-react";

const TransactionScreen = ({
  amount,
  balance,
  error,
  onSubmit,
  transactionType,
}) => {
  const isWithdrawal = transactionType === "withdraw";

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg w-3/4 h-3/4 mx-auto hover:shadow-xl bg-white">
        <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-1/2 rounded-lg flex items-center justify-center">
          <input
            type="number"
            value={amount}
            readOnly
            className="h-3/5 bg-white rounded bg-opacity-50 border-b border-slate-800 border-opacity-10 text-slate-700 outline-none text-center text-3xl w-10/12"
          />
        </div>
        <div className="px-5 pt-2 flex flex-col">
          <h4 className="font-semibold text-center text-slate-800">
            Enter the amount you wish to {transactionType} (PLN)
          </h4>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {!error && (
            <p className="text-green-500 font-bold text-center mt-2">
              {balance} PLN
            </p>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 mt-2">
        <Button
          variant="digital"
          className="bg-blue-500 w-1/2 text-sm"
          onClick={onSubmit}
        >
          {isWithdrawal ? "Withdraw" : "Deposit"}
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

export default TransactionScreen;
