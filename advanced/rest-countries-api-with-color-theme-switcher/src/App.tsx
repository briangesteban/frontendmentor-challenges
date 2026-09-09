import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.scss";

const App = () => {
  const [lightMode, setLightMode] = useState(false); // Lighting Mode State
  const bodyEl = document.getElementById("root") as HTMLElement; // Query Body Element

  // Change Lighting Mode for the body element
  !lightMode
    ? bodyEl.removeAttribute("class")
    : bodyEl.classList.add("body--drk-mode");

  return (
    <BrowserRouter>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage lightMode={lightMode} />} />
        <Route path="/country/:country" element={null} />
        <Route path="*" element={<NotFoundPage lightMode={lightMode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
