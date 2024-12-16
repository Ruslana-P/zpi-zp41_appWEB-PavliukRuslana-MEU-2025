import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/main";
import ShopPage from "./pages/shop/shop";
import ProjectInfoPage from "./components/projectInfo/ProjectInfoPage";
import { ScreenSizeContext } from "./utils/screenSizeContext";
import useScreenSize from "./utils/useScreenSizeContext";
import PlantCarePage from "./pages/plantCare/planCare";

function App() {
  const screenSize = useScreenSize();

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/project-info" element={<ProjectInfoPage />} />

          <Route path="/plant-care" element={<PlantCarePage />} />
        </Routes>
      </Router>
    </ScreenSizeContext.Provider>
  );
}

export default App;
