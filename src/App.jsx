import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home/index.jsx";
import "./styles.scss";

const App = () => {
  return <Home />;
};

render(<App />, document.getElementById("root"));
