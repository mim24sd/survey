import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout/index.jsx";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              title="Personal information"
              nextPath="/programming-languages"
            />
          }
        />
        <Route
          path="/programming-languages"
          element={
            <MainLayout
              title="Programming languages"
              previousPath="/"
              nextPath="/coding"
            />
          }
        />
        <Route
          path="/coding"
          element={
            <MainLayout
              title="Coding"
              previousPath="/programming-languages"
              nextPath="/social-media"
            />
          }
        />
        <Route
          path="/social-media"
          element={
            <MainLayout
              title="Social Media"
              previousPath="/coding"
              nextPath="/comment"
            />
          }
        />
        <Route
          path="/comment"
          element={
            <MainLayout
              title="Comment"
              previousPath="/social-media"
              nextPath="/occupation"
            />
          }
        />
        <Route
          path="/occupation"
          element={
            <MainLayout
              title="Occupation"
              previousPath="/comment"
              nextPath="/contant-information"
            />
          }
        />
        <Route
          path="/contant-information"
          element={
            <MainLayout
              title="Contant Information"
              previousPath="/occupation"
              nextPath="/confirm-information"
            />
          }
        />
        <Route
          path="/confirm-information"
          element={
            <MainLayout
              title="Confirm Information"
              previousPath="/contant-information"
              nextPath="/success"
            />
          }
        />
        <Route
          path="/success"
          element={<MainLayout title="Success" nextPath="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
