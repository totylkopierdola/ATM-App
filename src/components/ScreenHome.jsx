import { useEffect } from "react";
import Button from "./Button";

const ScreenHome = ({ setScreenPage }) => {
  // function handleClick() {
  //   console.log("Button Clicked!");
  // }
  useEffect(() => {
    setTimeout(() => {
      setScreenPage("OPTIONS_CONTENT");
    }, 3000);
  });
  return (
    <>
      <div className="flex flex-col justify-around ">
        <h3 className="text-center text-slate-50 break-words whitespace-normal animate-pulse">
          Welcome to <br /> ATM App
        </h3>
      </div>
    </>
  );
};

export default ScreenHome;
