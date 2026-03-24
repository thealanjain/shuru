import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { appRoutes } from "@utils/globalConstants";
import { useAuth } from "@/context";

export function PrivateRoute({ children }) {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return <Navigate to={appRoutes.NOT_FOUND} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
