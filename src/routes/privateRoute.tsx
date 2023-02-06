import { Navigate } from "react-router-dom";

import { useAuth } from "context/AuthContext";

type PrivateRoutesParams = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRoutesParams): JSX.Element => {
  const { user: authUser } = useAuth();

  if (!authUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
