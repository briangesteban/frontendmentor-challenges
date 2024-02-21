import { useState } from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";

const App = () => {
  const [lightMode, setLightMode] = useState(false); // Lighting Mode State

  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
    </>
  );
};

export default App;
