import { Routes, Route } from "react-router-dom";
import ScreenHome from "../components/Screen/ScreenHome";
import ScreenOptions from "../components/Screen/ScreenOptions";
import ScreenWithdraw from "../components/Screen/ScreenWithdraw";
import ScreenDeposit from "../components/Screen/ScreenDeposit";
import ScreenBalance from "../components/Screen/ScreenBalance";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ScreenHome />} />
      <Route path="/options" element={<ScreenOptions />} />
      <Route path="/options/withdraw" element={<ScreenWithdraw />} />
      <Route path="/options/deposit" element={<ScreenDeposit />} />
      <Route path="/options/balance" element={<ScreenBalance />} />
    </Routes>
  );
};

export default AppRoutes;
