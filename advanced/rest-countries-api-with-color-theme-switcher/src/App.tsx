import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
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
        <Route path="/home" element={<Home lightMode={lightMode} />} />
        <Route path="/:country" element={null} />
        <Route path="*" element={null} /> {/* Not Found Page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
