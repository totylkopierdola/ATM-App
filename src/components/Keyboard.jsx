import Button from "./Button";

const Keyboard = ({ onDigitPress, onClearPress }) => {
  const numbersKeyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "000"];

  return (
    <div className="flex flex-row justify-between mx-2">
      <div className="grid grid-cols-3 gap-2 w-full">
        {numbersKeyboard.map((key) => (
          <button
            key={key}
            onClick={() => (key === "C" ? onClearPress() : onDigitPress(key))}
            className="bg-gray-300 active:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex justify-center shadow-md active:shadow-inner active:shadow-slate-950"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex flex-col h-full gap-2">
        <Button onClick={null} variant="danger" className="ml-2">
          Cancel
        </Button>
        <Button onClick={null} variant="primary" className="ml-2">
          Clear
        </Button>
        <Button onClick={null} variant="success" className="ml-2">
          Enter
        </Button>
        <button className="bg-gray-300 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-gray-400 h-full text-white font-bold py-2 px-4 rounded-full ml-2"></button>
      </div>
    </div>
  );
};

export default Keyboard;
