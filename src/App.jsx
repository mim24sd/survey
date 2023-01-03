import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainLayout title="Personal information"></MainLayout>}
        />
        <Route
          path="/question2"
          element={<MainLayout title="Programming languages"></MainLayout>}
        />
        <Route
          path="/question3"
          element={<MainLayout title="Coding"></MainLayout>}
        />
        <Route
          path="/question4"
          element={<MainLayout title="Coding"></MainLayout>}
        />
        <Route
          path="/question5"
          element={<MainLayout title="Social Media"></MainLayout>}
        />
        <Route
          path="/question6"
          element={<MainLayout title="Comment"></MainLayout>}
        />
        <Route
          path="/question7"
          element={<MainLayout title="Occupation"></MainLayout>}
        />
        <Route
          path="/question8"
          element={<MainLayout title="Contant Information"></MainLayout>}
        />
        <Route
          path="/confirm"
          element={<MainLayout title="Confirm Information"></MainLayout>}
        />
        <Route
          path="/success"
          element={<MainLayout title="Success"></MainLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
