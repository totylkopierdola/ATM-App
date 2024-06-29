import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenOptions from "./ScreenOptions";
import ScreenHome from "./ScreenHome";
import ScreenBalance from "./ScreenBalance";

const Screen = () => {
  return (
    <div className="my-4 flex justify-center h-full bg-blue-600 shadow-inner shadow-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<ScreenHome />} />
          <Route path="/options" element={<ScreenOptions />} />
          <Route path="/balance" element={<ScreenBalance />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Screen;
