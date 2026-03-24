import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@layouts";
import AppRoutes from "@config/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
