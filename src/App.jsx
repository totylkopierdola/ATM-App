import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRoutes from "./routes/AppRoutes";
import ATMProvider from "./context/ATMProvider";

function App() {
  return (
    <Router>
      <ATMProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ATMProvider>
    </Router>
  );
}

export default App;
