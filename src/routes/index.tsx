import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthContextProvider from "../context/AuthContext";

import Login from "../pages/Login";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
