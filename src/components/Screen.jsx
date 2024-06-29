import { useState } from "react";
import ScreenOptions from "./ScreenOptions";
import ScreenHome from "./ScreenHome";

const Screen = () => {
  // const [screenPage, setScreenPage] = useState("OPTIONS_CONTENT");
  const [screenPage, setScreenPage] = useState("HOME_CONTENT");
  return (
    <>
      <div className="my-4 flex justify-center h-full bg-blue-600  shadow-inner shadow-slate-900">
        {/* screen options */}
        {screenPage === "HOME_CONTENT" && (
          <ScreenHome setScreenPage={setScreenPage} />
        )}
        {screenPage === "OPTIONS_CONTENT" && (
          <ScreenOptions setScreenPage={setScreenPage} />
        )}
      </div>
    </>
  );
};

export default Screen;
