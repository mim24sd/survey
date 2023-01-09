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
              nextPath="/programming_languages"
            />
          }
        />
        <Route
          path="/programming_languages"
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
              previousPath="/programming_languages"
              nextPath="/social_media"
            />
          }
        />
        <Route
          path="/social_media"
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
              previousPath="/social_media"
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
              nextPath="/contant_information"
            />
          }
        />
        <Route
          path="/contant_information"
          element={
            <MainLayout
              title="Contant Information"
              previousPath="/occupation"
              nextPath="/confirm_information"
            />
          }
        />
        <Route
          path="/confirm_information"
          element={
            <MainLayout
              title="Confirm Information"
              previousPath="/contant_information"
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
