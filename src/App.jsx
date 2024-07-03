import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScreenHome from "./components/Screen/ScreenHome";
import ScreenOptions from "./components/Screen/ScreenOptions";
import ScreenWithdraw from "./components/Screen/ScreenWithdraw";
import ScreenDeposit from "./components/Screen/ScreenDeposit";
import ScreenBalance from "./components/Screen/ScreenBalance";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ScreenHome />} />
          <Route path="/options" element={<ScreenOptions />} />
          <Route path="/options/withdraw" element={<ScreenWithdraw />} />
          <Route path="/options/deposit" element={<ScreenDeposit />} />
          <Route path="/options/balance" element={<ScreenBalance />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
