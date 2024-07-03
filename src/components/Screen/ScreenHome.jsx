import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScreenHome = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/options");
    }, 1000);
  });
  return (
    <>
      <div className="flex flex-col justify-around ">
        <h3 className="text-center text-slate-800 break-words whitespace-normal animate-pulse">
          Welcome to <br /> ATM App
        </h3>
      </div>
    </>
  );
};

export default ScreenHome;
