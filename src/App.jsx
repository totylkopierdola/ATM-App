import Home from "./pages/Home";
import Screen from "./components/Screen/Screen";
import Cube from "./components/Cube/Cube";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="flex items-center justify-center h-screen mx-4 lato-regular relative">
      <div className="h-[650px] w-[424px] bg-slate-600 flex flex-col lg:px-10 px-4 pt-3 pb-4 lg:py-6 border rounded">
        <h4 className="text-center">EURONET</h4>
        <hr />
        <Screen />
        {/* <Keyboard /> */}
        {/* <Cube /> */}
      </div>
    </div>
  );
}

export default App;
