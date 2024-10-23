import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/main";
import ShopPage from "./pages/shop/shop";
import ProjectInfoPage from "./pages/projectInfo/ProjectInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/project-info" element={<ProjectInfoPage />} />

        {/* <Route path="/plan-care" element={<PlantCarePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
