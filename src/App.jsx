import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@layouts";
import AppRoutes from "@config/AppRoutes";
import { AuthProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
