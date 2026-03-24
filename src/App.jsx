import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@layouts";
import { Home, NotFound } from "@pages";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
