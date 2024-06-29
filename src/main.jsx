import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ATMProvider from "./context/ATMProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ATMProvider>
      <App />
    </ATMProvider>
  </React.StrictMode>
);
