import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SoldOutStore from "./counter";

const App = () => (
  <SoldOutStore />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);