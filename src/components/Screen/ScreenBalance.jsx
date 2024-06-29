import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ATMContext } from "../../context/ATMProvider";
import { Banknote, Undo2 } from "lucide-react";

const ScreenBalance = () => {
  let navigate = useNavigate();
  const { balance } = useContext(ATMContext);

  return (
    <div className="flex flex-col justify-center relative w-full items-center text-slate-700">
      <h3 className="text-center  break-words whitespace-normal ">
        Your balance
      </h3>
      <Banknote className="w-10 h-10" />
      <hr className="w-1/2" />
      {/* add space once every 3 digit numbers */}
      <h2 className="font-extrabold">
        {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} PLN
      </h2>
      <Link to="/options">
        <Button
          className="absolute left-2 bottom-2"
          variant="digital-secondary"
        >
          <Undo2 />
        </Button>
      </Link>
    </div>
  );
};

export default ScreenBalance;
