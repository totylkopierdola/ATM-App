import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenOptions from "./ScreenOptions";
import ScreenHome from "./ScreenHome";
import ScreenBalance from "./ScreenBalance";
import ScreenWithdraw from "./ScreenWithdraw";
import ScreenDeposit from "./ScreenDeposit";
import Keyboard from "../Keyboard";

const Screen = () => {
  return (
    <>
      <Router>
        <div className="my-4 flex justify-center h-full bg-[#e8e8e8] shadow-inner shadow-slate-900">
          <Routes>
            <Route path="/" element={<ScreenHome />} />
            <Route path="/options" element={<ScreenOptions />} />
            <Route path="/options/withdraw" element={<ScreenWithdraw />} />
            <Route path="/options/deposit" element={<ScreenDeposit />} />
            <Route path="/options/balance" element={<ScreenBalance />} />
          </Routes>
        </div>
        <Keyboard />
      </Router>
    </>
  );
};

export default Screen;
