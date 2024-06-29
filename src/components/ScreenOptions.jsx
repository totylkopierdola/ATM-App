import Button from "./Button";

const ScreenOptions = ({ setScreenPage }) => {
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
          <Button variant="digital" className="shadow-inner" fullWidth>
            Deposit
          </Button>
        </div>

        <Button variant="digital-secondary" fullWidth>
          Balance
        </Button>
      </div>
    </>
  );
};

export default ScreenOptions;
