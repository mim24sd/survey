import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home/index.jsx";

const App = () => {
  return <Home />;
};

render(<App />, document.getElementById("root"));
