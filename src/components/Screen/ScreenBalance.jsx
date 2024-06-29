import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const ScreenBalance = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center relative w-full items-center">
      <h3 className="text-center text-slate-50 break-words whitespace-normal ">
        Your balance
      </h3>
      <hr className="bg-red-500 w-1/2 " />
      <h2>100 000 zł</h2>
      <Link to="/options">
        <Button className="absolute left-2 bottom-2" variant="digital">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default ScreenBalance;
