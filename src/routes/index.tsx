import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthContextProvider from "context/AuthContext";

import PrivateRoute from "./privateRoute";

import Login from "pages/Login";
import Browse from "pages/Browse";
import Details from "pages/Details";

import "react-toastify/dist/ReactToastify.css";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Login />} />
          <Route
            element={
              <PrivateRoute>
                <Outlet />
              </PrivateRoute>
            }
          >
            <Route path="/browse" element={<Browse />}>
              <Route
                path=":sprintId/:cardId/:subtaskId?"
                element={<Details />}
              />
            </Route>
          </Route>
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
