import { useState } from "react";
import Home from "./pages/Home";
import Screen from "./components/Screen";

function App() {
  const [content, setContent] = useState("HOME_CONTENT");

  const handleNext = () => {
    setContent("NEXT_CONTENT");
  };

  return (
    <div className="flex items-center justify-center h-screen mx-4 lato-regular">
      <div className="h-[650px] bg-slate-600 flex flex-col lg:px-10 px-4 pt-3 pb-4 lg:py-6 border rounded">
        <h4 className="text-center">EURONET</h4>
        <hr />
        <Screen />
        <Home onNext={handleNext} />
      </div>
    </div>
  );
}

export default App;
