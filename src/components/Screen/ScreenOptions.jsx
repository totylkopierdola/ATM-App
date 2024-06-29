import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Coins } from "lucide-react";

const ScreenOptions = () => {
  return (
    <>
      <div className="flex flex-col justify-center transition-opacity duration-5000 items-center">
        <h3 className="font-semibold text-center text-slate-800 mt-auto">
          Choose one option
        </h3>
        <div className="flex gap-2 w-max-[274px] px-4 ">
          <Link to="/options/withdraw">
            <Button variant="digital" className="shadow-inner" fullWidth>
              Withdraw
            </Button>
          </Link>
          <Link to="/options/deposit">
            <Button variant="digital" className="shadow-inner" fullWidth>
              Deposit
            </Button>
          </Link>
        </div>
        <div className="mt-auto w-full mb-4">
          <Link to="/options/balance">
            <Button variant="digital-secondary" fullWidth>
              Balance <Coins className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ScreenOptions;
