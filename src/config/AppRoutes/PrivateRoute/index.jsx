import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { appRoutes, isUserLoggedIn } from "@utils/globalConstants";

export function PrivateRoute({ children }) {
  const location = useLocation();

  if (!isUserLoggedIn) {
    return <Navigate to={appRoutes.NOT_FOUND} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
