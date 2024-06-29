import { Link } from "react-router-dom";
import Button from "../Button";

const ScreenOptions = () => {
  return (
    <>
      <div className="flex flex-col justify-around transition-opacity duration-5000">
        <h3 className="text-center text-slate-50 break-words whitespace-normal">
          Choose one option:
        </h3>
        <div className="flex gap-2 w-max-[274px] px-4">
          <Button variant="digital" className="shadow-inner" fullWidth>
            Withdraw
          </Button>
          <Link to="/deposit">
            <Button variant="digital" className="shadow-inner" fullWidth>
              Deposit
            </Button>
          </Link>
        </div>
        <Link to="/balance">
          <Button variant="digital-secondary" fullWidth>
            Balance
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ScreenOptions;
