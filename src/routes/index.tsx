import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthContextProvider from "../context/AuthContext";

import Login from "../pages/Login";
import Browse from "../pages/Browse";

import "react-toastify/dist/ReactToastify.css";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
