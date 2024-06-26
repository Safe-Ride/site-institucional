import App from "./App";
import React from "react";
import "./utils/globals.css";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
