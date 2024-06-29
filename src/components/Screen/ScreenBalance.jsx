import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ATMContext } from "../../context/ATMProvider";
import { Banknote, Undo2 } from "lucide-react";

const ScreenBalance = () => {
  const { balance } = useContext(ATMContext);

  return (
    <div className="flex flex-col justify-center relative items-center">
      <div className="transform transition duration-300 rounded-lg shadow-lg lg:w-[85%] w-[95%] h-[70%] mx-auto hover:shadow-xl bg-white flex flex-col gap-5">
        <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg flex items-center justify-center">
          <input
            readOnly
            value={balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            className="h-3/5 bg-white rounded bg-opacity-50 border-b border-slate-800 border-opacity-10 text-slate-700 outline-none text-center lg:text-3xl text-2xl w-10/12"
          />
        </div>

        <h2 className="font-semibold text-center text-slate-800 lg:text-3xl text-2xl">
          Total balance <Banknote className="inline-block ml-2" />
        </h2>
      </div>
      <div className="flex w-full justify-center mt-2">
        <Link to="/options">
          <Button variant="digital-secondary" className="">
            back
            <Undo2 className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScreenBalance;
