import { useState } from "react";
import { Home } from "./pages/Home";
import "./App.scss";

const App = () => {
  const [lightMode, setLightMode] = useState(false); // Lighting Mode State
  const bodyEl = document.getElementById("root") as HTMLElement; // Query Body Element

  // Change Lighting Mode for the body element
  !lightMode
    ? bodyEl.removeAttribute("class")
    : bodyEl.classList.add("body--drk-mode");

  return <Home lightMode={lightMode} setLightMode={setLightMode} />;
};

export default App;
