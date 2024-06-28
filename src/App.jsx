import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Keyboard from "./components/Keyboard";
import Monitor from "./components/Monitor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-screen  mx-4">
        <div className="h-[550px] bg-slate-600 flex flex-col lg:px-10  px-4 pt-3 pb-4 lg:py-6 border rounded">
          <h3 className="text-center">EURONET</h3>
          <hr />
          <Monitor />
          <Keyboard
            onDigitPress={(digit) => console.log(digit)}
            onClearPress={() => console.log("clear")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
