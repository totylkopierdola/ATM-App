import React from "react";
import { HandCoins } from "lucide-react";
import Keyboard from "./Keyboard";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen mx-4 lato-regular relative">
      <div className="h-[650px] w-[424px] bg-slate-600 flex flex-col lg:px-10 px-4 pb-4 lg:pb-6 border rounded">
        <h3 className="text-center font-bold flex justify-center items-center gap-2 text-opac-50 py-1">
          ATM App <HandCoins />
        </h3>
        <div className="mb-2 flex justify-center h-full bg-[#e8e8e8] shadow-inner shadow-slate-900">
          {children}
        </div>
        <Keyboard />
      </div>
    </div>
  );
};

export default Layout;
