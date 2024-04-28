import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Footer } from "@components";
import { Leva } from "leva";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="leva">
      <Leva />
    </div>
    <App />
    <Footer />
  </React.StrictMode>
);
