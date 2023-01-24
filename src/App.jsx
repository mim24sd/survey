import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInformation from "./components/PersonalInformation/index.jsx";
import MainLayout from "./pages/MainLayout/index.jsx";
import SurveyInformation from "./components/SurveyInformation/index.jsx";
import "./styles.module.scss";

const App = () => {
  const surveyInfo = useState({
    personalInformation: {
      name: "",
      family: "",
      birthDate: "",
      isFormValid: false,
    },
  });

  return (
    <BrowserRouter>
      <SurveyInformation.Provider value={surveyInfo}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                title="Personal information"
                nextPath="/programming-languages"
              >
                <PersonalInformation />
              </MainLayout>
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
      </SurveyInformation.Provider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
