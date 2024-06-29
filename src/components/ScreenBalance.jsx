import React from "react";
import Button from "./Button";

const ScreenBalance = ({ setScreenPage }) => {
  return (
    <div className="flex flex-col justify-center relative w-full items-center">
      <h3 className="text-center text-slate-50 break-words whitespace-normal ">
        Your balance
      </h3>
      <hr className="bg-red-500 w-1/2 " />
      <h2>100 000 zł</h2>
      <Button
        className="absolute left-2 bottom-2"
        variant="digital"
        onClick={() => setScreenPage("OPTIONS_CONTENT")}
      >
        Back
      </Button>
    </div>
  );
};

export default ScreenBalance;
