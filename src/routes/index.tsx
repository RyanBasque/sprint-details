import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthContextProvider from "context/AuthContext";

import PrivateRoute from "./privateRoute";

import Login from "pages/Login";
import Browse from "pages/Browse";

import "react-toastify/dist/ReactToastify.css";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Login />} />
          <Route
            path="/browse"
            element={
              <PrivateRoute>
                <Browse />
              </PrivateRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="top-right"
          theme="light"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
