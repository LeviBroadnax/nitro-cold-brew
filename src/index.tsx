import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Footer } from "@components";
import { useWindowSize } from "@uidotdev/usehooks";
import { Leva } from "leva";
import "./index.css";

function Root() {
  const { width, height } = useWindowSize();
  return (
    <>
      <div className="leva">
        <Leva hidden={Math.min(height, width) < 767} collapsed={width < 1000} />
      </div>
      <App />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
