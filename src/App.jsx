import Home from "./pages/Home";
import Screen from "./components/Screen/Screen";
import Cube from "./components/Cube/Cube";
import Keyboard from "./components/Keyboard";
import { HandCoins } from "lucide-react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen mx-4 lato-regular relative">
      <div className="h-[650px] w-[424px] bg-slate-600 flex flex-col lg:px-10 px-4  pb-4 lg:pb-6 border rounded">
        <h3 className="text-center font-bold flex justify-center items-center gap-2 text-opac-50 py-1">
          ATM App <HandCoins />
        </h3>
        <Screen />
      </div>
    </div>
  );
}

export default App;
