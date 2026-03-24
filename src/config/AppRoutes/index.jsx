import React, { lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { appRoutes } from "@/utils/globalConstants";

const Home = lazy(() => import("@pages/Home"));
const NotFound = lazy(() => import("@pages/NotFound"));

const FallBack = () => (
  <div className="flex h-screen w-full items-center justify-center bg-neutral-50/50">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900" />
  </div>
);

export function AppRoutes() {
  // Contexts
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        index
        path={appRoutes.HOME}
        element={
          <React.Suspense fallback={<FallBack />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path={appRoutes.NOT_FOUND}
        element={
          <React.Suspense fallback={<FallBack />}>
            <NotFound />
          </React.Suspense>
        }
      />

      <Route path="*" element={<Navigate to={appRoutes.NOT_FOUND} replace />} />
    </Routes>
  );
}

export default AppRoutes;
