import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout/index.jsx";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout title="Personal information" />} />
        <Route
          path="/programminglanguages"
          element={<MainLayout title="Programming languages" />}
        />
        <Route path="/coding" element={<MainLayout title="Coding" />} />
        <Route
          path="/socialMedia"
          element={<MainLayout title="Social Media" />}
        />
        <Route path="/comment" element={<MainLayout title="Comment" />} />
        <Route path="/occupation" element={<MainLayout title="Occupation" />} />
        <Route
          path="/contantInformation"
          element={<MainLayout title="Contant Information" />}
        />
        <Route
          path="/confirmInformation"
          element={<MainLayout title="Confirm Information" />}
        />
        <Route path="/success" element={<MainLayout title="Success" />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
